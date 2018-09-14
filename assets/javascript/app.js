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
var number = 30;

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
var numUnanswered = 5;



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
    //empties all question and answer div to clear the page
    $("#timer").empty();
    $("#questioncounter").empty();
    $("#question,#answerone,#answertwo,#answerthree,#answerfour,#answervive").remove();
    $("#correct").html(numCorrect);
    $("#incorrect").html(numIncorrect);
    $("#unanswered").html(numUnanswered);
    
    //create the 'play again' button
    $("#questioncounter").html("<button id='playagain' class='btn btn-primary start-btn' type='submit'>Ready to play again?</button>")

    $("#playagain").on('click', function(){
        console.log('test')
        init();
    })
}

// function question and answers from a question object
function createQuestion(){
        questionNum++;
        // check if the user has answered the last question or not and if they have

        if (questionNum === questionsArray.length +1){
            //stop the timer
            stopTimer();

            //populate the number of correct and incorrect answers
            $("#correct").html(numCorrect);
            $("#incorrect").html(numIncorrect);
            $("#unanswered").html(numUnanswered);


            //create the 'play again' button
            $("#questioncounter").html("<button id='playagain' class='btn btn-primary start-btn' type='submit'>Ready to play again?</button>")

            //restart the game after clicking 'play again' button
            $("#playagain").on('click', function(){
                console.log('test')
                init();
            })

            //add the correct answers
            $("#question").html("The correct answers are: ").addClass('finalanswers');
            $("#correctanswerone").html("1: " + questionOne.question + " " + questionOne.correctAnswer).addClass('finalanswers');
            $("#correctanswertwo").html("2: " + questionTwo.question +" " +questionTwo.correctAnswer).addClass('finalanswers');
            $("#correctanswerthree").html("3: " + questionThree.question + " " +questionThree.correctAnswer).addClass('finalanswers');
            $("#correctanswerfour").html("4: " + questionFour.question + " " +questionFour.correctAnswer).addClass('finalanswers');
            $("#correctanswerfive").html("5: " + questionFive.question +" " +questionFive.correctAnswer).addClass('finalanswers');

            
        }
        else{
            //populate the question for each question object
            $("#questioncounter").html("You're on question " + [questionNum]+" of 5").addClass("counter");
            $("#question").html(questionsArray[count].question).addClass("question");

            //populate each answer choice from the question object
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
        //
        numUnanswered--;
        console.log("numUnanswered: " + numUnanswered);
        // increase the count variable to move to next question when createQuestion function is called
        count++
        createQuestion();
    });
}


// ------------------------EVENT LISTENERES-----------------------//

$(document).ready(function(){
    init();
});
