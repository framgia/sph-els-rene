/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addAction, getAllAction } from "redux/actions/actions";
import * as actionType from "redux/actions/actionTypes";

export const useQuizStart = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categories);
  const { words_with_choices } = useSelector((state) => state.words);
  const [progress, setProgress] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answerHolder, setAnswerHolder] = useState([]);

  const [isOpenHint, setOpenHint] = useState(false);

  const handleHint = () => {
    setOpenHint(!isOpenHint);
  };

  useEffect(() => {
    dispatch(getAllAction("api/lessons", actionType.GET_CATEGORIES));
    dispatch(
      getAllAction(
        `api/words_and_choices/${params.id}`,
        actionType.GET_WORDS_AND_CHOICES
      )
    );
  }, []);

  useEffect(() => {
    setQuestions(words_with_choices);
  }, [words_with_choices]);

  const getCategory = categories?.find(
    (Category) => Category.id === parseInt(params.id)
  );

  const handleOptionClick = (id, remark) => {
    setAnswerHolder([...answerHolder, { word_id: id, remark: remark }]);
    setProgress(progress + 1);
  };

  const handleSubmit = () => {
    const postData = {
      lesson_id: params.id,
      answers: JSON.stringify(answerHolder),
    };

    dispatch(addAction(postData, "/api/user_words", actionType.ADD_USER_WORD));

    navigate(`/user/category/${params.id}/result`);
  };

  return {
    progress,
    questions,
    isOpenHint,
    getCategory,
    setOpenHint,
    handleOptionClick,
    handleSubmit,
  };
};
