import { Todo } from "../models/Todo";


interface TodoItemProps {
  todo : Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({todo, onToggle, onDelete} : TodoItemProps) => {
  

  return (
  
    <div style={{ textDecoration: todo.done ? "line-through" : "none" }}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </div>

  );
}