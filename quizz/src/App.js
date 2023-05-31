
import React, { useState } from "react";
import "./App.css";
import Questions from "./components/quenstions";
import QuestionCard from "./components/questioncard";
import FinalResults from "./components/final";




function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);


  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < Questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>Big Bang Theory Quizz</h1>
      <h2>Score: {score}</h2>
      {showResults ? (
        <FinalResults
          score={score}
          totalQuestions={Questions.length}
          restartGame={restartGame}
        />
      ) : (
        <QuestionCard
          question={Questions[currentQuestion]}
          optionClicked={optionClicked}
        />
      )}
    </div>
  );
}

export default App;
