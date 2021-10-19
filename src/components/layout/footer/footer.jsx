import React, { Component } from 'react';
import cn from 'classnames';

import styles from './footer.module.css';

import EnterPanel from '../../enter-panel';
import EnterButtons from '../../enter-buttons';

export default class Footer extends Component {

  state = {
    noteEnterText: ''
  };

  onChangeText = (noteEnterPanel) => {
    this.setState(() => {
      return {
        noteEnterText: noteEnterPanel.current.value
      }
    })
  }
  
  onButtonClick = () => {
    this.setState(() => {
      return {
        noteEnterText: ''
      }
    })
    this.props.addNote(this.state.noteEnterText)
  }

  render() {
    const { className } = this.props;

    const buttonsBottomData = [
      { id: 1, type: 'add' }
    ];
    
    const inputBottomData = [
      { id: 1, type: 'text' }
    ];

    return (
      <div className={cn(className, styles.footer)}>
        <EnterPanel
          className={styles.addField}
          currentValue={this.state.noteEnterText}
          onChangeText={this.onChangeText}
          inputBottomData={inputBottomData}
        />
        <EnterButtons
          className={styles.addButton}
          onButtonClick={this.onButtonClick}
          buttonsData={buttonsBottomData}
        />
      </div>
    )
  }
};