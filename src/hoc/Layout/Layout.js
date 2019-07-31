import React, { useState } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Main from '../../containers/Main/Main';
import Footer from '../../components/Footer/Footer';

const Layout = props => {
    const [sidDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerCloseHandler = props => {
        setSideDrawerIsVisible(false)
    }

    const sideDrawerToggleHandler = props => {
        setSideDrawerIsVisible(!sidDrawerIsVisible)
    }

    if (setSideDrawerIsVisible === true) {
        this.addEventListener('click', sideDrawerCloseHandler)
    };

    return (
        <Aux>
            <Toolbar sideDrawerToggle={sideDrawerToggleHandler}/>
            <SideDrawer open={sidDrawerIsVisible}/>
            <Main>
                <h1> MAIN </h1>
            </Main>
            <Footer />
        </Aux>
    )
}

export default Layout;