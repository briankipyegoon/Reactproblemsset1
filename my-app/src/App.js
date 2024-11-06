import React from "react";
import RecipeFinder from "./RecipeFinder/RecipeFinder";
import QuizGame from "./Trivia Quiz Game/QuizGame";
import { questions } from "./Trivia Quiz Game/Data";

const App= () => {
  return(
    <div>
      <RecipeFinder/>
      <div>
        <h1>QuizGame</h1>
        <QuizGame questions = {questions} />
      </div>
    </div>
  );
};

export default App;
