import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const modal = props => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className={classes.Modal}>
                {props.children}
            </div>
        </Aux>
    )
}

export default modal;