/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import { getAllAction } from "../../../redux/actions/actions";
import * as actionType from "../../../redux/actions/actionTypes";

function index() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getAllAction("api/lessons", actionType.GET_CATEGORIES));
  }, []);

  return (
    <Fragment>
      <Header />

      <div className="container card p-3">
        <div className="mb-3 mt-3">
          <h5 className="mx-5">Categories | Lesson</h5>
        </div>

        <div className="row p-3">
          {categories.map((category) => (
            <div className="col-sm-12 col-lg-6 p-3" key={category.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                  <h6 className="card-subtitle mb-3 text-muted">
                    {category.words.length} words
                  </h6>
                  <p className="card-text">{category.description}</p>
                  <div className="d-flex justify-content-end">
                    <Link
                      to={`/user/category/${category.id}/quiz`}
                      className={`btn btn-primary ${
                        category.words.length >= 20 ? "" : "disabled"
                      }`}
                    >
                      Start Lesson
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

export default index;
