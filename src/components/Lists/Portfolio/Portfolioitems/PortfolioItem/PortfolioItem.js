import React from 'react';

import classes from './PortfolioItem.css';
import PropTypes from 'prop-types';

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

portfolioItem.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string
}

export default portfolioItem;