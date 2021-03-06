import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Phone from '../../Contacts/Phone/Phone';
import Email from '../../Contacts/Email/Email';
import Socials from '../../Contacts/Socials/Socials';
import Privacy from './Privacy/Privacy';

import classes from './Footer.css';

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <Logo 
                footer={true}
                logoType="LogoFooter"/>
            <Socials />
            <NavigationItems navType="NavFooter"/>
            <Phone />
            <Email />
            <Privacy />
        </footer>
    )
}

export default Footer;