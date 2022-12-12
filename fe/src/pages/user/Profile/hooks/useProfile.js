/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addAction,
  deleteAction,
  getAllAction,
  getOneAction,
} from "../../../../redux/actions/actions";
import * as actionType from "../../../../redux/actions/actionTypes";
import { getUserId } from "../../../../utils";

export const useProfile = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState({
    id: "",
    email: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    avatar: "",
  });

  const [isFollowed, setIsFollowed] = useState();

  const { users, loading, learned } = useSelector((state) => state.users);

  const { follower_arr, logs_following, logs_learned } = useSelector(
    (state) => state.followers
  );

  useEffect(() => {
    dispatch(getAllAction("/api/users", actionType.GET_USERS));
    dispatch(
      getAllAction(
        `/api/activity_logs/${getUserId()}`,
        actionType.GET_FOLLOWERS
      )
    );

    dispatch(
      getAllAction(`/api/activity_logs/${params.id}`, actionType.GET_FOLLOWER)
    );

    dispatch(getOneAction(`/api/users/${params.id}`, actionType.GET_USER));
  }, []);

  useEffect(() => {
    const getUser = users?.find((user) => user.id === parseInt(params.id));
    setCurrentUser({ ...getUser });
  }, [users]);

  useEffect(() => {
    const getFollower = follower_arr?.find(
      (following) => following.following_id === parseInt(params.id)
    );

    if (getFollower?.id) {
      setIsFollowed(false);
    } else {
      setIsFollowed(true);
    }
  }, [follower_arr]);

  const handleToggleFollow = (e) => {
    setIsFollowed(!isFollowed);

    if (isFollowed) {
      const postData = {
        user_id: getUserId(),
        following_id: params.id,
      };

      dispatch(
        addAction(
          postData,
          "api/followers",
          actionType.ADD_FOLLOWERS,
          `/api/activity_logs/${params.id}`,
          actionType.GET_ACTIVITY_FOLLOW
        )
      );
    } else {
      if (
        window.confirm(
          `Are you sure you want to unfollow "${currentUser.first_name} ${currentUser.last_name}"`
        )
      ) {
        dispatch(
          deleteAction(
            `api/followers/${params.id}`,
            actionType.DELETE_FOLLOWERS,
            `/api/activity_logs/${params.id}`,
            actionType.GET_ACTIVITY_FOLLOW
          )
        );
      }
    }
  };

  const isCurrentUser = currentUser.id === getUserId();
  const isGuest = currentUser.id !== getUserId();

  return {
    loading,
    users,
    currentUser,
    isFollowed,
    learned,
    logs_following,
    logs_learned,
    isCurrentUser,
    isGuest,
    handleToggleFollow,
  };
};
