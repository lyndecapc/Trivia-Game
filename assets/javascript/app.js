//USER STORY: page loads, user sees welcome message or instructions and start button. 
//user clicks start button, welcome screen/instructions go away, and they see a timer that is counting down. They also see 1st question and answer choices
//if user chooses answer: message displayed indicates if question was correct or incorrect. if incorrect, correct answer is displayed.
//after 3 seconds, the next question is displayed
//if time runs out before user picks an answer, the correct answer is shown
//after 3 seconds, the next question is displayed
//once all questions/correct answers have been displayed, a results screen appears with number of correct, incorrect, and unanswered questions
//also will see a restart button
//if they click the restart button, the quiz starts over
//HTML PLANNING: 
//Three main sections: Welcome screen and start button, questions div with place for timer, the question text and the answers (dynamic or hard coded)
//results div with place for correct, incorrect, and unanswered questions stats AND restart button
//CREATE: basic HTML
//PSEUDOCODE

//GLOBAL VARIABLES and ARRAYS
var questions = [{
        text: "What long-time game show host was at one time a Nashville weather personality?",
        answers: ["Alex Trebek", "Steve Harvey", "Wayne Brady", "Pat Sajak"],
        correctAns: "Pat Sajak"
    },
    {
        text: "What was the Music Row destination where you could ride a mechanical bull?",
        answers: ["Gilley's", "Mabel's", "Sony", "The Broken Spoke"],
        correctAns: "Gilley's"
    },
    {
        text: "What was the #1 tourist attraction in Nashville until 1997?",
        answers: ["The Grand Ole Opry", "Opryland", "Tootsie's", "Music Row"],
        correctAns: "Opryland"
    }
];

var timeRemaining = 5;
var timerInterval;
var correct = 0;
var incorrect = 0;
var currentIndex = 0; //#question currently on
var clockRunning = false;


//questions and answer arrays

//FUNCTIONS
//TIMER FUNCTIONS:
//function for timer
//decrement time
//check if time has run out
//if yes, increment current Index, show correct answer, move to next question

function threeSeconds() {
    $("#answers").empty();
    currentIndex++;
    displayQuestion();
    startTimer();
}

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
    timeRemaining = 5;
};

//other functions:
//function for displaying questions

function displayQuestion() {

    $("#questions").html("<h2>" + questions[currentIndex].text + "</h2>");
    $(".btn1").html("<h2>" + questions[currentIndex].answers[0] + "</h2>");
    $(".btn2").html("<h2>" + questions[currentIndex].answers[1] + "</h2>");
    $(".btn3").html("<h2>" + questions[currentIndex].answers[2] + "</h2>");
    $(".btn4").html("<h2>" + questions[currentIndex].answers[3] + "</h2>");
    console.log(questions[currentIndex].text);
    for (var i = 0; i < questions[i].length; i++) {


    }
};

//determine what number question we are on with currentIndex
//check if currentIndex === questions.length
//if yes, hide question, show results with correct, incorrect, and unanswered question stats
//update DOM with current question's text and answers using (questions [currentIndex]);
//start timer


//event listener for start and reset buttons
//hides welcome screen
//shows question screen
//loads first question and updates timer
$("#start").on("click", function () {
    $("#welcome").hide();
    $("#results").hide();
    startTimer();
    displayQuestion();
    console.log("Lynde");
});



//event listener for answer button
//check whether answer is correct (compare to questions[currentIndex].correctanswer)
//show message for correct or incorrect
//stop timer
//after three seconds, increment currentIndex and call display questionfunction