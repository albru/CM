import React, { useState, useContext } from 'react';
import Aux from '../../../hoc/_Aux/_Aux';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import Button from '../../UI/Button/Button';
import ModalInputList from '../../Input/ModalInputList/ModalInputList';
import { InputContext } from '../../../context/input-context.js';
import { ModalContext } from '../../../context/modal-context';

const ModalForm = props => {
    const [fetchResult, setFetchResult] = useState({
        error:null, 
        success: null, 
        username: ''
    });

    const inputContext = useContext(InputContext).modalInputData;
    const modalContext = useContext(ModalContext);
    
    const submitFormHandler = event => {
        const valid = inputContext.name.valid && inputContext.phone.valid;
        const name = inputContext.name.value;
        const phone = inputContext.phone.value;
        event.preventDefault();
        if(valid) {
            fetch('https://cetus-media-b35fb.firebaseio.com/customers.json', {
                method: 'POST',
                body: JSON.stringify({ name: name, phone: phone}),
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                return response.json();
            }).then(responseData => {
                setFetchResult({
                    ...fetchResult,
                    success: true,
                    username: name
                });
            }).catch(error => {
                setFetchResult({
                    ...fetchResult,
                    error: error.toString()
                });
            })
        }
    }


    let form = (
        <form onSubmit={event => submitFormHandler(event)}>
            <h2>Оставьте заявку</h2>
            <ModalInputList />
            <Button btnType="MainButton">Отправить</Button> 
        </form>
    );

    if(fetchResult.error) {
        form = (
            <ErrorMessage errorMessage={fetchResult.errorMsg}
               btnClick={modalContext.close} />
        )
    }
    if(fetchResult.success) {
        form = (
            <Aux>
                <h2>{fetchResult.username} ваша заявка отправлена. Менеджер свяжется с вами в ближайшее время</h2>
                <Button btnType="MainButton"
                        clicked={modalContext.close}>Ок</Button>
            </Aux>
        )
    }

    return (
        <Aux> 
             {form}
        </Aux>
    )
}

export default ModalForm;