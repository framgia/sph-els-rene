import React, { Fragment } from "react";
import logo from "../logo.svg";
import "../App.css";

function LoadingSpinner(props) {
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {props.message ? <h1>{props.message}</h1> : <h1>Loading . . .</h1>}
        </header>
      </div>
    </Fragment>
  );
}

export default LoadingSpinner;
