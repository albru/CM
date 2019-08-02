import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = props => {
    const navigationLinkData = [
        {name: "Реклама", route: "/1", exact: null},
        {name: "Услуги", route: "/2", exact: null},
        {name: "Портфолио", route: "/3", exact: null},
        {name: "Контакты", route: "/4", exact: null},
    ];
    const navigationList = navigationLinkData.map((item, index) => {
        return (
            <NavigationItem 
                key={index}
                id={index}
                route={item.route}
                exact={item.exact}
                name={item.name}
                />
        )
    })
    return (
        <ul className={classes.NavigationItems}>
            {navigationList}
        </ul>
    )
};

export default NavigationItems;