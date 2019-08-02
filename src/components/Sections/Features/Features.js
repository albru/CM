import React from 'react';

import FeaturesItems from './FeaturesItems/FeatureItems';
import classes from './Features.css';

const features = props => {
    return (
        <section className={classes.Features}>
            <h2>Наши преимущества</h2>
            <FeaturesItems />
        </section>
    )
};

export default features;