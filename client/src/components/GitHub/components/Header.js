import React from "react";
import GitHubLogo from "../../../assets/GitHubLogo.png";

const Header = () => {
  var greeting = "Good Morning";
  var username = "Vaishali";
  const date = "December 23 2023";
  return (
    <div className="grid grid-cols-12 col-span-12 justify-between items-center border-b-2 border-white pb-4">
      <span className="col-span-10 text-sm font-extralight my-2">
        <img src={GitHubLogo} />
      </span>
      <span className="col-span-2 text-sm font-medium">{date}</span>
    </div>
  );
};

export default Header;
