var questionEl = document.querySelector("#title");
var pEl = document.querySelector("p");
pEl.id = "true_false";
var mainEl = document.querySelector(".main");
var beginBtnEl = document.querySelector("#begin");
var quizEl = document.querySelector("#quiz");

var questionEl = document.createElement("h2");
var choicesEl = document.createElement("div");
var opt1El = document.createElement("button");
var opt2El = document.createElement("button");
var opt3El = document.createElement("button");
var opt4El = document.createElement("button");

var footerEl = document.querySelector("footer");

//var enterScoreEl = document.createElement("div");
var scorePEl = document.createElement("p");
var enterScoreFormEl = document.createElement("form");
var inputFieldEl = document.createElement("input");
var submitButtonEl = document.createElement("button");

var questionNumber = 0;
var check;

var timer;

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

function buildQuizPage(questionNum) {
  questionEl.innerHTML = quizQuestions[questionNum].question;
  quizEl.appendChild(questionEl);
  opt1El.textContent = quizQuestions[questionNum].answers[0];
  choicesEl.appendChild(opt1El);
  opt2El.textContent = quizQuestions[questionNum].answers[1];
  choicesEl.appendChild(opt2El);
  opt3El.textContent = quizQuestions[questionNum].answers[2];
  choicesEl.appendChild(opt3El);
  opt4El.textContent = quizQuestions[questionNum].answers[3];
  choicesEl.appendChild(opt4El);
  quizEl.appendChild(choicesEl);

  if (questionNum != 0) {
    pEl.textContent = check;
    footerEl.appendChild(pEl);
  }
}

function startGame() {
  buildQuizPage(questionNumber);
}

function enterScore() {
  questionEl.innerHTML = "All Done!";
  choicesEl.remove();

  scorePEl.innerHTML = `Your final score is: ${timer}`;
  quizEl.appendChild(scorePEl);

  enterScoreFormEl.innerHTML = "Enter Initials: ";
  inputFieldEl.setAttribute("type", "text");
  inputFieldEl.setAttribute("name", "score");
  inputFieldEl.setAttribute("placeholder", "Your Score");
  enterScoreFormEl.appendChild(inputFieldEl);

  submitButtonEl.setAttribute("type", "button");
  submitButtonEl.setAttribute("value", "submit");
  enterScoreFormEl.appendChild(submitButtonEl);
  quizEl.appendChild(enterScoreFormEl);

}

function checkAnswer(choice) {
  // var check;

  if (choice == quizQuestions[questionNumber].correct) {
    check = true;
  } else {
    check = false;
  }
  console.log(check);
  questionNumber += 1;
  console.log(questionNumber);
  if (questionNumber < quizQuestions.length) {
    buildQuizPage(questionNumber);
  } else {
    enterScore();
  }
}

choicesEl.addEventListener("click", function (event) {
  var element = event.target;
  var choice;
  if (element.matches("button")) {
    choice = element.textContent;
  }
  checkAnswer(choice);
});

beginBtnEl.addEventListener("click", function () {
  title.remove();
  pEl.remove();
  beginBtnEl.remove();
  startGame();
});
