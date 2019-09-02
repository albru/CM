import React, { useState } from 'react';

import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes';
import { updateObject, checkValidity } from '../../shared/utility';
import classes from './Layout.css';
import Aux from '../_Aux/_Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';
import Modal from '../../components/UI/Modal/Modal';
import { inputData } from '../../components/UI/Input/inputDataObj/modalInputDataObj';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Layout = props => {
    const [ inputDataObj, setInputDataObj ] = useState(inputData);

    const inputChangeHandler = (event, inputName) => {
        const updatedValue = updateObject(inputDataObj, {
            [inputName]: updateObject(inputDataObj[inputName], {
            value: event.target.value,
            touched: true,
            valid: checkValidity(
                event.target.value, 
                inputDataObj[inputName].validation
                )
            })
        })
        setInputDataObj(updatedValue)
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        fetch('https://cetus-media-b35fb.firebaseio.com/customers.json', {
            method: 'POST',
            body: JSON.stringify({ name: inputDataObj.name.value, phone: inputDataObj.phone.value}),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(responseData => {
            props.modalContentSend(inputDataObj.name.value);
        }).catch(error => {
            props.modalErrorHandler(error.toString());
        })
    }

    const formElementsArray = [];
    for (let key in inputDataObj) {
        formElementsArray.push({
            id: key,
            config: inputDataObj[key]
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
                changed={event => inputChangeHandler(event, formElement.id)}
            />
        )
    })
    
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
        form =  (
            <form id="CustomerForm" onSubmit={(event) => submitFormHandler(event)}>
                <fieldset>
                    <legend>
                        <h2>Оставьте заявку</h2>
                    </legend>
                    {formContent}
                    <Button btnType="MainButton">Отправить</Button> 
                </fieldset>
            </form>
        )
    }
    

    return (
        <Aux>
            <Modal show={props.modalIsVis} 
                   close={props.modalClose}>
                {form}
            </Modal>
            <Toolbar sideDrawerToggle={props.sideDrawerToggleHandler}/>
            <SideDrawer 
                open={props.sidDrawerIsVisible}
                closed={props.sideDrawerCloseHandler}
                />
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer />
        </Aux>
    )
};

const mapStateToProps = state => {
    return {
        sidDrawerIsVisible: state.sideDrawer.sideDrawerIsVisible,
        modalIsVis: state.modal.modalIsVisible,
        modalDataSend: state.modal.modalDataSend,
        username: state.modal.username,
        modalError: state.modal.modalError,
        errorMsg: state.modal.errorMsg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sideDrawerToggleHandler: () => dispatch({type: actionTypes.SIDE_DRAWER_TOGGLE}),
        sideDrawerCloseHandler: () => dispatch({type: actionTypes.SIDE_DRAWER_CLOSE}),
        modalOpen: () => dispatch({type: actionTypes.MODAL_OPEN}),
        modalClose: () => dispatch({type: actionTypes.MODAL_CLOSE}),
        modalContentSend: (name) => dispatch({type: actionTypes.MODAL_CONTENT_SEND, username: name}),
        modalErrorHandler: (error) => dispatch({type: actionTypes.MODAL_ERROR, errorName: error})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);