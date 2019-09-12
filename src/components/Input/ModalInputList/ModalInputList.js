import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../Input';
import { updateObject, checkValidity } from '../../../shared/utility';
import Aux from '../../../hoc/_Aux/_Aux';
import { inputData } from '../inputDataObj/inputDataObj';

const ModalInputList = props => {

    const [modalInputData, setModalInputData] = useState(inputData.modalInputData)
    
    const inputChangeHandler = ((event, inputName) => {
        const updatedValue = updateObject(modalInputData, {
            [inputName]: updateObject(modalInputData[inputName], {
            value: event.target.value,
            valid: checkValidity(
                event.target.value,
                modalInputData[inputName].validation
            ),
            touched: true
            })
        })
        setModalInputData(updatedValue)
        props.modalHandler(inputName, updatedValue)
    })

    const formElementsArray = [];
    for (let key in modalInputData) {
        formElementsArray.push({
            id: key,
            config: modalInputData[key]
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

const mapDispatchToProps = dispatch => {
    return {
        modalHandler: (inputName, updatedState) => dispatch({type: 'MODAL_FORM_HANDLER', inputName: inputName, updatedState: updatedState})
    }
}

export default connect(null, mapDispatchToProps)(ModalInputList);