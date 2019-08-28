import React from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const modal = props => {
    return (
        <Aux>
            <Backdrop isShow={props.show} close={props.close}/>
            <div className={classes.Modal}
                 style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                {props.children}
            </div>
        </Aux>
    )
}

export default modal;