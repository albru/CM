import React, { useState, useContext } from 'react';
import Input from '../Input';
import { updateObject, checkValidity } from '../../../shared/utility';
import Aux from '../../../hoc/_Aux/_Aux';
import { inputData } from '../../Input/inputDataObj/inputDataObj';

const OrderInputList = props => {
    
    const [ orderInputData, setOrderInputData ] = useState(inputData.orderInputData)
    
    const formElementsArray = [];
    for (let key in orderInputData) {
        formElementsArray.push({
            id: key,
            config: orderInputData[key]
        })
    } 
    
    const inputChangeHandler = ((event, inputName) => {
        const updatedValue = updateObject(orderInputData, {
            [inputName]: updateObject(orderInputData[inputName], {
            value: event.target.value
        })
    })
        setOrderInputData(updatedValue)
    })

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
                    label={formElement.config.label}
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

export default OrderInputList;