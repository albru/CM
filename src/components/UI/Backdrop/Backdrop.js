import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/_Aux/_Aux';

import classes from './Backdrop.css';

const Backdrop = props => {

    let showBackdrop = null;
    
    if (props.sideDrawerIsVis) {
        showBackdrop = (
        <div 
            className={classes.Backdrop}
            onClick={props.sideDrawerClose}>
        </div>
        )
    }
    if (props.modalIsVis) {
        showBackdrop = 
        <div 
            className={classes.Backdrop}
            onClick={props.modalClose}>
        </div> 
    }
        
    return (
        <Aux>
            {showBackdrop}
        </Aux>
    )
};

Backdrop.propTypes = {
    backdropMobile: PropTypes.bool,
    close: PropTypes.func,
}

export default Backdrop;