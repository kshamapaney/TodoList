import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todos, toggleTodo, deleteTodo, clearCompleted }) => {
  return (
    <div>
      {todos.length != 0 && (
        <div className="d-flex justify-content-between mt-3">
          <h3 className="">List</h3>
          <button className="btn btn-danger" onClick={clearCompleted}>
            Clear Completed
          </button>
        </div>
      )}
      <div className="list-hight mt-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
