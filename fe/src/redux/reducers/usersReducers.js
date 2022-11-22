import * as types from "../actions/actionTypes";
const initialState = {
  users: [],
  user: {},
  loading: true,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
    case types.ADD_USERS:
    case types.UPDATE_USERS:
      return { ...state, users: action.res.data.users, loading: false };
    case types.GET_USER:
      return { ...state, user: action.res.data.user, loading: false };
    case types.DELETE_USERS:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default usersReducers;
