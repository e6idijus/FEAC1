import Input from "@/components/common/Input";
import styles from "./Login.module.scss";
import Button from "@/components/common/Button";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <Button type="submit">Log in</Button>
        <div className={styles.link}>
          <a href="#">Don't have an account? Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
