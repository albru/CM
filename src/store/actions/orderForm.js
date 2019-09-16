import * as actionTypes from './actionTypes';

// THIS PART FOR SEND ORDERS------------------------------------------------------------------

export const fetchOrderSuccess = () => {
    return {
        type: actionTypes.ORDER_FETCH_POST_SUCCESS
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

export const sendOrder = ( orderData ) => {
    return dispatch => {
        console.log(orderData, 'POST data')
        dispatch(fetchOrderStart())
        fetch('https://cetus-media-b35fb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify( orderData ),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(responseData => {
            console.log(responseData , 'POST res')
            dispatch(fetchOrderSuccess())
        }).catch(error => {
            console.log(error , 'POST err')
            dispatch(fetchOrderError(error.toString()))
        })
    }
};

// THIS PART FOR GET ORDERS-----------------------------------------------------------------------

export const fetchOrdersSuccess = () => {
    return {
        type: actionTypes.ORDERS_FETCH_GET_SUCCESS
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
            console.log(responseData, 'orders')
        }).catch(error => {
            dispatch(fetchOrdersError(error))
        })
    };
};