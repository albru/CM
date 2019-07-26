import React from 'react';
import classes from './Header.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

const header = props => {
    return (
        <header className={classes.Header}>
            <Logo />
            <NavigationItems />
        </header>
    )
}

export default header;