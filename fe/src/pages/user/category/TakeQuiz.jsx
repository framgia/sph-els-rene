import React, { Fragment, useEffect, useState } from "react";
import Header from "../../../components/Header";
import Collapse from "react-bootstrap/Collapse";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllAction, getOneAction } from "../../../redux/actions/actions";
import * as actionType from "../../../redux/actions/actionTypes";

function TakeQuiz() {
  const dispatch = useDispatch();
  const params = useParams();
  const [openHint, setOpenHint] = useState(false);
  const { category, categories } = useSelector((state) => state.categories);
  const { words_with_choices } = useSelector((state) => state.words);
  const [progress, setProgress] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answerHolder, setAnswerHolder] = useState([]);

  useEffect(() => {
    dispatch(getOneAction(`api/lessons/${params.id}`, actionType.GET_CATEGORY));
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

  return (
    <Fragment>
      <Header />

      <div className="container card">
        {progress < 20 ? (
          <Fragment>
            <div className="d-flex justify-content-around mb-5 mt-5">
              <h5>{category.title}</h5>
              <h5>{progress + 1} out of 20</h5>
            </div>

            <div className="row mb-3 ">
              <div className="col-lg-5 p-3 ">
                <div className="">
                  <div className=" d-flex justify-content-center mt-3 mb-3">
                    <h3>{questions[progress]?.title}</h3>
                  </div>

                  <div className=" d-flex justify-content-center mb-2">
                    <button
                      className="btn btn-info"
                      onClick={() => setOpenHint(!openHint)}
                      aria-controls="example-collapse-text"
                      aria-expanded={openHint}
                    >
                      Open Hint
                    </button>
                  </div>

                  <div className=" d-flex justify-content-center mb-3">
                    <Collapse in={openHint}>
                      <div id="example-collapse-text">
                        <h5>
                          {questions[progress]?.hint || "No Hint available"}{" "}
                        </h5>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 p-3 " id="CHOICES">
                {questions[progress]?.choices
                  .sort(() => Math.random() - 0.5)
                  .map((option) => (
                    <div
                      className=" d-flex justify-content-center w-50 mx-auto mb-3"
                      key={option.id}
                    >
                      <button
                        type="button"
                        className="btn btn-outline-primary w-100"
                        onClick={() =>
                          handleOptionClick(
                            questions[progress]?.id,
                            option.remark
                          )
                        }
                      >
                        {option.word}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="container">
              <div className="d-flex justify-content-center mt-3 mb-3">
                <h3>
                  Congratulations, You Finished "{getCategory.title}" Lesson
                </h3>
              </div>

              <div className="d-flex justify-content-center mb-3">
                <button type="button" className="btn btn-primary">
                  Submit Answers
                </button>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default TakeQuiz;
