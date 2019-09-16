import * as actionTypes from './actionTypes';

export const fetchModalSuccess = () => {
    return {
        type: actionTypes.ORDERS_FETCH_GET_SUCCESS,
    };
};

export const fetchModalError = (error) => {
    return {
        type: actionTypes.ORDERS_FETCH_GET_ERROR,
        error: error
    };
};
export const fetchModalStart = () => {
    return {
        type: actionTypes.ORDERS_FETCH_GET_ERROR
    };
};

export const modalClose = () => {
    return {
        type: actionTypes.MODAL_CLOSE
    }
}

export const clearModalError = () => {
    return {
        type: actionTypes.MODAL_FETCH_CLEAR_ERROR
    }
}

export const fetchUserData = (userDataIsValid, data) => {
    return dispatch => {
        dispatch(fetchModalStart());
        if(true) {
            console.log(data)
            fetch('https://cetus-media-b35fb.firebaseio.com/customers.json', {
                method: 'POST',
                body: JSON.stringify( data ),
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                if(!response.ok) { throw response }
                return response.json();
            }).then(responseData => {
                dispatch(fetchModalSuccess())
            }).catch(error => {
                dispatch(fetchModalError(error.statusText))
            })
        } 
    }
}