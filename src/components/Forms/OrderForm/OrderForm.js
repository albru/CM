import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Button from '../../UI/Button/Button';
import OrderInputList from '../../Input/OrderInputList/OrderInputList';
import classes from './OrderForm.css';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import Spinner from '../../UI/Spinner/Spinner';
import Aux from '../../../hoc/_Aux/_Aux';
import * as actions from '../../../store/actions/index';
import { inputData } from '../../Input/inputDataObj/inputDataObj';
import { updateObject } from '../../../shared/utility';

const OrderForm = props => {

    const [ orderInputData, setOrderInputData ] = useState(inputData.orderInputData)

    const formElementsArray = [];
    for (let key in orderInputData) {
        formElementsArray.push({
            id: key,
            config: orderInputData[key]
        })
    } 

    const inputChangeHandler = ((event, inputName) => {
        const updatedValue = updateObject(orderInputData, {
            [inputName]: updateObject(orderInputData[inputName], {
            value: event.target.value
        })
    })
        setOrderInputData(updatedValue);
    })

    const submitFormHandler = (event) => {
        event.preventDefault();
        props.submitOrderForm(orderInputData);
    }

    const succesConfirmHandler = () => {
        props.history.push('/');
        props.fetchOrderClear();
    }

    let spinner = props.loading ? <Spinner /> : null;

    let form = (
        <form className={classes.OrderForm} onSubmit={(event) => submitFormHandler(event)}>
            <OrderInputList inputChangeHandler={inputChangeHandler}
                            array={formElementsArray}
            />
            <Button btnType="MainButton">Готово</Button> 
            {spinner}
            {/* {spinner} */}
        </form>
    )

    if(props.error) {
        form = (
            <ErrorMessage errorMessage={props.error} btnClick={props.fetchOrderClear}/>
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
        orderData: state.orderForm.data,
        loading: state.orderForm.fetchResult.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitOrderForm: ( orderData ) => dispatch(actions.sendOrder( orderData )),
        fetchOrderClear: () => dispatch(actions.fetchOrderClear())
    }
};

OrderForm.propTypes = {
    success: PropTypes.bool,
    error:   PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.string
    ]),
    orderData:              PropTypes.object,
    submitOrderForm:        PropTypes.func,
    clearFetchOrderSuccess: PropTypes.func
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderForm));