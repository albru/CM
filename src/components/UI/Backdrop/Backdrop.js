import React from 'react';
import classes from './Backdrop.css';
import Aux from '../../../hoc/_Aux/_Aux';

const backdrop = props => {
    const showBackdrop = props.isShow ? 
        <div 
            className={classes.Backdrop}
            onClick={props.close}>
        </div> : 
        null;
        
    return (
        <Aux>
            {showBackdrop}
        </Aux>
    )
};

export default backdrop;