import React, { useState } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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

            <div>Main</div>
            <div>Footer</div>
            <div>Main</div>
            <div>Footer</div>
            <div>Main</div>
            <div>Footer</div>
            <button style={{'margin-left': '300px'}} onClick={sideDrawerToggleHandler}>CLICK</button>
        </Aux>
    )
}

export default Layout;