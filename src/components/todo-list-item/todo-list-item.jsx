import React, { Component } from 'react';

import cn from 'classnames';

import TodoListItemButtons from '../todo-list-item-buttons/todo-list-item-buttons';

import styles from './todo-list-item.module.css';

export default class TodoListItem extends Component {

  render() {
    const {
      label,
      done,
      important,
      visible,

      onDeleted,
      onToggleImportant,
      onToggleDone
    } = this.props;
    
    return (
      <li
        className={cn(
          styles.todoListItem, {
            [styles.todoListItemDone]: done === true,
            [styles.todoListItemImportant]: important === true,
            [styles.todoListItemHide]: visible === false
          }
        )}
      >
        <button onClick={ onToggleDone }>{label}</button>
        <TodoListItemButtons
          onDeleted={onDeleted}
          onToggleImportant={onToggleImportant}
        />
      </li>
    )
  }
}