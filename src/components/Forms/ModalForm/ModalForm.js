import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/_Aux/_Aux';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import Button from '../../UI/Button/Button';
import ModalInputList from '../../Input/ModalInputList/ModalInputList';
import Spinner from '../../UI/Spinner/Spinner';

import * as actions from '../../../store/actions/index';
import { createElementsArray } from '../../../shared/utility';
import { modalUserData } from './modalUserData/modalUserData';
import { useInputChangeHandler } from '../../../hooks/hooks.js';

const ModalForm = props => {

    const { inputChangeHandler, inputData } = useInputChangeHandler(modalUserData);
    const formElementsArray = createElementsArray(inputData);
    const spinner = <Spinner />

    const submitFormHandler = event => {
        event.preventDefault()
        props.submitModalForm(inputData)
    }

    const confirmErrorHandler = () => {
        props.modalClose()
        props.clearError()
    }

    let form = (
        <Aux>
            <form onSubmit={event => submitFormHandler(event)}>
                <h2>Оставьте заявку</h2>
                <ModalInputList inputChangeHandler={inputChangeHandler}
                                userData={formElementsArray}
                />
                <Button btnType="MainButton">Отправить</Button> 
                </form>
            {props.loading ? spinner : null}
        </Aux>
    );

    if(props.error) {
        form = (
            <ErrorMessage errorMessage={props.error}
                          btnClick={confirmErrorHandler} />
        )
    }
    if(props.success) {
        form = (
            <Aux>
                <h3>{props.name} Спасибо! Ваша заявка отправлена. Менеджер свяжется с вами в ближайшее время</h3>
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
        error: state.modalForm.fetchResult.error,
        success: state.modalForm.fetchResult.success,
        loading: state.modalForm.fetchResult.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        modalClose: () => dispatch(actions.modalClose()),
        submitModalForm: (data) => dispatch(actions.fetchUserData(data)),
        clearError: () => dispatch(actions.clearModalError())
    }
}

ModalForm.propTypes = {
    submitModalForm: PropTypes.func,
    modalClose:      PropTypes.func,
    clearError:      PropTypes.func,
    success:         PropTypes.bool,
    name:            PropTypes.string,
    error:           PropTypes.oneOfType([
                            PropTypes.bool,
                            PropTypes.string
    ])
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);