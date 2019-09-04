import React, { useMemo } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
import { navigationItemsData } from './navigationItemsDataObj/NavigationItemsData';

const NavigationItems = props => {
    let navigationList = [];
    for (let key in navigationItemsData) {
        navigationList.push(navigationItemsData[key])
    }

    const list = useMemo(() => {
        const navigationItems = navigationList.map((item, index) => {
            return (
                <NavigationItem 
                    key={item.name}
                    route={item.route}
                    name={item.name}
                    disabled={item.disabled ? true : null}
                    />
            )
        })
        return navigationItems
    },[navigationList])
    
    return (
        <ul className={[classes.NavigationItems, classes[props.navType]].join(' ')}>
            {list}
        </ul>
    );
};

export default NavigationItems;