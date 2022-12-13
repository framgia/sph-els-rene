/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import {
  OUTLINE_YELLOW,
  SOLID_BLUE,
} from "shared/components/Button/buttonType";
import Form from "shared/components/Form/Form";
import FormInput from "shared/components/Form/FormInput";
import GridColumn from "shared/components/Layout/Grid/GridColumn";
import GridColumnSubTitle from "shared/components/Layout/Grid/GridColumnSubTitle";
import GridColumnTitle from "shared/components/Layout/Grid/GridColumnTitle";
import GridRow from "shared/components/Layout/Grid/GridRow";
import Modal from "shared/components/Modal/Modal";
import { useEditWord } from "./hooks/useEditWord";

function EditWord({ id }) {
  const { data, handleGetWord, handleInput, handleSubmit } = useEditWord(id);
  return (
    <Fragment>
      <Form handler={handleSubmit}>
        <Modal
          title={`Edit ${data.title}`}
          modalID="editWordModal"
          buttonText="Edit"
          buttonStyle={OUTLINE_YELLOW}
          formType={SOLID_BLUE}
          submitText="Update"
          handler={handleGetWord}
        >
          <GridRow style="grid-cols-5">
            <GridColumn style="lg:col-span-2 col-span-5">
              <GridColumnTitle text="Word Details" />

              <FormInput
                label="Title"
                name="title"
                value={data.title || ""}
                handler={handleInput}
                helper="Please enter word name"
              />

              <FormInput
                label="Hint"
                name="hint"
                value={data.hint || ""}
                handler={handleInput}
                helper="Enter hint for additional help"
              />
            </GridColumn>

            <GridColumn style="lg:col-span-3 col-span-5">
              <GridColumnSubTitle text="Options" />

              <FormInput
                label="Option 1"
                style="mb-3 border rounded p-2 bg-zinc-100"
                name="option1"
                value={data.option1 || ""}
                handler={handleInput}
                helper="Please Be Noted That This Option Must Be The Right Translation"
              />

              <FormInput
                label="Option 2"
                name="option2"
                value={data.option2 || ""}
                handler={handleInput}
              />

              <FormInput
                label="Option 3"
                name="option3"
                value={data.option3 || ""}
                handler={handleInput}
              />

              <FormInput
                label="Option 4"
                name="option4"
                value={data.option4 || ""}
                handler={handleInput}
              />
            </GridColumn>
          </GridRow>
        </Modal>
      </Form>
    </Fragment>
  );
}

export default EditWord;
