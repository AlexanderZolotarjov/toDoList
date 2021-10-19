import React from 'react';
import cn from 'classnames';

import styles from './main.module.css';

import TodoList from '../../todo-list/todo-list';

const Main = ({ className, todos, onDeleted, onToggleImportant, onToggleDone }) => {

  return (
    <div className={cn(className, styles.main)}>
      <TodoList
        onDeleted={onDeleted}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
        className={styles.todoList}
        todos={todos}
      />
    </div>
  )
};

export default Main;