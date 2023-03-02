import React, { useRef, useState } from "react";
import JSONDATA from "../../../data/MOCK_DATA.json";
// import NavBar from "./NavBar";

function Search() {
  const [type, setType] = useState("");
  const inputRef = useRef("");
  console.log("type", type);
  console.log("inputRef", inputRef.current.value);

  return (
    <div className="bg-purple-300">
      {/* <NavBar /> */}
      <span className="font-bold text-[25px]">
        Search Function{" "}
        <input
          placeholder="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          ref={inputRef}
          className="ml-[55px] mt-2 mb-2 w-40 text-center rounded-full h-9"
        />
      </span>

      {JSONDATA.filter((val) => {
        if (
          inputRef.current.value === "" ||
          inputRef.current.value === undefined
        )
          return val;
        else if (
          val.first_name
            .toLowerCase()
            .includes(String(inputRef.current.value).toLowerCase())
        )
          return val;
        // 위에는 inputRef를 써서 만들시
        // 아래는 type state 를 활용할 시
        // if (type === "") return val;
        // else if (val.first_name.toLowerCase().includes(type.toLowerCase()))
        //   return val;
        // else return "";
      }).map((val, key) => {
        return (
          <div key={key} className="flex w-full bg-gray-500">
            <div className="mx-auto rounded-5 mt-3 border-[1px] w-[150px] h-[40px] bg-blue-300 flex items-center ">
              <div className="mx-auto font-semibold text-blue-800">
                {val.first_name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Search;
