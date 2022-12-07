/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAction, getOneAction } from "../../../../redux/actions/actions";
import * as actionType from "../../../../redux/actions/actionTypes";
import { getUserId } from "../../../../utils";

export const useEditProfile = () => {
  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState({
    id: "",
    email: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    avatar: "",
  });

  const { users, loading } = useSelector((state) => state.users);

  const { logs_following, logs_learned } = useSelector(
    (state) => state.followers
  );

  useEffect(() => {
    dispatch(getOneAction(`/api/users/${getUserId()}`, actionType.GET_USER));
    dispatch(getAllAction("/api/users", actionType.GET_USERS));
    dispatch(
      getAllAction(
        `/api/activity_logs/${getUserId()}`,
        actionType.GET_FOLLOWERS
      )
    );
    dispatch(
      getAllAction(`/api/activity_logs/${getUserId()}`, actionType.GET_FOLLOWER)
    );
  }, []);

  useEffect(() => {
    const getUser = users?.find((user) => user.id === getUserId());
    setCurrentUser({ ...getUser });
  }, [users]);

  return { loading, currentUser, logs_following, logs_learned };
};
