/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAction,
  getAllAction,
} from "../../../../../redux/actions/actions";
import * as actionType from "../../../../../redux/actions/actionTypes";

export const useListWord = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const { words, loading } = useSelector((state) => state.words);

  useEffect(() => {
    dispatch(getAllAction("api/words", actionType.GET_WORDS));
  }, []);

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"`)) {
      dispatch(
        deleteAction(
          `/api/words/${id}`,
          actionType.DELETE_WORDS,
          "/api/words",
          actionType.GET_WORDS
        )
      );
    }
  };

  return { words, loading, search, setSearch, handleDelete };
};
