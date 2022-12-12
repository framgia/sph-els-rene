import React from "react";

function Table({ children, style, tableHeader }) {
  let tempID = 0;

  return (
    <table className={style ? style : "table table-striped"}>
      <thead>
        <tr>
          {tableHeader.map((header) => (
            <th scope="col" key={tempID++}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default Table;
