import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';
import Phone from '../../UI/Contacts/Phone/Phone';
import Socials from '../../UI/Contacts/Socials/Socials';
import classes from './Footer.css';

const footer = props => {
    return (
        <footer className={classes.Footer}>
            <Logo />
            <NavigationItems />
            <div>
                <Phone />
                <Socials />
            </div>
            <Button btnType="ContactButton">FOOTER BTNs</Button>
        </footer>
    )
}

export default footer;