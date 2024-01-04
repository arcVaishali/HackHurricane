import React from "react";
import { VictoryPie } from "victory-pie";
import { useSpring, animated } from "@react-spring/web";

const languageData = [
  { x: "JavaScript", y: 900 },
  { x: "TypeScript", y: 400 },
  { x: "SCSS", y: 300 },
];

const packagesData = [
  { x: "react", y: 900 },
  { x: "react-router", y: 400 },
  { x: "axios", y: 300 },
];

const data = [
  { name: "Languages used", data: languageData },
  { name: "packages used", data: packagesData },
];


const Stat3 = () => {
  const property = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });
  return (
    <animated.div className="col-span-12 grid grid-cols-12 m-8 p-8 bg-gradient-to-tr from-blue-400 to-blue-900 shadow-lg rounded-lg cursor-pointer" 
    style={{...property}}
    >
      <span className="col-span-12 font-normal text-sm text-gray-300 pb-4 border-b-[1px] border-gray-300 text-center">
        Languages used
      </span>
      <div className="col-span-12 grid grid-cols-12 justify-between items-center">
        {data.map((element, index) => (
          <animated.div className="col-span-6 grid justify-center items-center" style={{...property}}>
            <VictoryPie
              data={element.data}
              colorScale={["white", "orange", "yellow"]}
              radius={100}
            />
            <span className="text-gray-300 font-normal text-center capitalize">
              {element.name}
            </span>
          </animated.div>
        ))}
      </div>
    </animated.div>
  );
};

export default Stat3;
