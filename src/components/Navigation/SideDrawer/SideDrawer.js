import React from 'react';

import Aux from '../../../hoc/_Aux/_Aux';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import media from '../../../shared/css/media.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close, media.PhonesOnly];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open, media.PhonesOnly];
    }

    return (
        <Aux>
            <Backdrop 
                isShow={props.open}
                close={props.closed}
                />
            <div 
                className={attachedClasses.join(' ')}
                onClick={props.closed}>
                <nav>
                    <NavigationItems  />
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;