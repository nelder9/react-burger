import {
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
} from "../actions/profile";

const initialState = {
    error: null,
    loading: false,
    user: null,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                user: action.data.user,
                loading: false,
                error: null,
            };
        }
        case GET_USER_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }
        case UPDATE_USER_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                user: action.data.user,
                loading: false,
                error: null,
            };
        }
        case UPDATE_USER_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }
        default: {
            return state;
        }
    }
};
