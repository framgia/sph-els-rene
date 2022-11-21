import "./index.css";
import Home from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import "./api/AuthSetup";
import { Fragment } from "react";
import BufferPage from "./pages/BufferPage";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buffer" element={<BufferPage />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
