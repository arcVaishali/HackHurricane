import React from "react";
import Github from "../components/GitHub/Github";
import Leetcode from "../components/Leetcode/Leetcode";
import Quotes from "../components/Quotes/Quotes";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Links from "../components/Links";
import Task from "../components/Task";
import Timer from "../components/Timer";

const UserDashboard = () => {
  return (
    <>
      <Navbar/>
      {/* <Sidebar/> */}
      <About/>
      <Github />
      <Leetcode />
      <Links/>
      <Timer/>
      <Task/>
      <Quotes />
    </>
  );
};

export default UserDashboard;
