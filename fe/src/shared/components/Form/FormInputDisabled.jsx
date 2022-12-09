import React, { Fragment } from "react";

function FormInputDisabled({ label, style, name, type, value, helper }) {
  return (
    <Fragment>
      <div className={style ? style : "mb-3"}>
        <label className="form-lable" htmlFor={name}>
          {label ? label : ""}
        </label>
        <input
          className="form-control"
          type={type ? type : "text"}
          name={name}
          data-name={name}
          id={name}
          placeholder={label ? label : "Please Input Text"}
          defaultValue={value}
          aria-describedby={`${helper}Help`}
          disabled
        />
        {helper && (
          <div id={`${helper}Help`} className="form-text">
            {helper}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default FormInputDisabled;
