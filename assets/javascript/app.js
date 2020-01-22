//PSEUDO-CODE

$(document).ready(
    $("#game").hide(),
    $("#results").hide()
);

//GLOBAL VARIABLES and ARRAYS
//questions and answer arrays
var questions = [{
        text: "The AT&T building, an iconic Nashville skyline fixture and the tallest building in Tennessee, is also referred to by this nickname?",
        answers: ["Batman Building", "505", "Pinnacle", "Bridgestone Tower"],
        correctAns: "Batman Building"
    },
    {
        text: "What long-time game show host was at one time a Nashville weather personality?",
        answers: ["Alex Trebek", "Steve Harvey", "Wayne Brady", "Pat Sajak"],
        correctAns: "Pat Sajak"
    },
    {
        text: "What famous TV personality got her start in television as the first African-American female news anchor at Nashville's WLAC-TV?",
        answers: ["Wendy Williams", "Oprah Winfrey", "Whoopi Goldberg", "Robin Roberts"],
        correctAns: "Oprah Winfrey"
    },
    {
        text: "What was the Music Row destination where you could ride a mechanical bull?",
        answers: ["Gilley's", "Mabel's", "Sony", "The Broken Spoke"],
        correctAns: "Gilley's"
    },
    {
        text: "What two famous race horses hail from Nashville's Belle Meade plantation?",
        answers: ["Secretariat and American Pharoah", "Man o' War and Red Rum", "Native Dancer and Affirmed", "Seabiscuit and War Admiral"],
        correctAns: "Seabiscuit and War Admiral"
    },
    {
        text: "What was the #1 tourist attraction in Nashville until 1997?",
        answers: ["The Grand Ole Opry", "Opryland", "Tootsie's", "Music Row"],
        correctAns: "Opryland"
    },
    {
        text: "What famous Nashville music venue is known as the 'Mother Church of Country Music'?",
        answers: ["The Grand Ole Opry", "Ryman Auditorium", "Bluebird Cafe", "The Station Inn"],
        correctAns: "Ryman Auditorium"
    },
    {
        text: "Which of the following is NOT one of Nashville's nicknames?",
        answers: ["The Queen of the Cumberland", "Smashville", "Music City, USA", "Athens of the South"],
        correctAns: "The Queen of the Cumberland"
    }
];

//global variables
var timeRemaining = 20;
var timerInterval;
var correct = 0;
var wrong = 0;
var currentIndex = 0; //#question currently on
var clockRunning = false;

$(".correct").html("Correct:" + correct);
$(".incorrect").html("Incorrect:" + wrong);


//FUNCTIONS
//TIMER FUNCTIONS:
//function for timer
//decrement time
//check if time has run out
//if yes, increment current Index, show correct answer, move to next question

function threeSeconds() {
    $("#answers").empty();
    currentIndex++

    if (currentIndex === questions.length) {
        $("#game").hide();
        $("#results").show();

    } else {
        displayQuestion();
        startTimer();
    }
};

function decrement() {
    $("#timeDisplay").html("<h3>Time remaining: " + timeRemaining + "</h3");
    timeRemaining--;
    if (timeRemaining === -1) {


        $("#answers").html("<h2>Time is up! The corect answers is: " + questions[currentIndex].correctAns + "</h2>");

        setTimeout(threeSeconds, 1000 * 3);
        stop();

    }

    console.log(currentIndex);

    //  currentIndex++;
    //show questions.answer[correct]
    //displayQuestion () 
};


//function to start timer - set length (timerInterval calls timer function every second)

function startTimer() {
    if (!clockRunning) {
        timerInterval = setInterval(decrement, 1000);
        clockRunning = true;
    }
};

//function to stop timer 
//clear timerInterval 
//reset time remaining

function stop() {
    clearInterval(timerInterval);
    clockRunning = false;
    timeRemaining = 20;
};

//OTHER FUNCTIONS:
//function for displaying questions

function displayQuestion() {

    $("#questions").html("<h2>" + questions[currentIndex].text + "</h2>");
    $(".btn1").html("<h3>" + questions[currentIndex].answers[0] + "</h3>");
    $(".btn2").html("<h3>" + questions[currentIndex].answers[1] + "</h3>");
    $(".btn3").html("<h3>" + questions[currentIndex].answers[2] + "</h3>");
    $(".btn4").html("<h3>" + questions[currentIndex].answers[3] + "</h3>");
    console.log(questions[currentIndex].text);
    for (var i = 0; i < questions[i].length; i++) {

    }
};

//determine what number question we are on with currentIndex
//check if currentIndex === questions.length
//if yes, hide question, show results with correct, incorrect, and unanswered question stats
//update DOM with current question's text and answers using (questions [currentIndex]);
//start timer

//EVENT LISTENERS:
//event listener for start and reset buttons
//hides welcome screen
//shows question screen
//loads first question and updates timer
$("#start").on("click", function () {
    $("#welcome").hide();
    $("#results").hide();
    $("#game").show();
    startTimer();
    displayQuestion();
    console.log("Lynde");
});

$("#restart").on("click", function () {
    $("#welcome").hide();
    $("#results").hide();
    $("#game").show();
    $(".correct").empty();
    $(".incorrect").empty();
    correct = 0;
    wrong = 0;
    currentIndex = 0;
    startTimer();
    displayQuestion();
});

//event listener for answer button
//check whether answer is correct (compare to questions[currentIndex].correctanswer)
//show message for correct or incorrect
//stop timer
//after three seconds, increment currentIndex and call display questionfunction

$(".answer").on("click", function () {
    console.log("Lynde")

    var userGuess = $(this).find('h3').text();
    console.log(userGuess);

    console.log(currentIndex);
    if (userGuess === questions[currentIndex].correctAns) {
        correct++;
        $("#answers").html("<h2>Correct!</h2>");

    } else {
        wrong++;
        $("#answers").html("<h2>Wrong! The correct answer is: " + questions[currentIndex].correctAns + "</h2>");
    }

    $(".correct").html("<h2>Correct:" + correct + "</h2>");
    $(".incorrect").html("<h2>Incorrect:" + wrong + "</h2");
    stop();
    setTimeout(threeSeconds, 2500)
});