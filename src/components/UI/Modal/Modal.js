import React, { useContext, useState } from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';
import { ModalContext } from '../../../context/modal-context';

const Modal = props => {
    const modalContext = useContext(ModalContext);
    return (
        <Aux>
            <Backdrop/>
            <div className={classes.Modal}
                style={{
                        transform: modalContext.isShow ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: modalContext.isShow ? '1' : '0'
                    }}>
                <div className={classes.CloseBtn}
                    onClick={modalContext.close}>
                    <div className={classes.Stick1}></div>
                    <div className={classes.Stick2}></div>
                </div>
                {props.children}
            </div>
        </Aux>
    )
}

export default Modal;