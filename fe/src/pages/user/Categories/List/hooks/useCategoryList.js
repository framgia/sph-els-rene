/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllAction } from "../../../../../redux/actions/actions";
import * as actionType from "../../../../../redux/actions/actionTypes";

export const useCategoryList = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { category, categories } = useSelector((state) => state.categories);
  const [done, setDone] = useState(true);

  useEffect(() => {
    dispatch(getAllAction(`api/lessons/${params.id}`, actionType.GET_CATEGORY));
    dispatch(
      getAllAction("api/user_available_lesson", actionType.GET_CATEGORIES)
    );
  }, []);

  useEffect(() => {
    const cat = categories?.find((cat) => cat.id === parseInt(params.id));

    if (cat) {
      setDone(false);
    }
  }, [categories]);

  return { category, done };
};
