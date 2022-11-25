import "./index.css";
import Home from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import "./api/AuthSetup";
import { Fragment } from "react";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import Profile from "./pages/user/Profile";
import UserPage from "./pages/user/UserPage";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buffer" element={<AuthMiddleware />} />
          <Route path="/user/profile/:id" element={<Profile />} />
          <Route path="/users" element={<UserPage />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
