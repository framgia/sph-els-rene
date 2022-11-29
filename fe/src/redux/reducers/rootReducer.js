import { combineReducers } from "redux";
import activitiesReducers from "./activitesReducers";
import categoriesReducers from "./categoriesReducers";
import followersReducers from "./followersReducers";
import summaryReducers from "./summaryReducer";
import usersReducers from "./usersReducers";
import userwordReducers from "./userwordReducer";
import wordsReducers from "./wordsReducers";

const rootReducer = combineReducers({
  categories: categoriesReducers,
  words: wordsReducers,
  users: usersReducers,
  activities: activitiesReducers,
  followers: followersReducers,
  userwordReducer: userwordReducers,
  summary: summaryReducers,
});

export default rootReducer;
