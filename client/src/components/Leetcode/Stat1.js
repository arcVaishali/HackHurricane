import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faFire,
  faFireFlameCurved,
  faFireFlameSimple,
} from "@fortawesome/free-solid-svg-icons";
import { useScroll , useSpring, animated } from "@react-spring/web";

const Stat1 = () => {
  const gitHubStats = [
    {
      name: "Problems Solved",
      value: "12",
      icon: faCheck,
    },
    {
      name: "Current Streak",
      value: "12",
      icon: faFire,
    },
    {
      name: "DCC",
      value: "24",
      icon: faFireFlameSimple,
    },
    {
      name: "Max Streak",
      value: "24",
      icon: faFireFlameCurved,
    },
  ];

  const springs = useSpring({
    from: { x: -50 },
    to: { x: 0 },
  });

  const styles = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
  });
  const containerRef = React.useRef<HTMLDivElement>(!null);

  const { scrollYProgress } = useScroll( {
    container : containerRef,
    reverse : true 
  }) ;

  return (
    <animated.div
      className="col-span-12 grid grid-cols-12 m-8 p-8 bg-white shadow-lg rounded-lg cursor-pointer text-black"
      style={{
        ...springs,
      }}
    >
      {gitHubStats.map((element, index) => (
        <div
          className={
            element.name != "Max Streak"
              ? "grid grid-rows col-span-3 border-r-2 border-gray-400"
              : "grid grid-rows col-span-3"
          }
        >
          <animated.div
            className="flex justify-center items-center text-7xl font-bold text-center"
            style={{
              ...styles,
            }}
          >
            <span className="transition-all hover:scale-105 duration-900 delay-100">
              {element.value}
            </span>

            <FontAwesomeIcon
              className="text-3xl transition-all animate-bounce hover:skew-y-12 hover:scale-105 hover:skew-x-12 duration-900 delay-100"
              icon={element.icon}
            />
          </animated.div>
          <span className="text-base font-semibold  text-center">
            {element.name}
          </span>
        </div>
      ))}
    </animated.div>
  );
};

export default Stat1;
