//1st step: User story
//When the page loads, user sees a welcome message and a start button
//when user clicks start button, the welcome screen goes away and they see a timer that is counting down, 
    //some question text and answers
//when the user clicks on an answer, a message is added that indicates whether the question was answered correctly
    //after 3 seconds, the next question is displayed
//if the user doesn't select an answer before the timer ends, the next question is displayed
//once all questions have been displayed, they see a results screen with correct, incorrect and unanswered questions 
    //and a restart button
//if they click the restart button, the quiz starts over
//2nd step: html planning
    //3 main sections:
        //welcome screen with welcome message and start button
        //questions div with a place for the timer, the question text and the answers (dynamic or hard coded?)
        //results div with a place for correct, incorrect and unsanswered questions and a restart button
//3rd step: 
    //create basic html with little to no styling
//4th step: pseudocode
//global variables
var questions = [{
    text: "question text",
    answers: ["first", "second", "third", "fourth"],
    correct: "second"
}]
var timeRemaining = 3;
var timerInterval;
var correct = 0;
var incorrect = 0;
var currentIndex = 0;
//timer funtionality:
//function for the timer
    //decrement time remaining
    //check if time has run out
        //if yes, increment current index and move to next question
//function to start the timer
    //set timerInterval to a set interval that calls the timer function every second
//function to stop the timer 
    //clear the timerInterval
    //reset time remaining
//other functions:
//function for displaying questions
    //determine what question we are on using the currentIndex
    //check if currentIndex === questions.length
        //if yes, hide questions, show results with correct, incorrect and unanswered questions
    //update the dom with the current question's text and answers (questions[currentIndex]);
    //start the timer
//event listener for start and reset buttons
    //hides welcome screen
    //shows question screen
    //loads first question and updates timer
//event listener for answer button
    //check whether answer correct (compare to questions[currentIndex].correctAnswer)
    //show message for correct or incorrect
    //stop timer 
    //after 3 seconds, increment currentIndex and call display question function and 
//5th step:
    //start with click events and just verify that they register
        //if I was getting user input, verigy that it is also coming in as expect 
    //then, start writing my functions and just have them console log something to make sure that things are happening when I expect them to
    //thes, start layering in the functionality and testing along the way
    //if something is ever not giving you the result you expect, go backwards and comsole log things again 
