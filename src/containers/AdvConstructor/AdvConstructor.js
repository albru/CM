import React from 'react';
import classes from './AdvConstructor.css';
import Button from '../../components/UI/Button/Button';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import { breadCrumbsData } from '../../components/Navigation/BreadCrumbs/breadCrumbsDataObj/breadCrumbsDataObj';

const AdvConstructor = props => {
    const buttonRedirectHandler = () => {
        props.history.push('/');
    }
    const crumbs = breadCrumbsData.advConstructorCrumb
    return (
        <section className={classes.AdvConstructor}>
            <h1>Конструктор вывесок</h1>
            <BreadCrumbs crumbs={crumbs} />
            <h2> Конструктор вывесок временно недоступен.  </h2>
            <Button 
                btnType='MainButton'
                clicked={buttonRedirectHandler}> На главную </Button> 
        </section>
        
    )
};

export default AdvConstructor;