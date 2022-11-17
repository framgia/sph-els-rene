import { combineReducers } from "redux";
import categoriesReducers from "./reducer";

const rootReducer = combineReducers({
  categories: categoriesReducers,
});

export default rootReducer;
