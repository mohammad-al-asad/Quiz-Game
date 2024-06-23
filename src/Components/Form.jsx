/* eslint-disable react/prop-types */
import classes from "../styles/From.module.css";
function Form({ children, className, ...rest }) {
  return (
    <form
      className={`${className} ${classes.form}`}
      {...rest}
    >
      {children}
    </form>
  );
}

export default Form;
