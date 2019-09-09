import React from 'react';
import classes from './ServicesListItem.css';
import PropTypes from 'prop-types';

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

servicesListItem.propTypes = {
    href: PropTypes.string,
    name: PropTypes.string
}

export default servicesListItem;