import InnerContent from '@/components/InnerContent';
import styles from './page.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.content}>
      <h2>Dashboard </h2>
      <InnerContent />
    </div>
  );
};

export default Dashboard;
