import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const NavigationItem = props => {
    return ( 
        <li className={classes.NavigationItem}>
            <NavLink 
                exact
                to={props.route}
                activeClassName={classes.NavigationItemActive}>
                {props.children}
            </NavLink>
        </li>
        )
};

NavigationItem.propTypes = {
    route: PropTypes.string,
    name:  PropTypes.string

}

export default NavigationItem;