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
import { orderUserData } from './orderUserData/orderUserData';
import { updateObject, createElementsArray } from '../../../shared/utility';

const OrderForm = props => {

    const [ orderInputData, setOrderInputData ] = useState(orderUserData)
    const formElementsArray = createElementsArray(orderInputData)
    
    const inputChangeHandler = ((event, inputName) => {
        const updatedValue = updateObject(orderInputData, {
            [inputName]: updateObject(orderInputData[inputName], {
            value: event.target.value
        })
    })

        setOrderInputData(updatedValue);
    })

    const submitFormHandler = (event, userId) => {
        event.preventDefault();
        const data = {};
        for (let key in orderInputData) {
            data[key] = orderInputData[key].value
        }
        data.userId = userId
        props.submitOrderForm(data, props.token);
        // if (props.token) {
        //     const data = {};
        //     for (let key in orderInputData) {
        //         data[key] = orderInputData[key].value
        //     }
        //     data.userId = userId
        //     props.submitOrderForm(data, props.token);
        // } else {
        //     props.history.push('/auth')
        // }
    }

    const succesConfirmHandler = () => {
        props.history.push('/');
        props.fetchOrderClear();
    }

    let form = (
        <Aux>
            <form className={classes.OrderForm} 
                  onSubmit={(event) => submitFormHandler(event, props.userId)}>
                <OrderInputList inputChangeHandler={inputChangeHandler}
                                userData={formElementsArray}/>
            {/* <Button btnType="MainButton">{props.token ? 'Готово' : 'Регистрация'}</Button>  */}
            <Button btnType="MainButton">{'Готово'}</Button> 
            </form>
            {props.loading ? <Spinner /> : null}
        </Aux>
    )

    if(props.error) {
        form = (
            <ErrorMessage errorMessage={props.error} 
                          btnClick={props.fetchOrderClear}/>
        )
    }

    if(props.success) {
        form = (
            <Aux>
                <h2>Благодарим за заказ! Информацию о своих заказах вы сможете найти в личном кабинете</h2>
                <Button btnType="MainButton" 
                        clicked={succesConfirmHandler}>Ок</Button>
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
        loading: state.orderForm.fetchResult.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitOrderForm: ( orderData, token ) => dispatch(actions.sendOrder( orderData, token )),
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