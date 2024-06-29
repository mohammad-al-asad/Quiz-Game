/* eslint-disable react/prop-types */
import { Fragment } from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

function Answers({ options = [], handleCheck, input }) {

  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              className={classes.answer}
              checked={option.checked}
              onChange={(e) => handleCheck(e, index)}
            >
              {option.title}
            </Checkbox>
          ) : (
            <Checkbox
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              defaultChecked={option.checked}
              disabled
            >
              {option.title}
            </Checkbox>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default Answers;
