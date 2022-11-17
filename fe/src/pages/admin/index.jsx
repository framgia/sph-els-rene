import React from "react";
import Header from "../Header";
import CreateCategoryModal from "./category/CreateCategoryModal";
import ListCategory from "./category/ListCategory";

function index() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="border mb-3 d-flex justify-content-end">
          <CreateCategoryModal />
        </div>

        <div className="border mb-5">
          <ListCategory />
        </div>
      </div>
    </>
  );
}

export default index;
