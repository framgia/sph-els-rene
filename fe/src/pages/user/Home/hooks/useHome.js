/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneAction } from "../../../../redux/actions/actions";
import * as actionType from "../../../../redux/actions/actionTypes";
import { getUserId } from "../../../../utils";

export const useHome = () => {
  const [userData, setUserData] = useState({
    name: "",
    avatar: "",
    learned_words: "",
    learned_categories: "",
  });

  const { user, learned, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneAction(`/api/users/${getUserId()}`, actionType.GET_USER));
  }, []);

  useEffect(() => {
    setUserData({
      name: user.first_name + " " + user.last_name,
      avatar: user.avatar,
      learned_words: learned.wordsCount,
      learned_categories: learned.categoriesCount,
    });
  }, [user, learned]);

  return { loading, userData };
};
