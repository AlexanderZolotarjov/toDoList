import React from 'react';
import cn from 'classnames';

import styles from './enter-button.module.css';

const EnterButton = ({
    type,
    noteFilter,

    onFilterType
  }) => {

  return (
    <div
      className={styles.enterButton}
    >
      <button
        className={cn(styles.enterButtonItem, {
          [styles.enterButtonItem_all]: type === 'all',
          [styles.enterButtonItem_active]: type === 'active',
          [styles.enterButtonItem_done]: type === 'done',
          [styles.enterButtonItem_add]: type === 'add',

          [styles.enterButtonItem_allBright]: noteFilter === 'all' && type === 'all',
          [styles.enterButtonItem_activeBright]: noteFilter === 'active' && type === 'active',
          [styles.enterButtonItem_doneBright]: noteFilter === 'done' && type === 'done'
        })}
        onClick={
          type !== 'add' ?
            () => { onFilterType(type) } :
            () => {}
        }
      >{type}</button>
    </div>
  );
};

export default EnterButton;