import React from 'react';
import cn from 'classnames';

import styles from './header-title.module.css';

const HeaderTitle = ({ className, ...props }) => {
  return (
    <div className={cn(
        className,
        styles.headerTitle
      )}>
      <h1>My Todo List</h1>
    </div>
  )
};

export default HeaderTitle;