import * as actionTypes from './actionTypes';

export const fetchOrderSuccess = (data) => {
    return {
        type: actionTypes.ORDER_FETCH_POST_SUCCESS,
        data: data
    }
}

export const fetchOrderError = (error) => {
    return {
        type: actionTypes.ORDER_FETCH_POST_ERROR,
        error: error
    }
}

export const fetchOrderStart = () => {
    return {
        type: actionTypes.ORDER_FETCH_POST_START
    }
}

export const fetchOrderClear = () => {
    return {
        type: actionTypes.ORDER_FETCH_POST_CLEAR
    }
}

export const sendOrder = ( orderData, token ) => {
    return dispatch => {
        dispatch(fetchOrderStart())
        fetch('https://cetus-media-b35fb.firebaseio.com/orders.json?auth=' + token, {
            method: 'POST',
            body: JSON.stringify( orderData ),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(responseData => {
            dispatch(fetchOrderSuccess(orderData))
        }).catch(error => {
            dispatch(fetchOrderError(error.toString()))
        })
    }
};