import { useLocation, useParams } from "react-router-dom";
import Analysis from "../Components/Analysis";
import Summary from "../Components/Summary";
import useAnswers from "../hooks/useAnswers";
import _ from "lodash";

function Result() {
  const { id } = useParams();
  const { loading, error, answers } = useAnswers(id);
  const location = useLocation();
  const { state: newQuestion } = location;

  function calculate() {
    var score = 0;

    answers.forEach((question, index) => {
      const correctOptions = [];
      const checkedOptions = [];
      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctOptions.push(index2);
        }
        if (newQuestion[index].options[index2].checked) {
          checkedOptions.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctOptions, checkedOptions)) {
        score += 5;
      }
    });
    return score;
  }
  const score = calculate();

  return (
    <>
      {loading && <div className="center">Loading...</div>}
      {error && <div className="center">There was an error!</div>}
      {!loading && !error && answers && answers.length > 0 && (
        <>
          <Summary score={score} noq={answers.length} />
          <Analysis answers={answers}/>
        </>
      )}
    </>
  );
}

export default Result;
