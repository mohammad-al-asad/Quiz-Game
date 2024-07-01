/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

function ProgressBar({ next, prev, percentage, submit }) {
  const [tootip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  function toogleTooltip() {
    if (tootip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${percentage}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }

  return (
    <div className={classes.progressBar}>
      <div onClick={prev} className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div ref={tooltipRef} className={classes.tooltip}>
          {percentage}% Complete!
        </div>
        <div className={classes.rangeBody}>
          <div
            onMouseOver={toogleTooltip}
            onMouseOut={toogleTooltip}
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
