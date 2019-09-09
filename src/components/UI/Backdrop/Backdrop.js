import React, { useContext } from 'react';
import classes from './Backdrop.css';
import Aux from '../../../hoc/_Aux/_Aux';
import { ModalContext } from '../../../context/modal-context';
import PropTypes from 'prop-types';

const Backdrop = props => {
    const modalContext = useContext(ModalContext)
    let showBackdrop = null;
    if (props.backdropMobile) {
        showBackdrop = (
        <div 
            className={classes.Backdrop}
            onClick={props.close}>
        </div>
        )
    }
    if (modalContext.isShow) {
        showBackdrop = 
        <div 
            className={classes.Backdrop}
            onClick={() => modalContext.close()}>
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