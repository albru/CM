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

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        fetch('https://cetus-media-b35fb.firebaseio.com/orders.json', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(responseData => {
            console.log(responseData)
            dispatch(fetchOrdersSuccess(responseData))
        }).catch(error => {
            dispatch(fetchOrdersError(error))
        })
    };
};