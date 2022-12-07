import React, { Fragment } from "react";

function ProfileCurrentUser(props) {
  return (
    <Fragment>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          name="email"
          data-name="email"
          value={props.user.email || ""}
          disabled
        />
      </div>

      <div className="mb-3">
        <label htmlFor="first_name" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="first_name"
          aria-describedby="first_nameHelp"
          name="first_name"
          data-name="first_name"
          value={props.user.first_name || ""}
          disabled
        />
      </div>

      <div className="mb-3">
        <label htmlFor="middle_name" className="form-label">
          Middle Name
        </label>
        <input
          type="text"
          className="form-control"
          id="middle_name"
          aria-describedby="middle_nameHelp"
          name="middle_name"
          data-name="middle_name"
          value={props.user.middle_name || ""}
          disabled
        />
      </div>

      <div className="mb-3">
        <label htmlFor="last_name" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="last_name"
          aria-describedby="last_nameHelp"
          name="last_name"
          data-name="last_name"
          value={props.user.last_name || ""}
          disabled
        />
      </div>
    </Fragment>
  );
}

export default ProfileCurrentUser;
