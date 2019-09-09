import React from 'react';
import classes from './Button.css';
import PropTypes from 'prop-types';

const Button = props => {
    return (
        <button 
            className={[classes.Button, classes[props.btnType]].join(' ')}
            disabled={props.disabled}
            onClick={props.clicked}>
            {props.children}
        </button>
    )
};

Button.propTypes = {
    disabled: PropTypes.bool,
    btnType: PropTypes.string,
    clicked: PropTypes.func
}

export default Button;