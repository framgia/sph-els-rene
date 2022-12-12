/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllAction } from "redux/actions/actions";
import * as actionType from "redux/actions/actionTypes";
import Card from "shared/components/Card/Card";
import Container from "shared/components/Layout/Container/Container";
import GridColumn from "shared/components/Layout/Grid/GridColumn";
import GridRow from "shared/components/Layout/Grid/GridRow";
import LayoutSpacer from "shared/components/Layout/Positioning/LayoutSpacer";
import LayoutEndChildren from "shared/components/Layout/Positioning/LayoutEndChildren";

function index() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(
      getAllAction("api/user_available_lesson", actionType.GET_CATEGORIES)
    );
  }, []);

  return (
    <Fragment>
      <Container style={"p-3"}>
        <LayoutSpacer spacer={3}>
          <h5 className="mx-5">Categories | Lesson</h5>
        </LayoutSpacer>

        <GridRow style={"p-3"}>
          {categories.map((category) => (
            <GridColumn style={"col-sm-12 col-lg-6 p-3"} key={category.id}>
              <Card
                title={category.title}
                subtitle={`${category.words.length} words`}
              >
                {category.description}
                <LayoutEndChildren>
                  <Link
                    to={`/user/category/${category.id}/quiz`}
                    className={`btn btn-primary ${
                      category.words.length >= 20 ? "" : "disabled"
                    }`}
                  >
                    Start Lesson
                  </Link>
                </LayoutEndChildren>
              </Card>
            </GridColumn>
          ))}
        </GridRow>
      </Container>
    </Fragment>
  );
}

export default index;
