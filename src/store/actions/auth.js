import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken, userId) => {
    console.log(idToken)
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId
    };
};

export const authError = (error) => {
    return {
        type: actionTypes.AUTH_ERROR,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    };
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());

        let url = isSignUp ? 
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCdNuG1zpK5PHbd45tAlMk8kBoP_p7B3hM'
        :
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCdNuG1zpK5PHbd45tAlMk8kBoP_p7B3hM'
        
        fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                }),
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                if(!response.ok) { throw response }
                return response.json();
            }).then(responseData => {
                dispatch(authSuccess(responseData.idToken, responseData.localId));
                dispatch(checkAuthTimeout(responseData.expiresIn))
            }).catch(error => {
                error.json().then(error => {
                    dispatch(authError(error.error.message))
                })
            })
    }
}