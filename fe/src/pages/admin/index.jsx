import React from "react";
import { ToastContainer } from "react-toastify";
import Container from "shared/components/Layout/Container/Container";
import LayoutEndChildren from "shared/components/Layout/Positioning/LayoutEndChildren";
import CreateCategory from "./Category/Create/CreateCategory";
import ListCategory from "./Category/List/ListCategory";

function index() {
  return (
    <Container>
      <ToastContainer />
      <LayoutEndChildren>
        <CreateCategory />
      </LayoutEndChildren>
      <ListCategory />
    </Container>
  );
}

export default index;
