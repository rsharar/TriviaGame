// ------------------------VARIABLES-----------------------//

//questionOne object
var questionOne = {
    question: "Who holds the record for most points scored in a single game?",
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

//questionFour object
var questionFour = {
    question: "Who was the last player drafted by the Seattle Supersonics?",
    option1: "Sasha Kahn",
    option2: "Kevin Durant",
    option3: "Russell Westbrook",
    option4: "Carl Landry",
    correctAnswer: "Sasha Kahn"
}

//questionFive object
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


// starting time for all questions
var number = 90;

 //  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

// count variable to keep track of question number
var count = 0;

// variable to indicate user progress in game by question
var questionNum = 0;

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
        checkAnswer();
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
    $("#timer").html("<div>"+"Only " + number + " seconds left"+ "</div>").addClass("timer");
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
        questionNum++;
        if (questionNum === questionsArray.length +1){
            $("#timer").empty();
            $(".answers").empty();
            $("#questioncounter").empty();
            $("#question").empty();
        }
        else{
            $("#questioncounter").html("You're on question " + [questionNum]+" of 5").addClass("counter");
            $("#question").html(questionsArray[count].question).addClass("question");
            $("#answerone").html(questionsArray[count].option1).addClass("answers");
            $("#answertwo").html(questionsArray[count].option2).addClass("answers");
            $("#answerthree").html(questionsArray[count].option3).addClass("answers");
            $("#answerfour").html(questionsArray[count].option4).addClass("answers");
        }
}

// function to check if answer chosen by user is the correct answer
function checkAnswer(){
    $(".answers").on("click",function(){
        //store the text of the div user clicks in variable userAnswer
        var userAnswer = $(this).text();
        //check if userAnswer is equal to correctAnswer
        if(userAnswer == questionsArray[count].correctAnswer){
            numCorrect++;
            console.log("numCorrect: " + numCorrect);
        }
        else{
            numIncorrect++;
            console.log("numIncorrect: " + numIncorrect);
        }
        count++
        createQuestion();
    });
}



//<--------- OLD SUBMIT BUTTON CODE -------->

    //     $("#submit-btn").html("<button type=button>Submit</button>").addClass("btn btn-primary")
    // }
    
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



TODO: 
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
