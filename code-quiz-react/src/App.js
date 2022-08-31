import React, { useState } from 'react';
import './App.css';

function App() {
  const quizQuestions = [
    {
      question: "Commonly used data types do not include:",
      answers: ["Strings", "Boolean", "Alerts", "Numbers"],
      correct: "Alerts",
    },
    {
      question: "The condition in an if/else statement is enclosed with ____.",
      answers: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
      correct: "Parenthesis",
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      answers: [
        "Numbers and Strings",
        "Other Arrays",
        "Booleans",
        "All of the Above",
      ],
      correct: "All of the Above",
    },
    {
      question:
        "String values must be enclosed within ____ when being assigned to variables.",
      answers: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
      correct: "Quotes",
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
      correct: "console.log",
    },
  ];

  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div>
      {!started && (
        <div className="container" id="instructions">
          <h1>Coding Quiz Challenge</h1>
          <p>
            "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect
            answers will penalize your score/time by ten seconds!"
          </p>
          <button onClick={() => setStarted(true)}>Start</button>
        </div>
      )}

      {started && 
      <div>
        quizQuestions.map((item) => {
          
        })
      </div>
      }
    </div>
  );
}

export default App;
