import React from 'react';
import classes from './Order.css';
import Section from '../../components/Section/Section';
import Button from '../../components/UI/Button/Button';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import { breadCrumbsData } from '../../components/Navigation/BreadCrumbs/breadCrumbsDataObj/breadCrumbsDataObj';
import OrderForm from '../../components/Forms/OrderForm/OrderForm';

const AdvConstructor = props => {
    const buttonRedirectHandler = () => {
        props.history.push('/');
    }
    const crumbs = breadCrumbsData.orderCrumb;
    return (
        <Section sectionType="Order"> 
            <BreadCrumbs crumbs={crumbs} />
            <h1> Конструктор рекламы </h1>
            {/* <Button 
                btnType='MainButton'
                clicked={buttonRedirectHandler}> На главную </Button> */}
            <OrderForm />
        </Section>
        
    )
};

export default AdvConstructor;