import * as types from "./actionTypes";
const categoriesReducers = (state = [], action) => {
  switch (action.type) {
    case types.GET_CATEGORIES:
      return [...state, action.res.data.lessons];
    default:
      return state;
  }
};

export default categoriesReducers;