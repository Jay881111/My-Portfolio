import React from "react";
import NavBar from "./NavBar";

function LayOut(props) {
  return (
    <>
      {/* <NavBar /> */}
      {props.children}
    </>
  );
}

export default LayOut;
