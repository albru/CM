import React from 'react';
import classes from './Backdrop.css';

const backdrop = props => {
    const showBackdrop = props.isShow ? 
        <div 
            className={classes.Backdrop}
            onClick={props.close}></div> : 
        null;
        
    return (
        <div>
            {showBackdrop}
        </div>
    )
};

export default backdrop;