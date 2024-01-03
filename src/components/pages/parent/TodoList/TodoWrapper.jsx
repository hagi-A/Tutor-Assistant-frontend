// TodoWrapper.jsx
import React, { useState, useEffect } from "react";
import "./todo.css";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
// import { useTutorContext } from "../../../../hooks/useTutorContext";
import { useAuthContext } from "../../../../hooks/useAuthContext";

 const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
    const { user } = useAuthContext();
  const userId = user ? user.user._id : null;

//   useEffect(() => {
//     const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
//     const tutorTodos = savedTodos.filter((todo) => todo.tutorId === tutorId);
//     setTodos(tutorTodos);
//   }, [tutorId]);

//   const saveTodosToLocalStorage = (todos) => {
//     localStorage.setItem("todos", JSON.stringify(todos));
    //   };
    useEffect(() => {
      const savedTodos =
        JSON.parse(localStorage.getItem(`todos_${userId}`)) || [];
      setTodos(savedTodos);
    }, [userId]);

    const saveTodosToLocalStorage = (todos) => {
      localStorage.setItem(`todos_${userId}`, JSON.stringify(todos));
    };

  const addTodo = (todo) => {
    if (!todo.trim()) {
      return;
    }

    const newTodos = [
      ...todos,
      { task: todo, completed: false, isEditing: false, userId: userId },
    ];
    setTodos(newTodos);
    saveTodosToLocalStorage(newTodos);
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo, index) =>
      index === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    saveTodosToLocalStorage(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo, index) => index !== id);
    setTodos(newTodos);
    saveTodosToLocalStorage(newTodos);
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo, index) =>
        index === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: false } : todo
    );
    setTodos(newTodos);
    saveTodosToLocalStorage(newTodos);
  };


  return (
    <div className="w-full">
      <div className="flex mt-[20px] w-full gap-[30px]">
        <div className="border bg-white shadow-md cursor-pointer rounded-[4px] ">
          <div className="bg-slate-100 flex items-center justify-between py-[15px] px-5 border-b-1 border-slate-400">
            <h2>To Do List</h2>
          </div>
          <div className="w-full h-full">
            <div className="bg-[#29644c] p-8 ">
              <h1 className="text-white text-2xl mb-2">Get Things Done!</h1>
              <TodoForm addTodo={addTodo} />
              {todos.map((todo, index) =>
                todo.isEditing ? (
                  <EditTodoForm editTodo={editTask} task={todo} key={index} />
                ) : (
                  <Todo
                    task={todo}
                    key={index}
                    toggleComplete={() => toggleComplete(index)}
                    deleteTodo={() => deleteTodo(index)}
                    editTodo={() => editTodo(index)}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoWrapper;