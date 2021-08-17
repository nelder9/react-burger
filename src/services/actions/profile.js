import { profileService } from "../profile";
import { authActions } from "./auth";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

const getUser = () => {
    const request = () => ({ type: GET_USER_REQUEST });
    const success = (data) => ({ type: GET_USER_SUCCESS, data });
    const failure = (error) => ({ type: GET_USER_FAILURE, error });

    return async (dispatch) => {
        dispatch(request());

        try {
            const data = await profileService.getUser();
            dispatch(success(data));
        } catch (err) {
            const refreshToken = localStorage.getItem("refreshToken");

            if (err.message === "jwt expired" && refreshToken) {
                dispatch(authActions.updateToken(refreshToken));
                getUser();

                return;
            }

            dispatch(failure(err));
        }
    };
};

const updateUser = (form) => {
    const request = () => ({ type: UPDATE_USER_REQUEST });
    const success = (data) => ({ type: UPDATE_USER_SUCCESS, data });
    const failure = (error) => ({ type: UPDATE_USER_FAILURE, error });

    return async (dispatch) => {
        dispatch(request());

        try {
            const data = await profileService.updateUser(form);
            dispatch(success(data));
        } catch (err) {
            const refreshToken = localStorage.getItem("refreshToken");

            if (err.message === "jwt expired" && refreshToken) {
                dispatch(authActions.updateToken(refreshToken));
                updateUser();

                return;
            }

            dispatch(failure(err));
        }
    };
};

export const profileActions = {
    getUser,
    updateUser,
};
