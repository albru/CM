import React, { useState, useContext } from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Aux from '../../../hoc/_Aux/_Aux';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Button from '../../UI/Button/Button';
import media from '../../../shared/css/media.css';
import PhoneIcon from '@material-ui/icons/Phone';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer'; 
import { ModalContext } from '../../../context/modal-context';

const Toolbar = props => {
    const [showMobMenu, setShowMobMenu] = useState(false);
    const modalContext = useContext(ModalContext);
    return (
        <Aux>
            <header className={classes.Header}>
                <DrawerToggle toggle={() => setShowMobMenu(!showMobMenu)}/>
                <SideDrawer backdropMoblie={showMobMenu}
                            openForMobile={showMobMenu}
                            close={() => setShowMobMenu(false)}
                />
                <Logo 
                    header={true}
                    logoType='LogoHeader' />
                <nav className={media.DesktopOnly}>
                    <NavigationItems navType="NavToolbar" />
                </nav>
                <Button clicked={modalContext.toggle} btnType="ToolbarButton">
                    <PhoneIcon />
                </Button>
            </header>
        </Aux>
    )
}

export default Toolbar;