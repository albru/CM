import React from 'react';
import classes from './Input.css';
import PropTypes from 'prop-types';

const Input = props => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = 
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            break;
        case ('textarea'):
            inputElement = 
                <textarea 
                    className={inputClasses.join(' ')}
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed}
                />
            break;
        case ('select'):
            inputElement = 
                <select 
                    className={inputClasses.join(' ')}
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                    ))}
                </select>
            break;
        default:
            inputElement = 
                <input 
                    className={inputClasses.join(' ')}
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed}
                />
    }

    return (
        <div className={classes.Input}>
          {props.label ? <label className={classes.Label}>{props.label}</label> : null}
          {inputElement}
        </div>
      )

}

Input.propTypes = {
    changed: PropTypes.func,
    elementConfig: PropTypes.object,
    value: PropTypes.string,
    elementType: PropTypes.string,
    invalid: PropTypes.bool,
    touched: PropTypes.bool,
    shouldValidate: PropTypes.object,
    label: PropTypes.string
}

export default Input;