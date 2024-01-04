import React from "react";
import { VictoryPie } from "victory-pie";
import { useSpring, animated } from "@react-spring/web";

const Type = [
  { x: "Easy", y: 900 },
  { x: "Medium", y: 400 },
  { x: "Hard", y: 300 },
];

const packagesData = [
  { x: "react", y: 900 },
  { x: "react-router", y: 400 },
  { x: "axios", y: 300 },
];

const data = [
  { name: "Problems Solved", data: Type },
  { name: "Contests ratings", data: packagesData },
];


const Stat3 = () => {
  const property = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });
  return (
    <animated.div className="col-span-12 grid grid-cols-12 m-8 p-8  bg-white rounded-xl  cursor-pointer" 
    style={{...property}}
    >
      <span className="col-span-12 font-normal text-sm  pb-4 border-b-[1px] border-[#f0f0f0] text-center">
        Other stats
      </span>
      <div className="col-span-12 grid grid-cols-12 justify-between items-center">
        {data.map((element, index) => (
          <animated.div className="col-span-6 grid justify-center items-center" style={{...property}}>
            <VictoryPie
              data={element.data}
              colorScale={["green", "yellow", "red"]}
              radius={100}
            />
            <span className="font-normal text-center capitalize">
              {element.name}
            </span>
          </animated.div>
        ))}
      </div>
    </animated.div>
  );
};

export default Stat3;
