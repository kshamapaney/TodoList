import React, { useState, useEffect } from "react";
import TodoList from "./Component/TodoFile";
import AddTodoForm from "./Component/AddTodoForm";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, priority) => {
    const newTodo = {
      text,
      completed: false,
      priority,
    };
    axios
      .post("http://localhost:8000/todos", newTodo)
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error("Error adding todo:", error));
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    axios
      .put(
        `http://localhost:8000/todos/${id}`,
        updatedTodos.find((todo) => todo.id === id)
      )
      .then(() => setTodos(updatedTodos))
      .catch((error) => console.error("Error updating todo:", error));
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:8000/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((error) => console.error("Error deleting todo:", error));
  };

  const clearCompleted = () => {
    const completedIds = todos
      .filter((todo) => todo.completed)
      .map((todo) => todo.id);
    completedIds.forEach((id) => {
      axios
        .delete(`http://localhost:8000/todos/${id}`)
        .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
        .catch((error) => console.error("Error deleting todo:", error));
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [todos]);
  return (
    <div className="App">
      <div className="row ">
        <div className="col-8 pe-0 me-0 left-side-box"></div>

        <div className="col-4 ps-0 ms-0 text-center">
          <div className=" right-side-box">
            <AddTodoForm addTodo={addTodo} />
            <TodoList
              clearCompleted={clearCompleted}
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
