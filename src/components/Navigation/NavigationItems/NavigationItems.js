import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
import { navigationItemsData } from './NavigationItemsData/NavigationItemsData';

const NavigationItems = props => {
    let navigationList = [];
    for (let key in navigationItemsData) {
        navigationList.push(navigationItemsData[key])
    }
    const navigationItems = navigationList.map((item, index) => {
        return (
            <NavigationItem 
                key={index}
                route={item.route}
                name={item.name}
                disabled={item.disabled ? true : null}
                />
        )
    })
    return (
        <ul className={[classes.NavigationItems, classes[props.navType]].join(' ')}>
            {navigationItems}
        </ul>
    );
};

export default NavigationItems;