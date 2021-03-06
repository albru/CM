import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

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