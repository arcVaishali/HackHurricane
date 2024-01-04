import Github from "./components/Github";
import Leetcode from "./components/Leetcode";
import Quotes from "./components/Quotes";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import Links from "./components/Links";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Signup />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<UserDashboard />}></Route>
        <Route path="/links" element={<Links />}></Route>
        <Route path="/" element={<About />}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
