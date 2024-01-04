import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faFire,
  faFireFlameCurved,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";
import Stat1 from "./components/Stat1";
import Stat2 from "./components/Stat2";
import Header from "./components/Header";
import Stat3 from "./components/Stat3";

const Github = () => {
  return (
    <div className="grid grid-cols-12 justify-center items-center col-span-12 p-8 m-8 bg-gradient-to-b from-[#f0f0f0] to-gray-100 shadow-xl rounded-md">
      <Header />

      <Stat1 />

      <Stat2 />

      <Stat3/>
    </div>
  );
};

export default Github;
