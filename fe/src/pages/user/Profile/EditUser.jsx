import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { useEditUser } from "./hooks/useEditUser";

function EditUser(props) {
  const { data, widgetRef, handleData, handleSubmit, handleInput } =
    useEditUser(props);

  return (
    <Fragment>
      <ToastContainer />
      <div className="">
        <button
          type="button"
          className="btn btn-outline-secondary"
          data-bs-toggle="modal"
          data-bs-target="#EditCategoryModal"
          onClick={handleData}
        >
          Edit
        </button>

        <div
          className="modal fade"
          id="EditCategoryModal"
          tabIndex="-1"
          aria-labelledby="EditCategoryModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="EditCategoryModalLabel">
                  Edit User Details & Avatar
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn p-0 m-0"
                    style={{ width: 200, height: 200 }}
                    onClick={() => widgetRef.current.open()}
                  >
                    <img
                      className="btn btn-outline-warning mx-auto w-100 h-100 rounded-circle border border-5"
                      src={data.avatar ?? "/images/default_image.jpg"}
                      alt={data.avatar ?? "/images/default_image.jpg"}
                    />
                  </button>
                </div>
              </div>
              <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="modal-body border">
                  <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      aria-describedby="first_nameHelp"
                      name="first_name"
                      data-name="first_name"
                      onChange={handleInput}
                      value={data.first_name}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="middle_name" className="form-label">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="middle_name"
                      aria-describedby="middle_nameHelp"
                      name="middle_name"
                      data-name="middle_name"
                      onChange={handleInput}
                      value={data.middle_name}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      aria-describedby="last_nameHelp"
                      name="last_name"
                      data-name="last_name"
                      onChange={handleInput}
                      value={data.last_name}
                    />
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditUser;