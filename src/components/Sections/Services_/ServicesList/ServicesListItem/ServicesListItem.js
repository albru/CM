import React from 'react';
import classes from './ServicesListItem.css';

const servicesListItem = props => {
    return (
        <li className={classes.ServicesListItem}>
            <a href={props.href}>
                <span>
                    {props.name}
                </span>
            </a>
        </li>
    )
}

export default servicesListItem;