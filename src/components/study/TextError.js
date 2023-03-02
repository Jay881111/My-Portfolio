import React from "react";
import "./UseFormik.css";

function TextError(props) {
  console.log("props", props.children);
  return <div className="error">{props.children}</div>;
}

export default TextError;
