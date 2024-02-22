import React from "react";
import { MdDeleteForever } from "react-icons/md";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const handleCheckboxClick = () => {
    toggleTodo(todo.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  const priorityStyles = {
    high: "High",
    medium: "Medium",
    low: "Low",
  };

  return (
    <div>
      <div className="card border border-info my-2">
        <div className="card-body d-flex align-items-center justify-content-between">
          <div className="align-items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleCheckboxClick}
              className="me-2"
            />
            <span>{todo.text}</span>
          </div>
          <div className="align-items-center">
            <span className="badge text-bg-info me-1">
              {priorityStyles[todo.priority]}
            </span>
            {todo.completed == true && (
              <span className="badge text-bg-success">completed</span>
            )}
            <MdDeleteForever
              onClick={handleDeleteClick}
              size={30}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
