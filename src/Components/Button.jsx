/* eslint-disable react/prop-types */
import classes from "../styles/Button.module.css";

function Button({className, children }) {
  return (
    <button className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
