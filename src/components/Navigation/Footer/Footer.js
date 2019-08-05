import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';
import Phone from '../../UI/Contacts/Phone/Phone';
import Socials from '../../UI/Contacts/Socials/Socials';

const footer = props => {
    return (
        <footer>
            <Logo />
            <NavigationItems />
            <div style={{'width': '100px'}}>
                <Phone />
                <Socials />
            </div>
            <Button btnType="ContactButton">FOOTER BTN</Button>
        </footer>
    )
}

export default footer;