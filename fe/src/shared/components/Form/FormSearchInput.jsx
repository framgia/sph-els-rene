import React from "react";

function FormSearchInput({ handler }) {
  return (
    <form className="mb-5 mt-1">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handler}
      />
    </form>
  );
}

export default FormSearchInput;
