import React, { useState } from 'react';
import { connect } from 'react-redux';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Aux from '../../../hoc/_Aux/_Aux';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Button from '../../UI/Button/Button';
import media from '../../../shared/css/media.css';
import PhoneIcon from '@material-ui/icons/Phone';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer'; 

const Toolbar = props => {
    const [showMobMenu, setShowMobMenu] = useState(false);
    return (
        <Aux>
            <header className={classes.Header}>
                <DrawerToggle toggle={() => setShowMobMenu(!showMobMenu)}/>
                <SideDrawer backdropMoblie={showMobMenu}
                            openForMobile={showMobMenu}
                            closeForMobile={() => setShowMobMenu(false)}
                />
                <Logo 
                    header={true}
                    logoType='LogoHeader' />
                <nav className={media.DesktopOnly}>
                    <NavigationItems navType="NavToolbar" />
                </nav>
                <Button clicked={props.modalToggle} btnType="ToolbarButton">
                    <PhoneIcon />
                </Button>
            </header>
        </Aux>
    )
}

const mapStateToProps = state => {
    return {
        modalIsShow: state.modalForm.showModal
    }
}
const mapDispatchToProps = dispatch => {
    return {
        modalToggle: () => dispatch({type: 'MODAL_TOGGLE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);