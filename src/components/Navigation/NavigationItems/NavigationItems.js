import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
import PropTypes from 'prop-types';

const NavigationItems = props => {
    return (
        <ul className={[classes.NavigationItems, classes[props.navType]].join(' ')}>
            <NavigationItem route={'/services'}>Услуги</NavigationItem>
            <NavigationItem route={'/portfolio'}>Портфолио</NavigationItem>
            <NavigationItem route={'/order'}>Размещение рекламы</NavigationItem>
            <NavigationItem route={'/contacts'}>Контакты</NavigationItem>
            {props.auth ? <NavigationItem route={'/orders'}>Мои заказы</NavigationItem> : null}
            {props.auth 
                ? <NavigationItem route={'/logout'}>Выйти</NavigationItem>
                : <NavigationItem route={'/auth'}>Войти</NavigationItem>}
        </ul>
    );
};

NavigationItem.propTypes = {
    navType: PropTypes.string
}

export default NavigationItems;
