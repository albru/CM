import React from 'react';

import { connect } from 'react-redux';

import * as actionTypes from '../../../../store/actions/actionTypes';
import classes from './DrawerToggle.css';
import media from '../../../../shared/css/Media.css';

const DrawerToggle = props => {
    let attachedClasses = [media.PhonesOnly, classes.DrawerToggle]
    return (
        <div className={attachedClasses.join(' ')} onClick={props.sideDrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sideDrawerToggle: () => dispatch({type: actionTypes.SIDE_DRAWER_TOGGLE})
    }
};

export default connect(null, mapDispatchToProps)(DrawerToggle);