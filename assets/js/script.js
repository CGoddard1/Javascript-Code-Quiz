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