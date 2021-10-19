import React, { Component } from 'react';
import cn from 'classnames';
import TodoListItemButtons from '../todo-list-item-buttons/todo-list-item-buttons';
import styles from './todo-list-item.module.css';

export default class TodoListItem extends Component {

  render() {
    const {
      item: 
        { label, done, important },
        onDeleted,
        onToggleImportant,
        onToggleDone
      } = this.props;
    return (
      <li
        className={cn(
          styles.todoListItem, {
            [styles.todoListItemDone]: done === true,
            [styles.todoListItemImportant]: important === true
          }
        )}
      >
        <p onClick={ onToggleDone }>{label}</p>
        <TodoListItemButtons
          onDeleted={onDeleted}
          onToggleImportant={onToggleImportant}
        />
      </li>
    )
  }
}