import Illustration from "../Components/Illustration";
import SignupForm from "../Components/SignupForm";
import classes from "../styles/Column.module.css";

function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className={classes.column}>
        <Illustration />
        <SignupForm/>
        
      </div>
    </>
  );
}

export default SignUp;
