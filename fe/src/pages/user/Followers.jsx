/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAction } from "../../redux/actions/actions";
import * as actionType from "../../redux/actions/actionTypes";

function Followers(props) {
  const [followerCount, setFollowerCount] = useState({
    following: "",
    followers: "",
  });

  const { followers } = useSelector((state) => state.followers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllAction(`/api/activity_logs/${props.id}`, actionType.GET_FOLLOWERS)
    );
  }, []);

  useEffect(() => {
    setFollowerCount({
      following: followers?.following,
      follower: followers?.follower,
    });
  }, [followers]);

  return (
    <Fragment>
      <div className="col ">
        <div className="text-center fs-5 fw-bold">
          {followerCount?.follower}
        </div>
        <div className="text-center text-secondary">Followers</div>
      </div>
      <div className="col">
        <div className="text-center fs-5 fw-bold">
          {followerCount?.following}
        </div>
        <div className="text-center text-secondary">Following</div>
      </div>
    </Fragment>
  );
}

export default Followers;
