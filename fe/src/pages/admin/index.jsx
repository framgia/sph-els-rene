import React from "react";
import Header from "../Header";
import CreateCategoy from "./category/CreateCategory";
import ListCategory from "./category/ListCategory";

function index() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="border mb-3 d-flex justify-content-end">
          <CreateCategoy />
        </div>

        <div className="border mb-5">
          <ListCategory />
        </div>
      </div>
    </>
  );
}

export default index;
