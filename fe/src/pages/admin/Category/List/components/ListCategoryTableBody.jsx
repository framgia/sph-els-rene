/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import Button from "../../../../../shared/components/Button/Button";
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
          <tr key={cat.id}>
            <th scope="row">{cat.id}</th>
            <td>{cat.title}</td>
            <td>{cat.description}</td>
            <td className="d-flex">
              {cat.words.length !== 20 ? (
                <CreateWord
                  id={cat.id}
                  title={cat.title}
                  categoryWords={cat.words.length}
                />
              ) : (
                <Button
                  text={"Full"}
                  style={"btn btn-outline-info mx-1 disabled"}
                />
              )}

              <EditCategory id={cat.id} />

              <Button
                text={"Delete"}
                style={"btn btn-outline-danger mx-1"}
                handler={() => handleDelete(cat.id, cat.title)}
              />
            </td>
          </tr>
        ))}
    </Fragment>
  );
}

export default ListCategoryTableBody;
