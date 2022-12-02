/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header";
import { getOneAction } from "../../../redux/actions/actions";
import { getUserId } from "../../../utils";
import * as actionType from "../../../redux/actions/actionTypes";
import { Link } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import LoadingSpinner from "../../../components/LoadingSpinner";

function UserWord() {
  const dispatch = useDispatch();

  const { user, learned } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getOneAction(`/api/users/${getUserId()}`, actionType.GET_USER));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const wordsPaginated = learned.words?.slice(firstItemIndex, lastItemIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!wordsPaginated) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <Header />
      <div className="container card p-2">
        <div className="row gx-2">
          <div className="col-lg-4 col-md-4 mb-2">
            <div className="p-3">
              <div className="d-flex justify-content-center">
                <img
                  className="mx-auto rounded-circle"
                  style={{ width: 200, height: 200 }}
                  src={user?.avatar ?? "/images/default_image.jpg"}
                  alt="avatar"
                />
              </div>
            </div>
            <div className="mt-1 d-flex justify-content-center">
              <p className="text-uppercase fw-bold fs-3 text">
                {user?.first_name + " " + user?.last_name || ""}
              </p>
            </div>

            <div className="d-flex justify-content-center p-0 m-0">
              <Link to="/user/learned/categories" className=" fs-6 text">
                Learned {learned.categoriesCount} categories
              </Link>
            </div>
          </div>
          <div className="col mb-2">
            <div className="p-3 card ">
              <div className="mb-3">
                <h4>Learned Words</h4>
              </div>

              <div className="mb-3">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Word</th>
                      <th scope="col">Translation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wordsPaginated &&
                      wordsPaginated?.map((item) => (
                        <tr key={item.word_id}>
                          <td>{item.word}</td>
                          <td>{item.translation}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>

                <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={learned.wordsCount}
                  paginateTo={paginate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default UserWord;
