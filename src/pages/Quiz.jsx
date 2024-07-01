import { useEffect, useReducer, useState } from "react";
import Answers from "../Components/Answers";
import MiniPlayer from "../Components/MiniPlayer";
import ProgressBar from "../Components/ProgressBar";
import useQuestions from "../hooks/useQuestions";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";

const initialState = [];

function reducer(state, action) {
  const questions = _.cloneDeep(state);
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      questions[action.currentQuestion].options[action.index].checked =
        action.value;
      return questions;
    default:
      return state;
  }
}

function Quiz() {
  const { id } = useParams();
  const {state} = useLocation()
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [newQuestions, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleCheck(e, index) {
    dispatch({
      type: "answer",
      currentQuestion: currentQuestion,
      index: index,
      value: e.target.checked,
    });
  }

  // to fo to next question
  function next() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }
  // to fo to next question
  function prev() {
    if (currentQuestion >= 1 && currentQuestion < questions.length) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }
  // to calculate percentage
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  // For submiting Answers
  async function submit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: newQuestions,
    });
    navigate(`/result/${id}`, {
      state: newQuestions,
    });
  }

  return (
    <>
      {loading && <div className="center">Loading...</div>}
      {error && <div className="center">There was an error!</div>}
      {!loading && !error && newQuestions && newQuestions.length > 0 && (
        <>
          <h1>{newQuestions[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            input
            options={newQuestions[currentQuestion].options}
            handleCheck={handleCheck}
          />
          <MiniPlayer id={id} title={state.title}/>
          <ProgressBar
            next={next}
            prev={prev}
            percentage={percentage}
            submit={submit}
          />
        </>
      )}
    </>
  );
}

export default Quiz;
