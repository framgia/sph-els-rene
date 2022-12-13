/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import Button from "shared/components/Button/Button";
import { OUTLINE_INFO, OUTLINE_RED } from "shared/components/Button/buttonType";
import CreateWord from "../../../Word/Create/CreateWord";
import EditCategory from "../../Edit/EditCategory";

function ListCategoryTableBody({ itemPaginated, search, handleDelete }) {
  return (
    <Fragment>
      {itemPaginated
        .filter((category) => {
          return search.toString().toLowerCase() === ""
            ? category
            : category.title.toString().toLowerCase().includes(search);
        })
        .map((cat) => (
          <tr className="border-b" key={cat.id}>
            <th
              scope="row"
              className="px-6 py-4 text-md font-medium text-gray-900"
            >
              {cat.id}
            </th>
            <td className="text-md text-gray-900 font-light px-6 py-4">
              {cat.title}
            </td>
            <td className="text-md text-gray-900 font-light px-6 py-4">
              {cat.description}
            </td>
            <td className="lg:flex justify-start sm:inline-block mt-2">
              {cat.words.length !== 20 ? (
                <CreateWord
                  id={cat.id}
                  title={cat.title}
                  categoryWords={cat.words.length}
                />
              ) : (
                <Button text="Full" style={OUTLINE_INFO} />
              )}

              <EditCategory id={cat.id} />

              <Button
                text="Delete"
                style={OUTLINE_RED}
                handler={() => handleDelete(cat.id, cat.title)}
              />
            </td>
          </tr>
        ))}
    </Fragment>
  );
}

export default ListCategoryTableBody;
