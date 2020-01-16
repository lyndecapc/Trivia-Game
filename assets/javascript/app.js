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
        text: "question text",
        answers: ["1st", "2nd", "3rd", "4th"],
        correct: ""
    }]

    var timeRemianing = 3;
    var timerInterval;
    var correct = 0;
    var incorrect =0;
    var currentIndex = 0;


    //questions and answer arrays

    //FUNCTIONS
    //timer functionality: 
    //function for timerw
        //decrement time
        //check if time has run out
            //if yes, increment current Index, show correct answer, move to next question
    //function to start timer - set length (timerInterval calls timer function every second)

    //function to stop timer 
        //clear timerInterval 
        //reset time remaining

    //other functions:
        //function for displaying questions
            //determine what number question we are on with currentIndex
            //check if currentIndex === questions.length
            //if yes, hide question, show results with correct, incorrect, and unanswered question stats
            //update DOM with current question's text and answers using (questions [currentIndex]);
            //start timer
        
        //event listener for start and reset buttons
            //hides welcome screen
            //shows question screen
            //loads first question and updates timer

        //event listener for answer button
            //check whether answer is correct (compare to questiobs[currentIndex].correctanswer)
            //show message for correct or incorrect
            //stop timer
            //after three seconds, increment currentIndex and call display question function

        

  
