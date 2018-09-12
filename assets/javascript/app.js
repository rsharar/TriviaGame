// ------------------------VARIABLES-----------------------//

//questionOne object
var questionOne = {
    question: "What player scored the most points in one game?",
    option1: "Michael Jordan",
    option2: "Wilt Chamberlain",
    option3: "LeBron James",
    option4: "Kobe Bryant",
    correctAnswer: "Wilt Chamberlain"
}

//questionTwo object
var questionTwo = {
    question: "What player has the most career assists?",
    option1: "Steve Nash",
    option2: "Gary Payton",
    option3: "Chris Paul",
    option4: "John Stockton",
    correctAnswer: "John Stockton"
}

//questionThree object

var questionThree = {
    question: "What player has the highest career 3-pt FG percentage?",
    option1: "Ray Allen",
    option2: "Stephen Curry",
    option3: "Steve Kerr",
    option4: "Reggie Miller",
    correctAnswer: "Steve Kerr"
}

var questionFour = {
    question: "Who was the last player drafted by the Seattle Supersonics?",
    option1: "Sasha Kahn",
    option2: "Kevin Durant",
    option3: "Russell Westbrook",
    option4: "Carl Landry",
    correctAnswer: "Sasha Kahn"
}

var questionFive = {
    question: "What player won the most NBA championships in his career?",
    option1: "Bill Russell",
    option2: "LeBron James",
    option3: "Larry Bird",
    option4: "Magic Johnson",
    correctAnswer: "Bill Russell"
}

// array to hold all question objects
var questionsArray = [questionOne,questionTwo,questionThree,questionFour,questionFive];


// starting time for each question
var number = 90;

 //  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

// count variable to keep track of question number
var count = 0;

// variable to store the answer selected by user
var userAnswer;

// count of correct answers
var numCorrect = 0;

// count of incorrect answers
var numIncorrect = 0;

// count of unanswered answers
var numUnanswered = 0;



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
        // $("#questioncounter").html("Question " + [count+1]+"/5").addClass("counter");
        $("#question").html(questionsArray[count].question).addClass("question");
        $("#answerone").html(questionsArray[count].option1).addClass("answers");
        $("#answertwo").html(questionsArray[count].option2).addClass("answers");
        $("#answerthree").html(questionsArray[count].option3).addClass("answers");
        $("#answerfour").html(questionsArray[count].option4).addClass("answers");

        checkAnswer();
}

function checkAnswer(){
    $(".answers").on("click",function(){
        var userAnswer = $(this).text();
        if(userAnswer == questionsArray[count].correctAnswer){
            numCorrect++;
            $("#correct").html(numCorrect);
            console.log(count);
        }
        else{
            numIncorrect++;
            $("#incorrect").html(numIncorrect);
            console.log(count);
        }
    });
}





    //     $("#submit-btn").html("<button type=button>Submit</button>").addClass("btn btn-primary")
    // }
    
//<--------- OLD SUBMIT BUTTON CODE -------->
    // when user clicks submit button
    // $("#submit-btn").on("click", function(){
    //     // if all questions have been displayed
    //     if (count == questionsArray.length - 1){
    //         //empty the timer and question-box divs
    //         stopTimer();
    //         $("#timer").empty();
    //         $(".question-box").empty();
    //     }
    //     // otherwise increase value of count to display next question
    //     else{
    //         checkAnswer();
    //         count++
    //         createQuestion();
    //     }

    // })
//function to check if answer is correct
// function checkAnswer(){
//     userAnswer = $('input[name=answerchoice]:checked').val();
//     console.log(userAnswer);
//     console.log(questionsArray[count].correctAnswer);

    // if (userAnswer === questionsArray[count].correctAnswer){
    //     numCorrect++;
    //     console.log(numCorrect);
    //     }
    // else if (userAnswer !== questionsArray[count].correctAnswer)
    //     numIncorrect++;
    //     console.log(numIncorrect);



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
