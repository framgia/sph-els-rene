import * as types from "../actions/actionTypes";
const initialState = {
  followers: [],
  following_arr: [],
  follower_arr: [],
  logs_following: [],
  logs_learned: [],
  loading: true,
};

const followersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FOLLOWERS:
    case types.GET_FOLLOWER:
      return {
        ...state,
        followers: action.res.data.follow,
        following_arr: action.res.data.following,
        follower_arr: action.res.data.follower,
        logs_following: action.res.data.logs_following,
        logs_learned: action.res.data.logs_learned,
        loading: false,
      };
    case types.ADD_FOLLOWERS:
    case types.DELETE_FOLLOWERS:
    default:
      return state;
  }
};

export default followersReducers;
