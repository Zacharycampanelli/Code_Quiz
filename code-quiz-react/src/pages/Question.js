import React, { useState } from 'react'

const Question = ({score, setScore, currentQuestion, setCurrentQuestion, quizQuestions}) => {
    const [prevCorrect, setPrevCorrect] = useState(false);
    let answerNumber = 1;

    const isCorrect = (answer) => {
        if (answer === quizQuestions[currentQuestion].correct) {
          setScore(score + 20);
          setPrevCorrect(true)
          setCurrentQuestion(currentQuestion + 1);
        } else {
            setPrevCorrect(false)
            setCurrentQuestion(currentQuestion + 1)
        }
      };

  return (
    <>
          <div className="score">Score: {score} {prevCorrect ? (<p>Correct!</p>) : (<p>Incorrect!</p>)}</div>
          <div className="question-number">
            <h2>Question {currentQuestion + 1}</h2>
          </div>
          <div className="question-text">
            <h2>{quizQuestions[currentQuestion].question}</h2>
          </div>
          <div className="question-answers">
            {quizQuestions[currentQuestion].answers.map((option) => (
              <button onClick={() => isCorrect(option)} key={answerNumber++}>{option}</button>
            ))}
            
          </div>
        </>
  )
}

export default Question