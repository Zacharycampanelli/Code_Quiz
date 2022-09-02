import React, { useEffect, useState } from 'react';

const Highscore = () => {
  let highScores = [];
  const [scores, setScores] = useState(highScores);

  useEffect(() => {
    loadScore();
    console.log(highScores);
  }, []);

  function sortedScores(highScores) {
    for (let i = 0; i < highScores.length; i++) {
      highScores.sort((a, b) => {
        return b.score - a.score;
      });
    }
    setScores(highScores);
  }

  function loadScore() {
    highScores = JSON.parse(localStorage.getItem('Highscores'));
    console.log(highScores);
    if (!highScores) {
      return false;
    }

    sortedScores(highScores);
  }

  return (
    <div>
      Highscore
      {scores.map((score) => {
        <li>{score}</li>;
      })}
      {highScores[1].score}
    </div>
  );
};

export default Highscore;
