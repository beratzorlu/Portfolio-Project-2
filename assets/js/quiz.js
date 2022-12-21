/* jshint esversion: 11 */
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

/* 
 *Object containing the questions of the quiz game.
 */
let questions = [{
        question: 'According to Roman mythology, who was the father of Romulus and Remus?',
        choice1: 'A wolf',
        choice2: 'King Numitor',
        choice3: 'Jupiter',
        choice4: 'Mars',
        correctAnswer: 'Mars'
    },
    {
        question: 'Which was the first Roman road?',
        choice1: 'Via Egnatia',
        choice2: 'Via Valeria',
        choice3: 'Via Appia',
        choice4: 'Via Flaminia',
        correctAnswer: 'Via Appia'

    },
    {
        question: 'Which of the following did not defeat Mithridates VI of Pontus?',
        choice1: 'Lucullus',
        choice2: 'Marius',
        choice3: 'Pompey',
        choice4: 'Sulla',
        correctAnswer: 'Marius'
    },
    {
        question: 'How many times was Rome sacked in antiquity?',
        choice1: 'Once',
        choice2: 'Three or four',
        choice3: 'Six',
        choice4: 'Twice',
        correctAnswer: 'Three or four'
    },
    {
        question: 'What is an ancient roman marketplace called?',
        choice1: 'Agora',
        choice2: 'Market',
        choice3: 'Forum',
        choice4: 'Centre',
        correctAnswer: 'Forum',
    },
    {
        question: 'How many heirs did Augustus lose before his death on 19 August AD 14?',
        choice1: 'Five',
        choice2: 'Four',
        choice3: 'Three',
        choice4: 'Six',
        correctAnswer: 'Five',
    },
    {
        question: 'Which of the following did NOT die in battle in Mesopotamia?',
        choice1: 'Gordian III',
        choice2: 'Julius',
        choice3: 'Crassus',
        choice4: 'Valerian',
        correctAnswer: 'Valerian'
    },
    {
        question: 'Which of the following emperors did not win a victory against the Goths?',
        choice1: 'Theodosius I',
        choice2: 'Valens',
        choice3: 'Julian',
        choice4: 'Justinian',
        correctAnswer: 'Julian',
    },
    {
        question: 'Between which forces was the Battle of Cannae fought?',
        choice1: 'Epirus and Macedon',
        choice2: 'Carthage and Rome',
        choice3: 'Sparta and Arcadia',
        choice4: 'Pergamon and Anatolia',
        correctAnswer: 'Sparta and Arcadia',
    },
];

/*
 *Ensure content is parsed after the DOM has been loaded."
 */
document.addEventListener("DOMContentLoaded", function () {
    /*
     *Display timer countdown to the player.
     *Reset score on time out to the result page.
     */
    var second = 60;
    var timeInterval = setInterval(quizTimer, 1000);

    function quizTimer() {
        document.getElementById('timer').innerHTML = second + "s left";
        second--;
        if (second === -2) {
            clearInterval(timeInterval);
            document.getElementById('timer').innerHTML = "0s left";
            alert('Senator, you have run out of time!');
            resetScore();
            return window.location.assign('result.html');
        }
    }

    /** 
     * Start the game by setting the default value to the score counter and progress bar 
     * and calling the first question along with its answers.
     * The questions are randomized.
     */
    function startGame() {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions]; /* Spread operator */
        getNewQuestion();
    }

    //Randomize question choices
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    /*
     *Get new question from questions array and display in the front end.
     *Increment question counter and progress bar values.
     *Shuffle answer choices.
     *Display the randomized choices in the front end.
     */
    getNewQuestion = () => {
        if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem('recentScore', score);

            return window.location.assign('result.html'); /* Take player to end game*/
        }

        questionCounter++;
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
        progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;


        const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionsIndex];
        question.innerText = currentQuestion.question;

        const answerChoices = [
            currentQuestion.choice1,
            currentQuestion.choice2,
            currentQuestion.choice3,
            currentQuestion.choice4,
        ];

        shuffle(answerChoices);

        choices.forEach((choice, index) => {
            choice.innerHTML = answerChoices[index];
        });

        availableQuestions.splice(questionsIndex, 1);

        acceptingAnswers = true;
    };

    /*
     *Detect user click
     *Compare user's selected choice with the correct answer value.
     *Light up green or yellow depending on correctness and if correct, increment score value.
     *Remove the light up effect.
     */
    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if (!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset.number;
            let classToApply = selectedChoice.innerText == currentQuestion.correctAnswer ? 'correct' : 'incorrect';

            if (classToApply === 'correct') {
                incrementScore(SCORE_POINTS);
            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
        });
    });

    /*
     *Increase score value.
     *Display the new value in the front end.
     */
    incrementScore = num => {
        score += num;
        scoreText.innerText = score;
    };

    /*
     *Reset displayed score value to 0.
     *Reset score value to 0 in the local storage.
     */
    function resetScore() {
        score = 0;
        scoreText.innerText = 0;
        localStorage.setItem('recentScore', score); //Add text for no time.
    }

    startGame();

})