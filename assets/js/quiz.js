const QUESTION = document.querySelector('#question');
const CHOICES = Array.from(document.querySelectorAll('.choice-text'));
const PROGRESSTEXT = document.querySelector('#progress-text');
const SCORETEXT = document.querySelector('#score');
const PROGRESSBARFULL = document.querySelector('#progress-bar-full');

let activeQuestion = {};
let answerAccept = true;
let score = 0;
let questionCounter = 0;
let quizQuestions = [];

let questions = [
    {
        question: 'According to Roman mythology, who was the father of Romulus and Remus?',
        option1: 'A wolf',
        option2: 'King Numitor',
        option3: 'Jupiter',
        option4: 'Mars',
        answer: 4,
    }
]






