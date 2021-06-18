const startButton = document.getElementById("start");
const question = document.getElementById("question");
const scoreContainer = document.getElementById("scoreContainer");
const choices = Array.from(document.querySelectorAll('.selection'))
var secondsLeft = 100;

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [

    {
        question: "What color is the sky?",

        A : "blue",

        B : "red",

        C : "green",

        D : "yellow",

        correct : A,
    },{

        question: "What color is grass?",

        A : "purple",

        B : "green",

        C : "yellow",

        D : "black",

        correct : B,
    },{

        question: "Which one of these is not a primary color",

        A : "yellow",

        B : "blue",

        C : "green",

        D : "red",

        correct :C,
    }
];




const Score_Points = 100
const max_Questions = 3

startGame = function() {
    currentQuestion = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

function startTimer() {
    setInterval(function(){
        secondsLeft--;
        if (secondsLeft > 0) {
            time = document.getElementById("timer");
            time.innerHTML = secondsLeft;
        }
        if (secondsLeft === 0) {
            alert("sorry, out of time");
            clearInterval(secondsLeft);
        }
    },1000);
    console.log("timer has started")
}
function revealQuiz(){
    document.getElementById('quiz').style.display = "block";
}


function displayQuestion(currentQuestion){
    question.innerText = currentQuestion.question;
    A.innerText = currentQuestion.A;
    B.innerText = currentQuestion.B;
    C.innerText = currentQuestion.C;
    D.innerText = currentQuestion.D;
    
}
displayQuestion(questions[0]);

function getNewQuestion() {
    questions(function(){
        for(let i = 0; i<4; i++) {
            console.log(i)
        }
    })
}


// getNewQuestion = function() {
//     if (availableQuestions.length === 0 || questionCounter > max_Questions){
//     localStorage.setItem('mostRecentScore', score)
//     }
//     questionCounter++

//     choices.forEach(function(choice) {
//         const number = choice.dataset['number']
//         choice.innerText = currentQuestion['choice' + number]
//         console.log(choice);
//     })
    
//     availableQuestions.splice(questionsIndex, 1)

//     acceptingAnswers= true
// }

choices.forEach( function(choice) {

    choice.addEventListener('click',function(event) {
        if(!acceptingAnswers) return

        acceptingAnswers = false 
        const selectedChoice = event.target 
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(Score_Points)
        
        }
        selectedChoice.parentElement.classList.add(classToApply)

        // setTimeout( function() {
        //     selectedChoice.parentElement.classList.remove(classToApply)
        //     getNewQuestion()
        
        // },1000)
    })
}) 

incrementScore = function(num){
    score +=num 
    //setCounterText.innerText = score
}

// function displayQuestion(currentQuestion){
//     question.innerText = currentQuestion.question;
//     A.innerText = currentQuestion.A;
//     B.innerText = currentQuestion.B;
//     C.innerText = currentQuestion.C;
//     D.innerText = currentQuestion.D;
// }
// displayQuestion(questions[0]);
 



// function getAnswer(currentQuestion, userSelection){
//     currentQuestion.correct == userSelection
// }


startButton.addEventListener("click", function(){
    console.log("button is clicked")
})