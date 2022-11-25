import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import { getAllAction } from "../../redux/actions/actions";
import * as actionType from "../../redux/actions/actionTypes";

function UserPage() {
  const { users, loading } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAction("/api/users", actionType.GET_USERS));
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <Header />

      <div className="container card">
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <img
                    className="rounded-circle border border-3 align-self-center"
                    style={{ width: 100, height: 100 }}
                    src={user.avatar ?? "/images/default_image.jpg"}
                    alt="avatar"
                  />
                </td>
                <td className="align-middle">
                  {user.first_name + " " + user.last_name}
                </td>
                <td className="align-middle"> {user.email}</td>
                <td className="align-middle">
                  <Link to={`/user/profile/${user.id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default UserPage;
