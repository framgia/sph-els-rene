import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav aria-label="Page Navigation">
      <ul className="pagination">
        {pageNumber.map((page) => (
          <li className="page-item" key={page}>
            <Link
              to={"#"}
              className="page-link"
              onClick={() => props.paginateTo(page)}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
