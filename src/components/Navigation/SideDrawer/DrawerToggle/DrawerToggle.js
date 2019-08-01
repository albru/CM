import React from 'react';
import classes from './DrawerToggle.css';
import media from '../../../../shared/css/Media.css';

const drawerToggle = props => {
    let attachedClasses = [media.PhonesOnly, classes.DrawerToggle]
    return (
        <div className={attachedClasses.join(' ')} onClick={props.drawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default drawerToggle;