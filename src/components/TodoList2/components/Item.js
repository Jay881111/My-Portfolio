import React, { useContext } from "react";
import "./Item.css";
import { todoContext } from "../TodoMain.js";

const Item = ({ todo }) => {
  const { dispatch } = useContext(todoContext);

  const toggleItem = (e) => {
    const id = e.target.dataset.id;
    console.log("id", id);
    dispatch({ type: "CHANGE_TODO_STATUS", payload: id });
  };

  const itemClassName = todo.status === "done" ? "done" : "";

  return (
    <li data-id={todo.id} onClick={toggleItem} className={itemClassName}>
      - {todo.title}
    </li>
  );
};

export default Item;
