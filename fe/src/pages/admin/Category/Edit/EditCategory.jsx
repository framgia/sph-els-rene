/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import {
  OUTLINE_YELLOW,
  SOLID_BLUE,
} from "shared/components/Button/buttonType";
import Form from "shared/components/Form/Form";
import FormInput from "shared/components/Form/FormInput";
import Modal from "shared/components/Modal/Modal";
import { useEditCategory } from "./hooks/useEditCategory";

function EditCategory({ id }) {
  const { data, handleInput, handleGetCategory, handleSubmit } =
    useEditCategory(id);

  return (
    <Fragment>
      <Form handler={handleSubmit}>
        <Modal
          title="Add New Category"
          modalID="EditCategoryModal"
          buttonText="Edit"
          buttonStyle={OUTLINE_YELLOW}
          formType={SOLID_BLUE}
          submitText="Update Category"
          handler={handleGetCategory}
        >
          <FormInput
            label="Title"
            name="title"
            value={data.title || ""}
            handler={handleInput}
            helper="Please enter lesson name"
          />

          <FormInput
            label="Description"
            name="description"
            value={data.description || ""}
            handler={handleInput}
            helper="Description will help user to choose the right lesson"
          />
        </Modal>
      </Form>
    </Fragment>
  );
}

export default EditCategory;
