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
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={name}
        >
          {label ? label : ""}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
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
          <div id={`${helper}Help`} className="text-gray-600 text-xs mb-2">
            {helper}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default FormInput;
