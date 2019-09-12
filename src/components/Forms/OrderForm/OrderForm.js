import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../UI/Button/Button';
import { updateObject } from '../../../shared/utility';
import OrderInputList from '../../Input/OrderInputList/OrderInputList';
import classes from './OrderForm.css';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import Spinner from '../../UI/Spinner/Spinner';
import Aux from '../../../hoc/_Aux/_Aux';

const OrderForm = props => {
    const [fetchResult, setFetchResult] = useState({
        error:null, 
        success: null,
        loading: null
    });

    const submitFormHandler = event => {
        event.preventDefault();
        setFetchResult(updateObject(fetchResult, { loading: true }))
        const formData = {};
        for (let key in props.orderData) {
            Object.assign(formData, {[key]: props.orderData[key].value})
        }
        fetch('https://cetus-media-b35fb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({ order: formData}),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(responseData => {
            setFetchResult({
                ...fetchResult,
                success: true,
                loading: false
            });
        }).catch(error => {
            setFetchResult({
                ...fetchResult,
                error: error.toString()
            });
        })
    }

    const errorSubmitHandler = () => {
        setFetchResult({
            ...fetchResult,
            error: false
        });
    }
    
    let spinner = fetchResult.loading ? <Spinner /> : null;

    let form = (
        <form className={classes.OrderForm} onSubmit={(event) => submitFormHandler(event)}>
            <OrderInputList />
            <Button btnType="MainButton">Готово</Button> 
            {spinner}
        </form>
    )

    if (fetchResult.error) {
        form = (
            <ErrorMessage errorMessage={fetchResult.error} btnClick={errorSubmitHandler}/>
        )
    }

    if (fetchResult.success) {
        form = (
            <h2>Благодарим за заказ! Информацию о своих заказах вы сможете найти в личном кабинете</h2>
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
        orderData: state.order.orderInputData
    }
}

export default connect(mapStateToProps, null)(OrderForm);