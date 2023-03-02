import React from "react";
import { Link } from "react-router-dom";

function UseParams() {
  return (
    <div>
      <h1>UseParams</h1>
      <Link to="/features/useparams/cafes/0">Hollys Coffee</Link>
      <br />
      <Link to="/features/useparams/cafes/1">Twosome Place</Link>
      <br />
      <Link to="/features/useparams/cafes/2">Ediya Coffee</Link>
    </div>
  );
}

export default UseParams;
