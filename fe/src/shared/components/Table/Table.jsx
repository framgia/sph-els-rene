import React from "react";

function Table({ children, style, tableHeader }) {
  let tempID = 0;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  {tableHeader.map((header) => (
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      key={tempID++}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    // <table className="table-fixed">
    //   <thead>
    //     <tr>
    //       {tableHeader.map((header) => (
    //         <th scope="col" key={tempID++}>
    //           {header}
    //         </th>
    //       ))}
    //     </tr>
    //   </thead>
    //   <tbody>{children}</tbody>
    // </table>
  );
}

export default Table;
