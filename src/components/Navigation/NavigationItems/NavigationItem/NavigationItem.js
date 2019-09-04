import React from 'react';
import { NavLink } from 'react-router-dom'

import classes from './NavigationItem.css';

const NavigationItem = props => {
    return ( 
        <li className={classes.NavigationItem}>
            <NavLink 
                to={props.route}
                activeClassName={classes.NavigationItemActive}
                disabled={props.disabled ? true : null}>{props.name}</NavLink>
        </li>
        )
};

export default NavigationItem;