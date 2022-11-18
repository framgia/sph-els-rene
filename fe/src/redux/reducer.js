import * as types from "./actionTypes";
const initialState = {
  categories: [],
  category: {},
  loading: true,
};

const categoriesReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES:
      return { ...state, categories: action.res.data.lessons, loading: false };
    case types.GET_CATEGORY:
      return { ...state, category: action.res.data.lesson, loading: false };
    case types.CREATE_CATEGORIES:
    case types.UPDATE_CATEGORIES:
      return { ...state, categories: action.res.data.lessons, loading: false };

    default:
      return state;
  }
};

export default categoriesReducers;
