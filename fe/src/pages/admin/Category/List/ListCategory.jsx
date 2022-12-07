import React, { Fragment } from "react";
import EditCategory from "../Edit/EditCategory";
import Pagination from "../../../../components/Pagination";
import CreateWord from "../../Word/Create/CreateWord";
import { useListCategory } from "./hooks/useListCategory";
import { usePagination } from "../../../../shared/hooks/usePagination";

export default function ListCategory() {
  const { categories, search, setSearch, handleDelete } = useListCategory();
  const { itemsPerPage, itemPaginated, paginate } = usePagination(
    10,
    categories
  );

  if (!categories) {
    return (
      <div className="card d-flex justify-content-center">
        <h1 className="mx-auto">Loading Categories . . .</h1>
      </div>
    );
  }

  return (
    <Fragment>
      <form className="mb-1">
        <input
          className="form-control me-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {categories && categories.length !== 0 ? (
        <Fragment>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {itemPaginated
                .filter((category) => {
                  return search.toString().toLowerCase() === ""
                    ? category
                    : category.title.toString().toLowerCase().includes(search);
                })
                .map((cat) => (
                  <tr key={cat.id}>
                    <th scope="row">{cat.id}</th>
                    <td>{cat.title}</td>
                    <td>{cat.description}</td>
                    <td className="d-flex">
                      {cat.words.length !== 20 ? (
                        <CreateWord
                          id={cat.id}
                          title={cat.title}
                          categoryWords={cat.words.length}
                        />
                      ) : (
                        <button
                          type="button"
                          className="btn btn-outline-info mx-1 disabled"
                        >
                          Full
                        </button>
                      )}

                      <EditCategory id={cat.id} />
                      <button
                        type="button"
                        className="btn btn-outline-danger mx-1"
                        onClick={() => handleDelete(cat.id, cat.title)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={categories.length}
            paginateTo={paginate}
          />
        </Fragment>
      ) : (
        <div className="card d-flex justify-content-center">
          <h1 className="mx-auto">No Categories Available</h1>
        </div>
      )}
    </Fragment>
  );
}
