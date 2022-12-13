import React, { Fragment } from "react";
import { SOLID_BLUE, SOLID_GREEN } from "shared/components/Button/buttonType";
import Form from "shared/components/Form/Form";
import FormInput from "shared/components/Form/FormInput";
import Modal from "shared/components/Modal/Modal";
import { useCreateCategory } from "./hooks/useCreateCategory";

function CreateCategory() {
  const { data, handleInput, handleSubmit } = useCreateCategory();

  return (
    <Fragment>
      <Form handler={handleSubmit}>
        <Modal
          title="Add New Category"
          modalID="createCategoryModal"
          buttonText="Create Category"
          buttonStyle={SOLID_GREEN}
          formType={SOLID_BLUE}
          submitText="Create"
        >
          <FormInput
            label="Title"
            name="title"
            value={data.title}
            handler={handleInput}
          />

          <FormInput
            label="Description"
            name="description"
            value={data.description}
            handler={handleInput}
            helper="Description will help user to choose the right lesson"
          />
        </Modal>
      </Form>
    </Fragment>
  );
}

export default CreateCategory;
