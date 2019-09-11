import React from 'react';
import Button from '../../UI/Button/Button';
import OrderInputList from '../../Input/OrderInputList/OrderInputList';
import classes from './OrderForm.css';

const OrderForm = props => {
    return (
            <form className={classes.OrderForm}>
                <OrderInputList />
                <Button btnType="MainButton">Готово</Button> 
            </form>
    )
}

export default OrderForm;