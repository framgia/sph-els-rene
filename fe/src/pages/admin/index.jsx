import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import Header from "../../components/Header";
import CreateCategory from "./Category/Create/CreateCategory";
import ListCategory from "./Category/List/ListCategory";

function index() {
  return (
    <Fragment>
      <ToastContainer />
      <Header />
      <div className="container">
        <div className="mb-3 d-flex justify-content-end">
          <CreateCategory />
        </div>

        <div className="mb-5">
          <ListCategory />
        </div>
      </div>
    </Fragment>
  );
}

export default index;
