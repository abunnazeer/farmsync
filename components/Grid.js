// components/Grid.js

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Grid.module.scss';

const Grid = ({
  children,
  columns,
  gap,
  alignItems,
  justifyContent,
  className,
}) => {
  const gridStyle = {
    gridTemplateColumns: columns,
    gap: gap,
    alignItems: alignItems,
    justifyContent: justifyContent,
  };

  return (
    <div className={`${styles.grid} ${className}`} style={gridStyle}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.string,
  gap: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  className: PropTypes.string,
};

Grid.defaultProps = {
  columns: '1fr',
  gap: '1rem',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  className: '',
};

export default Grid;
