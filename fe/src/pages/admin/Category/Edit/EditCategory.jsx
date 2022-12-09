/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import ButtonModal from "../../../../shared/components/Button/ButtonModal";
import Form from "../../../../shared/components/Form/Form";
import FormInput from "../../../../shared/components/Form/FormInput";
import Modal from "../../../../shared/components/Modal/Modal";
import { useEditCategory } from "./hooks/useEditCategory";

function EditCategory({ id }) {
  const { data, handleInput, handleGetCategory, handleSubmit } =
    useEditCategory(id);

  return (
    <Fragment>
      <Form handler={handleSubmit}>
        <ButtonModal
          text={"Edit"}
          style={"btn btn-outline-warning"}
          target={"#EditCategoryModal"}
          handler={handleGetCategory}
        />

        <Modal
          title={"Add New Category"}
          modalID={"EditCategoryModal"}
          formType={"update"}
        >
          <FormInput
            label={"Title"}
            name={"title"}
            value={data.title || ""}
            handler={handleInput}
            helper={"Please enter lesson name"}
          />

          <FormInput
            label={"Description"}
            name={"description"}
            value={data.description || ""}
            handler={handleInput}
            helper={"Description will help user to choose the right lesson"}
          />
        </Modal>
      </Form>
    </Fragment>
  );
}

export default EditCategory;
