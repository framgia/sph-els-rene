import React, { Fragment } from "react";

function FormInput({
  label,
  style,
  name,
  type,
  value,
  helper,
  hidden,
  handler,
}) {
  return (
    <Fragment>
      <div className={style ? style : "mb-3"} hidden={hidden ? true : false}>
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
          value={value}
          aria-describedby={`${helper}Help`}
          onChange={handler}
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

export default FormInput;
