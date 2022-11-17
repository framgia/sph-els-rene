import React from "react";
import Header from "../Header";

import ListCategory from "./category/ListCategory";

function index() {
  return (
    <>
      {/* <div className="mb-4">ADMIN PAGE INDEX | Create Layout for header</div>
       */}
      <Header />
      <div className="container">
        <div className="border mb-3 d-flex justify-content-end">
          <button type="button" className="btn btn-primary">
            Create Category
          </button>
        </div>

        <div className="border mb-5">
          <ListCategory />
        </div>
      </div>
    </>
  );
}

export default index;
