import { combineReducers } from "redux";
import activitiesReducers from "./activitesReducers";
import categoriesReducers from "./categoriesReducers";
import usersReducers from "./usersReducers";
import wordsReducers from "./wordsReducers";

const rootReducer = combineReducers({
  categories: categoriesReducers,
  words: wordsReducers,
  users: usersReducers,
  activities: activitiesReducers,
});

export default rootReducer;
