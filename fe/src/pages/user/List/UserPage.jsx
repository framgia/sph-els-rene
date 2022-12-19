/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePagination } from "shared/hooks/usePagination";
import LoadingSpinner from "shared/components/Spinner/LoadingSpinner";
import { getAllAction } from "redux/actions/actions";
import * as actionType from "redux/actions/actionTypes";
import Container from "shared/components/Layout/Container/Container";
import FormSearchInput from "shared/components/Form/FormSearchInput";
import Table from "shared/components/Table/Table";
import LayoutCenterChildren from "shared/components/Layout/Positioning/LayoutCenterChildren";
import UserPagetableBody from "./components/UserPagetableBody";
import Pagination from "shared/components/Pagination/Pagination";
import Card from "shared/components/Card/Card";

function UserPage() {
  const [search, setSearch] = useState("");

  const { users, loading } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAction("api/users/visitable_users", actionType.GET_USERS));
  }, []);

  const { itemsPerPage, itemPaginated, paginate } = usePagination(10, users);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <Container>
        <Card>
          <FormSearchInput handler={(e) => setSearch(e.target.value)} />

          <LayoutCenterChildren>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={users.length}
              paginateTo={paginate}
            />
          </LayoutCenterChildren>

          <Table tableHeader={["", "Name", "Email", "Action"]}>
            <UserPagetableBody itemPaginated={itemPaginated} search={search} />
          </Table>

          <LayoutCenterChildren>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={users.length}
              paginateTo={paginate}
            />
          </LayoutCenterChildren>
        </Card>
      </Container>
    </Fragment>
  );
}

export default UserPage;
