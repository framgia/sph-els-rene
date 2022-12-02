import * as types from "../actions/actionTypes";
const initialState = {
  activities: [],
  activity: {},
  followers: [],
  loading: true,
};

const activitiesReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ACTIVITIES:
      return {
        ...state,
        activities: action.res.data.activities,
        loading: false,
      };
    case types.GET_ACTIVITY:
      return {
        ...state,
        activity: action.res.data.activity,
        loading: false,
      };
    case types.GET_ACTIVITY_FOLLOW:
      return {
        ...state,
        followers: action.res.data.follow,
        loading: false,
      };
    default:
      return state;
  }
};

export default activitiesReducers;
