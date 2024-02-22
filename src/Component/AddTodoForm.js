import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState("low");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue, priority);
    setInputValue("");
    setPriority("low");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-between ">
      <input
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={handleChange}
        className="w-100 custom-input me-1"
      />
      <select value={priority} onChange={handlePriorityChange} className="custom-input">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="btn btn-success ms-1">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
