import React from 'react';

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

export default servicesItem;
