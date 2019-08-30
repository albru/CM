import React from 'react';

import classes from './PortfolioItem.css';

const portfolioItem = props => {
    return (
        <li className={classes.PortfolioItem}>
            <div className={classes.PortfolioImgCont}>
                <img src={props.imgSrc} alt={props.imgAlt}></img>
            </div>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </li>
    )
};

export default portfolioItem;