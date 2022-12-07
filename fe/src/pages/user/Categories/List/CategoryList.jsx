/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../../../components/Header";
import { useCategoryList } from "./hooks/useCategoryList";

function CategoryList() {
  const { category, done } = useCategoryList();
  return (
    <Fragment>
      <Header />

      <div className="container card">
        <div className="card w-75 mx-auto mb-5 mt-5 p-5">
          <div className="d-flex justify-content-center mb-3">
            <h1>{category.title}</h1>
          </div>

          <div className="d-flex justify-content-center mb-3">
            <h6>{category.description}</h6>
          </div>

          {done ? (
            <Fragment>
              <div className="d-flex justify-content-center mb-3">
                You have completed this lesson already
              </div>
              <div className="d-flex justify-content-center mb-3">
                <Link
                  to={`/user/category/${category.id}/result`}
                  className="btn btn-outline-primary"
                >
                  View Result
                </Link>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="d-flex justify-content-center mb-3">
                Looks Like You havent tried this lesson yet
              </div>
              <div className="d-flex justify-content-center mb-3">
                <Link
                  to={`/user/category/${category.id}/quiz`}
                  className="btn btn-outline-primary"
                >
                  Start Lesson
                </Link>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default CategoryList;
