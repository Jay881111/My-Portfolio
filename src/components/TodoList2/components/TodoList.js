import React, { useContext } from "react";
import Item from "./Item.js";
import { todoContext } from "../TodoMain.js";

const TodoList = () => {
  const { todos, loading } = useContext(todoContext);

  let todoList = <div>loading...</div>;
  if (!loading)
    todoList = todos.map((todo) => <Item key={todo.id} todo={todo} />);

  return <ul>{todoList}</ul>;
};
export default TodoList;
