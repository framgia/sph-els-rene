/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react";
import LoadingSpinner from "../../../shared/components/Spinner/LoadingSpinner";
import { ToastContainer } from "react-toastify";
import { useListWord } from "./List/hooks/useListWord";
import { usePagination } from "../../../shared/hooks/usePagination";
import FormSearchInput from "../../../shared/components/Form/FormSearchInput";
import GridRow from "../../../shared/components/Layout/Grid/GridRow";
import ListWord from "./List/components/ListWord";
import Container from "../../../shared/components/Layout/Container/Container";
import Pagination from "../../../shared/components/Pagination/Pagination";

function index() {
  const { words, loading, search, setSearch, handleDelete } = useListWord();

  const { itemsPerPage, itemPaginated, paginate } = usePagination(9, words);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <ToastContainer />
      <Container>
        {words && (
          <Fragment>
            <FormSearchInput handler={(e) => setSearch(e.target.value)} />

            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={words.length}
              paginateTo={paginate}
            />

            <GridRow style={"p-3"}>
              <ListWord
                itemPaginated={itemPaginated}
                search={search}
                handleDelete={handleDelete}
              />
            </GridRow>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={words.length}
              paginateTo={paginate}
            />
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
}

export default index;
