import React, { Fragment } from "react";

function FormInputDisabled({ label, style, name, type, value, info }) {
  return (
    <Fragment>
      <div className={style ? style : "mb-3"}>
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
          defaultValue={value}
          aria-describedby={`${info}Help`}
          disabled
        />
        {info && (
          <div id={`${info}Help`} className="text-gray-600 text-xs mb-2">
            {info}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default FormInputDisabled;
