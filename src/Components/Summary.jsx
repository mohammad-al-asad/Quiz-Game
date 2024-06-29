/* eslint-disable react/prop-types */
import classes from "../styles/Summary.module.css";

function Summary({ score, noq }) {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className={classes.badge}>
        <img src="../../images/success.png" alt="Success" />
      </div>
    </div>
  );
}

export default Summary;
