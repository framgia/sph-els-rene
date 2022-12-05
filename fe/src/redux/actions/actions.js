import axios from "axios";
import { alertSuccess, alertWarning, alertError } from "../../utils";

export const getAllAction = (myURL, actionType) => async (dispatch) => {
  await axios
    .get(myURL)
    .then((res) => {
      dispatch({ type: actionType, res });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getOneAction = (myURL, actionType) => async (dispatch) => {
  await axios
    .get(myURL)
    .then((res) => {
      dispatch({ type: actionType, res });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addAction =
  (
    data,
    myURL,
    actionType,
    reRedenderURL = null,
    reRedenderDispatchType = actionType
  ) =>
  async (dispatch) => {
    await axios
      .post(myURL, data)
      .then((res) => {
        alertSuccess(res.data.message);
        dispatch({ type: actionType, res });
        if (reRedenderURL !== null) {
          if (actionType === reRedenderDispatchType) {
            dispatch(getAllAction(reRedenderURL, reRedenderDispatchType));
          } else {
            dispatch(getOneAction(reRedenderURL, reRedenderDispatchType));
          }
        }
      })
      .catch((err) => {
        console.log(err);
        Object.keys(err.response.data.errors).map((key, index) =>
          alertError(err.response.data.errors[key][0])
        );
        alertError("Add Action Aborting . . .");
      });
  };

export const updateAction =
  (
    data,
    myURL,
    actionType,
    reRedenderURL = null,
    reRedenderDispatchType = actionType
  ) =>
  async (dispatch) => {
    await axios
      .put(myURL, data)
      .then((res) => {
        alertWarning(res.data.message);
        dispatch({ type: actionType, res });
        if (reRedenderURL !== null) {
          if (actionType === reRedenderDispatchType) {
            dispatch(getAllAction(reRedenderURL, reRedenderDispatchType));
          } else {
            dispatch(getOneAction(reRedenderURL, reRedenderDispatchType));
          }
        }
      })
      .catch((err) => {
        console.log(err);
        Object.keys(err.response.data.errors).map((key, index) =>
          alertError(err.response.data.errors[key][0])
        );
      });
  };

export const deleteAction =
  (
    myURL,
    actionType,
    reRedenderURL = null,
    reRedenderDispatchType = actionType
  ) =>
  async (dispatch) => {
    await axios
      .delete(myURL)
      .then((res) => {
        alertError(res.data.message);
        dispatch({ type: actionType, res });
        if (reRedenderURL !== null) {
          dispatch(getAllAction(reRedenderURL, reRedenderDispatchType));
        }
      })
      .catch((err) => {
        console.log(err);
        Object.keys(err.response.data.errors).map((key, index) =>
          alertError(err.response.data.errors[key][0])
        );
      });
  };
