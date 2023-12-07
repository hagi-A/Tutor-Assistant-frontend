// TodoForm.jsx
import React, { useState } from "react";
import "./todo.css";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row w-1/2 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none bg-none border border-cyan-400 px-4 py-2 mt-4 mb-8 w-64 text-cyan-900"
        placeholder="What is the task today?"
      />
      <button
        type="submit"
        className="text-sm ml-4 mt-4 h-[45px] bg-cyan-600 border-none text-white px-6 py-1 transition-transform duration-3000 hover:scale-105 cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
};
