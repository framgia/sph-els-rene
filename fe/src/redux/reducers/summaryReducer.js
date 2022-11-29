import * as types from "../actions/actionTypes";
const initialState = {
  score: "",
  category: {},
  result: [],
};

const summaryReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SUMMARY:
      return {
        ...state,
        score: action.res.data.score,
        category: action.res.data.lesson,
        result: action.res.data.summary,
      };
    default:
      return state;
  }
};

export default summaryReducers;
