import Link from 'next/link';
import styles from './TopNav.module.scss';

const TopNav = () => {
  return (
    <div className={styles.topNav}>
      <ul>
        <li>
          <Link href="/">Retail Store</Link>
        </li>
        <li>
          <Link href="/">Academy</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
