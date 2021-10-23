import React from 'react';
import { ReactSVG } from 'react-svg';
import cn from 'classnames';

import styles from './header-title.module.css';

import SvgPencil from './pencil.svg';

const HeaderTitle = ({ className }) => {
  return (
    <div className={cn(
        className,
        styles.headerTitle
      )}>
      <ReactSVG
        className={styles.svg}
        src={SvgPencil}
      />
      <h1>To-Do List</h1>
    </div>
  )
};

export default HeaderTitle;