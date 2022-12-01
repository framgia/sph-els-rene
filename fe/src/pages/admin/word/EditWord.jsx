import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneAction, updateAction } from "../../../redux/actions/actions";
import * as actionType from "../../../redux/actions/actionTypes";

function EditWord(props) {
  const [data, setData] = useState({
    id: "",
    title: "",
    hint: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const dispatch = useDispatch();

  const { word } = useSelector((state) => state.words);

  const handleGetWord = (e) => {
    dispatch(getOneAction(`api/words/${props.id}`, actionType.GET_WORD));
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

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="">
          <button
            type="button"
            className="btn btn-outline-warning"
            data-bs-toggle="modal"
            data-bs-target="#editWordModal"
            onClick={handleGetWord}
          >
            Edit
          </button>

          <div
            className="modal fade"
            id="editWordModal"
            tabIndex="-1"
            aria-labelledby="editWordModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="editWordModalLabel">
                    Edit {data.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="">
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-5  p1">
                        <div className="p-2 m-2">
                          <div className="mb-3">
                            <h5>Word Details</h5>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="title" className="form-label">
                              Title
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="title"
                              aria-describedby="emailHelp"
                              name="title"
                              data-name="title"
                              onChange={handleInput}
                              value={data.title || ""}
                            />
                            <div id="titleHelp" className="form-text">
                              Please enter word name
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="hint" className="form-label">
                              Hint
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="hint"
                              aria-describedby="emailHelp"
                              name="hint"
                              data-name="hint"
                              onChange={handleInput}
                              value={data.hint || ""}
                            />
                            <div id="hintHelp" className="form-text">
                              Enter hint for additional help.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-7  p1">
                        <div className="p-2 m-2">
                          <div className="mb-3">
                            <h6>Options</h6>
                          </div>

                          <div className="mb-3 border rounded p-2 bg-light">
                            <label htmlFor="option1" className="form-label">
                              Option 1
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="option1"
                              aria-describedby="emailHelp"
                              name="option1"
                              data-name="option1"
                              onChange={handleInput}
                              value={data.option1 || ""}
                            />
                            <div id="hintHelp" className="form-text">
                              Please Be Noted That This Option Must Be The Right
                              Translation
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="option2" className="form-label">
                              Option 2
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="option2"
                              aria-describedby="emailHelp"
                              name="option2"
                              data-name="option2"
                              onChange={handleInput}
                              value={data.option2 || ""}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="option3" className="form-label">
                              Option 3
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="option3"
                              aria-describedby="emailHelp"
                              name="option3"
                              data-name="option3"
                              onChange={handleInput}
                              value={data.option3 || ""}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="option4" className="form-label">
                              Option 4
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="option4"
                              aria-describedby="emailHelp"
                              name="option4"
                              data-name="option4"
                              onChange={handleInput}
                              value={data.option4 || ""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
}

export default EditWord;
