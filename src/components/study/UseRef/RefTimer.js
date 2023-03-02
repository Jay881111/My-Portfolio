import React, { useEffect, useRef, useState } from "react";

function RefTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    // const interval = setInterval(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div className="flex">
      <h3>Hook Timer: {timer}</h3>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Ref Timer
      </button>
    </div>
  );
}

export default RefTimer;
