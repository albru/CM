import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = props => {
    const navigationLinkData = [
        {name: 'Услуги', route: "/services"},
        {name: "Портфолио", route: "/portfolio"},
        {name: "Конструктор вывесок", route: "/constructor", disabled: true},
        {name: "Контакты", route: "/contacts"}
    ];
    const navigationList = navigationLinkData.map((item, index) => {
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
            {navigationList}
        </ul>
    );
};

export default NavigationItems;