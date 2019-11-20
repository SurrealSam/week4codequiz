var startBtn = document.querySelector("getreadybtn");
var startBlock = document.querySelector("getready");
var questionBlock = document.querySelector("card1");

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
