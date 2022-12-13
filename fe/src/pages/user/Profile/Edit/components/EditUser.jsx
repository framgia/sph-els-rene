import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import {
  OUTLINE_YELLOW,
  SOLID_YELLOW,
} from "shared/components/Button/buttonType";
import Form from "shared/components/Form/Form";
import FormInput from "shared/components/Form/FormInput";
import Modal from "shared/components/Modal/Modal";
import { useEditUser } from "../../hooks/useEditUser";

function EditUser(props) {
  const { data, widgetRef, handleData, handleSubmit, handleInput } =
    useEditUser(props);

  return (
    <Fragment>
      <ToastContainer />

      <Form handler={handleSubmit}>
        <Modal
          title="Edit User Details & Avatary"
          modalID="createCategoryModal"
          buttonText="Edit"
          buttonStyle={OUTLINE_YELLOW}
          formType={SOLID_YELLOW}
          submitText="Update"
          handler={handleData}
        >
          <div className="flex justify-center">
            <button
              type="button"
              className="btn p-0 m-0"
              style={{ width: 200, height: 200 }}
              onClick={() => widgetRef.current.open()}
            >
              <img
                className=" mx-auto rounded-full h-full w-full"
                src={data.avatar ?? "/images/default_image.jpg"}
                alt={data.avatar ?? "/images/default_image.jpg"}
              />
            </button>
          </div>

          <FormInput
            label="First Name"
            name="first_name"
            value={data.first_name}
            handler={handleInput}
          />

          <FormInput
            label="Middle Name"
            name="middle_name"
            value={data.middle_name}
            handler={handleInput}
          />

          <FormInput
            label="Last Name"
            name="last_name"
            value={data.last_name}
            handler={handleInput}
          />
        </Modal>
      </Form>
    </Fragment>
  );
}

export default EditUser;
