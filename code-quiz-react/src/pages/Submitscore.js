import React, { useEffect } from "react";

import styles from './Submitscore.module.css'




const Submitscore = ({score, setSubmitted}) => {
let highScores = [];
    useEffect(() => {
        loadScore(highScores);
    },[])

    function scoreHandler(event) {
        event.preventDefault();
        let inits = document.querySelector("input[name='inits']").value
        
        const userScoreData = {
            inits,
            score
        }
 
        highScores.push(userScoreData);
        
        saveScore(highScores)
        setSubmitted(true);
    }

    function loadScore(highScores) {
        highScores = JSON.parse(localStorage.getItem('Highscores'));
    }

    function saveScore() {
    localStorage.setItem('Highscores', JSON.stringify(highScores));
  }

   

  return (
    <div>
       <h2>Your score is {score}</h2> 
       <h2>Please enter your initials: </h2>
       <input className={styles.input} type="text" name="inits" id="inits" placeholder="initials" />
       <button className={styles.submitBtn} type="submit" onClick={scoreHandler}>Submit</button>
    </div>
  )
}

export default Submitscore