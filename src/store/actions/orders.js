import * as actionTypes from './actionTypes';

export const fetchOrdersSuccess = (data) => {
    return {
        type: actionTypes.ORDERS_FETCH_GET_SUCCESS,
        data: data
    };
};

export const fetchOrdersError = (error) => {
    return {
        type: actionTypes.ORDERS_FETCH_GET_ERROR,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.ORDERS_FETCH_GET_START
    };
};

export const fetchOrders = (token) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        fetch('https://cetus-media-b35fb.firebaseio.com/orders.json?auth=' + token, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(responseData => {
            dispatch(fetchOrdersSuccess(responseData))
        }).catch(error => {
            dispatch(fetchOrdersError(error))
        })
    };
};