import { combineReducers } from "redux";
import categoriesReducers from "./categoriesReducers";

const rootReducer = combineReducers({
  categories: categoriesReducers,
});

export default rootReducer;
