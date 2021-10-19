import React, { Component } from 'react';

import Header from './header';
import Main from './main';
import Footer from './footer';

import styles from './app.module.css';

export default  class App extends Component {

  maxId = 10;

  state = {
    noteEnterText: '',
    todoData: [
      { id: 1, label: 'Drink Coffee', important: false, done: false },
      { id: 2, label: 'Make Test', important: false, done: false },
      { id: 3, label: 'Make Someone', important: false, done: false },
      { id: 4, label: 'Make Awesome App', important: false, done: false },
      { id: 5, label: 'Have a Lunch', important: false, done: false }
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
  };

  addNote = (value) => {
    const newItem = {
      id: this.maxId++, label: value, important: false
    }
    this.setState(({ todoData }) => {
      const newArray = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newArray
      }
    })
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const changedNote = this.state.todoData.find(item => item.id === id);
      changedNote.important = !changedNote.important;
      const newArray = [
        ...todoData.slice(0, idx),
        changedNote,
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArray
      }
    })
    console.log('important', id)

    console.log(this.state.todoData.find(item => item.id === id))
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const changedNote = this.state.todoData.find(item => item.id === id);
      changedNote.done = !changedNote.done;
      const newArray = [
        ...todoData.slice(0, idx),
        changedNote,
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newArray
      }
    })
  };

  render() {
    return (
      <div className={styles.body}>
        <Header
          className={styles.header}
        />
        <Main
          onDeleted={this.deleteNote}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          todos={this.state.todoData}
          className={styles.main}
        />
        <Footer
          className={styles.footer}
          addNote={this.addNote}
        />
      </div>
    );
  }
};