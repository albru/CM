import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/_Aux/_Aux';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import Button from '../../UI/Button/Button';
import ModalInputList from '../../Input/ModalInputList/ModalInputList';

import * as actions from '../../../store/actions/index';
import { updateObject, checkValidity, createElementsArray } from '../../../shared/utility';
import { modalUserData } from './modalUserData/modalUserData';

const ModalForm = props => {

    const [modalInputData, setModalInputData] = useState(modalUserData);
    const formElementsArray = createElementsArray(modalUserData)
    
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
    })
    
    const submitFormHandler = event => {
        event.preventDefault()
        props.submitModalForm(modalInputData)
    }

    const confirmErrorHandler = () => {
        props.modalClose()
        props.clearError()
    }

    let form = (
        <form onSubmit={event => submitFormHandler(event)}>
            <h2>Оставьте заявку</h2>
            <ModalInputList inputChangeHandler={inputChangeHandler}
                            userData={formElementsArray}
            />
            <Button btnType="MainButton">Отправить</Button> 
        </form>
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
        error: state.modalForm.fetchResult.error,
        success: state.modalForm.fetchResult.success
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