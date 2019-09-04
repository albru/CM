import React, { useContext } from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Button from '../Button/Button';
import InputList from '../Input/InputList/InputList';
import { InputContext } from '../../../context/input-context.js';

const ModalForm = props => {
    const inputContext = useContext(InputContext)
    let form;
    if(props.modalError) {
        form = (
            <ErrorMessage errorMessage={props.errorMsg}
               btnClick={props.modalClose} />
        )
    }
    if(props.modalDataSend) {
        form = (
            <Aux>
                <h2>{props.username}, ваша заявка отправлена. Менеджер свяжется с вами в ближайшее время</h2>
                <Button btnType="MainButton"
                        clicked={props.modalClose}>Ок</Button>
            </Aux>
        )
    }
    if (!props.modalDataSend && !props.modalError) {
        // let valid = inputDataObj.name.valid && inputDataObj.phone.valid;
        form = (
            <form onSubmit={event => submitFormHandler(event)}>
                <fieldset>
                    <legend>
                        <h2>Оставьте заявку</h2>
                        <InputList />
                    </legend>
                    <Button btnType="MainButton">Отправить</Button> 
                </fieldset>
            </form>
        )
    }
    const submitFormHandler = event => {
        const valid = inputContext.inputData.name.valid;
        const name = inputContext.inputData.name.value;
        const phone = inputContext.inputData.phone.value;
        event.preventDefault();
        if(valid) {
            fetch('https://cetus-media-b35fb.firebaseio.com/customers.json', {
                method: 'POST',
                body: JSON.stringify({ name: name, phone: phone}),
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                return response.json();
            }).then(responseData => {
                props.modalContentSend(name);
            }).catch(error => {
                props.modalErrorHandler(error.toString());
            })
        }
    }

    return (
        <Aux> 
             {form}
        </Aux>
    )
}

export default ModalForm;