import React, { useEffect, useRef } from "react";
import "./UseRef.css";

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="useRef">
      <div className="inputContainer">
        <h1>Input Focus</h1>
        <div>
          <label htmlFor="email">E-mail</label>
          <input name="email" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input ref={inputRef} name="name" />
          <div>Focus is on the second input box</div>
        </div>
      </div>
    </div>
  );
}

export default FocusInput;
