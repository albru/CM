import React from 'react';
import PropTypes from 'prop-types';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Aux from '../../../hoc/_Aux/_Aux';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Button from '../../UI/Button/Button';
import PhoneIcon from '@material-ui/icons/Phone';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer'; 

import classes from './Toolbar.css';
import media from '../../../shared/css/media.css';

const Toolbar = props => {
    props.modalIsVis || props.sideDrawerIsVis 
        ? document.body.style.overflow = 'hidden' 
        : document.body.style.overflow = 'inherit';
    return (
        <Aux>
            <header className={classes.Header}>
                <DrawerToggle toggle={props.sideDrawerToggle}/>
                <SideDrawer sideDrawerIsVis={props.sideDrawerIsVis}
                            sideDrawerClose={props.sideDrawerClose}
                            modalIsVis={props.modalIsVis}
                            modalIsClose={props.modalClose}
                            auth={props.auth}
                />
                <Logo 
                    header={true}
                    logoType='LogoHeader' />
                <nav className={media.DesktopOnly}>
                    <NavigationItems navType="NavToolbar"
                                     auth={props.auth} />
                </nav>
                <Button clicked={props.modalToggle} btnType="ToolbarButton">
                    <PhoneIcon />
                </Button>
            </header>
        </Aux>
    )
}

Toolbar.propTypes = {
    sideDrawerClose: PropTypes.func,
    sideDrawerIsVis: PropTypes.bool,
    modalClose:      PropTypes.func,
    modalIsVis:      PropTypes.bool,
    modalToggle:     PropTypes.func
}

export default Toolbar;