/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAction } from "redux/actions/actions";
import { GET_ACTIVITIES } from "../../../../redux/actions/actionTypes";

export const useActivityLogs = () => {
  const { activities, loading } = useSelector((state) => state.activities);
  const [isActivtyPage, setActivityPage] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAction("/api/activity_logs", GET_ACTIVITIES));
  }, []);

  useState(() => {
    if (
      window.location.href
        .toString()
        .toLowerCase()
        .includes("/users/all_activity_logs")
    ) {
      setActivityPage(true);
    } else {
      setActivityPage(false);
    }
  }, [window.location.href]);

  return { activities, loading, isActivtyPage };
};
