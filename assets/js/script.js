var questionEl = document.querySelector("#question_h1")
var option1El =  document.querySelector("#q1");
var option2El =  document.querySelector("#q2");
var option3El =  document.querySelector("#q3");
var option4El =  document.querySelector("#q4");
var pEl = document.querySelector("p");
var mainEl = document.querySelector(".main")
var beginBtnEl = document.querySelector("#begin");
var quizEl = document.querySelector("#quiz")
// // Question 1
// questionEl.textContent =
// option1El.textContent = 

function startGame() {
    
    var choicesEl = document.createElement("ul");
    console.log(choicesEl)
    quizEl.appendChild(choicesEl);
    var opt1El = document.createElement("li");
    console.log(opt1El);
    opt1El.innerHTML = "hi";
    choicesEl.appendChild(opt1El);
    questionEl.innerHTML = "1"
    
}



beginBtnEl.addEventListener("click", function(){
    pEl.remove();
    beginBtnEl.remove()
    startGame();
});

    
