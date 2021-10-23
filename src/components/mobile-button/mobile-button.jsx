import React from 'react';
import cn from 'classnames';
import styles from './mobile-button.module.css';

const MobileButton = ({
  onToggleMobileButton,
  isMobileButton
}) => {

  return (
    <div onClick={onToggleMobileButton}
      className={cn(
        styles.mobileButton, {
        [styles.mobileButton_click]: isMobileButton === true
      }
      )}
    >
      <span></span>
    </div>
  )
}

export default MobileButton;