import { combineReducers } from "redux";
import { burgerReducer } from "./burger";
import { orderReducer } from "./order";

export const rootReducer = combineReducers({
  burger: burgerReducer,
  order: orderReducer
});