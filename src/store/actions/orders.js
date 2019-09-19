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

export const fetchOrdersClear = () => {
    return {
        type: actionTypes.ORDERS_FETCH_GET_CLEAR
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        fetch('https://cetus-media-b35fb.firebaseio.com/orders.json' + queryParams, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            if(!response.ok) { throw response }
            return response.json();
        }).then(responseData => {
            dispatch(fetchOrdersSuccess(responseData))
        }).catch(error => {
            dispatch(fetchOrdersError(error.toString()))
        })
    };
};