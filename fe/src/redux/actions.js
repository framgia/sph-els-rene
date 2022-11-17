import axios from "axios";
import * as types from "./actionTypes";

export const getAllAction = (myURL) => async (dispatch) => {
  await axios
    .get(myURL)
    .then((res) => {
      dispatch({ type: types.GET_CATEGORIES, res });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addAction = (data, myURL) => async (dispatch, getState) => {
  await axios
    .post(myURL, data)
    .then((res) => {
      dispatch({ type: types.CREATE_CATEGORIES, res });
      dispatch(getAllAction("/api/lessons"));
    })
    .catch((err) => {
      console.log(err);
    });
};
