import React from 'react';
import cn from 'classnames';

import styles from './header.module.css';

import HeaderTitle from '../../header-title';
import HeaderStatistics from '../../header-statistics';
import EnterPanel from '../../enter-panel';
import EnterButtons from '../../enter-buttons';

const Header = ({ className, ...props }) => {

  const statisticsData = {
    moreToDo: 1,
    done: 3
  };
  const buttonsTopData = [
    { id: 1, type: 'all' },
    { id: 2, type: 'active' },
    { id: 3, type: 'done' }
  ];

  return (
    <div className={cn(className, styles.header)}>
      <HeaderTitle className={styles.headerTitle} />
      <HeaderStatistics className={styles.headerStatistics} statisticsData={statisticsData} />
      <EnterPanel className={styles.enterPanel} />
      <EnterButtons className={styles.enterButtons} buttonsData={buttonsTopData} />
    </div>
  )
};

export default Header;