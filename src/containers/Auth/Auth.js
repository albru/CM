import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authData } from './authData/authData';
import Input from '../../components/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.css';
import { updateObject } from '../../shared/utility.js';
import { checkValidity } from '../../shared/utility.js';
import * as actions from '../../store/actions/index';


const Auth = props => {

    const [authInputData, setAuthInputData] = useState(authData);
    const [isSignUp, setIsSignUp] = useState(true);

    const inputChangeHandler = ((event, inputName) => {
        const updatedValue = updateObject(authInputData, {
            [inputName]: updateObject(authInputData[inputName], {
            value: event.target.value,
            valid: checkValidity(
                event.target.value,
                authInputData[inputName].validation
            ),
            touched: true
            })
        })
        setAuthInputData(updatedValue)
    })

    const authSubmitHandler = (event) => {
        event.preventDefault();
        props.onAuth(authInputData.email.value, authInputData.password.value, isSignUp)
    }

    const switchAuthHandler = () => {
        setIsSignUp(!isSignUp)
    }

    const formElementsArray = [];
    for (let key in authInputData) {
        formElementsArray.push({
            id: key,
            config: authInputData[key]
        })
    } 

    let formContent = formElementsArray.map(formElement => {
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
    });

    if(props.loading) {
        formContent = <Spinner />
    }

    let errorMessage = null;
    if(props.error) {
        errorMessage = (
            <p>{props.error}</p>
        )
    }

    let authRedirect = null;
    if (props.isAuth) {
        authRedirect = <Redirect to="/" />
    }
    
    return (
        <section className={classes.Auth}>
            {authRedirect}
            <h1> {isSignUp ? "Регистрация" : "Вход"} </h1> 
            <form onSubmit={authSubmitHandler}>
                {formContent}
                <Button btnType="Success">ВХОД</Button>
            </form>
            <Button btnType="MainButton"
                    clicked={switchAuthHandler}>переключатель</Button>
            {errorMessage}
        </section>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignUp ) => dispatch(actions.auth( email, password, isSignUp ))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);