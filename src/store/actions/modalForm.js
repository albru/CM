import * as actionTypes from './actionTypes';

export const fetchModalSuccess = () => {
    return {
        type: actionTypes.MODAL_FETCH_SUCCESS,
    };
};

export const fetchModalError = (error) => {
    return {
        type: actionTypes.MODAL_FETCH_ERROR,
        error: error
    };
};
export const fetchModalStart = () => {
    return {
        type: actionTypes.MODAL_FETCH_START
    };
};

export const modalClose = () => {
    return {
        type: actionTypes.MODAL_CLOSE
    }
}

export const modalToggle = () => {
    return {
        type: actionTypes.MODAL_TOGGLE
    }
}

export const clearModalError = () => {
    return {
        type: actionTypes.MODAL_FETCH_CLEAR_ERROR
    }
}

export const fetchUserData = (data) => {
    const valid = data.name.valid && data.phone.valid
    return dispatch => {
        dispatch(fetchModalStart());
        if (valid) {
            fetch('https://cetus-media-b35fb.firebaseio.com/customers.jsn', {
                method: 'POST',
                body: JSON.stringify({ name: data.name.value, phone: data.phone.value }),
                headers: { 'Content-Type': 'application/json' }
            }).then(response => {
                if (!response.ok) { throw response }
                return response.json();
            }).then(responseData => {
                dispatch(fetchModalSuccess())
            }).catch(error => {
                dispatch(fetchModalError(error.toString()))
            })
        }
    }
}