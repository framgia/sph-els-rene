import * as types from "../actions/actionTypes";
const initialState = {
  user_words: [],
  loading: true,
};

const userwordReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_WORDS:
    case types.ADD_USER_WORD:
      return { ...state, user_words: action.res.data, loading: false };
    default:
      return state;
  }
};

export default userwordReducers;
