import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import Header from "../../../../../components/Header";
import { useQuizResult } from "./hooks/useQuizResult";

function QuizResult() {
  const { score, result, category } = useQuizResult();

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
