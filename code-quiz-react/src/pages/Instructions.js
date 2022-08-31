import React from 'react'

const Instructions = ({setStarted}) => {
  return (
    <div className="container" id="instructions">
          <h1>Coding Quiz Challenge</h1>
          <p>
            "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect
            answers will penalize your score/time by ten seconds!"
          </p>
          <button onClick={() => setStarted(true)}>Start</button>
        </div>
  )
}

export default Instructions