import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken, userId) => {
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
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    console.log('!logout auth js 34')
    console.log(typeof(expirationTime))
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
                const expirationDate = new Date(new Date().getTime() + responseData.expiresIn * 1000)
                localStorage.setItem('token', responseData.idToken)
                localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('userId', responseData.localId)
                dispatch(authSuccess(responseData.idToken, responseData.localId));
                console.log(responseData.expiresIn, "POST LINE 68")
                dispatch(checkAuthTimeout(responseData.expiresIn));
            }).catch(error => {
                error.json().then(error => {
                    dispatch(authError(error.error.message))
                })
            })
    }
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                const userId = localStorage.getItem('userId')
                dispatch(authSuccess(token, userId))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};