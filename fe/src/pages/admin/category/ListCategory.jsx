import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAction, getAllAction } from "../../../redux/actions/actions";
import EditCategory from "./EditCategory";
import * as actionType from "../../../redux/actions/actionTypes";
import Pagination from "../../../components/Pagination";
import CreateWord from "../../word/CreateWord";

export default function ListCategory() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllAction("api/lessons", actionType.GET_CATEGORIES));
  }, []);

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"`)) {
      dispatch(
        deleteAction(
          `/api/lessons/${id}`,
          actionType.DELETE_CATEGORIES,
          "/api/lessons",
          actionType.GET_CATEGORIES
        )
      );
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const categoriesPaginated = categories?.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              {categoriesPaginated
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
                      <CreateWord id={cat.id} title={cat.title} />
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
