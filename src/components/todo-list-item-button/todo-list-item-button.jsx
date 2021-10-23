import React from 'react';
import { ReactSVG } from 'react-svg';
import cn from 'classnames';
import styles from './todo-list-item-button.module.css';
import SvgDelete from './delete.svg';
import SvgImportant from './important.svg';

const TodoListItemButton = ({
  type,
  onToggleImportant,
  onDeleted
}) => {

  return (
    <>
      <button
        onClick={type === 'important' ? onToggleImportant : onDeleted}
        className={cn(
          styles.todoListItemButton, {
          [styles.todoListItemButtonImportant]: type === 'important',
          [styles.todoListItemButtonDelete]: type === 'delete'
        }
        )}
      >
        <ReactSVG
          className={styles.svg}
          src={type === 'important' ? SvgImportant : SvgDelete}
        />
      </button>
    </>
  )
}

export default TodoListItemButton;

