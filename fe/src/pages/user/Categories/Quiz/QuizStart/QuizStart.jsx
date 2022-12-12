/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import Collapse from "react-bootstrap/Collapse";
import Container from "shared/components/Layout/Container/Container";
import GridColumn from "shared/components/Layout/Grid/GridColumn";
import GridRow from "shared/components/Layout/Grid/GridRow";
import LayoutAroundChildren from "shared/components/Layout/Positioning/LayoutAroundChildren";
import LayoutSpacer from "shared/components/Layout/Positioning/LayoutSpacer";
import LayoutCenterChildren from "shared/components/Layout/Positioning/LayoutCenterChildren";
import { useQuizStart } from "./hooks/useQuizStart";
import ButtonCollpase from "shared/components/Button/ButtonCollpase";
import Button from "shared/components/Button/Button";

function QuizStart() {
  const {
    progress,
    questions,
    openHint,
    getCategory,
    setOpenHint,
    handleOptionClick,
    handleSubmit,
  } = useQuizStart();

  return (
    <Fragment>
      <Container style={"card"}>
        {progress < 20 ? (
          <Fragment>
            <LayoutAroundChildren style={"mb-5 mt-5"}>
              <h5>Category Name</h5>
              <h5>{progress + 1} out of 20</h5>
            </LayoutAroundChildren>

            <GridRow style={"mb-3"}>
              <GridColumn style={"col-lg-5"}>
                <LayoutSpacer spacer={3}>
                  <LayoutCenterChildren>
                    <h3>{questions[progress]?.title}</h3>
                  </LayoutCenterChildren>

                  <LayoutCenterChildren>
                    <ButtonCollpase
                      text={"Open Hint"}
                      collapse={openHint}
                      handler={() => setOpenHint(!openHint)}
                    />
                  </LayoutCenterChildren>

                  <LayoutCenterChildren>
                    <Collapse in={openHint}>
                      <div id="example-collapse-text">
                        <h5>
                          {questions[progress]?.hint || "No Hint available"}
                        </h5>
                      </div>
                    </Collapse>
                  </LayoutCenterChildren>
                </LayoutSpacer>
              </GridColumn>

              <GridColumn style={"col-lg-7 p-3"}>
                {questions[progress]?.choices
                  .sort(() => Math.random() - 0.5)
                  .map((option) => (
                    <LayoutCenterChildren
                      style={"w-50 mx-auto mb-3"}
                      key={option.id}
                    >
                      <Button
                        style={"btn btn-outline-primary w-100"}
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
