import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, getOneAction } from "redux/actions/actions";
import * as actionType from "redux/actions/actionTypes";

export const useCreateWord = (lessonID) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    lesson_id: "",
    title: "",
    hint: "",
  });

  const [dataOptions, setDataOptions] = useState({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const { category } = useSelector((state) => state.categories);

  const handleGetCategory = (e) => {
    dispatch(getOneAction(`api/lessons/${lessonID}`, actionType.GET_CATEGORY));
  };

  useEffect(() => {
    if (category !== {}) {
      setData({
        lesson_id: category.id,
      });
    }
  }, [category]);

  const handleInput = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleInputOptions = (e) => {
    e.persist();
    setDataOptions({ ...dataOptions, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = [];

    Object.values(dataOptions).map((value, index) => options.push(value));

    const postData = {
      lessons_id: data.lesson_id,
      title: data.title,
      hint: data.hint,
      option: options,
    };

    dispatch(
      addAction(postData, "api/words", actionType.ADD_WORDS, "api/lessons")
    );

    setData({
      lesson_id: "",
      title: "",
      hint: "",
    });

    setDataOptions({
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    });
  };

  return {
    data,
    dataOptions,
    category,
    handleGetCategory,
    handleInput,
    handleInputOptions,
    handleSubmit,
  };
};
