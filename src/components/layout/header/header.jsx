import React from 'react';
import cn from 'classnames';

import styles from './header.module.css';

import HeaderTitle from '../../header-title';
import HeaderStatistics from '../../header-statistics';
import EnterPanel from '../../enter-panel';
import EnterButtons from '../../enter-buttons';
import MobileButton from '../../mobile-button';


const Header = ({
  className,

  activeCount,
  doneCount,
  noteFilter,
  isMobileButton,

  onSearchText,
  onFilterType,
  onToggleMobileButton
}) => {

  const buttonsTopData = [
    { id: 1, type: 'all' },
    { id: 2, type: 'active' },
    { id: 3, type: 'done' }
  ];

  return (
    <div
      className={cn(
        className,
        styles.header
      )}
    >
      <HeaderTitle
        className={styles.headerTitle}
      />
      <HeaderStatistics
        activeCount={activeCount}
        doneCount={doneCount}
        className={styles.headerStatistics}
      />
      <EnterPanel
        className={styles.enterPanel}

        onSearchText={onSearchText}
      />
      <EnterButtons
        className={styles.enterButtons}

        buttonsData={buttonsTopData}
        noteFilter={noteFilter}
        isMobileButton={isMobileButton}

        onFilterType={onFilterType}
      />
      <MobileButton
        className={styles.mobileButton}

        isMobileButton={isMobileButton}

        onToggleMobileButton={onToggleMobileButton}
      />
    </div>
  )
};

export default Header;