/* eslint-disable react/style-prop-object */
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Avatar from "shared/components/Image/Avatar";

function UserPagetableBody({ itemPaginated, search }) {
  return (
    <Fragment>
      {itemPaginated
        .filter((user) => {
          return search.toString().toLowerCase() === ""
            ? user
            : user.first_name.toString().toLowerCase().includes(search) ||
                user.last_name.toString().toLowerCase().includes(search) ||
                user.email.toString().toLowerCase().includes(search);
        })
        .map((user) => (
          <tr key={user.id}>
            <td className="align-middle">
              <Avatar
                img={user.avatar}
                style="rounded-full border-2 border-gray-200 "
                customStyle={{ width: 100, height: 100 }}
              />
            </td>
            <td className="align-middle">
              {user.first_name + " " + user.last_name}
            </td>
            <td className="align-middle"> {user.email}</td>
            <td className="align-middle">
              <Link
                to={`/user/profile/${user.id}`}
                className="text-blue-500 hover:text-blue-700 underline"
              >
                View
              </Link>
            </td>
          </tr>
        ))}
    </Fragment>
  );
}

export default UserPagetableBody;
