import { combineReducers } from "redux";
import activitiesReducers from "./activitesReducers";
import categoriesReducers from "./categoriesReducers";
import followersReducers from "./followersReducers";
import usersReducers from "./usersReducers";
import wordsReducers from "./wordsReducers";

const rootReducer = combineReducers({
  categories: categoriesReducers,
  words: wordsReducers,
  users: usersReducers,
  activities: activitiesReducers,
  followers: followersReducers,
});

export default rootReducer;
