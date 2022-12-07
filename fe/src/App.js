import "./index.css";
import Home from "./pages";
import AdminWords from "./pages/admin/Word";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Authentication/Register/Register";
import Login from "./pages/Authentication/Login/Login";
import "./api/AuthSetup";
import { Fragment } from "react";
import Profile from "./pages/user/Profile/Index/ProfileIndex";
import UserPage from "./pages/user/List/UserPage";
import UserCategory from "./pages/user/Category";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import QuizStart from "./pages/user/Category/Quiz/QuizStart/QuizStart";
import QuizResult from "./pages/user/Category/Quiz/QuizResult/QuizResult";
import ListUserCategory from "./pages/user/Category/List/ListUserCategory";
import UserWord from "./pages/user/UserLearning/UserWord";
import UserCategories from "./pages/user/UserLearning/UserCategories";
import ProfileEdit from "./pages/user/Profile//Edit/ProfileEdit";

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
          <Route path="/user/category/:id/quiz" element={<QuizStart />} />
          <Route path="/user/category/:id/result" element={<QuizResult />} />
          <Route
            path="/user/category/:id/view"
            element={<ListUserCategory />}
          />
          <Route path="/user/learned/words" element={<UserWord />} />
          <Route path="/user/learned/categories" element={<UserCategories />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
