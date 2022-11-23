import * as types from "../actions/actionTypes";
const initialState = {
  followers: [],
  loading: true,
};

const followersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FOLLOWERS:
      return {
        ...state,
        followers: action.res.data.follow,
        loading: false,
      };
    default:
      return state;
  }
};

export default followersReducers;
