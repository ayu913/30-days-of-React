import React, { useState, useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';

const Quiz = () => {




    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const { score, setScore, setGameState } = useContext(
        QuizContext
    );

    

    const nextQuestion = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("endScreen");
    };


    
    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>

            <div className="options">

                <button onClick={() => setOptionChosen("optionA")}>{Questions[currQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("optionB")}>{Questions[currQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("optionC")}>{Questions[currQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("optionD")}>{Questions[currQuestion].optionD}</button>
            </div>
            {currQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz} id="nextQuestion">
                    Finish Quiz
                </button>
            ) : (
                <button onClick={nextQuestion} id="nextQuestion">
                    Next Question
                </button>
            )}

        </div>
    )
}

export default Quiz;
