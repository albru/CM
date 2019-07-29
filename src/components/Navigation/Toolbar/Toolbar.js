import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Socials  from '../../Contacts/Socials/Socials';
import Phone  from '../../Contacts/Phone/Phone';

const header = props => {
    return (
        <header className={classes.Header}>
            <Logo />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
            <div>
                <Phone />
                <Socials />
            </div>
        </header>
    )
}

export default header;