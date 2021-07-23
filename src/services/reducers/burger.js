import { nanoid } from 'nanoid';

import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAILED,
    DELETE_ITEM,
    CLOSE_MODAL,
    RESTORE_CONSTRUCTOR,
    OPEN_MODAL,
    ADD_ITEM,
    SORT_ITEM,
    INCREASE_COUNTER
} from '../actions';

const initialState = {
    items: [],
    itemsRequest: false,
    itemsFailed: false,
    constructorItems: [],
    modalItem: null,
    isModalOpen: false,
    modal: null
};

export const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS_REQUEST: {
            return {
                ...state,
                itemsRequest: true
            };
        }
        case GET_ITEMS_SUCCESS: {
            return { ...state, itemsFailed: false, items: action.items, itemsRequest: false };
        }
        case GET_ITEMS_FAILED: {
            return { ...state, itemsFailed: true, itemsRequest: false };
        }
        case DELETE_ITEM: {
            const indexItem = state.items.findIndex(item => item._id === action.idItem);
            if (state.items[indexItem].count > 0) {
                state.items[indexItem].count -= 1
            } else {
                delete state.items[indexItem].count;
            }
            return { ...state, items: [...state.items], constructorItems: [...state.constructorItems.filter(item => item.uid !== action.uid)] };
        }
        case CLOSE_MODAL: {
            return { ...state, modalItem: null, isModalOpen: false, modal: null };
        }
        case OPEN_MODAL: {
            return { ...state, modalItem: action.item, isModalOpen: true, modal: action.modal, orderNumber: action.response };
        }
        case ADD_ITEM: {
            const ingredient = state.items.find(item => item._id === action.idItem);
            if (ingredient.type === 'bun') {
                const actualBunIndex = state.constructorItems.findIndex((item) => item.type === "bun");
                if (actualBunIndex > -1) {
                    state.constructorItems.splice(actualBunIndex, 1, ingredient)
                    return state;
                }
            }
            const newIngredient = { ...ingredient };
            newIngredient.uid = nanoid();
            return {
                ...state,
                constructorItems: [...state.constructorItems, newIngredient]
            };
        }
        case SORT_ITEM: {
            return {
                ...state,
                constructorItems: [...action.item]
            };
        }
        case INCREASE_COUNTER: {
            const ingredient = state.items.find(item => item._id === action.idItem);
            if (ingredient.type === 'bun') {
                return state;
            }
            const indexItem = state.items.findIndex(item => item._id === action.idItem);
            if (state.items[indexItem].count) {
                state.items[indexItem].count += 1
            } else {
                state.items[indexItem].count = 1;
            }
            return { ...state, items: [...state.items] };
        }
        case RESTORE_CONSTRUCTOR: {
            const ingredients = state.items.filter(item => item.count);
            ingredients.forEach(el => el.count = 0);
            return { ...state, constructorItems: [] }
        }
        default: {
            return state;
        }
    }
};

