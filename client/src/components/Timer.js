import { useRef, useState } from "react";

const Timer = () => {
  const [state, setState] = useState(0);
  const [run, setRun] = useState(false);
  const ref = useRef(null);

  // Define the start function
  const start = () => {
    if (!run) {
      setRun(true);
      ref.current = setInterval(() => {
        setState((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  // Define the stop function
  const stop = () => {
    clearInterval(ref.current);
    setRun(false);
  };

  // Define the reset function
  const reset = () => {
    setState(0);
    clearInterval(ref.current);
    setRun(false);
  };

  // Convert seconds to hours, minutes, and remaining seconds
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const containerStyle = {
    color: "aliceblue",
    borderRadius: "10px",
    // position: "absolute",
    // left: "40%",
    // top: "20%",
    padding: "25px",
    boxShadow: "0 0 4px rgba(231, 5, 5, 0.336)",
    fontSize: "3rem",
    // bg-gradient-to-t from-[#2aa4cd29] to-[#ADD8E6]
    backgroundImage:
      "linear-gradient(to top, #2aa4cd29, #ADD8E6)",
  };

  const btnsStyle = {
    display: "flex",
    gap: "6px",
    justifyContent: "center",
    alignItems: "center",
  };

  const btnStyle = {
    borderRadius: "10px",
    padding: "5px 5px",
    cursor: "pointer",
  };

  const hStyle = {
    textAlign: "center",
    color:"black"
  };

  return (
    <div style={containerStyle}>
      <h2  className="font-bold my-8 border-b-[1px] border-gray-200" style={hStyle}>Timer</h2>
      <h2 className="font-bold my-8" style={{color:"black" , textAlign:"center"}}>{formatTime(state)}</h2>
      <div style={btnsStyle}>
        <button
          onClick={start}
          disabled={run}
          style={{
            ...btnStyle,
            backgroundColor: "rgb(26, 2, 244)",
            color: "antiquewhite",
          }}
          className="bg-gradient-to-tr from-blue-400 to-blue-900 text-xl p-2 w-32"
        >
          Start
        </button>
        <button
          onClick={stop}
          disabled={!run}
          style={{
            ...btnStyle,
            backgroundColor: "rgb(26, 2, 244)",
            color: "antiquewhite",
          }}
          className="bg-gradient-to-tr from-blue-400 to-blue-900 text-xl p-2 w-32"
        >
          Stop
        </button>
        <button
          onClick={reset}
          disabled={state === 0}
          style={{
            ...btnStyle,
            backgroundColor: "rgb(26, 2, 244)",
            color: "antiquewhite",
          }}
          className="bg-gradient-to-tr from-blue-400 to-blue-900 text-xl p-2 w-32"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
