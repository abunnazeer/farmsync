// components/Button.js

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Button.module.scss';

const Button = ({ type = 'button', children, className, icon }) => {
  return (
    <button type={type} className={`${styles.button} ${className}`}>
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.object,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  icon: null,
};

export default Button;
