import Input from "@/components/common/Input";
import styles from "./Login.module.scss";
import Button from "@/components/common/Button";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email: ", email);
    console.log("passsword: ", password);
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <h2 className={styles.title}>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className={styles.input}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
