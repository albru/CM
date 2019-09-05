import React, { useContext } from 'react';

import Input from '../Input';
import { updateObject, checkValidity } from '../../../../shared/utility';
import Aux from '../../../../hoc/_Aux/_Aux';
import { InputContext } from '../../../../context/input-context';

const InputList = props => {
    const inputContext = useContext(InputContext)
    const inputChangeHandler = ((event, inputName) => {
        const updatedValue = updateObject(inputContext.inputData, {
            [inputName]: updateObject(inputContext.inputData[inputName], {
            value: event.target.value,
            valid: checkValidity(
                event.target.value, 
                inputContext.inputData[inputName].validation
            ),
            touched: true
            })
        })
        inputContext.setDataObj(updatedValue)
    })

    const formElementsArray = [];
    for (let key in inputContext.inputData) {
        formElementsArray.push({
            id: key,
            config: inputContext.inputData[key]
        })
    } 

    console.log(typeof(inputContext.inputData));
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
                    changed={event => inputChangeHandler(event, formElement.id)}
                />
            )
        })
    return (
        <Aux>
            {formContent}
        </Aux>
    )
}

export default InputList;