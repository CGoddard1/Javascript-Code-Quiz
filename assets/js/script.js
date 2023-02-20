//selects time
var timeEl = document.querySelector("#currentTime");
var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Time Left ";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1250);
}
//function to create message that game is over
function sendMessage() {
    timeEl.textContent = "GAME OVER ";
}
setTime();

var questions = [
    "one",
    "two",
    "three",
    
];

// Array with questions and answers
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    }
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parantheses", "square brackets"],
        answer: "parantheses"
    }
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    }
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parantheses"],
        answer: "quotes"
    }
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    }
];
//variables
var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector(".btn-start");
var questions = document.querySelector("#questions");
var wrapper = document.querySelector("#wrap2");

//timer element with total seconds
var secondsLeft = 75;
//interval hold time
var holdInterval = 0;
//10 second penalty for wrong questions
var penalty = 10;
//new element for unordered list property
var ulCreate = document.createElement("ul");