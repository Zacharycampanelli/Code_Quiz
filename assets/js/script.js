var mainEl = document.querySelector(".main");
var h1El = document.createElement("h1");
var questionEl = document.createElement("div");
var pEl = document.createElement("p");
// var quizEl = document.querySelector("#quiz");
// var beginBtnEl = document.querySelector("#begin");
// var pEl = document.createElement("p");

var opt1El = document.createElement("button");
var opt2El = document.createElement("button");
var opt3El = document.createElement("button");
var opt4El = document.createElement("button");
var optionContainerEL = document.createElement("div");

var footerEl = document.querySelector("footer");

var questionNumber = 0;
var check;

var timer = 30;

var timerEl = document.querySelector("#time");

var quizQuestions = [
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

function scoreFormHandler(event) {
  event.preventDefault();
  var scoreNameInput = document.querySelector("input[name='score']").value;
  var score = timer;

  if (!scoreNameInput) {
    alert("You need to fill out the task form!");
    return false;
  }

  var userScores = {
    initials: scoreNameInput,
    score: timer,
  };

  createScore(userScores);
}

function clearPage() {
  while (mainEl.hasChildNodes()) {
    mainEl.removeChild(mainEl.firstChild);
  }
}

function buildQuizPage(questionNum) {
  //h1El.innerHTML = quizQuestions[questionNum].question;
  questionEl.textContent = quizQuestions[questionNum].question;
  opt1El.textContent = quizQuestions[questionNum].answers[0];
  opt2El.textContent = quizQuestions[questionNum].answers[1];
  opt3El.textContent = quizQuestions[questionNum].answers[2];
  opt4El.textContent = quizQuestions[questionNum].answers[3];

  mainEl.appendChild(h1El);
  h1El.appendChild(questionEl);
  optionContainerEL.appendChild(opt1El);
  optionContainerEL.appendChild(opt2El);
  optionContainerEL.appendChild(opt3El);
  optionContainerEL.appendChild(opt4El);
  mainEl.appendChild(optionContainerEL);

  if (questionNum != 0) {
    footerEl.textContent = check;
    if (questionNum > 5) {
      clearPage();
      buildScoreFormPage();
    }
  }
}

function buildScoreFormPage() {
  questionEl.textContent = "All Done!";
  pEl.textContent = `Your final score is: ${timer}`;
  h1El.appendChild(questionEl);
  mainEl.appendChild(h1El);
  mainEl.appendChild(pEl);
}

function setTimer() {
  timeInterval = setInterval(function () {
    if (timer > 0) {
      timerEl.textContent = timer;
      timer--;
    } else {
      timerEl.textContent = 0;
      //enterScore();
    }
  }, 1000);
}

function startGame() {
  setTimer();
  buildQuizPage(questionNumber);
}

function checkAnswer(choice) {
  // var check;

  if (choice == quizQuestions[questionNumber].correct) {
    check = true;
    timer += 10;
  } else {
    check = false;
    timer -= 10;
  }
  questionNumber += 1;
  if (questionNumber < quizQuestions.length) {
    buildQuizPage(questionNumber);
  } else {
    clearPage();
    buildScoreFormPage();
  }
}

// submitButtonEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   var userScores = {
//     initials: inputFieldEl.value.trim(),
//     score: timer,
//   };

//   createScore(userScores);

//   // userScores.id = scoreNumber;
//   // highScores.push(userScores);
//   // scoreNumber++;
//   // saveScores();
//   clearPage();
//   viewHighScores();
// });

optionContainerEL.addEventListener("click", function (event) {
  var element = event.target;
  var choice;
  if (element.matches("button")) {
    choice = element.textContent;
  }
  checkAnswer(choice);
});

// submitButtonEl.addEventListener("click", scoreFormHandler);
// beginBtnEl.addEventListener("click", startGame);

startGame();
