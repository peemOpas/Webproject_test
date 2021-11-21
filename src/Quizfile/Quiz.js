import { useState, useEffect } from "react";
import QuestionsData from "../Data/quizdata/QuestionsData";
import { DataQuizContext } from "./QuizPage";

import { useContext } from "react";

const Quiz = () => {
  const [current, setcurrent] = useState(0);
  const { score, setScore, setquizState } = useContext(DataQuizContext);

  const [selectChoice, setSelectChoice] = useState("");
  //   const [formvalid, setformvalid] = useState(true);
  //   function changecurrent(value) {
  //     if (current === QuestionsData.length) {
  //       setquizState("score");
  //     }
  //     if (value === "increment") {
  //       setcurrent((prevState) => prevState + 1);
  //       console.log(current);
  //     } else if (value === "decrement") {
  //       setcurrent((prevState) => prevState - 1);
  //     }
  //   }

  const nextQuestion = () => {
    setSelectChoice("");
    if (current === QuestionsData.length - 1) {
      setquizState("score");
    } else {
      setcurrent(current + 1);
    }
  };

  const checkAnswer = () => {
    if (selectChoice !== "") {
      if (selectChoice === QuestionsData[current].answer) {
        setScore(score + 1);
        // console.log(score);
        nextQuestion();
      } else {
        // console.log("wrong");

        nextQuestion();
      }
    }
  };
  useEffect(() => {
    checkAnswer();
    // eslint-disable-next-line
  }, [selectChoice]);

  return (
    <div className="quiz">
      <h1>{QuestionsData[current].question}</h1>
      <div className="choices">
        <button className="quizchoice" onClick={() => setSelectChoice("A")}>
          {QuestionsData[current].A}
        </button>
        <button className="quizchoice" onClick={() => setSelectChoice("B")}>
          {QuestionsData[current].B}
        </button>
        <button className="quizchoice" onClick={() => setSelectChoice("C")}>
          {QuestionsData[current].C}
        </button>
        <button className="quizchoice" onClick={() => setSelectChoice("D")}>
          {QuestionsData[current].D}
        </button>
      </div>
      <p>{`${current + 1}/${QuestionsData.length}`}</p>
      <div className="quizfooter">
        {/* <button
          disabled={!setformvalid}
          onClick={() => changecurrent("decrement")}
        >
          back
        </button>
        <button
          disabled={!setformvalid}
          onClick={() => changecurrent("increment")}
        >
          Next
        </button> */}
      </div>
    </div>
  );
};

export default Quiz;
