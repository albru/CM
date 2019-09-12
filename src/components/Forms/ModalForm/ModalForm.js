import React from 'react';
import { connect } from 'react-redux';
import Aux from '../../../hoc/_Aux/_Aux';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import Button from '../../UI/Button/Button';
import ModalInputList from '../../Input/ModalInputList/ModalInputList';

const ModalForm = props => {
    
    const submitFormHandler = event => {
        event.preventDefault();
        console.log(props.valid)
        if(props.valid) {
            fetch('https://cetus-media-b35fb.firebaseio.com/customers.json', {
                method: 'POST',
                body: JSON.stringify({ name: props.name, phone: props.phone}),
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                return response.json();
            }).then(responseData => {
                props.fetchSuccess()
            }).catch(error => {
                props.fetchError(error.toString())
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

    if(props.error) {
        form = (
            <ErrorMessage errorMessage={props.error}
                          btnClick={props.modalClose} />
        )
    }
    if(props.success) {
        form = (
            <Aux>
                <h2>{props.name} ваша заявка отправлена. Менеджер свяжется с вами в ближайшее время</h2>
                <Button btnType="MainButton"
                        clicked={props.modalClose}>Ок</Button>
            </Aux>
        )
    }

    return (
        <Aux> 
             {form}
        </Aux>
    )
}

const mapStateToProps = state => {
    return {
        valid: state.modalForm.data.phone.valid && state.modalForm.data.name.valid,
        error: state.modalForm.fetchResult.error,
        success: state.modalForm.fetchResult.success,
        name: state.modalForm.data.name.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        modalClose: () => dispatch({type: 'MODAL_CLOSE'}),
        fetchSuccess: () => dispatch({type: 'MODAL_FETCH_SUCCESS'}),
        fetchError: (error) => dispatch({type: 'MODAL_FETCH_ERROR', error: error}),
        clearError: () => dispatch({type: 'MODAL_CLEAR_FETCH_ERROR'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);