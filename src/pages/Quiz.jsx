import Answers from "../Components/Answers"
import MiniPlayer from "../Components/MiniPlayer"
import ProgressBar from "../Components/ProgressBar"

function Quiz() {
  return (
    <>
    <h1>Pick three of your favorite Star Wars Flims</h1>
    <h4>Question can have multiple answers</h4>
    <Answers/>
    <MiniPlayer/>
    <ProgressBar/>
    </>
  )
}

export default Quiz