import React from "react";
import { Link, useParams } from "react-router-dom";

function NotFound() {
  const params = useParams();

  return (
    <div className="flex w-full h-full">
      <div className="mx-auto md:mt-[22%] mt-[50%] text-center">
        <h1 className="">Page Not Found</h1>
        <div>
          There is no page like{" "}
          <span className="font-[600] text-[17px]">'{params.id}'</span>
        </div>
        <Link to="/">Go to Main Page</Link>
      </div>
    </div>
  );
}

export default NotFound;
