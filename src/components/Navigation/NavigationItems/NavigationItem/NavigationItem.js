import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const NavigationItem = props => {
    const navigationLinkData = [
        {name: "Реклама", route: "/1", exact: null},
        {name: "Услуги", route: "/2", exact: null},
        {name: "Портфолио", route: "/3", exact: null},
        {name: "Контакты", route: "/4", exact: null},
    ];
    return navigationLinkData.map((item, id) => {
        return ( 
            <li key={id}
                className={classes.NavigationItem}>
                <NavLink 
                    to={item.route}
                    exact={item.exact}>{item.name}</NavLink>
            </li>
            )
    })
};

export default NavigationItem;