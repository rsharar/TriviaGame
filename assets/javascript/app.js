// ------------------------VARIABLES-----------------------//

//questionOne object
var questionOne = {
    question: "What is the name of the game?",
    option1: "trivia",
    option2: "basketball",
    option3: "uno",
    option4: "hearts"
}

//questionTwo object
var questionTwo = {
    question: "How many of these are left?",
    option1: "four",
    option2: "three",
    option3: "two",
    option4: "one"
}

//questionThree object

var questionTwo = {
    question: "What's the tallest mountain in WA",
    option1: "Rainier",
    option2: "Shuksan",
    option3: "Denali",
    option4: "Shasta"
}

// starting time for each question
var number = 90;

 //  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;


// ------------------------FUNCTIONS-----------------------//

// initialize function to start the game

function init(){
// page loads, with start button in middle
    // when start button is clicked -->
    $(".start-btn").on("click", function(){
        $("#question-box").empty();
        startTimer();
        createQuestion();
        createAnswers();
})
}

// function to start timer downtown with increment every 1 sec
function startTimer(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

// function to decrease 
function decrement(){
    //decrease the value of number by 1
    number--;

    // need push number decrement to HTML and add HTML to stylize text
    $("#timer").html("<h1>"+"Only " + number + " seconds left"+ "</h1>").addClass("timer");

    // once number hits zero...
    if (number === 0){

        //end the timer
        stopTimer();

        // Alert user time is up
        alert("Time's up!");
    }

}

//The stop function
function stopTimer() {

    //clears intervalId
    clearInterval(intervalId);
    //empties the timer div to clear the page
    $("#timer").empty();
}

// function question and answers from a question object
function createQuestion(){
    console.log(questionOne.question);
    $(".question").html(questionOne.question);
    $(".question").append("<div>")


}

//function to generate question and answers
function createAnswers(){
    $
}

// start timer countdown from 90 seconds - DONE
// randomly select 5 questions
// create and append new div for questionOne.question 
// create and append all answer choices as MC options in one div
// create and append div with 'Submit' button below all questions
// repeat for all questions
// if timer = 0 or user clicks submit
// display questions correct, incorrect, unanswered
// add 'play again' button
// DO NOT reload the page, but rather manipulate DOM to reload 5 random new questions


// ------------------------EVENT LISTENERES-----------------------//

init();