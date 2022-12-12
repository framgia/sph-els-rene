/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import ButtonModal from "../../../../shared/components/Button/ButtonModal";
import Form from "../../../../shared/components/Form/Form";
import FormInput from "../../../../shared/components/Form/FormInput";
import GridColumn from "../../../../shared/components/Layout/Grid/GridColumn";
import GridColumnSubTitle from "../../../../shared/components/Layout/Grid/GridColumnSubTitle";
import GridColumnTitle from "../../../../shared/components/Layout/Grid/GridColumnTitle";
import GridRow from "../../../../shared/components/Layout/Grid/GridRow";
import Modal from "../../../../shared/components/Modal/Modal";
import { useEditWord } from "./hooks/useEditWord";

function EditWord({ id }) {
  const { data, handleGetWord, handleInput, handleSubmit } = useEditWord(id);
  return (
    <Fragment>
      <Form handler={handleSubmit}>
        <ButtonModal
          text={"Edit"}
          target={"#editWordModal"}
          style={"btn btn-outline-warning"}
          handler={handleGetWord}
        />

        <Modal
          title={`Edit ${data.title}`}
          modalID={"editWordModal"}
          modalSize={"modal-lg"}
          formType={"update"}
        >
          <GridRow>
            <GridColumn style={"col-sm-12 col-md-12 col-lg-5 p1"}>
              <GridColumnTitle text={"Word Details"} />

              <FormInput
                label={"Title"}
                name={"title"}
                value={data.title || ""}
                handler={handleInput}
                info={"Please enter word name"}
              />

              <FormInput
                label={"Hint"}
                name={"hint"}
                value={data.hint || ""}
                handler={handleInput}
                info={"Enter hint for additional help"}
              />
            </GridColumn>

            <GridColumn style={"col-sm-12 col-md-12 col-lg-7 p1"}>
              <GridColumnSubTitle text={"Options"} />

              <FormInput
                label={"Option 1"}
                style={"mb-3 border rounded p-2 bg-light"}
                name={"option1"}
                value={data.option1 || ""}
                handler={handleInput}
                info={
                  " Please Be Noted That This Option Must Be The Right Translation"
                }
              />

              <FormInput
                label={"Option 2"}
                name={"option2"}
                value={data.option2 || ""}
                handler={handleInput}
              />

              <FormInput
                label={"Option 3"}
                name={"option3"}
                value={data.option3 || ""}
                handler={handleInput}
              />

              <FormInput
                label={"Option 4"}
                name={"option4"}
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
