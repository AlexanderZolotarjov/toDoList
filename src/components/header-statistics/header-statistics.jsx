import React from 'react';
import cn from 'classnames';

import styles from './header-statistics.module.css';

const HeaderStatistics = ({ className, statisticsData: { moreToDo, done } } ) => {
  
  return (
    <div className={cn(
        className,
        styles.headerStatistics
      )}>
      <p>
        <span>{moreToDo}</span> more to do, <span>{done}</span> done
      </p>
    </div>
  );
};

export default HeaderStatistics;