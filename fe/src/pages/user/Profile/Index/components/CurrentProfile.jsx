import React, { Fragment } from "react";
import FormInputDisabled from "shared/components/Form/FormInputDisabled";

function CurrentProfile(props) {
  return (
    <Fragment>
      <FormInputDisabled
        label="Email"
        name="email"
        value={props.user.email || ""}
      />

      <FormInputDisabled
        label="First Name"
        name="first_name"
        value={props.user.first_name || ""}
      />

      {props.user.middle_name && (
        <FormInputDisabled
          label="Middle Name"
          name="middle_name"
          value={props.user.middle_name || ""}
        />
      )}

      <FormInputDisabled
        label="Last Name"
        name="last_name"
        value={props.user.last_name || ""}
      />
    </Fragment>
  );
}

export default CurrentProfile;
