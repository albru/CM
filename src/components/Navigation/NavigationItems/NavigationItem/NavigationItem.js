import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import classes from './NavigationItem.css';

const NavigationItem = props => {
    return ( 
        <li className={classes.NavigationItem}>
            <NavLink 
                to={props.route}
                activeClassName={classes.NavigationItemActive}>
                {props.name}
            </NavLink>
        </li>
        )
};

NavigationItem.propTypes = {
    route: PropTypes.string,
    name: PropTypes.string

}

export default NavigationItem;