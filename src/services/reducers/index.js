import { GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS, GET_ITEMS_FAILED, DELETE_ITEM, OPEN_MODAL, CLOSE_MODAL, ADD_ITEM, SORT_ITEM } from '../actions';

const initialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
  constructorItems: [],
  modalItem: null,
  isModalOpen: false,
  modal: null
};

export const rootReducer = (state = initialState, action) => {
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
      
      return { ...state, constructorItems: [...state.constructorItems.filter(item => item.uid !== action.uid)] };
    }
    case OPEN_MODAL: {
      return { ...state, modalItem: action.item, isModalOpen: true, modal: action.modal };
    }
    case CLOSE_MODAL: {
      return { ...state, modalItem: null, isModalOpen: false, modal: null };
    }

    case ADD_ITEM: {

      const ingredient = state.items.find(item => item._id === action.idItem);
      const newIngredient = { ...ingredient };
      newIngredient.uid = Math.random();
      
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


    default: {
      return state;
    }
  }
};