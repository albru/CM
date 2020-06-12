import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    userId: userId,
  };
};

export const authError = (error) => {
  return {
    type: actionTypes.AUTH_ERROR,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const tryAuth = () => {
  return {
    type: actionTypes.AUTH_TRY_AUTOLOGIN,
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    let url = isSignUp ? action1 : action2;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((responseData) => {
        const expirationDate = new Date(
          new Date().getTime() + responseData.expiresIn * 1000
        );
        localStorage.setItem("token", responseData.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", responseData.localId);
        dispatch(authSuccess(responseData.idToken, responseData.localId));
        dispatch(checkAuthTimeout(responseData.expiresIn));
      })
      .catch((error) => {
        console.log(error.toString());
        dispatch(authError(error.toString()));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    dispatch(tryAuth());
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
