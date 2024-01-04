import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import ActiveChallenges from "./components/ActiveChallenges"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<UserDashboard />}></Route>    
        <Route path="/challenges" element={<ActiveChallenges />}></Route>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
