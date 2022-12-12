import { useState } from "react";

export const usePagination = (itemPerPage, items) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(itemPerPage);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const itemPaginated = items?.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return {
    itemsPerPage,
    itemPaginated,
    paginate,
  };
};
