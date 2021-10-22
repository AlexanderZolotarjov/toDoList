import React, { Component } from 'react';
import cn from 'classnames';

import styles from './enter-panel.module.css';

export default class EnterPanel extends Component {

  render() {
    const {
        className,

        textInput,
        inputBottomData = false,
        onChangeText,
        currentValue,

        onSearchText
     } = this.props;

    const searchText = 'Type here to search';

    if (inputBottomData) {
      const [{ type }] = inputBottomData;
      if (type) {
        return (
          <textarea
            ref={textInput}
            className={cn(
              className,
              styles.enterPanel,
              styles.enterPanelArea
            )}
            placeholder={searchText}
            onChange={onChangeText}
            value={currentValue}
          />
        )
      }
    }
    return (
      <input
        className={cn(
          className,
          styles.enterPanel
        )}
        placeholder={searchText}
        onChange={onSearchText}
      />
    )
  }
}