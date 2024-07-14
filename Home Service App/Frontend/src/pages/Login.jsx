import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Login = () => {
  return (
    <div>
      <form>
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          required
        />
        <Input
          type="password"
          placeholder="Password"
          required
        />
        <Button type="submit">Log in</Button>
        <div>
          <a href="#">Don't have an account? Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
