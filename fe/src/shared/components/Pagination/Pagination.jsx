import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  const totalPageItems = Math.ceil(props.totalItems / props.itemsPerPage);

  return (
    <nav aria-label="Page Navigation">
      <ul className="inline-flex -space-x-px">
        {[...Array(totalPageItems)].map((key, page) => (
          <li className="page-item" key={page + 1}>
            <Link
              to={"#"}
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded"
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
