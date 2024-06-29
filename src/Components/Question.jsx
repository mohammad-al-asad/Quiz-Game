import classes from "../styles/Question.module.css";
import Answers from "./Answers";

function Question({answers=[]}) {
  return (
    answers.map((question,index)=>(
      
      <div key={index} className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {question.title}
      </div>
      <Answers input={false} options={question.options}/>
    </div>
      
  ))
  );
}

export default Question;
