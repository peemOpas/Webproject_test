import { DataQuizContext } from "./QuizPage";
import { useContext } from "react";
import QuestionsData from "../Data/quizdata/QuestionsData";
const Score = () => {
  const { score, setquizState, setScore } = useContext(DataQuizContext);
  const restartquiz = () => {
    setScore(0);
    setquizState("menu");
  };
  return (
    <div className="scorepage">
      <h1>Your Score</h1>
      <h2>
        {score}/{QuestionsData.length}
      </h2>
      <button onClick={restartquiz}> Retry again</button>
    </div>
  );
};

export default Score;
