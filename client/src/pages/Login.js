import React from "react";
import Image from "../assets/illustration.jpg";
import { useSpring, animated } from "@react-spring/web";
import {Link} from "react-router-dom"

const Login = () => {
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
          className="col-span-3 grid grid-rows-1 justify-center items-center bg-gradient-to-br from-[#f0f0f0] to-white rounded-md shadow-lg p-4 -mt-[50px]"
          style={{ ...styles }}
        >
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
              enter password
            </label>

            <input
              type="text"
              placeholder="set password"
              className="uppercase text-sm w-64 p-2"
            />
          </div>

          <Link to="/user" className="text-center bg-gradient-to-tr from-[#60a5fa] to-[#1e3a8a] p-2 m-2 rounded-full text-white uppercase">
            login
          </Link>
        </animated.form>
      </animated.div>
    </>
  );
};

export default Login;
