/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../../components/Header";
import { getAllAction } from "../../../redux/actions/actions";
import * as actionType from "../../../redux/actions/actionTypes";

function viewCategory() {
  const dispatch = useDispatch();
  const params = useParams();
  const { category, categories } = useSelector((state) => state.categories);
  const [done, setDone] = useState(true);

  useEffect(() => {
    dispatch(getAllAction(`api/lessons/${params.id}`, actionType.GET_CATEGORY));
    dispatch(
      getAllAction("api/user_available_lesson", actionType.GET_CATEGORIES)
    );
  }, []);

  useEffect(() => {
    const cat = categories?.find((cat) => cat.id === parseInt(params.id));

    if (cat) {
      setDone(false);
    }
  }, [categories]);
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

export default viewCategory;
