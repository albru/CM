import React from 'react';

import Aux from '../../../hoc/_Aux/_Aux';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import media from '../../../shared/css/media.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import PropTypes from 'prop-types';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close, media.PhonesOnly];
    if (props.sideDrawerIsVis) {
        attachedClasses = [classes.SideDrawer, classes.Open, media.PhonesOnly];
    }

    return (
        <Aux>
            <Backdrop
                sideDrawerIsVis={props.sideDrawerIsVis}
                sideDrawerClose={props.sideDrawerClose}
            />
            <div
                className={attachedClasses.join(' ')}
                onClick={props.sideDrawerClose}>
                <nav>
                    <NavigationItems auth={props.auth}/>
                </nav>
            </div>
        </Aux>
    );
};

SideDrawer.propTypes = {
    close: PropTypes.func,
    openForMobile: PropTypes.bool
}

export default SideDrawer;