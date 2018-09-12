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

var questionThree = {
    question: "What's the tallest mountain in WA?",
    option1: "Rainier",
    option2: "Shuksan",
    option3: "Denali",
    option4: "Shasta"
}

// array to hold all question objects
var questionsArray = [questionOne,questionTwo,questionThree];


// starting time for each question
var number = 90;

 //  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

// count variable to keep track of question number
var count = 0;


// ------------------------FUNCTIONS-----------------------//

// initialize function to start the game

function init(){
// page loads, with start button in middle
    // when start button is clicked -->
    $(".start-btn").on("click", function(){
        $("#game-box").empty();
        startTimer();
        createQuestion();
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
        $("#question").html(questionsArray[count].question).addClass("question");
        $("#answerone").html("<input type =radio name=answerchoice value=one>" + " "+questionsArray[count].option1).addClass("answers")
        $("#answertwo").html("<input type =radio name=answerchoice value=two>" + " "+questionsArray[count].option2).addClass("answers")
        $("#answerthree").html("<input type =radio name=answerchoice value=three>" + " "+questionsArray[count].option3).addClass("answers")
        $("#answerfour").html("<input type =radio name=answerchoice value=four>" + " "+questionsArray[count].option4).addClass("answers")
        $("#submit-btn").html("<button type=button>Submit</button>").addClass("btn btn-primary")
    }

    // when user clicks submit button
    $("#submit-btn").on("click", function(){
        // if all questions have been displayed
        if (count == questionsArray.length - 1){
            //empty the timer and question-box divs
            $("#timer").empty();
            $(".question-box").empty();
        }
        // otherwise increase value of count to display next question
        else{count++
        createQuestion();
        }

    })




// start timer countdown from 90 seconds - DONE
// randomly select 5 questions
// create and append new div for questionOne.question - DONE
// create and append all answer choices as MC options in one div - DONE
// create and append div with 'Submit' button below all questions - DONE
// repeat for all questions
// if timer = 0 or user clicks submit
// count number of answers the user got correct
    // if user selects option on click == question.correctAnswer (count as correct)
    // else if user selects option on click != question.correctAnswer (count as incorrect)
    // else if user does not select an answer choice (count as unanswered)
// add 'play again' button
// DO NOT reload the page, but rather manipulate DOM to reload 5 random new questions


// ------------------------EVENT LISTENERES-----------------------//

$(document).ready(function(){
    init();
});
