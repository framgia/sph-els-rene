import React from "react";

function FormSearchInput({ handler }) {
  return (
    <form className="mb-1 mt-1">
      <input
        className="form-control me-5"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handler}
      />
    </form>
  );
}

export default FormSearchInput;
