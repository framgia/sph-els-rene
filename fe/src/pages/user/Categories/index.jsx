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
      <Container style="p-3">
        <LayoutSpacer spacer={3}>
          <h5 className="font-medium leading-tight text-xl mt-0 mb-2 text-black-600 mx-5">
            Categories | Lesson
          </h5>
        </LayoutSpacer>

        <GridRow style="grid-cols-2">
          {categories.map((category) => (
            <GridColumn
              style="lg:col-span-1 md:col-span-1 col-span-2"
              key={category.id}
            >
              <Card
                title={category.title}
                subtitle={`${category.words.length} words`}
              >
                {category.description}
                <LayoutEndChildren>
                  {category.words.length >= 20 ? (
                    <Link
                      to={`/user/category/${category.id}/quiz`}
                      className={`inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-5 `}
                    >
                      Start Lesson
                    </Link>
                  ) : (
                    <Link
                      className={`inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-5 opacity-50 cursor-not-allowed`}
                    >
                      Work In Progress
                    </Link>
                  )}
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
