import "./index.css";
import Home from "./pages";
import UserDashboard from "./pages/user";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/authentication/Register";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-type"] = "application/json";
axios.defaults.withCredentials = true;

function App() {
  const token = localStorage.getItem("user_token") ?? "";
  const user = localStorage.getItem("user");

  return (
    <>
      <Router>
        <Routes>
          {token === "" ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
            </>
          ) : (
            <>
              <Route path="/" element={<UserDashboard />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
