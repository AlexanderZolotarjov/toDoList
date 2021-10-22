import React from 'react';
import cn from 'classnames';

import styles from './header-statistics.module.css';

const HeaderStatistics = ({
  className,
  activeCount,
  doneCount
} ) => {

  return (
    <div className={cn(
        className,
        styles.headerStatistics
      )}>
      <p>
        <span>{activeCount}</span> active, <span>{doneCount}</span> done
      </p>
    </div>
  );
};

export default HeaderStatistics;