import Button from "../Components/Button";
import Checkbox from "../Components/Checkbox";
import Form from "../Components/Form";
import Illustration from "../Components/Illustration";
import InputText from "../Components/InputText";
import classes from "../styles/SignUp.module.css";

function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className={classes.column}>
        <Illustration />

        <Form className={classes.SignUp}>
          <InputText type="text" placeholder="Enter name">
            <span className="material-icons-outlined"> person </span>
          </InputText>

          <InputText type="password" placeholder="Enter email">
            <span className="material-icons-outlined"> alternate_email </span>
          </InputText>

          <InputText type="password" placeholder="Enter password">
            <span className="material-icons-outlined"> lock </span>
          </InputText>

          <InputText type="password" placeholder="Confirm password">
            <span className="material-icons-outlined"> lock_clock </span>
          </InputText>

          <Checkbox>I agree to the Terms & Conditions</Checkbox>

          <Button>
            <span>Submit now</span>
          </Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
