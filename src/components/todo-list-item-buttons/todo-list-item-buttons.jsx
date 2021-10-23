import React from 'react';
import TodoListItemButton from '../todo-list-item-button/todo-list-item-button';
import styles from './todo-list-item-buttons.module.css';

const TodoListItemButtons = ({
  onToggleImportant,
  onDeleted
}) => {

  const buttonData = [
    { id: 1, type: 'important' },
    { id: 2, type: 'delete' }
  ]
  const buttonList = buttonData.map((item) => {
    const { id, type } = item;
    return (
      <TodoListItemButton
        onDeleted={onDeleted}
        onToggleImportant={onToggleImportant}
        key={id}
        type={type}
      />
    )
  })

  return (
    <div className={styles.todoListItemButtons}>
      {buttonList}
    </div>
  )
}

export default TodoListItemButtons;