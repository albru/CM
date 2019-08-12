import React from 'react';
import classes from './Portfolio.css';

const portfolio = props => {

    return (
        <section className={classes.Portfolio}>
            <h1>Работы</h1>
            {props.children}
        </section>
    )
};

export default portfolio;

