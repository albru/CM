import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Button from '../../UI/Button/Button';
import OrderInputList from '../../Input/OrderInputList/OrderInputList';
import classes from './OrderForm.css';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import Aux from '../../../hoc/_Aux/_Aux';

const OrderForm = props => {
    const submitFormHandler = event => {
        event.preventDefault();
        fetch('https://cetus-media-b35fb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify( props.orderData ),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(responseData => {
            props.fetchSuccess()
        }).catch(error => {
            props.fetchError(error.toString())
        })
    }
    
    // let spinner = fetchResult.loading ? <Spinner /> : null;
    const succesConfirmHandler = () => {
        props.history.push('/');
        props.clearSuccess();
    }


    let form = (
        <form className={classes.OrderForm} onSubmit={(event) => submitFormHandler(event)}>
            <OrderInputList />
            <Button btnType="MainButton">Готово</Button> 
            {/* {spinner} */}
        </form>
    )

    if(props.error) {
        form = (
            <ErrorMessage errorMessage={props.error} btnClick={props.clearError}/>
        )
    }

    if(props.success) {
        form = (
            <Aux>
                <h2>Благодарим за заказ! Информацию о своих заказах вы сможете найти в личном кабинете</h2>
                <Button btnType="MainButton" clicked={succesConfirmHandler}>Ок</Button>
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
        success: state.orderForm.fetchResult.success,
        error: state.orderForm.fetchResult.error,
        orderData: state.orderForm.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSuccess: () => dispatch({ type: 'ORDER_FORM_SUCCESS' }),
        fetchError: (error) => dispatch({ type: 'ORDER_FORM_ERROR', error: error }),
        clearError: () => dispatch({ type: 'ORDER_CLEAR_FETCH_ERROR' }),
        clearSuccess: () => dispatch({ type: 'ORDER_CLEAR_FETCH_SUCCESS'})
    }
}

OrderForm.propTypes = {
    success: PropTypes.bool,
    error:   PropTypes.oneOfType([
             PropTypes.bool,
             PropTypes.string
    ]),
    orderData:    PropTypes.object,
    fetchSuccess: PropTypes.func,
    fetchError:   PropTypes.func,
    clearError:   PropTypes.func,
    clearSuccess: PropTypes.func
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderForm));