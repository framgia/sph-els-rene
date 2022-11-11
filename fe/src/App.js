import "./index.css";
import Home from "./pages";
import UserDashboard from "./pages/user";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const token = true;

  return (
    <>
      <Router>
        <Routes>
          {token === false ? (
            <>
              <Route path="/" element={<Home />} />
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
