import React from "react";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import "./todo.css";
export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="flex justify-between items-center bg-[#bca7c8] text-white px-4 py-2 rounded-lg mb-4">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="flex flex-row ">
        <FaPenSquare
          className="edit-icon  text-xl transition-transform duration-300 hover:scale-105"
          onClick={() => editTodo(task.id)}
        />
        <FaTrash
          className="delete-icon ml-4 text-xl transition-transform duration-300 hover:scale-105"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
