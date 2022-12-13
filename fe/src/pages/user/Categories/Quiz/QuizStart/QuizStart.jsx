/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState } from "react";
import Container from "shared/components/Layout/Container/Container";
import GridColumn from "shared/components/Layout/Grid/GridColumn";
import GridRow from "shared/components/Layout/Grid/GridRow";
import LayoutAroundChildren from "shared/components/Layout/Positioning/LayoutAroundChildren";
import LayoutSpacer from "shared/components/Layout/Positioning/LayoutSpacer";
import LayoutCenterChildren from "shared/components/Layout/Positioning/LayoutCenterChildren";
import { useQuizStart } from "./hooks/useQuizStart";
import Button from "shared/components/Button/Button";
import { OUTLINE_INFO } from "shared/components/Button/buttonType";

function QuizStart() {
  const { progress, questions, getCategory, handleOptionClick, handleSubmit } =
    useQuizStart();

  const [isOpen, setOpen] = useState(false);

  const handleHint = () => {
    setOpen(!isOpen);
  };

  return (
    <Fragment>
      <Container style="border-2 border-gray-200 rounded-lg">
        {progress < 20 ? (
          <Fragment>
            <LayoutAroundChildren style="mb-5 mt-5">
              <h5>Category Name</h5>
              <h5>{progress + 1} out of 20</h5>
            </LayoutAroundChildren>

            <GridRow style="grid-cols-12">
              <GridColumn style="lg:col-span-5 md:col-span-5 col-span-12">
                <LayoutSpacer spacer={3}>
                  <LayoutCenterChildren>
                    <h3>{questions[progress]?.title}</h3>
                  </LayoutCenterChildren>

                  <LayoutCenterChildren>
                    <Button
                      text="Open Hint"
                      style={OUTLINE_INFO}
                      handler={handleHint}
                    />
                  </LayoutCenterChildren>

                  <LayoutCenterChildren>
                    <h5 className={`${isOpen ? "block" : "hidden"}`}>
                      {questions[progress]?.hint || "No Hint available"}
                    </h5>
                  </LayoutCenterChildren>
                </LayoutSpacer>
              </GridColumn>

              <GridColumn style="lg:col-span-7 md:col-span-7 col-span-12">
                {questions[progress]?.choices
                  .sort(() => Math.random() - 0.5)
                  .map((option) => (
                    <LayoutCenterChildren
                      style="w-50 mx-auto mb-3"
                      key={option.id}
                    >
                      <Button
                        style="btn btn-outline-primary w-100"
                        text={option.word}
                        handler={() =>
                          handleOptionClick(
                            questions[progress]?.id,
                            option.remark
                          )
                        }
                      />
                    </LayoutCenterChildren>
                  ))}
              </GridColumn>
            </GridRow>
          </Fragment>
        ) : (
          <Fragment>
            <LayoutSpacer>
              <LayoutCenterChildren>
                <h3>
                  Congratulations, You Finished "{getCategory.title}" Lesson
                </h3>
              </LayoutCenterChildren>
            </LayoutSpacer>

            <LayoutSpacer>
              <LayoutCenterChildren>
                <Button text={"Submit Answers"} handler={handleSubmit} />
              </LayoutCenterChildren>
            </LayoutSpacer>
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
}

export default QuizStart;
