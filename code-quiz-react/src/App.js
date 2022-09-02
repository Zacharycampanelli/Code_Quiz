import React, { useState } from 'react';

import Instructions from './pages/Instructions';
import Question from './pages/Question';
import Submitscore from './pages/Submitscore';
import Highscore from './pages/Highscore';
import styles from './App.module.css';

function App() {
  const quizQuestions = [
    {
      question: 'Commonly used data types do not include:',
      answers: ['Strings', 'Boolean', 'Alerts', 'Numbers'],
      correct: 'Alerts',
    },
    {
      question: 'The condition in an if/else statement is enclosed with ____.',
      answers: ['Quotes', 'Curly Brackets', 'Parenthesis', 'Square Brackets'],
      correct: 'Parenthesis',
    },
    {
      question: 'Arrays in JavaScript can be used to store ____.',
      answers: ['Numbers and Strings', 'Other Arrays', 'Booleans', 'All of the Above'],
      correct: 'All of the Above',
    },
    {
      question: 'String values must be enclosed within ____ when being assigned to variables.',
      answers: ['Commas', 'Curly Brackets', 'Quotes', 'Parenthesis'],
      correct: 'Quotes',
    },
    {
      question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      answers: ['JavaScript', 'Terminal/Bash', 'For Loops', 'console.log'],
      correct: 'console.log',
    },
  ];

  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  let [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.container}>
      {!started && <Instructions setStarted={setStarted} />}

      {started && currentQuestion < quizQuestions.length && (
        <Question
          score={score}
          setScore={setScore}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          quizQuestions={quizQuestions}
        />
      )}

      {currentQuestion >= quizQuestions.length && (
        <>
      {!submitted ? 
        <Submitscore score={score} setSubmitted={setSubmitted}/> :
        <Highscore />}
        </>
      )}
    </div>
  );
}

export default App;
