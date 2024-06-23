/* eslint-disable react/prop-types */
import classes from "../styles/InputText.module.css"

function InputText({ children, ...rest }) {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      {children}
    </div>
  );
}

export default InputText;
