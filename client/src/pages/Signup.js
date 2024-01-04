import React from "react";
import Image from "../assets/image.jpg";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom"
const Signup = () => {
  const styles = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  const stylesOnImage = useSpring({
    from: { x: -100 },
    to: { x: 0 },
  });
  return (
    <>
      <animated.div
        className="z-20 text-5xl font-thin text-center mt-8"
        style={{ fontFamily: "monospace", ...styles }}
      >
        Hack Hurricane
      </animated.div>
      <animated.div
        className="grid grid-cols-12 justify-between items-center"
        style={{ ...styles }}
      >
        <animated.div
          className="col-span-6 col-start-2 -mt-2"
          style={{ ...stylesOnImage }}
        >
          <img className="w-128" src={Image} />
        </animated.div>
        <animated.form
          className="col-span-3 grid grid-rows-1 justify-center items-center bg-gradient-to-br from-[#f0f0f0] to-white rounded-md shadow-lg p-4 -mt-8"
          style={{ ...styles }}
        >
          <div className="grid grid-rows-1 my-2">
            <label
              for="name"
              method="POST"
              action=""
              className="uppercase text-[10px]"
            >
              your name
            </label>
            <input
              id="name"
              type="text"
              placeholder="your name"
              className="uppercase text-sm w-64 p-2"
            />
          </div>

          <div className="grid grid-rows-1 my-2">
            <label
              for="username"
              method="POST"
              action=""
              className="uppercase text-[10px]"
            >
              your username
            </label>
            <input
              id="username"
              type="text"
              placeholder="your username"
              className="uppercase text-sm w-64 p-2"
            />
          </div>
          <div className="grid grid-rows-1 my-2">
            <label
              for="username"
              method="POST"
              action=""
              className="uppercase text-[10px]"
            >
              set password
            </label>

            <input
              type="text"
              placeholder="set password"
              className="uppercase text-sm w-64 p-2"
            />
          </div>

          <div className="grid grid-rows-1 my-2">
            <label
              for="username"
              method="POST"
              action=""
              className="uppercase text-[10px]"
            >
              Write you about
            </label>
            <textarea
              placeholder="write about"
              className="uppercase text-sm w-64 p-2"
            ></textarea>
          </div>

          <div className="grid grid-rows-1 my-2">
            <label
              for="username"
              method="POST"
              action=""
              className="uppercase text-[10px] mb-2"
            >
              Select Profile Picture
            </label>
            <input type="file" className="text-[10px]" />
          </div>

          <Link to="/login" className="text-center bg-gradient-to-tr from-[#60a5fa] to-[#1e3a8a] p-2 m-2 rounded-full text-white uppercase">
            Signup
          </Link>
        </animated.form>
      </animated.div>
    </>
  );
};

export default Signup;
