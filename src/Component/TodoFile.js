import React from "react";
import TodoItem from "./TodoItem";
import { Button } from "antd";
const TodoList = ({ todos, toggleTodo, deleteTodo, clearCompleted }) => {
  return (
    <div>
      {todos.length != 0 && (
        <div className="d-flex justify-content-between mt-3">
          <h3 className="">List</h3>
          <Button type="primary" danger onClick={clearCompleted}>
            Clear Completed
          </Button>
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
