import React, { useReducer } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import useFetch from "./hooks/useFetch";

export const todoContext = React.createContext();

export const todoReducer = (todos, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [...todos, { title: payload, id: Date.now(), status: "todo" }];

    case "SET_INIT_DATA":
      return payload;

    case "CHANGE_TODO_STATUS":
      return todos.map((todo) => {
        if (todo.id === +payload) {
          if (todo.status === "done") todo.status = "todo";
          else todo.status = "done";
        }
        return todo;
      });

    default:
      break;
  }
};

const TodoMain = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const setInitData = (initData) => {
    dispatch({ type: "SET_INIT_DATA", payload: initData });
  };

  const loading = useFetch(setInitData, "http://localhost:8080/todos");

  return (
    <todoContext.Provider value={{ todos, loading, dispatch }}>
      <div className="w-full border-2 border-white p-3">
        <Header />
        <Form />
        <TodoList />
      </div>
    </todoContext.Provider>
  );
};

export default TodoMain;
