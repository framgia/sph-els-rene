/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import Collapse from "react-bootstrap/Collapse";
import Header from "../../../../../components/Header";
import { useQuizStart } from "./hooks/useQuizStart";

function QuizStart() {
  const {
    progress,
    questions,
    openHint,
    getCategory,
    setOpenHint,
    handleOptionClick,
    handleSubmit,
  } = useQuizStart();

  return (
    <Fragment>
      <Header />

      <div className="container card">
        {progress < 20 ? (
          <Fragment>
            <div className="d-flex justify-content-around mb-5 mt-5">
              <h5>Category Name</h5>
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
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
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

export default QuizStart;
