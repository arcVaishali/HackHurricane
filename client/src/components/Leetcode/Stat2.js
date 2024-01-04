import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Stat2 = () => {
  const repos = [
    {
      id: 1,
      name: "XOR Operation on Prefix",
      difficulty: "Medium",
      topics: ["arrays", "two pointers", "bit manipulation"],
    },
    {
      id: 2,
      name: "Subarray Beauty",
      difficulty: "Easy",
      topics: ["arrays", "two pointers", "bit manipulation"],
    },
    {
      id: 3,
      name: "N Queens Level 2",
      difficulty: "Hard",
      topics: ["arrays", "two pointers", "bit manipulation"],
    },
  ];
  const cols = [
    "Repository name",
    "Issues created",
    "Issues closed",
    "PR opened",
    "PR merged",
    "commits",
  ];

  const springs = useSpring({
    from: { x: 50 },
    to: { x: 0 },
  });

  const property = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  return (
    <animated.div
      className="grid grid-cols-12 col-span-12 m-8 p-8 bg-gradient-to-tr from-blue-400 to-blue-900 shadow-lg rounded-lg 
      justify-center items-center text-white"
      style={{
        ...springs,
      }}
    >
      <span className="col-span-12 text-center text-sm font-extralight capitalize">
        Problems solved
      </span>

      <animated.div
        className="col-span-12 justify-center items-center my-4 p-4 border-[1px] border-gray-200"
        style={{
          ...property,
        }}
      >
        {repos.map((element, index) => (
          <div className="grid grid-cols-12 col-span-12 justify-center items-center p-4 border-b-[1px] border-gray-400">
            <div className="col-span-4 px-4 font-light capitalize text-sm">
              {element.name}
            </div>

            <div className="col-span-3 p-2">
              <animated.span
                className={
                  element.difficulty === "Medium"
                    ? "text-xl font-bold text-center text-yellow-400"
                    : element.difficulty === "Easy"
                    ? "text-xl font-bold text-center text-green-500"
                    : "text-xl font-bold text-center text-red-400"
                }
                style={{ ...property }}
              >
                {element.difficulty}
              </animated.span>
            </div>

            <div className="col-span-5">
              {element.topics.map((ele, ind) => (
                <animated.span
                  className="text-[10px] font-extralight text-center p-2 m-2 bg-gray-300 text-black rounded-full"
                  style={{ ...property }}
                >
                  {ele}
                </animated.span>
              ))}
            </div>
          </div>
        ))}
      </animated.div>
    </animated.div>
  );
};

export default Stat2;
