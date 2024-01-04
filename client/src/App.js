import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";

import Sidebar from "./components/Sidebar.js";

import Links from "./components/Links";
import About from "./components/About";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActiveChallenges from "./components/ActiveChallanges";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Signup />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<UserDashboard />}></Route>

        <Route path="/Sidebar" element={<Sidebar/>}></Route>

        <Route path="/links" element={<Links />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/nav" element={<Navbar />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route path="/" element={<Task />}></Route>
        <Route path="/challanges" element={<ActiveChallenges />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
