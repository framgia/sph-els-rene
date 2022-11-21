import * as types from "../actions/actionTypes";
const initialState = {
  words: [],
  word: {},
  loading: true,
};

const wordsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WORDS:
    case types.ADD_WORDS:
    case types.UPDATE_WORDS:
      return { ...state, WORDS: action.res.data.words, loading: false };
    case types.GET_WORD:
      return { ...state, category: action.res.data.word, loading: false };
    case types.DELETE_WORDS:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default wordsReducers;
