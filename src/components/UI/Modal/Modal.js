import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const Modal = props => {

    props.modalIsShow ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'inherit';
    
    return (
        <Aux>
            <Backdrop modalIsVis={props.modalIsVis}
                      modalClose={props.modalClose}
            />
            <div className={classes.Modal}
                style={{
                        transform: props.modalIsVis ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.modalIsVis ? '1' : '0'
                    }}>
                <div className={classes.CloseBtn}
                    onClick={props.modalClose}>
                    <div className={classes.Stick1}></div>
                    <div className={classes.Stick2}></div>
                </div>
                {props.children}
            </div>
        </Aux>
    )
}


Modal.propTypes = {
    modalClose: PropTypes.func,
    modalIsShow: PropTypes.bool
}

export default Modal;
