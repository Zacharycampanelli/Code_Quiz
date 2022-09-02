import React, { useState } from 'react'

import styles from './Question.module.css'

const Question = ({score, setScore, currentQuestion, setCurrentQuestion, quizQuestions}) => {
    const [prevCorrect, setPrevCorrect] = useState("");
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
        showPrevCorrect()
      };

      const showPrevCorrect = () => {
        if (prevCorrect) {
            return <p>Correct!!</p>
        }
        else {
            return <p>Incorrect!!</p>
        }
      }

  return (
    <>
          <div className="score">
            Score: {score} 
          </div>
          <div className="question-number">
            <h2>Question {currentQuestion + 1}</h2>
          </div>
          <div className="question-text">
            <h2>{quizQuestions[currentQuestion].question}</h2>
          </div>
          <div className="question-answers">
            {quizQuestions[currentQuestion].answers.map((option) => (
              <button className={styles.answerBtn} onClick={() => isCorrect(option)} key={answerNumber++}>{option}</button>
            ))}
            {prevCorrect ? (<p className={styles.correct}>Correct!</p>) : ('')}
            {!prevCorrect && currentQuestion > 0 && <p className={styles.incorrect}>Incorrect!</p>}
          </div>
        </>
  )
}

export default Question