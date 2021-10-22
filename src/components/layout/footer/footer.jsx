import React, { Component } from 'react';
import cn from 'classnames';

import styles from './footer.module.css';

import EnterPanel from '../../enter-panel';
import EnterButtons from '../../enter-buttons';

export default class Footer extends Component {

  textInput = React.createRef()

  state = {
    noteEnterText: '',
    buttonsBottomData: [{ id: 1, type: 'add' }],
    inputBottomData: [{ id: 1, type: 'text' }]
  };

  onChangeText = (e) => {
    this.setState(() => {
      return {
        noteEnterText: e.target.value
      }
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    this.setState(() => {
      return { noteEnterText: '' }
    })
    this.props.addNote(this.state.noteEnterText);
    this.textInput.current.focus();
  }


  render() {
    const { className } = this.props;
    const { noteEnterText, inputBottomData, buttonsBottomData } = this.state;

    return (
      <form
        className={cn(
          className,
          styles.footer
        )}
        onSubmit={this.onSubmit}
      >
        <EnterPanel
          textInput={this.textInput}
          className={styles.addField}
          currentValue={noteEnterText}
          onChangeText={this.onChangeText}
          inputBottomData={inputBottomData}
        />
        <EnterButtons
          className={styles.addButton}
          buttonsData={buttonsBottomData}
        />
      </form>
    )
  }
};