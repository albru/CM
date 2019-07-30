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

    return (
        <Aux>
            <Toolbar />
            <SideDrawer open={sidDrawerIsVisible}/>
            <Main>
                <h1> MAIN </h1>
            </Main>
            <Footer />
            <button style={{'margin-left': '300px'}} onClick={sideDrawerToggleHandler}>CLICK</button>
        </Aux>
    )
}

export default Layout;