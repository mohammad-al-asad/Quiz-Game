import classes from "../styles/Answers.module.css"
import Checkbox from "./Checkbox";

function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer}>Test Answer</Checkbox>
    </div>
  );
}

export default Answers;
