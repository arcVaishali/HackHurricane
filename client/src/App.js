import Github from "./components/Github";
import Leetcode from "./components/Leetcode";
import Quotes from "./components/Quotes";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActiveChallenges from "./components/ActiveChallanges";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<UserDashboard />}></Route>    

      </Routes>
    </BrowserRouter>
  );
}

export default App;
