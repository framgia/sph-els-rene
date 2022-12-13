import React, { Fragment } from "react";
import Pagination from "shared/components/Pagination/Pagination";
import { useListCategory } from "./hooks/useListCategory";
import { usePagination } from "shared/hooks/usePagination";
import FormSearchInput from "shared/components/Form/FormSearchInput";
import LoadingPlainText from "shared/components/Spinner/LoadingPlainText";
import Table from "shared/components/Table/Table";
import ListCategoryTableBody from "./components/ListCategoryTableBody";

export default function ListCategory() {
  const { categories, search, setSearch, handleDelete } = useListCategory();
  const { itemsPerPage, itemPaginated, paginate } = usePagination(
    10,
    categories
  );

  if (!categories) {
    return <LoadingPlainText text="Loading Categories . . ." />;
  }

  return (
    <Fragment>
      <FormSearchInput handler={(e) => setSearch(e.target.value)} />

      {categories && categories.length !== 0 ? (
        <Fragment>
          <Table tableHeader={["#", "title", "Description", "Action"]}>
            <ListCategoryTableBody
              itemPaginated={itemPaginated}
              search={search}
              handleDelete={handleDelete}
            />
          </Table>

          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={categories.length}
            paginateTo={paginate}
          />
        </Fragment>
      ) : (
        <LoadingPlainText text="No Categories Available" />
      )}
    </Fragment>
  );
}
