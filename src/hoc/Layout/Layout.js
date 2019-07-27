import React from 'react';

import Aux from '../Aux/Aux';
import Header from '../../components/Navigation/Header/Header';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = props => {
    return (
        <Aux>
            <Header />
            <SideDrawer />
            <div>Main</div>
            <div>Footer</div>
        </Aux>
    )
}

export default layout;