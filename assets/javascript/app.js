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
var startTime = 90;

 //  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;


// ------------------------FUNCTIONS-----------------------//

// init()

function init(){
// page loads, with start button in middle
    // when start button is clicked -->
    $(".start-btn").on("click", start);
}

function start(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement(){
    
}
// start timer countdown from 90 seconds
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