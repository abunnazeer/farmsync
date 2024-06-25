// components/LeftPanel.js

import React from 'react';
import styles from './LeftPanel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTachometerAlt,
  faUser,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const LeftPanel = ({ isOpen, togglePanel }) => {
  return (
    <div
      className={`${styles.leftPanel} ${isOpen ? styles.open : styles.closed}`}
    >
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <h3 className={styles.textHeading}>MAIN MENU</h3>
        <ul>
          <li className={styles.dashboardActive}>
            <Link href="#">
              <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
            </Link>
          </li>
          <li>
            <Link href="#">
              <FontAwesomeIcon icon={faUser} /> Farm Product
            </Link>
          </li>
          <li>
            <Link href="#">
              <FontAwesomeIcon icon={faCog} /> Inventory
            </Link>
          </li>
          <li>
            <Link href="#">
              <FontAwesomeIcon icon={faSignOutAlt} /> Analytics
            </Link>
          </li>
        </ul>

        <div className={styles.separator}></div>

        <h3 className={styles.textHeading}>PREFERENCES</h3>

        <ul>
          <li>
            <Link href="#">
              <FontAwesomeIcon icon={faUser} /> Settings
            </Link>
          </li>
          <li>
            <Link href="#">
              <FontAwesomeIcon icon={faCog} /> Help Center
            </Link>
          </li>
        </ul>
      </nav>

      <Link href="/dashboard/user-profile">
        <div className={styles.userProfile}>
          <img src="/avatar.png" alt="User profile" />
          <div className={styles.userInfo}>
            <p className={styles.name}> Abdullahi Ahmad</p>
            <p>Farmer</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LeftPanel;
