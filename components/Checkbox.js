// components/Checkbox.js
import styles from './Checkbox.module.scss';

const Checkbox = ({ label, name }) => {
  return (
    <label className={styles.checkboxLabel}>
      <input type="checkbox" name={name} className={styles.checkboxInput} />
      {label}
    </label>
  );
};

export default Checkbox;
