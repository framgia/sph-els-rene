import React, { Fragment, useState } from "react";
import ButtonModal from "../Button/ButtonModal";
import useButton from "../Button/hooks/useButton";

function Modal({
  children,
  title,
  modalID,
  modalSize,
  formType,
  buttonText,
  buttonStyle,
  buttonPosition,
  submitText,
  handler,
}) {
  const [isOpen, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
    if (handler) {
      handler();
    }
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <ButtonModal
        text={buttonText}
        style={useButton(buttonStyle)}
        target={modalID}
        handler={handleModalOpen}
      />

      <div
        id={modalID}
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 right-0 z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto  bg-black/60`}
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto mx-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle={modalID}
                onClick={handleModalClose}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">{children}</div>
            <div className="flex justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 border">
              <button
                data-modal-toggle={modalID}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={handleModalClose}
              >
                Cancel
              </button>

              <button
                data-modal-toggle={modalID}
                type="submit"
                className={useButton(formType)}
                onClick={handleModalClose}
              >
                {submitText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Modal;
