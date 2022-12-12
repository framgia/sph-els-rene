/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react";
import Card from "shared/components/Card/Card";
import Container from "shared/components/Layout/Container/Container";
import LayoutCenterChildren from "shared/components/Layout/Positioning/LayoutCenterChildren";
import LayoutSpacer from "shared/components/Layout/Positioning/LayoutSpacer";
import { useCategoryList } from "./hooks/useCategoryList";
import ButtonNavLink from "shared/components/Button/ButtonNavLink";

function CategoryList() {
  const { category, done } = useCategoryList();
  return (
    <Fragment>
      <Container>
        <Card style={" w-75 mx-auto p-5"}>
          <LayoutSpacer>
            <LayoutCenterChildren style={"mb-3"}>
              <h1>{category.title}</h1>
            </LayoutCenterChildren>

            <LayoutCenterChildren style={"mb-3"}>
              <h6>{category.description}</h6>
            </LayoutCenterChildren>
          </LayoutSpacer>

          {done ? (
            <Fragment>
              <LayoutCenterChildren style={"mb-3"}>
                You have completed this lesson already
              </LayoutCenterChildren>

              <LayoutCenterChildren style={"mb-3"}>
                <ButtonNavLink
                  style={"btn btn-outline-primary"}
                  link={`/user/category/${category.id}/result`}
                  text={" View Result"}
                />
              </LayoutCenterChildren>
            </Fragment>
          ) : (
            <Fragment>
              <LayoutCenterChildren style={"mb-3"}>
                Looks Like You havent tried this lesson yet
              </LayoutCenterChildren>

              <LayoutCenterChildren style={"mb-3"}>
                <ButtonNavLink
                  style={"btn btn-outline-primary"}
                  link={`/user/category/${category.id}/quiz`}
                  text={"Start Lesson"}
                />
              </LayoutCenterChildren>
            </Fragment>
          )}
        </Card>
      </Container>
    </Fragment>
  );
}

export default CategoryList;
