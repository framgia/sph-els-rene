/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneAction } from "redux/actions/actions";
import { getUserId } from "utils";
import * as actionType from "redux/actions/actionTypes";
import LoadingSpinner from "shared/components/Spinner/LoadingSpinner";
import Container from "shared/components/Layout/Container/Container";
import Card from "shared/components/Card/Card";
import LayoutSpacer from "shared/components/Layout/Positioning/LayoutSpacer";
import ButtonNavLink from "shared/components/Button/ButtonNavLink";
import GridRow from "shared/components/Layout/Grid/GridRow";
import GridColumn from "shared/components/Layout/Grid/GridColumn";
import LayoutEndChildren from "shared/components/Layout/Positioning/LayoutEndChildren";
import { PLAIN_TEXT } from "shared/components/Button/buttonType";

function UserCategories() {
  const dispatch = useDispatch();
  const { learned, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getOneAction(`/api/users/${getUserId()}`, actionType.GET_USER));
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <Container>
        <Card>
          <LayoutSpacer spacer={3}>
            <h5 className="mx-5">Learned Categories | Lesson</h5>
            <div className="mt-1 mx-5">
              <ButtonNavLink
                text={` Learned ${learned.wordsCount} words`}
                style={PLAIN_TEXT}
                link="/user/learned/words"
              />
            </div>
          </LayoutSpacer>

          <GridRow style="grid-cols-2">
            {learned.categories?.map((category) => (
              <GridColumn
                style="lg:col-span-1 md:col-span-1 col-span-2"
                key={category.id}
              >
                <Card title={category.title} subtitle="Completed">
                  {category.description}

                  <LayoutEndChildren>
                    <ButtonNavLink
                      text="View Result"
                      link={`/user/category/${category.id}/result`}
                    />
                  </LayoutEndChildren>
                </Card>
              </GridColumn>
            ))}
          </GridRow>
        </Card>
      </Container>
    </Fragment>
  );
}

export default UserCategories;
