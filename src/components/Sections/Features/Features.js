import React from 'react';

import FeaturesItems from './FeaturesItems/FeaturesItems';
import classes from './Features.css';

const features = props => {
    return (
        <section className={classes.Features}>
            <h2>Преимущества</h2>
            <FeaturesItems />
        </section>
    )
};

export default features;