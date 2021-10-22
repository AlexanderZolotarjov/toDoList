import React from 'react';
import styles from './window-message.module.css';

const WindowMessage = ({ onOkEmptyMessage }) => {

  return (
    <div className={styles.windowMessage}>
      <div className={styles.windowMessage__item}>
        <h2 className={styles.windowMessage__title}>
          The input field is empty, please enter the text of the note!
        </h2>
        <button onClick={onOkEmptyMessage}
          className={styles.windowMessage__button}
        >
          ok
        </button>
      </div>
    </div>
  )
}

export default WindowMessage;