import React from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => {
    return (
        <Aux>
            <Toolbar />
            <SideDrawer />
            <div>Main</div>
            <div>Footer</div>
        </Aux>
    )
}

export default layout;