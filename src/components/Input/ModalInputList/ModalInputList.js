import React, { useContext } from 'react';
import Input from '../Input';
import { updateObject, checkValidity } from '../../../shared/utility';
import Aux from '../../../hoc/_Aux/_Aux';
import { InputContext } from '../../../context/input-context';

const ModalInputList = props => {
    
    const inputContext = useContext(InputContext)
    
    const formElementsArray = [];
    for (let key in inputContext.modalInputData) {
        formElementsArray.push({
            id: key,
            config: inputContext.modalInputData[key]
        })
    } 

    const inputChangeHandler = ((event, inputName) => {
        const updatedValue = updateObject(inputContext.modalInputData, {
            [inputName]: updateObject(inputContext.modalInputData[inputName], {
            value: event.target.value,
            valid: checkValidity(
                event.target.value,
                inputContext.modalInputData[inputName].validation
            ),
            touched: true
            })
        })
        inputContext.setModalInputData(updatedValue)
    })
    const formContent = formElementsArray.map(formElement => {
        console.log(formElement.id)
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

export default ModalInputList;