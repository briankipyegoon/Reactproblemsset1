import React from "react";
import Question from "./Questions";

const QuizGame = ({questions}) => {
    return (
        <div className="quiz-game">
            {questions.map((q, index)=>(
                <Question key = {index} questions = {q}/>
            ))}
        </div>
    );
};

export default QuizGame;