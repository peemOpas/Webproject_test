import "./QuizPage.css";
import { createContext, useContext, useState } from "react";
import MenuQuizpage from "./MenuQuizpage";
import Quiz from "./Quiz";
import Score from "./Score";
import DataContext from "../Data/DataContext";
import { useLocation } from "react-router-dom";
export const DataQuizContext = createContext();

const QuizPage = () => {
  const [quizState, setquizState] = useState("menu");
  const [score, setScore] = useState(0);
  // const location = useLocation();
  // const { username } = location.state;
  const { username } = useContext(DataContext);
  return (
    <DataQuizContext.Provider
      value={{ quizState, setquizState, score, setScore }}
    >
      <div className="quizpage">
        {username}

        {quizState === "menu" && <MenuQuizpage />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "score" && <Score />}
      </div>
    </DataQuizContext.Provider>
  );
};

export default QuizPage;
