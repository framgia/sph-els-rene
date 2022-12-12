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
import { useCreateWord } from "./hooks/useCreateWord";

function CreateWord({ id }) {
  const {
    data,
    dataOptions,
    category,
    handleGetCategory,
    handleInput,
    handleInputOptions,
    handleSubmit,
  } = useCreateWord(id);
  return (
    <Fragment>
      <Form handler={handleSubmit}>
        <ButtonModal
          text={"Add Word"}
          target={"#createWordModal"}
          style={"btn btn-outline-primary"}
          handler={handleGetCategory}
        />

        <Modal
          title={`Add Word To ${category.title}`}
          modalID={"createWordModal"}
          modalSize={"modal-lg"}
          formType={"create"}
        >
          <GridRow>
            <GridColumn style={"col-sm-12 col-md-12 col-lg-5 p1"}>
              <GridColumnTitle text={"Word Details"} />

              <FormInput
                label={"Lesson Id"}
                name={"lesson_id"}
                value={data.lesson_id || ""}
                handler={handleInput}
                hidden={true}
              />

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
                value={dataOptions.option1 || ""}
                handler={handleInputOptions}
                info={
                  " Please Be Noted That This Option Must Be The Right Translation"
                }
              />

              <FormInput
                label={"Option 2"}
                name={"option2"}
                value={dataOptions.option2 || ""}
                handler={handleInputOptions}
              />

              <FormInput
                label={"Option 3"}
                name={"option3"}
                value={dataOptions.option3 || ""}
                handler={handleInputOptions}
              />

              <FormInput
                label={"Option 4"}
                name={"option4"}
                value={dataOptions.option4 || ""}
                handler={handleInputOptions}
              />
            </GridColumn>
          </GridRow>
        </Modal>
      </Form>
    </Fragment>
  );
}

export default CreateWord;
