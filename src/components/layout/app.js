import React, { Component } from 'react';

import { createNote, toggleProperty } from './appFuctions';

import Header from './header';
import Main from './main';
import Footer from './footer';
import WindowMessage from '../window-message';

import styles from './app.module.css';

export default  class App extends Component {

  state = {
    isWindow: false,
    noteFilter: 'all', // all, active, done
    noteSearchText: '',
    todoData: [
      createNote('У лукоморья дуб зелёный;'),
      createNote('Златая цепь на дубе том:'),
      createNote('И днём и ночью кот учёный'),
      createNote('Всё ходит по цепи кругом;'),
      createNote('Идёт направо — песнь заводит,'),
      createNote('Налево — сказку говорит.'),
      createNote('Там чудеса: там леший бродит,'),
      createNote('Русалка на ветвях сидит;'),
      createNote('Там на неведомых дорожках'),
      createNote('Следы невиданных зверей;'),
      createNote('Избушка там на курьих ножках'),
      createNote('Стоит без окон, без дверей;'),
    ]
  };

  deleteNote = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [ 
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArray
      }
    })
  }; // Удаляем заметку

  addNote = (value) => {
    if(value !== '') {
      this.setState(({ todoData }) => {
        const newItem = createNote(value);
        const newArray = [
          ...todoData,
          newItem
        ]
        return {
          todoData: newArray
        }
      })
    } else {
      this.setState({ isWindow: true })
    }
  }; // Добавляем заметку

  searchNotes = (value, data) => {
    const intermediateArray = [
      ...data
    ]
    const newArray = intermediateArray.filter((item) => {
      return (
        item.label.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    })
    return newArray
  }; // Фильтруем заметки поиском

  filterNotes = (array, type) => {
    const newArray = array.filter((item) => {
      switch (type) {
        case 'done':
          return (
            item.done === true
          )
        case 'active':
          return (
            item.done === false
          )
        default:
          return true
      }
    })
    return newArray
  }; // Фильтруем заметки кнопками

  onSearchText = (value) => {
    this.setState({ noteSearchText: value.target.value })
  } // Добавляем текст из поиска в стейт

  onFilterType = (type) => {
    this.setState({ noteFilter: type })
  } // Добавляем тип активной фильтрующей кнопки

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: toggleProperty(todoData, id, 'important')
      }
    })
  }; // Переключаем заметку между "важная/неважная"

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: toggleProperty(todoData, id, 'done')
      }
    })
  }; // Переключаем заметку между "сделана/не сделана"

  onOkEmptyMessage = () => {
    this.setState({ isWindow: false })
  }

  render() {

    const { todoData, noteSearchText, noteFilter, isWindow } = this.state;

    const window = isWindow ?
      <WindowMessage onOkEmptyMessage={this.onOkEmptyMessage} /> : <></>;

    const searchedItems = this.searchNotes(noteSearchText, todoData);
    const filtredItems = this.filterNotes(searchedItems, noteFilter)

    const activeCount = filtredItems.filter(item => item.done === false).length;
    const doneCount = filtredItems.filter(item => item.done === true).length;

    return (
      <div className={styles.body}>
        <Header
          className={styles.header}

          activeCount={activeCount}
          doneCount={doneCount}
          noteFilter={noteFilter}

          onSearchText={this.onSearchText}
          onFilterType={this.onFilterType}
        />
        <Main
          className={styles.main}

          onDeleted={this.deleteNote}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}

          todos={filtredItems}
        />
        <Footer
          className={styles.footer}

          addNote={this.addNote}
        />
        {window}
      </div>
    );
  }
};