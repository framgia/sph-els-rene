/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllAction } from "../../../../redux/actions/actions";
import * as actionType from "../../../../redux/actions/actionTypes";
import { getUserId } from "../../../../utils";

function Followers() {
  const params = useParams();

  const [followerCount, setFollowerCount] = useState({
    following: "",
    followers: "",
  });

  const { followers } = useSelector((state) => state.activities);

  const dispatch = useDispatch();

  useEffect(() => {
    const id = params.id ?? getUserId();

    dispatch(
      getAllAction(`/api/activity_logs/${id}`, actionType.GET_ACTIVITY_FOLLOW)
    );
  }, []);

  useEffect(() => {
    setFollowerCount({
      following: followers?.following_count,
      follower: followers?.follower_count,
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
