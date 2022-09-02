import React from 'react'

import styles from './Instructions.module.css'

const Instructions = ({setStarted}) => {
  return (
    <div className={styles.container} id="instructions">
          <h1>Coding Quiz Challenge</h1>
          <p>
            "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect
            answers will penalize your score/time by ten seconds!"
          </p>
          <button className={styles.btn} onClick={() => setStarted(true)}>Start</button>
        </div>
  )
}

export default Instructions