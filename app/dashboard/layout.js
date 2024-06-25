// pages/Dashboard.js
'use client';
import React, { useState } from 'react';
import LeftPanel from '@/components/LeftPanel';
import TopHeader from '@/components/TopHeader';
import styles from './page.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function DashboardLayout({ children }) {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);

  const toggleLeftPanel = () => {
    setIsLeftPanelOpen(!isLeftPanelOpen);
  };
  return (
    <section className={styles.dashboard}>
      <LeftPanel isOpen={isLeftPanelOpen} />
      <div
        className={`${styles.mainContent} ${
          isLeftPanelOpen ? '' : styles.collapsed
        }`}
      >
        <TopHeader />

        {children}
      </div>
      <button className={styles.hamburger} onClick={toggleLeftPanel}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </section>
  );
}
