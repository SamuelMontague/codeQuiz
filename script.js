const startButton = document.getElementById("start");
const question = document.getElementById("question");
const progressText = document.querySelector('.progressText');
const scoreContainer = document.getElementById("scoreContainer");
const choices = Array.from(document.querySelectorAll('.selection'))
var secondsLeft = 75;

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [

    {
        question: "What color is the sky?",

        choice1 : "blue",

        choice2 : "red",

        choice3 : "green",

        choice4 : "yellow",

        correct : 1,
    },{

        question: "What color is grass?",

        choice1 : "purple",

        choice2 : "green",

        choice3 : "yellow",

        choice4 : "black",

        correct : 2,
    },{

        question: "Which one of these is not a primary color",

        choice1 : "yellow",

        choice2 : "blue",

        choice3 : "green",

        choice4 : "red",

        correct : 3,
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

getNewQuestion = function() {
    if (availableQuestions.length === 0 || questionCounter > max_Questions){
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText= "Question ${questionCounter} of ${max_Questions}"

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice = function() {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers= true
}

choices.forEach(choice = function() {
    
    choice.addEventListener('click', event = function() {
        if(!acceptingAnswers) return

        acceptingAnswers = false 
        const selectedChoice = Event.target 
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(Score_Points)
        
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout( function() {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        
        },1000)
    })
})

incrementScore = num = function(){
    score +=num 
    setCounterText.innerText = score
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