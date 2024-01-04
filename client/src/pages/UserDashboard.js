import React from "react";
import Github from "../components/Github";
import Leetcode from "../components/Leetcode";
import Quotes from "../components/Quotes";

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
