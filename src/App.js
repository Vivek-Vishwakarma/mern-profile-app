import "./App.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Allusers from "./components/Allusers";
function App() {
  return (
    <>
      <Router>
        <MyNav />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/allusers" element={<Allusers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
