import React from 'react';
import classes from './Services.css';

const services = props => {

    return (
        <section className={classes.Services}>
            <h2>Услуги</h2>
            {props.children}
        </section>
    )
};

export default services;