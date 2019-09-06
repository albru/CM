import React from 'react';
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

export default DrawerToggle;