import React, { useState } from "react";
import "./todo.css"

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    // Close the edit form after submitting
    // task.toggleEditing();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-row w-1/2 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none bg-none border border-[#bca7c8] px-4 py-2 mt-4 mb-8 w-64 text-[#745B83]"
        placeholder="Update task"
      />
      <button
        type="submit"
        className="text-md ml-4 mt-4 h-[45px] bg-[#bca7c8] border-none text-white px-4 py-1 transition-transform duration-3000 hover:scale-105 cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
};
