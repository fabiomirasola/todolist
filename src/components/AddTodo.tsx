import { useState } from 'react';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodo = ({onAdd} : AddTodoProps) => {

  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() === "") return; 
    onAdd(text);
    setText('');
  };

  return (
    <div className="add-todo-container">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className="todo-input"
      />
      <button 
        onClick={handleAdd}
        className="add-todo-button"
      >
        +
      </button>
    </div>
    
  );

}