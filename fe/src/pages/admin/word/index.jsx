/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header";
import Pagination from "../../../components/Pagination";
import { deleteAction, getAllAction } from "../../../redux/actions/actions";
import * as actionType from "../../../redux/actions/actionTypes";
import EditWord from "./EditWord";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { ToastContainer } from "react-toastify";

function index() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const { words, loading } = useSelector((state) => state.words);
  useEffect(() => {
    dispatch(getAllAction("api/words", actionType.GET_WORDS));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const wordsPaginated = words?.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"`)) {
      dispatch(
        deleteAction(
          `/api/words/${id}`,
          actionType.DELETE_WORDS,
          "/api/words",
          actionType.GET_WORDS
        )
      );
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <ToastContainer />
      <Header />
      {words && (
        <div className="container">
          <form className="mb-1">
            <input
              className="form-control me-5"
              type="search"
              placeholder="Search Word or Category . . ."
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

          <div className="row p-3">
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={words.length}
              paginateTo={paginate}
            />
            {wordsPaginated
              .filter((word) => {
                return search.toString().toLowerCase() === ""
                  ? word
                  : word.title.toString().toLowerCase().includes(search) ||
                      word.lesson.title
                        .toString()
                        .toLowerCase()
                        .includes(search);
              })
              .map((w) => (
                <div className="col-sm-12 col-md-6 col-lg-4 p-3" key={w.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{w.title}</h5>
                      <h6 className="card-subtitle mb-3 text-muted">
                        {w.lesson.title}
                      </h6>
                      <div className="mt-5">
                        <h6>Options: </h6>
                        <div className="row mb-5">
                          {w.choices.map((option) => (
                            <div
                              className="col-6 d-flex justify-content-center mb-2 mt-2"
                              key={option.id}
                            >
                              {option.word}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="d-flex justify-content-around">
                        <EditWord id={w.id} />
                        {!w.lesson.user_words.length > 0 && (
                          <button
                            type="button"
                            className="btn btn-outline-danger mx-1"
                            onClick={() => handleDelete(w.id, w.title)}
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={words.length}
            paginateTo={paginate}
          />
        </div>
      )}
    </Fragment>
  );
}

export default index;
