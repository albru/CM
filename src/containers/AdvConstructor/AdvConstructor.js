import React from 'react';
import classes from './AdvConstructor.css';
import Button from '../../components/UI/Button/Button';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';

const AdvConstructor = props => {
    const buttonRedirectHandler = () => {
        props.history.push('/');
    }

    const crumbs = [
        {
            crumbName:'Главная',
            crumbHref: '/',
            linkType: 'prev'},
        {
            crumbName:'Конструктор вывесок',
            crumbHref: '/constructor',
            linkType: 'current'
        }
    ];

    return (
        <section className={classes.AdvConstructor}>
            <BreadCrumbs crumbs={crumbs} />
            <h2> Конструктор вывесок временно недоступен.  </h2>
            <Button 
                btnType='MainButton'
                clicked={buttonRedirectHandler}> На главную </Button> 
        </section>
        
    )
};

export default AdvConstructor;