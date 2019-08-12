import React from 'react';
import classes from './Features.css';

const features = props => {
    return (
        <section className={classes.Features}>
            <h2>Преимущества</h2>
            {props.children}
        </section>
    )
};

export default features;