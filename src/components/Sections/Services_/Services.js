import React from 'react';
import ServicesItems from './ServicesItems/ServicesItems';
import classes from './Services.css';

const services = props => {
    return (
        <section className={classes.Services}>
            <h2>Услуги</h2>
            <ServicesItems />
        </section>
    )
};

export default services;