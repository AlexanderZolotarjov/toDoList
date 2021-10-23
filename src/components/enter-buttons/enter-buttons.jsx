import React, { Component } from 'react';
import cn from 'classnames';

import styles from './enter-buttons.module.css';

import EnterButton from '../enter-button';

export default class EnterButtons extends Component {

  render() {

    const {
      className,

      buttonsData,
      noteFilter,
      isMobileButton,

      onFilterType
    } = this.props;

    const buttons = buttonsData.map((item) => {
      const { id, type } = item;
      return (
        <EnterButton
          key={id}
          type={type}
          onFilterType={onFilterType}
          noteFilter={noteFilter}
        />
      )
    })

    return (
      <div
        className={cn(
          className,
          styles.enterButtons, {
          [styles.enterButtons_header]:
            buttonsData.length === 3 &&
            isMobileButton === false
        }
        )}
      >
        {buttons}
      </div>
    );
  }
}