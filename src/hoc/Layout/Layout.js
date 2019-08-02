import React, { useState } from 'react';

import classes from './Layout.css';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';

const Layout = props => {
    const [sidDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerCloseHandler = props => {
        setSideDrawerIsVisible(false)
    }

    const sideDrawerToggleHandler = props => {
        setSideDrawerIsVisible(!sidDrawerIsVisible)
    }

    return (
        <Aux>
            <Toolbar sideDrawerToggle={sideDrawerToggleHandler}/>
            <SideDrawer 
                open={sidDrawerIsVisible}
                closed={sideDrawerCloseHandler}
                />
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer />
        </Aux>
    )
}

export default Layout;