import { GET_ORDER } from '../actions';

const initialState = {
    orderNumber: null
  };

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER: {
            return { ...state, orderNumber: action.response };
        }
        default: {
            return state;
        }
    }
};