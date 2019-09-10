import React from 'react';
import PropTypes from 'prop-types';
import classes from './ServicesItem.css';

const servicesItem = props => {
    return (
        <li className={classes.ServicesItem}>
            <img src={props.imgSrc} alt={props.imgAlt}></img>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <a href={props.href}>Подробнее</a>
        </li>
    )
};

servicesItem.propTypes = {
    imgSrc: PropTypes.string,
    href: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    imgAlt: PropTypes.string
}

export default servicesItem;
