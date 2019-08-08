import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';
import Phone from '../../UI/Contacts/Phone/Phone';
import Socials from '../../UI/Contacts/Socials/Socials';
import classes from './Footer.css';
import Privacy from './Privacy/Privacy';

const footer = props => {
    return (
        <footer className={classes.Footer}>
            <Logo 
                footer={true}
                logoType="LogoFooter"/>
            <Socials />
            <NavigationItems navType='NavFooter'/>
            <Phone />
            <Privacy />
        </footer>
    )
}

export default footer;