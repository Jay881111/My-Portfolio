import React, { useContext, useRef } from "react";
import { todoContext } from "../TodoMain";

function Form() {
  const { dispatch } = useContext(todoContext);
  const addButtonData = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: inputRef.current.value });
  };

  const inputRef = useRef(false);

  return (
    <form className="mt-[8px]">
      <input type="text" ref={inputRef} />
      <button onClick={addButtonData}>add</button>
    </form>
  );
}

export default Form;
