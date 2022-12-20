import React, { Fragment } from "react";
import { useActivityFollowers } from "../hooks/useActivityFollowers";

function Followers() {
  const { followerCount } = useActivityFollowers();

  return (
    <Fragment>
      <div className="col-span-auto ">
        <div className="text-center font-bold">{followerCount?.follower}</div>
        <div className="text-center text-slate-500">Followers</div>
      </div>
      <div className="col-span-auto">
        <div className="text-center font-bold">{followerCount?.following}</div>
        <div className="text-center text-slate-500">Following</div>
      </div>
    </Fragment>
  );
}

export default Followers;
