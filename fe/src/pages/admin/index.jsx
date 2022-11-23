import React, { Fragment } from "react";
import Header from "../../components/Header";
import CreateCategory from "./category/CreateCategory";
import ListCategory from "./category/ListCategory";

function index() {
  return (
    <Fragment>
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
