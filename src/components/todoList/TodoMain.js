import React, { useEffect, useState } from "react";
import "./TodoMain.css";
import TodoDetail from "./TodoDetail";

// todolist jsondata 새로 만들어서 fetch하기
// css활용해서 좀 있어보이게 만들기

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) {
      console.log("no data");
      alert("할일을 입력해주세요");
    } else {
      setTodos([...todos, { todo: newTodo, id: Date.now() }]);
      setNewTodo("");
    }
  };

  const fetchInitialData = async () => {
    const response = await fetch("https://dummyjson.com/todos");
    const initialData = await response.json();
    setTodos(initialData.todos.splice(0, 5));
  };

  useEffect(() => {
    setLoading(true);
    fetchInitialData();
    setLoading(false);
  }, []);

  return (
    <div className="">
      <h1>TodoList</h1>
      <form>
        <input
          value={newTodo}
          type="text"
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="please type"
        />
        <button className="submit_button" onClick={handleSubmit}>
          add
        </button>
      </form>
      <TodoDetail todos={todos} loading={loading} />
      {/* {showList} */}
    </div>
  );
}

export default TodoList;
