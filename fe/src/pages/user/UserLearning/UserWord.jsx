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
import { PLAIN_TEXT } from "shared/components/Button/buttonType";

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
        <Card style="p-2">
          <GridRow style="grid-cols-12">
            <GridColumn style="lg:col-span-4 md:col-span-4 col-span-12">
              <LayoutCenterChildren>
                <Avatar
                  img={user?.avatar}
                  customStyle={{ width: 200, height: 200 }}
                />
              </LayoutCenterChildren>

              <LayoutCenterChildren>
                <p className="uppercase font-bold mb-5">
                  {user?.first_name + " " + user?.last_name || ""}
                </p>
              </LayoutCenterChildren>

              <LayoutCenterChildren>
                <ButtonNavLink
                  text={`Learned ${learned.categoriesCount} categories`}
                  style={PLAIN_TEXT}
                  link="/user/learned/categories"
                />
              </LayoutCenterChildren>
            </GridColumn>

            <GridColumn style="lg:col-span-8 md:col-span-8 col-span-12">
              <Card>
                <LayoutSpacer spacer={1}>
                  <h4>Learned Words</h4>
                </LayoutSpacer>

                <Table tableHeader={["Word", "Translation"]}>
                  {itemPaginated &&
                    itemPaginated?.map((item) => (
                      <tr key={item.word_id}>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {item.word}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {item.translation}
                        </td>
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
