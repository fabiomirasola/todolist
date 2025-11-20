import { stringify } from 'querystring';
import { Todo } from '../models/Todo';

export const saveTodos = (todo: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todo));
};

export const loadTodos = (): Todo[] => {
  const todosString = localStorage.getItem('todos');
  if (todosString) {
    return JSON.parse(todosString) as Todo[];
  }
  return [];
};

