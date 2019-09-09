import React, { useMemo } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
import { navigationItemsData } from './navigationItemsDataObj/NavigationItemsData';
import PropTypes from 'prop-types';

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

NavigationItem.propTypes = {
    navType: PropTypes.string
}

export default NavigationItems;