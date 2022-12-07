import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAction } from "../../../../../redux/actions/actions";
import * as actionType from "../../../../../redux/actions/actionTypes";

export const useCreateCategory = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const handleInput = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });

    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title: data.title,
      description: data.description,
    };

    dispatch(
      addAction(
        postData,
        "api/lessons",
        actionType.ADD_CATEGORIES,
        "api/lessons"
      )
    );

    setData({
      title: "",
      description: "",
    });
  };

  return {
    data,
    setData,
    handleInput,
    handleSubmit,
  };
};
