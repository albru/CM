import React from 'react';


import Button from '../../UI/Button/Button';
import PortfolioItems from './Portfolioitems/PortfolioItems';
import classes from './Portfolio.css';

const portfolio = props => {
    return (
        <section className={classes.Portfolio}>
            <h1>Работы</h1>
            <PortfolioItems />
        </section>
    )
};

export default portfolio;