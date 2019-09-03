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
                <div className={classes.CloseBtn}
                     onClick={props.close}>
                    <div className={classes.Stick1}></div>
                    <div className={classes.Stick2}></div>
                </div>
                {props.children}
            </div>
        </Aux>
    )
}

export default modal;