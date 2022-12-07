import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneAction,
  updateAction,
} from "../../../../../redux/actions/actions";
import * as actionType from "../../../../../redux/actions/actionTypes";

export const useEditCategory = (lessonID) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const handleInput = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleGetCategory = (e) => {
    dispatch(getOneAction(`api/lessons/${lessonID}`, actionType.GET_CATEGORY));
  };

  const { category } = useSelector((state) => state.categories);

  useEffect(() => {
    if (category !== {}) {
      setData({ ...category });
    }
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = data;
    dispatch(
      updateAction(
        postData,
        `/api/lessons/${data.id}`,
        actionType.UPDATE_CATEGORIES,
        "api/lessons"
      )
    );
  };

  return {
    data,
    handleInput,
    handleGetCategory,
    handleSubmit,
  };
};
