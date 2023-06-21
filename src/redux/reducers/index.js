import handleCart from "./handleCart";
import { combineReducers } from "redux";
import { usersReducer } from "./users"

const rootReducers = combineReducers({
  handleCart, users: usersReducer
});
export default rootReducers;
