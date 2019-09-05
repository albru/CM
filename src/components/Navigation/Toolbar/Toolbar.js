import React from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions/actionTypes';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
// import Socials  from '../../Contacts/Socials/Socials';
// import Phone  from '../../Contacts/Phone/Phone';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Button from '../../UI/Button/Button';
import media from '../../../shared/css/media.css';
import PhoneIcon from '@material-ui/icons/Phone';

const Header = props => {
    return (
        <header className={classes.Header}>
            <DrawerToggle drawerToggle={props.sideDrawerToggle}/>
            <Logo 
                header={true}
                logoType='LogoHeader' />
            <nav className={media.DesktopOnly}>
                <NavigationItems navType='NavToolbar' />
            </nav>
            {/* <div>
                <Phone mediaType="DesktopOnly"/>
                <Socials mediaType="DesktopOnly"/>
                test
            </div> */}
            <Button clicked={props.modalOpen} btnType="ToolbarButton">
                <PhoneIcon />
            </Button>
        </header>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        modalOpen: () => dispatch({type: actionTypes.MODAL_OPEN}),
    }
}

export default connect(null, mapDispatchToProps)(Header);