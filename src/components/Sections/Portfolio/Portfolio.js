import React from 'react';

import PortfolioItems from './Portfolioitems/PortfolioItems';
import classes from './Portfolio.css';

const portfolio = props => {
    return (
        <section className={classes.Portfolio}>
            <h1>Наши работы</h1>
            <PortfolioItems />
        </section>
    )
};

export default portfolio;