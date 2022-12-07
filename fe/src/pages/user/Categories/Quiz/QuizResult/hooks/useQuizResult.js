/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneAction } from "../../../../../../redux/actions/actions";
import * as actionType from "../../../../../../redux/actions/actionTypes";

export const useQuizResult = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { score, result, category } = useSelector((state) => state.summary);

  useEffect(() => {
    dispatch(
      getOneAction(`api/user_words/${params.id}`, actionType.GET_SUMMARY)
    );
  }, []);

  return {
    score,
    result,
    category,
  };
};
