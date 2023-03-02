import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [count, setCount] = useState(0);
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);

  const refClick = () => {
    countRef.current = countRef.current + 1;
    console.log("ref", countRef);
  };

  const countClick = () => {
    setCount(count + 1);
  };

  const renderButton = () => {
    setRenderer(renderer + 1);
  };

  useEffect(() => {
    console.log("Render?");
  });

  return (
    <div>
      <div>state {count}</div>
      <div>ref {countRef.current}</div>
      <button
        className="ml-3 border-[1px] w-10 border-black"
        onClick={refClick}
      >
        Ref +
      </button>
      <button
        className="ml-3 border-[1px] w-12 border-black"
        onClick={countClick}
      >
        State +
      </button>
      <button
        className="ml-3 border-[1px] w-16 border-black"
        onClick={renderButton}
      >
        render!
      </button>
      <br />
      <p className="mt-5">check how console changes:</p>
    </div>
  );
}

export default UseRef;
