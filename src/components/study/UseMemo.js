import React, { useEffect, useState, useMemo } from "react";

function useMemo1() {
  const [isKorea, setIsKorea] = useState(false);

  const depart = useMemo(() => {
    return isKorea ? "Korea" : "America";
  }, [isKorea]);

  const arrive = useMemo(() => {
    return isKorea ? "America" : "Korea";
  }, [isKorea]);

  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("only render on travel");
  }, [depart, arrive]);

  useEffect(() => {
    console.log("render all time");
  });

  return (
    <div>
      <p className="mt-5 font-semibold">
        How many times have you visited Korea?
      </p>
      <input
        className="border-[1px] border-black"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <p className="mt-5 font-semibold">let's go travel</p>
      <p>
        from {depart} to {arrive}
      </p>
      <div>
        Change depart and arrive:
        <button
          className="border-[1px] border-black"
          onClick={() => setIsKorea(!isKorea)}
        >
          button
        </button>
      </div>
    </div>
  );
}

export default useMemo1;
