import React from 'react';
import classes from './Portfolio.css';

const portfolio = props => {

    return (
        <section className={classes.Portfolio}>
            <h1>Портфолио</h1>
            {props.children}
        </section>
    )
};

export default portfolio;

