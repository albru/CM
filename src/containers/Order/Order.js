import React from 'react';
import classes from './Order.css';
import Button from '../../components/UI/Button/Button';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import { breadCrumbsData } from '../../components/Navigation/BreadCrumbs/breadCrumbsDataObj/breadCrumbsDataObj';
import OrderForm from '../../components/Forms/OrderForm/OrderForm';

const AdvConstructor = props => {
    const buttonRedirectHandler = () => {
        props.history.push('/');
    }
    const crumbs = breadCrumbsData.advConstructorCrumb
    return (
        <section className={classes.Order}>
            <BreadCrumbs crumbs={crumbs} />
            <h2> Конструктор вывесок временно недоступен.  </h2>
            <Button 
                btnType='MainButton'
                clicked={buttonRedirectHandler}> На главную </Button> 
            <OrderForm />
        </section>
        
    )
};

export default AdvConstructor;