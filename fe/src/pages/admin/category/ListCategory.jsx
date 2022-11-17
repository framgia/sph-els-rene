import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAction } from "../../../redux/actions";

export default function ListCategory() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(getAllAction("api/lessons"));
  }, []);

  return (
    <>
      {categories ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id}>
                <th scope="row">{cat.id}</th>
                <td>{cat.title}</td>
                <td>{cat.description}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary mx-1"
                  >
                    Add word
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning mx-1"
                  >
                    Edit
                  </button>
                  <button type="button" className="btn btn-outline-danger mx-1">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="card d-flex justify-content-center">
          <h1 className="mx-auto">No Categories Available</h1>
        </div>
      )}
    </>
  );
}
