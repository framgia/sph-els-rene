import * as types from "../actions/actionTypes";
const initialState = {
  words: [],
  word: {},
  words_with_choices: [],
  loading: true,
};

const wordsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WORDS:
    case types.GET_WORDS_AND_CHOICES:
    case types.ADD_WORDS:
    case types.UPDATE_WORDS:
      return {
        ...state,
        WORDS: action.res.data.words,
        words_with_choices: action.res.data.words,
        loading: false,
      };
    case types.GET_WORD:
      return { ...state, word: action.res.data.word, loading: false };
    case types.DELETE_WORDS:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default wordsReducers;
