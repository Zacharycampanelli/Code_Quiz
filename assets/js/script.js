var mainEl = document.querySelector(".main");
var h1El = document.createElement("h1");
var startPageEl = document.createElement("div");
var questionEl = document.createElement("div");
var scoreSubmitEl = document.createElement("div");
var highScorePageEl = document.createElement("div");

var pEl = document.createElement("p");

var yourScoreEl = document.createElement("div");
// var quizEl = document.querySelector("#quiz");
var beginBtnEl = document.createElement("button");
// var pEl = document.createElement("p");

var opt1El = document.createElement("button");
var opt2El = document.createElement("button");
var opt3El = document.createElement("button");
var opt4El = document.createElement("button");
// var optionContainerEL = document.createElement("div");

var footerEl = document.querySelector("footer");
var enterScoreFormEl = document.createElement("form");
var inputFieldEl = document.createElement("input");
var submitButtonEl = document.createElement("button");
var goBackButtonEl = document.createElement("button");
var clearScores = document.createElement("button");

var scoreInfoEl = document.createElement("div");
var scoreItemEl = document.createElement("li");
var scoreSheetEl = document.createElement("ol");

var questionNumber = 0;
var check;

var timer = 30;

var timerEl = document.querySelector("#time");
var highScores = [];
var scoreNumber = 0;

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

function createScore(userScores) {
  scoreItemEl.className = "score-item";
  scoreItemEl.setAttribute("data-score-id", scoreNumber);

  scoreInfoEl.className = "score-list";
  scoreInfoEl.innerHTML =
    "<h2 class = 'score-name'>" +
    userScores.initials +
    "</h3><span class='user-score'>" +
    userScores.score +
    "</span>";

  loadScores();

  userScores.id = scoreNumber;
  scoreNumber++;

  highScores.push(userScores);

  saveScore();

  buildHighScorePage(userScores.score);
}

function hide(item) {
  item.setAttribute("class", "hide");
}

function buildStartPage() {
  debugger;
  highScorePageEl.classList.add("hide");
  startPageEl.classList.remove("hide");
  h1El.textContent = "Coding Quiz Challenge";
  pEl.textContent =
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
  startPageEl.appendChild(h1El);
  startPageEl.appendChild(pEl);

  beginBtnEl.setAttribute("type", "button");
  beginBtnEl.textContent = "Start Quiz";
  startPageEl.appendChild(beginBtnEl);

  mainEl.appendChild(startPageEl);
}

function buildQuizPage(questionNum) {
  startPageEl.classList.add("hide");
  questionEl.classList.remove("hide");
  // optionContainerEL.removeAttribute("class", "hide");
  h1El.textContent = quizQuestions[questionNum].question;

  //questionEl.textContent = quizQuestions[questionNum].question;
  opt1El.textContent = quizQuestions[questionNum].answers[0];
  opt2El.textContent = quizQuestions[questionNum].answers[1];
  opt3El.textContent = quizQuestions[questionNum].answers[2];
  opt4El.textContent = quizQuestions[questionNum].answers[3];

  questionEl.appendChild(h1El);
  // optionContainerEL.appendChild(opt1El);
  // optionContainerEL.appendChild(opt2El);
  // optionContainerEL.appendChild(opt3El);
  // optionContainerEL.appendChild(opt4El);
  questionEl.appendChild(opt1El);
  questionEl.appendChild(opt2El);
  questionEl.appendChild(opt3El);
  questionEl.appendChild(opt4El);
  // questionEl.appendChild(optionContainerEL);
  mainEl.appendChild(questionEl);
  if (questionNum != 0) {
    footerEl.textContent = check;
    if (questionNum > 5) {
      buildScoreFormPage();
    }
  }
}

function buildScoreFormPage() {
  questionEl.classList.add("hide");
  scoreSubmitEl.classList.remove("hide");
  h1El.textContent = "All Done!";

  yourScoreEl.textContent = `Your final score is: ${timer}`;
  scoreSubmitEl.appendChild(h1El);
  scoreSubmitEl.appendChild(yourScoreEl);

  enterScoreFormEl.textContent = "Enter Inits:";

  inputFieldEl.setAttribute("type", "text");
  inputFieldEl.setAttribute("name", "score");
  inputFieldEl.setAttribute("id", "score");
  inputFieldEl.setAttribute("placeholder", "Your Initials");

  enterScoreFormEl.appendChild(inputFieldEl);

  submitButtonEl.setAttribute("type", "button");
  submitButtonEl.textContent = "Submit";

  enterScoreFormEl.appendChild(submitButtonEl);

  scoreSubmitEl.appendChild(enterScoreFormEl);
  mainEl.appendChild(scoreSubmitEl);
  console.log(inputFieldEl.value);
}

function buildHighScorePage(score) {
  scoreSubmitEl.classList.add("hide");

  footerEl.classList.add("hide");
  highScorePageEl.classList.remove("hide");
  h1El.textContent = "High Score";
  highScorePageEl.appendChild(h1El);

  scoreItemEl.appendChild(scoreInfoEl);
  scoreSheetEl.appendChild(scoreItemEl);

  highScorePageEl.appendChild(scoreSheetEl);
  goBackButtonEl.textContent = "Go back";
  clearScores.textContent = "Reset High Scores";
  highScorePageEl.appendChild(goBackButtonEl);
  highScorePageEl.appendChild(clearScores);
  mainEl.appendChild(highScorePageEl);

  for (var i = 0; i < highScores.length; i++) console.log(highScores[i]);
}

function compareScores() {}

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
  buildStartPage();
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
    buildScoreFormPage();
  }
}

function saveScore() {
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function loadScores() {
  var highScores = localStorage.getItem("highScores");

  if (!highScores) {
    return false;
  }
  highScores = JSON.parse(highScores);

  // for (var i = 0; i < highScores.length; i++) {
  //   console.log(highScores[i]);
  //   createScore(highScores[i]);
  // }
}

//..submitButtonEl.addEventListener("click", scoreFormHandler);

questionEl.addEventListener("click", function (event) {
  var element = event.target;
  var choice;
  if (element.matches("button")) {
    choice = element.textContent;
  }
  checkAnswer(choice);
  console.log(element);
});

submitButtonEl.addEventListener("click", scoreFormHandler);

beginBtnEl.addEventListener(
  "click", //buildQuizPage(questionNumber)
  function () {
    console.log(beginBtnEl.value);
    buildQuizPage(questionNumber);
  }
);

goBackButtonEl.addEventListener("click", function () {
  timer = 30;
  questionNumber = 0;
  //goBackButtonEl.setAttribute("class", "hide");
  //clearScores.setAttribute("class", "hide");
  //scoreItemEl.setAttribute("class", "hide");
  startPageEl.classList.remove("hide");
  while (mainEl.firstChild) {
    mainEl.removeChild(mainEl.lastChild);
  }
  buildQuizPage(questionNumber);
});

startGame();
