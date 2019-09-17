import React from 'react';
import Input from '../Input';

import Aux from '../../../hoc/_Aux/_Aux';


const ModalInputList = props => {

    const formElementsArray = [];
    for (let key in props.inputData) {
        formElementsArray.push({
            id: key,
            config: props.inputData[key]
        })
    } 
    
    const formContent = formElementsArray.map(formElement => {
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
    return (
        <Aux>
            {formContent}
        </Aux>
    )
}


export default ModalInputList;