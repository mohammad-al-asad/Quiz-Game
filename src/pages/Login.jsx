import Button from "../Components/Button";
import Form from "../Components/Form";
import Illustration from "../Components/Illustration";
import InputText from "../Components/InputText";
import classes from "../styles/SignUp.module.css";

function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className={classes.column}>
        <Illustration />

        <Form className={classes.login}>
          <InputText type="password" placeholder="Enter email">
            <span className="material-icons-outlined"> alternate_email </span>
          </InputText>

          <InputText type="password" placeholder="Enter password">
            <span className="material-icons-outlined"> lock </span>
          </InputText>

          <Button><span>Submit now</span></Button>

          <div className="info">
            Don&apos;t have an account? <a href="signup.html">Signup</a>{" "}
            instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default Login;
