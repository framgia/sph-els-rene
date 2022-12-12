/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneAction } from "redux/actions/actions";
import { getUserId } from "utils";
import * as actionType from "redux/actions/actionTypes";
import Pagination from "shared/components/Pagination/Pagination";
import LoadingSpinner from "shared/components/Spinner/LoadingSpinner";
import { usePagination } from "shared/hooks/usePagination";
import Container from "shared/components/Layout/Container/Container";
import Card from "shared/components/Card/Card";
import GridRow from "shared/components/Layout/Grid/GridRow";
import GridColumn from "shared/components/Layout/Grid/GridColumn";
import LayoutCenterChildren from "shared/components/Layout/Positioning/LayoutCenterChildren";
import Avatar from "shared/components/Image/Avatar";
import ButtonNavLink from "shared/components/Button/ButtonNavLink";
import LayoutSpacer from "shared/components/Layout/Positioning/LayoutSpacer";
import Table from "shared/components/Table/Table";

function UserWord() {
  const dispatch = useDispatch();

  const { user, learned } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getOneAction(`/api/users/${getUserId()}`, actionType.GET_USER));
  }, []);

  const { itemsPerPage, itemPaginated, paginate } = usePagination(
    5,
    learned.words
  );

  if (!itemPaginated) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <Container>
        <Card style={"p-2"}>
          <GridRow style={"gx-2"}>
            <GridColumn style={"col-lg-4 col-md-4 mb-2 p-3"}>
              <LayoutCenterChildren>
                <Avatar
                  img={user?.avatar}
                  customStyle={{ width: 200, height: 200 }}
                />
              </LayoutCenterChildren>

              <LayoutCenterChildren>
                <p className="text-uppercase fw-bold fs-3 text">
                  {user?.first_name + " " + user?.last_name || ""}
                </p>
              </LayoutCenterChildren>

              <LayoutCenterChildren>
                <ButtonNavLink
                  text={`Learned ${learned.categoriesCount} categories`}
                  style="text-decoration-none"
                  link={"/user/learned/categories"}
                />
              </LayoutCenterChildren>
            </GridColumn>

            <GridColumn style={"col mb-2"}>
              <Card>
                <LayoutSpacer spacer={1}>
                  <h4>Learned Words</h4>
                </LayoutSpacer>

                <Table
                  tableHeader={["Word", "Translation"]}
                  style="table table-borderless"
                >
                  {itemPaginated &&
                    itemPaginated?.map((item) => (
                      <tr key={item.word_id}>
                        <td>{item.word}</td>
                        <td>{item.translation}</td>
                      </tr>
                    ))}
                </Table>
                <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={learned.wordsCount}
                  paginateTo={paginate}
                />
              </Card>
            </GridColumn>
          </GridRow>
        </Card>
      </Container>
    </Fragment>
  );
}

export default UserWord;
