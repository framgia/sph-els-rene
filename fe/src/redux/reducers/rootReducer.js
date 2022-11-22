import { combineReducers } from "redux";
import categoriesReducers from "./categoriesReducers";
import usersReducers from "./usersReducers";
import wordsReducers from "./wordsReducers";

const rootReducer = combineReducers({
  categories: categoriesReducers,
  words: wordsReducers,
  users: usersReducers,
});

export default rootReducer;
