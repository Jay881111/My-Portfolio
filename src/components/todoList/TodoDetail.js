import React from "react";

function TodoDetail({ todos, loading }) {
  let showList = <div>...loading</div>;
  if (!loading)
    showList = todos.map((todo) => (
      <li
        key={todo.id}
        className="p-1 mx-auto mb-3 border-[1px] border-black w-[500px] rounded-[6px]"
      >
        {todo.todo}
      </li>
    ));

  return <ul className="">{showList}</ul>;
}

export default TodoDetail;
