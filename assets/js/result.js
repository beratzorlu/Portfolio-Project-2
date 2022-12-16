const HIGH_SCORE_LIMIT = 5;
const userName = document.querySelector('#username');
const scoreSaveButton = document.querySelector('#scoreSaveButton');
const endScore = document.querySelector('#endScore');
const recentScore = document.querySelector('#recentScore');
const savedScores = JSON.parse(localStorage.getItem('savedScores')) || [];

endScore.innerText = recentScore;

userName.addEventListener('keyup', () => {
    scoreSaveButton.disabled = !userName.value
})
