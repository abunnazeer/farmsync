import React from 'react';
import PropTypes from 'prop-types';
import styles from './InnerContent.module.scss';

const InnerContent = ({ userType }) => {
  let content;

  switch (userType) {
    case 'vendors':
      content = (
        <div className={styles.innerContent}>
          <p>This is the vendor dashboard.</p>
          {/* Vendor-specific content */}
        </div>
      );
      break;
    case 'investors':
      content = (
        <div className={styles.innerContent}>
          <p>This is the investor dashboard.</p>
          {/* Investor-specific content */}
        </div>
      );
      break;
    case 'logistics':
      content = (
        <div className={styles.innerContent}>
          <p>This is the logistics dashboard.</p>
          {/* Logistics-specific content */}
        </div>
      );
      break;
    case 'admin':
      content = (
        <div className={styles.innerContent}>
          <p>This is the admin dashboard.</p>
          {/* Admin-specific content */}
        </div>
      );
      break;
    default:
      content = (
        <div className={styles.innerContent}>
          <p>This is the default dashboard.</p>
          {/* Default content */}
        </div>
      );
      break;
  }

  return content;
};

InnerContent.propTypes = {
  userType: PropTypes.oneOf(['vendors', 'investors', 'logistics', 'admin'])
    .isRequired,
};

export default InnerContent;
