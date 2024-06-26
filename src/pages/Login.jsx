import Illustration from "../Components/Illustration";
import LoginForm from "../Components/LoginForm";
import classes from "../styles/Column.module.css";

function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className={classes.column}>
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
