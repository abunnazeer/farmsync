import PropTypes from 'prop-types';
import styles from './Padding.module.scss';

const Padding = ({ top, right, bottom, left, children }) => {
  const paddingStyle = {
    paddingTop: top,
    paddingRight: right,
    paddingBottom: bottom,
    paddingLeft: left,
  };

  return (
    <div className={styles.paddingContainer} style={paddingStyle}>
      {children}
    </div>
  );
};

Padding.propTypes = {
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Padding.defaultProps = {
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
};

export default Padding;
