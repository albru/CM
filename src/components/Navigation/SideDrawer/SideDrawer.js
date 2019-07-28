import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Aux/Aux.js';

const sideDrawer = ( props ) => {

    return (
        <Aux>
            <div className={classes.SideDrawer}>
                <div >
                    <Logo />
                </div>
                <nav>
                    <NavigationItems  />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;