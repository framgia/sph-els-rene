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
