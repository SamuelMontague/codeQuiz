const start = document.getElementsById("start");
const quiz = document.getElementsById("quiz");
const question = document.getElementsById("question");
const A = document.getElementsById("A");
const B = document.getElementsById("B");
const C = document.getElementsById("C");
const D = document.getElementsById("D");
const counter = document.getElementsById("counter");
const timeGauge = document.getElementsById("timeGauge");
const scoreContainer = document.getElementsById("scoreContainer");


let questions = [

    {
        question: "What color is the sky?",

        choiceA : "blue",

        choiceB : "red",

        choiceC : "green",

        choiceD : "yellow",

        correct : "A",
    },{

        question: "What color is the grass?",

        choiceA : "purple",

        choiceB : "green",

        choiceC : "yellow",

        choiceD : "black",

        correct : "B",
    },{

        question: "Which one of these is not a primary color",

        choiceA : "yellow",

        choiceB : "blue",

        choiceC : "green",

        choiceD : "red",

        correct : "C",
    }
];