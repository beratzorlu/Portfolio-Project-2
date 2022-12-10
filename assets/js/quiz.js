const QUESTION = document.querySelector('#question');
const CHOICES = Array.from(document.querySelectorAll('.choice-text'));
const PROGRESSTEXT = document.querySelector('#progress-text');
const SCORETEXT = document.querySelector('#score');
const PROGRESSBARFULL = document.querySelector('#progress-bar-full');
const SCORE_POINTS = 10;
const MAX_QUESTIONS = 10;

let activeQuestion = {};
let answerAccept = true;
let score = 0;
let questionCounter = 0;
let quizQuestions = [];

/* Object containing the questions of the quiz game. */
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

/*  */
function startQuiz() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; /* Spread operator */
    newQuestion()
}

function newQuestion () {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('RecentScore', score);

        return window.location.assign('/end.html')
    }

    questionCounter++;
    PROGRESSTEXT.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    PROGRESSBARFULL.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    activeQuestion = availableQuestions[questionsIndex];
    question.innerText = activeQuestion.question;

    CHOICES.forEach(function choice() {
        const number = choice.dataset['number'];
        choice.innterText = activeQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1);

    answerAccept = true;
}

CHOICES.forEach(function choice() {
    choice.addEventListener('click', e => {
       if(!answerAccept) return

       answerAccept = false;
       const selectedChoice = e.target
       const selectedAnswer = selectedChoice['number'];

       let classToApply = selectedAnswer == activeQuestion.answer ? 'correct' : 'incorrect'

       if(classToApply === 'correct') {
       }
    })
})




