import React from 'react';
import cn from 'classnames';

import styles from './enter-button.module.css';

const EnterButton = ({ type, onButtonClick }) => {

  return (
    <div
      className={styles.enterButton}
      onClick={ type === 'add' ?
        () => onButtonClick() :
        () => {}
      }
    >
      <button className={cn(styles.enterButtonItem, {
        [styles.enterButtonItem_all]: type === 'all',
        [styles.enterButtonItem_active]: type === 'active',
        [styles.enterButtonItem_done]: type === 'done',
        [styles.enterButtonItem_add]: type === 'add'
      })}>{type}</button>
    </div>
  );
};

export default EnterButton;