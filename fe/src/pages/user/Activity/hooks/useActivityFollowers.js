/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserId } from "utils";
import { getAllAction } from "redux/actions/actions";
import { GET_ACTIVITY_FOLLOW } from "redux/actions/actionTypes";

export const useActivityFollowers = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [followerCount, setFollowerCount] = useState({
    following: "",
    followers: "",
  });

  const { followers } = useSelector((state) => state.activities);

  useEffect(() => {
    const id = params.id ?? getUserId();

    dispatch(getAllAction(`/api/activity_logs/${id}`, GET_ACTIVITY_FOLLOW));
  }, []);

  useEffect(() => {
    setFollowerCount({
      following: followers?.following_count,
      follower: followers?.follower_count,
    });
  }, [followers]);

  return { followerCount };
};
