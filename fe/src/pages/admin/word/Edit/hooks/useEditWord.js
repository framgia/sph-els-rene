import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneAction, updateAction } from "redux/actions/actions";
import * as actionType from "redux/actions/actionTypes";

export const useEditWord = (lessonID) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    id: "",
    title: "",
    hint: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const { word } = useSelector((state) => state.words);

  const handleGetWord = (e) => {
    dispatch(getOneAction(`api/words/${lessonID}`, actionType.GET_WORD));
  };

  useEffect(() => {
    const options = [];
    word.choices?.map((opt) => options.push(opt.word));
    setData({
      id: word.id,
      title: word.title,
      hint: word.hint,
      option1: options[0],
      option2: options[1],
      option3: options[2],
      option4: options[3],
    });
  }, [word]);

  const handleInput = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title: data.title,
      hint: data.hint,
      option:
        data.option1 +
        "," +
        data.option2 +
        "," +
        data.option3 +
        "," +
        data.option4,
    };

    dispatch(
      updateAction(
        postData,
        `/api/words/${data.id}`,
        actionType.UPDATE_WORDS,
        "api/words"
      )
    );
  };

  return {
    data,
    handleGetWord,
    handleInput,
    handleSubmit,
  };
};
