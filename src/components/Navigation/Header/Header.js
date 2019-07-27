import React from 'react';
import classes from './Header.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Contacts  from '../../Contacts/Contacts';





const header = props => {
    return (
        <header className={classes.Header}>
            <Logo />
            <NavigationItems />
            <Contacts />
        </header>
    )
}

export default header;