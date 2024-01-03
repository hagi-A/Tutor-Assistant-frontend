// TodoWrapperLocalStorage.jsx
import React, { useState, useEffect } from "react";
import "./todo.css";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { useAuthContext } from "../../../hooks/useAuthContext";

export const TodoWrapperLocalStorage = () => {
    const [todos, setTodos] = useState([]);
    const { user } = useAuthContext();
    const userId = user ? user.user._id : null;
    // const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
//     setTodos(savedTodos);
    //   }, []);
    
    useEffect(() => {
      const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      const tutorTodos = savedTodos.filter((todo) => todo.userId === userId);
      setTodos(tutorTodos);
    }, [userId]);

  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      {
        id: todos.length + 1,
        task: todo,
        completed: false,
        isEditing: false,
        userId: userId,
      },
    ];
    setTodos(newTodos);
    saveTodosToLocalStorage(newTodos);
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    saveTodosToLocalStorage(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    saveTodosToLocalStorage(newTodos);
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
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
    <div className="bg-[#29644c] mt-20 p-8 rounded-lg">
      <h1 className="text-white text-2xl mb-2">Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            // toggleEditing={toggleEditing}
          />
        )
      )}
    </div>
  );
};
