/* eslint-disable react/prop-types */
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

function ProgressBar({ next, prev, percentage, submit }) {

  return (
    <div className={classes.progressBar}>
      <div onClick={prev} className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{percentage}% Complete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: percentage + "%" }}
          ></div>
        </div>
      </div>

      <Button
        onClick={percentage == 100 ? submit : next}
        className={classes.next}
      >
        <span>{percentage == 100 ? "Finish Quiz" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}

export default ProgressBar;
