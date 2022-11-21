import { combineReducers } from "redux";
import categoriesReducers from "./categoriesReducers";
import wordsReducers from "./wordsReducers";

const rootReducer = combineReducers({
  categories: categoriesReducers,
  words: wordsReducers,
});

export default rootReducer;
