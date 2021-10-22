import React from 'react';
import cn from 'classnames';

import TodoListItem from '../todo-list-item';
import styles from './todo-list.module.css';

const TodoList = ({
  className,
  todos,
  onDeleted,
  onToggleImportant,
  onToggleDone
} ) => {
  
  const elements = todos.map((item) => {
    const {
      id,
      label,
      done,
      important,
      visible
    } = item;

    return (
        <TodoListItem
          key={id}
          label={label}
          done={done}
          important={important}
          visible={visible}
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