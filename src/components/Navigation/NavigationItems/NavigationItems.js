import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = props => {
    const navigationLinkData = [
        {name: "Портфолио", route: "/1", exact: null},
        {name: "Конструктор вывесок", route: "/2", exact: null},
        {name: "Контакты", route: "/3", exact: null}
    ];
    const navigationList = navigationLinkData.map((item, index) => {
        return (
            <NavigationItem 
                key={index}
                route={item.route}
                exact={item.exact}
                name={item.name}
                />
        )
    })
    return (
        <ul className={[classes.NavigationItems, classes[props.navType]].join(' ')}>
            {navigationList}
        </ul>
    )
};

export default NavigationItems;