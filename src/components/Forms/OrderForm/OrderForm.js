import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Button from '../../UI/Button/Button';
import OrderInputList from '../../Input/OrderInputList/OrderInputList';
import classes from './OrderForm.css';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import Aux from '../../../hoc/_Aux/_Aux';
import { updateObject } from '../../../shared/utility.js';
import * as actions from '../../../store/actions/index';

const OrderForm = props => {


    const submitFormHandler = (event) => {
        event.preventDefault();
        props.submitOrderForm(props.orderData);
    }

    // let spinner = fetchResult.loading ? <Spinner /> : null;
    const succesConfirmHandler = () => {
        props.history.push('/');
        props.clearFetchOrderSuccess();
    }

    let form = (
        <form className={classes.OrderForm} onSubmit={(event) => submitFormHandler(event)}>
            <OrderInputList />
            <Button btnType="MainButton">Готово</Button> 
            {/* {spinner} */}
        </form>
    )

    if(props.error) {
        form = (
            <ErrorMessage errorMessage={props.error} btnClick={props.clearFetchOrderError}/>
        )
    }

    if(props.success) {
        form = (
            <Aux>
                <h2>Благодарим за заказ! Информацию о своих заказах вы сможете найти в личном кабинете</h2>
                <Button btnType="MainButton" clicked={succesConfirmHandler}>Ок</Button>
            </Aux>
           
        )
    }

    return (
            <Aux>
                {form}
            </Aux>
    )
}

const mapStateToProps = state => {
    return {
        success: state.orderForm.fetchResult.success,
        error: state.orderForm.fetchResult.error,
        orderData: state.orderForm.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitOrderForm: ( orderData ) => dispatch(actions.sendOrder( orderData )),
        clearFetchOrderSuccess: () => dispatch(actions.fetchOrderSuccessClear()),
        clearFetchOrderError: () => dispatch(actions.fetchOrderErrorClear())
    }
};

OrderForm.propTypes = {
    success: PropTypes.bool,
    error:   PropTypes.oneOfType([
             PropTypes.bool,
             PropTypes.string
    ]),
    orderData:    PropTypes.object,
    submitOrderForm: PropTypes.func,
    clearFetchOrderSuccess:   PropTypes.func
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderForm));