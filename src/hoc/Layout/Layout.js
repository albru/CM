import React from 'react';

import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actions';
import classes from './Layout.css';
import Aux from '../_Aux/_Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';

const Layout = props => {
    console.log(props, 'props')
    return (
        <Aux>
            <Toolbar sideDrawerToggle={props.sideDrawerToggleHandler}/>
            <SideDrawer 
                open={props.sidDrawerIsVisible}
                closed={props.sideDrawerCloseHandler}
                />
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer />
        </Aux>
    )
};

const mapStateToProps = state => {
    return {
        sidDrawerIsVisible: state.sideDrawer.sideDrawerIsVisible
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sideDrawerToggleHandler: () => dispatch({type: actionTypes.SIDE_DRAWER_TOGGLE}),
        sideDrawerCloseHandler: () => dispatch({type: actionTypes.SIDE_DRAWER_CLOSE})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);