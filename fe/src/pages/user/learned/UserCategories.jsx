/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/Header";
import { getOneAction } from "../../../redux/actions/actions";
import { getUserId } from "../../../utils";
import * as actionType from "../../../redux/actions/actionTypes";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";

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
      <Header />
      <div className="container card">
        <div className="mb-3 mt-3">
          <h5 className="mx-5">Learned Categories | Lesson</h5>
        </div>

        <div className="row p-3">
          {learned.categories?.map((category) => (
            <div className="col-sm-12 col-lg-6 p-3" key={category.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                  <h6 className="card-subtitle mb-3 text-muted">completed</h6>
                  <p className="card-text">{category.description}</p>
                  <div className="d-flex justify-content-end">
                    <Link
                      to={`/user/category/${category.id}/result`}
                      className="btn btn-primary"
                    >
                      View Result
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default UserCategories;
