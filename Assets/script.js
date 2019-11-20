//questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "_____ is the file type commonly used to modify style elements.",
        choices: ["Javascript", "HTML", "JQuery", "CSS"],
        answer: "CSS"
    },
    {
        title: "Javascript variables that can store more than one piece of data are called _____.",
        choices: ["Arrays", "Variables", "For loops", "Timeouts"],
        answer: "Arrays"
    },
    {
        title: "To properly render javascript, one should place their reference link in the end of HTML ____.",
        choices: ["body", "head", "header", "script"],
        answer: "body"
    }
];

//hooks
var startBtn = document.getElementById("getreadybtn");
var startBlock = document.getElementById("getready");
var questionBlock = document.getElementById("card1");
var actualQuestion = document.getElementById("actualQuestion");
var button1=document.getElementById("btn1");
var button2=document.getElementById("btn2");
var button3=document.getElementById("btn3");
var button4=document.getElementById("btn4");
var answer1=document.getElementById("answer1");
var answer2=document.getElementById("answer2");
var answer3=document.getElementById("answer3");
var answer4=document.getElementById("answer4");
var whichQuestion = 0;
var seconds = document.getElementById("countdown").textContent;
function loadQuestion() {
    actualQuestion.innerText = questions[whichQuestion].title;
    answer1.innerText = questions[whichQuestion].choices[0];
    answer2.innerText = questions[whichQuestion].choices[1];
    answer3.innerText = questions[whichQuestion].choices[2];
    answer4.innerText = questions[whichQuestion].choices[3];
    whichQuestion=whichQuestion + 1;
}
//start button
startBtn.addEventListener("click", function () {

    startBlock.style.display = "none"; //hides div
    questionBlock.style.display = "block"; //unhides other div
    
    
    //starts countdown timer/score
var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);
    loadQuestion();
});


button1.addEventListener("click", function(){
    console.log(button1.innerText);
    if (button1.innerText === (questions[whichQuestion - 1].answer)) {
        console.log(button1.innerText);
    }
    else {
        seconds - 15;
console.log("nope");
    }
    loadQuestion();
  });