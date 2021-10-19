import React, { Component } from 'react';
import cn from 'classnames';

import styles from './enter-buttons.module.css';
import EnterButton from '../enter-button';

export default class EnterButtons extends Component {

  render() {
    const { className, buttonsData, onButtonClick } = this.props;
    const buttons = buttonsData.map((item) => {
      const { id, type } = item;
      return (
        <EnterButton
          onButtonClick={onButtonClick}
          key={id}
          type={type}
        />
      )
    })

    return (
      <div
        className={cn(
          className,
          styles.enterButtons
        )}
      >
        { buttons }
      </div>
    );
  }
}