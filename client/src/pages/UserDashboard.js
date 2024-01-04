import React from "react";
import Github from "../components/GitHub/Github";
import Leetcode from "../components/Leetcode/Leetcode";
import Quotes from "../components/Quotes/Quotes"

const UserDashboard = () => {
  return (
    <>
      <Github />
      <Leetcode />
      <Quotes />
    </>
  );
};

export default UserDashboard;
