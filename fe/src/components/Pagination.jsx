import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  const totalPageItems = Math.ceil(props.totalItems / props.itemsPerPage);

  return (
    <nav aria-label="Page Navigation">
      <ul className="pagination">
        {[...Array(totalPageItems)].map((key, page) => (
          <li className="page-item" key={page + 1}>
            <Link
              to={"#"}
              className="page-link"
              onClick={() => props.paginateTo(page + 1)}
            >
              {page + 1}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
