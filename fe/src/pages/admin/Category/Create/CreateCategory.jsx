import React, { Fragment } from "react";
import { useCreateCategory } from "./hooks/useCreateCategory";

function CreateCategory() {
  const { data, handleInput, handleSubmit } = useCreateCategory();

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#createCategoryModal"
          >
            Create Category
          </button>

          <div
            className="modal fade"
            id="createCategoryModal"
            tabIndex="-1"
            aria-labelledby="createCategoryModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="createCategoryModalLabel">
                    Add New Category
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
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
                      value={data.title}
                    />
                    <div id="titleHelp" className="form-text">
                      Please enter lesson name
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      aria-describedby="descriptionHelp"
                      name="description"
                      data-name="description"
                      onChange={handleInput}
                      value={data.description}
                    />
                    <div id="descriptionHelp" className="form-text">
                      Description will help user to choose the right lesson
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
                    Create
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

export default CreateCategory;