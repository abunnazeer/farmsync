// components/Radio.js
import styles from './Radio.module.scss';

const Radio = ({ label, name, value }) => {
  return (
    <label className={styles.radioLabel}>
      <input
        type="radio"
        name={name}
        value={value}
        className={styles.radioInput}
      />
      {label}
    </label>
  );
};

export default Radio;
