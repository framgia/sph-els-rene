/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAction,
  getAllAction,
} from "../../../../../redux/actions/actions";
import * as actionType from "../../../../../redux/actions/actionTypes";

export const useListCategory = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllAction("api/lessons", actionType.GET_CATEGORIES));
  }, []);

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"`)) {
      dispatch(
        deleteAction(
          `/api/lessons/${id}`,
          actionType.DELETE_CATEGORIES,
          "/api/lessons",
          actionType.GET_CATEGORIES
        )
      );
    }
  };

  return {
    categories,
    search,
    setSearch,
    handleDelete,
  };
};
