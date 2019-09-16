import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../Input';
import Aux from '../../../hoc/_Aux/_Aux';

const OrderInputList = props => {

    const formContent = props.array.map(formElement => {
            return (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    label={formElement.config.label}
                    changed={(event) => props.inputChangeHandler(event, formElement.id)}
                />
            )
        })
    return (
        <Aux>
            {formContent}
        </Aux>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        orderFormHandler: (inputName, value) => dispatch({ type: 'ORDER_FORM_HANDLER', inputName: inputName, value: value })
    }
}

OrderInputList.propTypes = {
    orderFormHandler: PropTypes.func
}

export default connect(null, mapDispatchToProps)(OrderInputList);