import "./App.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Allusers from "./components/Allusers";
import Addprofile from  "./components/Addprofile"
import Profile from "./components/Profile";
function App() {
  return (
    <>
      <Router>
        <MyNav />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Profile />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/allusers" element={<Allusers />} />
          <Route exact path="/addprofile" element={<Addprofile />} />
          {/* <Route exact path="/profile" element={<Profile />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
