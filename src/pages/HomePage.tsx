import { useState, useEffect } from "react";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { Todo } from "../models/Todo";
import { loadTodos, saveTodos } from "../utils/storage";
import { v4 as uuid } from 'uuid';

export const Homepage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect (() => {
    setTodos(loadTodos());
  }, [])

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos([...todos, {id: uuid(), text, done: false}]);
  }

  const toggleTodo = (id: string) => {
    setTodos (todos.map(todo => todo.id === id ? {...todo, done: !todo.done} :todo));
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }  

  return (
    <div>
      <h1 className="title">Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );


  
}

