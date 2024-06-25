import Link from 'next/link';
import styles from './page.module.scss';
import formStyles from '@/public/styles/FormContainer.module.scss';
import Button from '@/components/Button';
import Grid from '@/components/Grid';
import Padding from '@/components/Padding';
import Input from '@/components/Input';
import Checkbox from '@/components/Checkbox';
import TopNav from '@/components/TopNav';

const Login = () => {
  return (
    <section>
      <TopNav />

      <div className={formStyles.container}>
        <div className={formStyles.logoPlaceholder}>
          <Padding top="20px" bottom="20px">
            <img src="/logo.png" alt="Logo" />
          </Padding>
        </div>
        <form className={formStyles.form}>
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your Email"
          />
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
          />
          <div className={formStyles.formGroup}>
            <Grid
              columns="repeat(2, 1fr)"
              gap="5px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Checkbox label="Remember Me" name="remember" />
              <div className={styles.forgetPassword}>
                <Link href="/forget-password">Forget Password?</Link>
              </div>
            </Grid>
          </div>
          <Padding top="15px" bottom="15px">
            <Button type="submit">Login</Button>
          </Padding>
        </form>
        <Padding top="15px" bottom="15px">
          <p className="text-center">
            Don't have an account? <Link href="/signup">Create an account</Link>
          </p>
        </Padding>
      </div>
    </section>
  );
};

export default Login;
