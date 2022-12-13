const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const SCORE_POINTS = 10;
const MAX_QUESTIONS = 10;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

/* Object containing the questions of the quiz game. */
let questions = [
    {
        question: 'According to Roman mythology, who was the father of Romulus and Remus?',
        choice1: 'A wolf',
        choice2: 'King Numitor',
        choice3: 'Jupiter',
        choice4: 'Mars',
        answer: 4,
    },
    {
        question: 'Which was the first Roman road?',
        choice1: 'Via Egnatia',
        choice2: 'Via Valeria',
        choice3: 'Via Appia',
        choice4: 'Via Flaminia',
        answer: 3,
    },
]

/**
 * Displays timer countdown to the player
 */

var second = 60;
var timeInterval = setInterval(quizTimer, 1000);

function quizTimer() {
    document.getElementById('timer').innerHTML = second + "s left";
    second--;
    console.log(quizTimer)
}






/** 
 * Start the game by setting the default value to the score counter 
 * and calling the first question 
 */

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; /* Spread operator */
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('index.html') /* Take player to end game*/
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
       if(!acceptingAnswers) return

       acceptingAnswers = false;
       const selectedChoice = e.target;
       const selectedAnswer = selectedChoice.dataset['number'];

       let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

       if(classToApply === 'correct') {
           incrementScore(SCORE_POINTS);
       }

       selectedChoice.parentElement.classList.add(classToApply);

       setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
       }, 1000);
    })
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame()



