import React, { Fragment } from "react";
import Header from "../Header";
import CreateCategoy from "./category/CreateCategory";
import ListCategory from "./category/ListCategory";

function index() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="border mb-3 d-flex justify-content-end">
          <CreateCategoy />
        </div>

        <div className="border mb-5">
          <ListCategory />
        </div>
      </div>
    </Fragment>
  );
}

export default index;
