import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Aux from '../../../hoc/_Aux/_Aux';

const OrderInputList = props => {

    const list = useMemo(() => {
        const formContent = props.userData.map(formElement => {
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
        return formContent;
    },[props])
    
    return (
        <Aux>
            {list}
        </Aux>
    )
}


OrderInputList.propTypes = {
    userData: PropTypes.array
}

export default OrderInputList;