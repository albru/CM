import React from 'react';
import PropTypes from 'prop-types';

import classes from './DrawerToggle.css';
import media from '../../../../shared/css/media.css';

const DrawerToggle = props => {
    let attachedClasses = [media.PhonesOnly, classes.DrawerToggle]
    return (
        <div className={attachedClasses.join(' ')} onClick={props.toggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

DrawerToggle.propTypes = {
    toggle: PropTypes.func
}

export default DrawerToggle;