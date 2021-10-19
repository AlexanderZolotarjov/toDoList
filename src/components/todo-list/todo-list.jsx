import React from 'react';
import cn from 'classnames';

import TodoListItem from '../todo-list-item';
import styles from './todo-list.module.css';

const TodoList = ({ className, todos, onDeleted, onToggleImportant, onToggleDone } ) => {
  
  const elements = todos.map((item) => {
    
    const { id, ...newItem } = item;

    return (
        <TodoListItem
          key={id}
          item={ newItem }
          onDeleted={ () => onDeleted(id) }
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
    )
  });

  return (
    <ul
      className={cn(
        className,
        styles.todoList
      )}>
      { elements }
    </ul>
  );
};

export default TodoList;