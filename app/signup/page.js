import Link from 'next/link';
import styles from './page.module.scss';
import formStyles from '@/public/styles/FormContainer.module.scss';
import Button from './../../components/Button';
// import Grid from '@/components/Grid';
import Padding from '@/components/Padding';
import Input from '@/components/Input';
// import Checkbox from '@/components/Checkbox';
import TopNav from '@/components/TopNav';
import Radio from '@/components/Radio';

const SignUp = () => {
  return (
    <section>
      <TopNav />

      <div className={formStyles.container}>
        <div className={formStyles.logoPlaceholder}>
          <img src="/logo.png" alt="Logo" />
        </div>
        <form className={formStyles.form}>
          <Input
            label="Name"
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your Name"
          />
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
          <Input
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            placeholder="Confirm your password"
          />
          <div className={formStyles.formGroup}>
            <label>Role</label>
            <div>
              <Radio label="Farmer" name="role" value="farmer" />
              <Radio label="Vendor" name="role" value="vendor" />
              <Radio label="Investor" name="role" value="investor" />
              <Radio label="Logistic" name="role" value="logistic" />
            </div>
          </div>

          <Button type="submit">Signup</Button>
        </form>

        <p className="text-center">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
