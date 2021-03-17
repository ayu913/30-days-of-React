import React from "react";
import "../App.css";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";

const EndScreen = () => {
    const { score, setScore, setGameState, userName } = useContext(
        QuizContext
    );

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    };
    return (
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h3>{userName}</h3>
            <h1>
                {score} / {Questions.length}
            </h1>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
};

export default EndScreen;