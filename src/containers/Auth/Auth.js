import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import BreadCrumbs from '../../components/Navigation/BreadCrumbs/BreadCrumbs';
import Section from '../../components/Section/Section';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';

import classes from './Auth.css';
import { authData } from './authData/authData';
import { createElementsArray } from '../../shared/utility.js';
import * as actions from '../../store/actions/index';
import { breadCrumbsData } from '../../components/Navigation/BreadCrumbs/breadCrumbsData/breadCrumbsData';
import { useInputChangeHandler } from '../../hooks/hooks';
import { useInputFabric } from '../../hooks/hooks';

const Auth = props => {

    const { inputChangeHandler, inputData } = useInputChangeHandler(authData);
    const [isSignUp, setIsSignUp] = useState(true);
    const formElementsArray = createElementsArray(inputData);
    const { list } = useInputFabric(formElementsArray, inputChangeHandler);
    const crumbs = breadCrumbsData.authCrumb;

    const authSubmitHandler = (event) => {
        event.preventDefault();
        props.onAuth(inputData.email.value, inputData.password.value, isSignUp)
    }
    
    const switchAuthHandler = () => {
        setIsSignUp(!isSignUp)
    }
    
    return (
        <Section sectionType='Auth'>
            <BreadCrumbs crumbs={crumbs} />
            {props.isAuth ?  <Redirect to="/" /> : null}
            <h1> {isSignUp ? "Регистрация" : "Вход"} </h1> 
            <form onSubmit={authSubmitHandler}
                  className={classes.AuthForm}>
                <h3>Пожалуйста, заполните форму</h3>
                {list}
                <Button btnType="MainButton">
                    {!isSignUp && !props.loading ? 'Войти' : 'Зарегистрироваться'}</Button>
                <span onClick={switchAuthHandler}
                      className={classes.SwitchSignIn}>
                      {isSignUp ? 'Вход' : 'Регистрация'}</span>
            </form>
            {props.loading ? <Spinner /> : null}
            {props.error ? <ErrorMessage errorMessage={props.error}/> : null}
        </Section>
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

Auth.propTypes = {
    onAuth:  PropTypes.func,
    loading: PropTypes.bool,
    isAuth:  PropTypes.bool,
    error:   PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.bool
    ])
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)