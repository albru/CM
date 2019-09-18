import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import Aux from '../../../hoc/_Aux/_Aux';

const ModalInputList = props => {
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
                    label={''}
                    changed={event => props.inputChangeHandler(event, formElement.id)}
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
};

ModalInputList.propTypes = {
    userData: PropTypes.array
}


export default ModalInputList;