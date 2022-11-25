import * as types from "../actions/actionTypes";
const initialState = {
  followers: [],
  following_arr: [],
  loading: true,
};

const followersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FOLLOWERS:
      return {
        ...state,
        followers: action.res.data.follow,
        following_arr: action.res.data.following_arr,
        loading: false,
      };
    case types.DELETE_FOLLOWERS:
    case types.ADD_FOLLOWERS:
    default:
      return state;
  }
};

export default followersReducers;
