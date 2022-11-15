import "./index.css";
import Home from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/authentication/Register";
import axios from "axios";
import Login from "./pages/authentication/Login";

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-type"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("user_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
