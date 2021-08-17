import { authService } from "../auth";
import { setCookie } from "../utils";

export const SET_EMAIL_RESET = "SET_EMAIL_RESET";
export const SET_AUTHORIZATION = "SET_AUTHORIZATION";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const UPDATE_TOKEN_REQUEST = "UPDATE_TOKEN_REQUEST";
export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";
export const UPDATE_TOKEN_FAILURE = "UPDATE_TOKEN_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILURE = "FORGOT_PASSWORD_FAILURE";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";



const setEmailReset = (emailReset) => {
    return (dispatch) => {
        dispatch({
            type: SET_EMAIL_RESET,
            emailReset,
        });
    };
};

const login = (form) => {
    const request = (user) => ({ type: LOGIN_REQUEST, user });
    const success = (data) => ({ type: LOGIN_SUCCESS, data });
    const failure = (error) => ({ type: LOGIN_FAILURE, error });

    return async (dispatch) => {
        dispatch(request(form));

        try {
            const data = await authService.login(form);
            dispatch(success(data));
        } catch (err) {
            dispatch(failure(err));
        }
    };
};

const logout = (token) => {
    const request = () => ({ type: LOGOUT_REQUEST });
    const success = () => ({ type: LOGOUT_SUCCESS });
    const failure = (error) => ({ type: LOGOUT_FAILURE, error });
  
    return async (dispatch) => {
        
      dispatch(request());
  
      try {
        await authService.logout(token);
        dispatch(success());
      } catch (err) {
        dispatch(failure(err));
      }
    };
  };

const updateToken = (token) => {
    const request = () => ({ type: UPDATE_TOKEN_REQUEST });
    const success = (data) => ({ type: UPDATE_TOKEN_SUCCESS, data });
    const failure = (error) => ({ type: UPDATE_TOKEN_FAILURE, error });

    return async (dispatch) => {
        dispatch(request());

        try {
            const data = await authService.updateToken(token);
            dispatch(success(data));
        } catch (err) {
            dispatch(failure(err));
        }
    };
};

const register = (form) => {
    const request = (user) => ({ type: REGISTER_REQUEST, user });
    const success = (data) => ({ type: REGISTER_SUCCESS, data });
    const failure = (error) => ({ type: REGISTER_FAILURE, error });

    return async (dispatch) => {
        dispatch(request(form));

        try {
            const data = await authService.register(form);
            dispatch(success(data));
        } catch (err) {
            dispatch(failure(err));
        }
    };
};

const forgotPassword = (email) => {
    const request = () => ({ type: FORGOT_PASSWORD_REQUEST });
    const success = (data) => ({ type: FORGOT_PASSWORD_SUCCESS, data });
    const failure = (error) => ({ type: FORGOT_PASSWORD_FAILURE, error });

    return async (dispatch) => {
        dispatch(request(email));

        try {
            const data = await authService.forgotPassword(email);

            dispatch(success(data));
        } catch (err) {
            dispatch(failure(err));
        }
    };
};

const resetPassword = (form) => {
    const request = () => ({ type: RESET_PASSWORD_REQUEST });
    const success = (data) => ({ type: RESET_PASSWORD_SUCCESS, data });
    const failure = (error) => ({ type: RESET_PASSWORD_FAILURE, error });

    return async (dispatch) => {
        dispatch(request(form));

        try {
            const data = await authService.resetPassword(form);
            dispatch(success(data));
        } catch (err) {
            console.log(err)
            dispatch(failure(err));
        }
    };
};

const setAuthorization = ({ accessToken, refreshToken }) => {
    return (dispatch) => {
      setCookie("token", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
  
      dispatch({
        type: SET_AUTHORIZATION,
        accessToken,
        refreshToken,
      });
    };
  };

export const authActions = {
    setEmailReset,
    login,
    logout,
    updateToken,
    register,
    forgotPassword,
    resetPassword,
    setAuthorization
};