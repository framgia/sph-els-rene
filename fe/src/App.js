import "./index.css";
import Home from "./pages";
import AdminWords from "./pages/admin/Word";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Authentication/Register/Register";
import Login from "./pages/Authentication/Login/Login";
import "./api/AuthSetup";
import { Fragment } from "react";
import Profile from "./pages/user/Profile/Profile";
import UserPage from "./pages/user/List/UserPage";
import UserCategory from "./pages/user/category";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import TakeQuiz from "./pages/user/category/Quiz/TakeQuiz/TakeQuiz";
import QuizResult from "./pages/user/category/Quiz/QuizResult/QuizResult";
import ViewCategory from "./pages/user/category/List/ViewCategory";
import UserWord from "./pages/user/Learned/UserWord";
import UserCategories from "./pages/user/Learned/UserCategories";
import ProfileEdit from "./pages/user/Profile/ProfileEdit";

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
          <Route path="/user/profile" element={<ProfileEdit />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/user/category" element={<UserCategory />} />
          <Route path="/user/category/:id/quiz" element={<TakeQuiz />} />
          <Route path="/user/category/:id/result" element={<QuizResult />} />
          <Route path="/user/category/:id/view" element={<ViewCategory />} />
          <Route path="/user/learned/words" element={<UserWord />} />
          <Route path="/user/learned/categories" element={<UserCategories />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
