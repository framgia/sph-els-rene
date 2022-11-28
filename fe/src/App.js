import "./index.css";
import Home from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import "./api/AuthSetup";
import { Fragment } from "react";
import Profile from "./pages/user/Profile";
import UserPage from "./pages/user/UserPage";
import UserCategory from "./pages/user/category";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import TakeQuiz from "./pages/user/category/TakeQuiz";

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
          <Route path="/user/category" element={<UserCategory />} />
          <Route path="/user/category/:id/quiz" element={<TakeQuiz />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
