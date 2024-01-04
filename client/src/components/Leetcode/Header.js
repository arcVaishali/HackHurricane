import React from "react";
import LeetcodeLogo from "../../assets/leetcode.png";
const Header = () => {
  var greeting = "Good Morning";
  var username = "Vaishali";
  const date = "December 23 2023";
  return (
    <div className="grid grid-cols-12 col-span-12 justify-between items-center border-b-[1px] border-gray-400 pb-4 my-4">
      <span className="col-span-10 text-sm font-extralight my-2">
        <img className="w-16" src={LeetcodeLogo} />
      </span>
      <span className="col-span-2 text-sm font-medium">{date}</span>
    </div>
  );
};

export default Header;
