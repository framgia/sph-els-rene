import React, { Fragment } from "react";
import ButtonModal from "../../../../shared/components/Button/ButtonModal";
import Form from "../../../../shared/components/Form/Form";
import FormInput from "../../../../shared/components/Form/FormInput";
import Modal from "../../../../shared/components/Modal/Modal";
import { useCreateCategory } from "./hooks/useCreateCategory";

function CreateCategory() {
  const { data, handleInput, handleSubmit } = useCreateCategory();

  return (
    <Fragment>
      <Form handler={handleSubmit}>
        <ButtonModal text={"Create Category"} target={"#createCategoryModal"} />

        <Modal
          title={"Add New Category"}
          modalID={"createCategoryModal"}
          formType={"create"}
        >
          <FormInput
            label={"Title"}
            name={"title"}
            value={data.title}
            handler={handleInput}
          />

          <FormInput
            label={"Description"}
            name={"description"}
            value={data.description}
            handler={handleInput}
            info={" Description will help user to choose the right lesson"}
          />
        </Modal>
      </Form>
    </Fragment>
  );
}

export default CreateCategory;
