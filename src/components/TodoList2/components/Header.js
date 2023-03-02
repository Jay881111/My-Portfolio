import React, { useContext } from "react";
import { todoContext } from "../TodoMain.js";

const Header = () => {
  const { todos } = useContext(todoContext);
  return (
    <>
      <h1>TODO APP</h1>
      <div className="">
        해야할일 ! {todos.filter((v) => v.status === "todo").length}개가
        있습니다
      </div>
    </>
  );
};

export default Header;
