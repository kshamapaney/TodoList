import React, { useState } from "react";
import { Button, Input, Select } from "antd";
const AddTodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState("low");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
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
      <Input
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={handleChange}
        className="w-100 custom-input me-1"
      />

      <Select
        defaultValue="low"
        style={{
          width: 240,
          height: 41,
        }}
        onChange={handlePriorityChange}
        options={[
          {
            value: "low",
            label: "Low",
          },
          {
            value: "medium",
            label: "Medium",
          },
          {
            value: "high",
            label: "High",
          },
        ]}
      />

      <Button type="primary" className="ms-1" htmlType="submit" size="large">
        Add
      </Button>
    </form>
  );
};

export default AddTodoForm;
