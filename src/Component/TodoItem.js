import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { Badge, Checkbox, Button } from "antd";

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
            <Checkbox checked={todo.completed} onChange={handleCheckboxClick}>
              {todo.text}
            </Checkbox>
          </div>
          <div className="align-items-center">
            <Badge
              className="me-1"
              status="processing"
              text={priorityStyles[todo.priority]}
            />

            {todo.completed == true && (
              <Badge status="success" text="completed" />
            )}
            <Button className="ms-1" onClick={handleDeleteClick} danger>
              <MdDeleteForever size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
