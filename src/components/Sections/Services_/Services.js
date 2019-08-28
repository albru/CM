import React from 'react';
import classes from './Services.css';

const services = props => {

    return (
        <section className={classes.Services}>
            <h1>Услуги</h1>
            {props.children}
        </section>
    )
};

export default services;