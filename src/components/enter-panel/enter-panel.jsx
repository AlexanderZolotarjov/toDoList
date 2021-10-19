import React from 'react';
import cn from 'classnames';

import styles from './enter-panel.module.css';

const EnterPanel = ({ className, inputBottomData = false, onChangeText, currentValue }) => {
  const noteEnterPanel = React.createRef();

  const searchText = 'Type here to search';
  if (inputBottomData) {
    const [{ type }] = inputBottomData;
    if(type) {
      return <textarea 
        ref={noteEnterPanel}
        className={cn(className, styles.enterPanel, styles.enterPanelArea)}
        placeholder={searchText}
        onChange={() => { onChangeText(noteEnterPanel) }}
        value={currentValue}
        />
    }
  }
  return (
    <input
      className={cn(
          className,
          styles.enterPanel
        )}
      placeholder={searchText}
    />
  )


};

export default EnterPanel;