import React from 'react';
import PropTypes from 'prop-types';

import classes from './PortfolioItem.css';

const portfolioItem = props => {
    const {
        imgSrc,
        imgAlt,
        title,
        desc
    } = props

    return (
        <li className={classes.PortfolioItem}>
            <div className={classes.PortfolioImgCont}>
                <img src={imgSrc} alt={imgAlt}></img>
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </li>
    )
};

portfolioItem.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string
}

export default portfolioItem;