/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../../../../components/Header";
import { getOneAction } from "../../../../redux/actions/actions";
import * as actionType from "../../../../redux/actions/actionTypes";

function QuizResult() {
  const dispatch = useDispatch();
  const params = useParams();
  const { score, result, category } = useSelector((state) => state.summary);

  useEffect(() => {
    dispatch(
      getOneAction(`api/user_words/${params.id}`, actionType.GET_SUMMARY)
    );
  }, []);

  return (
    <Fragment>
      <Header />
      <ToastContainer />
      <div className="container card">
        <div className="d-flex justify-content-around mb-5 mt-5">
          <h5>{category.title}</h5>
          <h5>{score} out of 20</h5>
        </div>

        <div className="border w-75 mx-auto">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Word</th>
                <th scope="col">Translation</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item) => (
                <tr key={item.word_id}>
                  <th scope="row">
                    {item.remark === "1" ? (
                      <span>&#9989;</span>
                    ) : (
                      <span>&#10060;</span>
                    )}
                  </th>
                  <td>{item.word}</td>
                  <td>{item.translation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default QuizResult;
