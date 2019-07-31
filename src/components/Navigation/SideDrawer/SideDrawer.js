import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const SideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <div>
                <Logo />
            </div>
            <nav>
                <NavigationItems  />
            </nav>
        </div>
    );
};

export default SideDrawer;