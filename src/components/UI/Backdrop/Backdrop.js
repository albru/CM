import React from 'react';
import classes from './Backdrop.css';
import Aux from '../../../hoc/_Aux/_Aux';
import PropTypes from 'prop-types';

const Backdrop = props => {
    let showBackdrop = null;
    if (props.backdropMobile) {
        showBackdrop = (
        <div 
            className={classes.Backdrop}
            onClick={props.closeForMobile}>
        </div>
        )
    }
    if (props.modal) {
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