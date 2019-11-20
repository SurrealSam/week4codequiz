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

//start button
startBtn.addEventListener("click", function () {

    startBlock.style.display = "none";
    questionBlock.style.display = "block";
    console.log("1");
});

//countdown timer/score
var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);