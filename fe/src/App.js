import "./index.css";
import Home from "./pages";
import AdminWords from "./pages/admin/word";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import "./api/AuthSetup";
import { Fragment } from "react";
import Profile from "./pages/user/Profile";
import UserPage from "./pages/user/UserPage";
import UserCategory from "./pages/user/category";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import TakeQuiz from "./pages/user/category/quiz/TakeQuiz";
import QuizResult from "./pages/user/category/quiz/QuizResult";
import UserWord from "./pages/user/learned/UserWord";
import UserCategories from "./pages/user/learned/UserCategories";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/words" element={<AdminWords />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buffer" element={<AuthMiddleware />} />
          <Route path="/user/profile/:id" element={<Profile />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/user/category" element={<UserCategory />} />
          <Route path="/user/category/:id/quiz" element={<TakeQuiz />} />
          <Route path="/user/category/:id/result" element={<QuizResult />} />
          <Route path="/user/learned/words" element={<UserWord />} />
          <Route path="/user/learned/categories" element={<UserCategories />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
