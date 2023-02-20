// //selects time
// var timeEl = document.querySelector("#currentTime");
// var secondsLeft = 75;

// function setTime() {
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         timeEl.textContent = secondsLeft + " Time Left ";

//         if(secondsLeft === 0) {
//             clearInterval(timerInterval);
//             sendMessage();
//         }
//     }, 1250);
// }
// //function to create message that game is over
// function sendMessage() {
//     timeEl.textContent = "GAME OVER ";
// }
// setTime();

// var questions = [
//     "one",
//     "two",
//     "three",

// ];

// Array with questions and answers
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parantheses", "square brackets"],
        answer: "parantheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parantheses"],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
];
//variables
var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector(".btn btn-start");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrap2");

//timer element with total seconds
var secondsLeft = 75;
//interval hold time
var holdInterval = 0;
//10 second penalty for wrong questions
var penalty = 5;
//new element for unordered list property
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(funtion() {
            secondsLeft--;
        currentTime.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(holdInterval);
            allDone();
            currentTime.textContent = "Game Over";
        }
    }, 1250);
    }
render(questionIndex);
});
//renders questions and choices to page
function render(questionIndex) {
    //clears existing data
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // for loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        //appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // new choices for each for loop
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
//Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        //correct condition
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is: " + questions[questionIndex].answer;
            //correct condition
        } else {
            //will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong. The correct answer is: " + questions[questionIndex].answer;
        }
    }
    //question index determines number question user is on
    questionIndex++;
    if(questionIndex >= questions.length) {
        allDone();
        createDiv.textContent = "All Done!" + "You got " + score + "/" + questions.length + "Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);
}
