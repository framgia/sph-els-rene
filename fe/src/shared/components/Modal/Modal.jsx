import React from "react";

function Modal({ children, title, modalID, modalSize, formType }) {
  return (
    <div
      className="modal fade"
      id={modalID}
      tabIndex="-1"
      aria-labelledby={`${modalID}ModalLabel`}
      aria-hidden="true"
    >
      <div className={`modal-dialog ${modalSize}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${modalID}ModalLabel`}>
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>

            {formType === "create" && (
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Create
              </button>
            )}

            {formType === "update" && (
              <button
                type="submit"
                className="btn btn-warning"
                data-bs-dismiss="modal"
              >
                Update
              </button>
            )}

            {formType === "delete" && (
              <button
                type="submit"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
