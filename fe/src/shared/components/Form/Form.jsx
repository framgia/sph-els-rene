import React from "react";

function Form({ action, style, handler, children }) {
  return (
    <form action={action} onSubmit={handler} className={style}>
      {children}
    </form>
  );
}

export default Form;
