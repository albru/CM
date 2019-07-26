import React from 'react';
import Aux from '../Aux/Aux';
import Header from '../../components/Navigation/Header/Header';

const layout = props => {
    return (
        <Aux>
            <Header />
            <div>SideDrawer</div>
            <div>Main</div>
            <div>Footer</div>
        </Aux>
    )
}

export default layout;