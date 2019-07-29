import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Contacts  from '../../Contacts/Contacts';

const header = props => {
    return (
        <header className={classes.Header}>
            <Logo />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
            <Contacts />
        </header>
    )
}

export default header;