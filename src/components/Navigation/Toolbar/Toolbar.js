import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Socials  from '../../Contacts/Socials/Socials';
import Phone  from '../../Contacts/Phone/Phone';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Button from '../../UI/Button/Button';
import media from '../../../shared/css/Media.css';

const header = props => {
    return (
        <header className={classes.Header}>
            <DrawerToggle drawerToggle={props.sideDrawerToggle}/>
            <Logo />
            <nav className={media.DesktopOnly}>
                <NavigationItems />
            </nav>
            <div>
                <Phone />
                <Socials />
            </div>
            <Button btnType="ContactButton">Перезвоните мне</Button>
        </header>
    )
}

export default header;