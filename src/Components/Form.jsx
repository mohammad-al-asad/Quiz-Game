/* eslint-disable react/prop-types */
import classes from "../styles/From.module.css";
function Form({ children, ...rest }) {
  return (
    <form className={classes.form} {...rest}>
      {children}
    </form>
  );
}

export default Form;
