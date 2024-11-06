import React, { useState } from 'react';

const Question = ({ questions }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);

    if (!questions || !questions.options) {
        return <p>Invalid question data</p>;
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsAnswered(true);

        const correct = option === questions.correctAnswer;
        setIsCorrect(correct);
    };

    return (
        <div className='questions'>
            <h3>{questions.question}</h3>
            <ul>
                {questions.options.map((option, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleOptionClick(option)}
                            disabled={isAnswered}
                            className={isAnswered && option === questions.correctAnswer ? 'correct' : ''}
                        >
                            {option}
                        </button>
                        {isAnswered && option === questions.correctAnswer && <span>✔️</span>}
                        {isAnswered && option === selectedOption && option !== questions.correctAnswer && (
                            <span>❌</span>
                        )}
                    </li>
                ))}
            </ul>
            {isAnswered && (
                <div>
                    {isCorrect ? (
                        <p>Correct!</p>
                    ) : (
                        <p>Incorrect, the correct answer is {questions.correctAnswer}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Question;
