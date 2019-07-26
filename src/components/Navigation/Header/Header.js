import React from 'react';
import classes from './Header.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const header = props => {
    return (
        <header className={classes.Header}>
            <NavigationItems />
        </header>
    )
}

export default header;