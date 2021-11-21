import { DataQuizContext } from "./QuizPage";
import { useContext } from "react";
const MenuQuizpage = () => {
  const { setquizState } = useContext(DataQuizContext);
  return (
    <div className="menu">
      <h1>Let Start !!!</h1>
      <button onClick={() => setquizState("quiz")}>Start Doing Quiz</button>
    </div>
  );
};
export default MenuQuizpage;
