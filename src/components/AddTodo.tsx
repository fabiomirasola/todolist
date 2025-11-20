import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodo = ({ onAdd }: AddTodoProps) => {
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
        onKeyDown={(e) => { if(e.key === 'Enter') handleAdd(); }}
      />
      <button onClick={handleAdd} className="add-todo-button">
        <AddIcon />
      </button>
    </div>
  );
};