// components/TopHeader.js

import React from 'react';
import styles from './TopHeader.module.scss';
import Input from './Input';

const TopHeader = () => {
  return (
    <header className={styles.topHeader}>
      <div className={styles.searchBar}>
        <Input type="text" id="search" placeholder="Search here .." noMargin />
      </div>
      <div className={styles.notifications}>
        <span className={styles.notificationIcon}>🔔</span>
        <span className={styles.notificationIcon}>💬</span>
      </div>
    </header>
  );
};

export default TopHeader;
