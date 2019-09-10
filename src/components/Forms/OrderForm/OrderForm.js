import React from 'react';
import Button from '../../UI/Button/Button';
import OrderInputList from '../../Input/OrderInputList/OrderInputList';

const OrderForm = props => {
    return (
            <form>
                <fieldset>
                    <legend>
                        <h2>Форма заказа</h2>
                        <OrderInputList />
                    </legend>
                    <Button btnType="MainButton">Готово</Button> 
                </fieldset>
            </form>
    )
}

export default OrderForm;