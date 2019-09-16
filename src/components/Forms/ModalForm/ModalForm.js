import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Aux from '../../../hoc/_Aux/_Aux';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import Button from '../../UI/Button/Button';
import ModalInputList from '../../Input/ModalInputList/ModalInputList';
import * as actions from '../../../store/actions/index';

const ModalForm = props => {
    
    const submitFormHandler = event => {
        event.preventDefault()
        props.submitModalForm()
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
    modalClose:   PropTypes.func,
    fetchSuccess: PropTypes.func,
    fetchError:   PropTypes.func,
    clearError:   PropTypes.func,
    valid:        PropTypes.bool,
    success:      PropTypes.bool,
    name:         PropTypes.string,
    error: PropTypes.oneOfType([
                  PropTypes.bool,
                  PropTypes.string
    ])
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);