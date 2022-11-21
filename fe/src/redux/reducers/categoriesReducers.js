import * as types from "../actions/actionTypes";
const initialState = {
  categories: [],
  category: {},
  loading: true,
};

const categoriesReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES:
    case types.ADD_CATEGORIES:
    case types.UPDATE_CATEGORIES:
      return { ...state, categories: action.res.data.lessons, loading: false };
    case types.GET_CATEGORY:
      return { ...state, category: action.res.data.lesson, loading: false };
    case types.DELETE_CATEGORIES:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default categoriesReducers;
