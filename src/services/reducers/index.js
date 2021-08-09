import { combineReducers } from "redux";
import { burgerReducer } from "./burger";
import { orderReducer } from "./order";
import { authReducer } from "./auth";
import { profileReducer } from "./profile";

export const rootReducer = combineReducers({
  burger: burgerReducer,
  order: orderReducer,
  auth: authReducer,
  profile: profileReducer
});