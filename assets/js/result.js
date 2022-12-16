const HIGH_SCORE_LIMIT = 4;
const userName = document.querySelector('#username');
const scoreSaveButton = document.querySelector('#scoreSaveButton');
const endScore = document.querySelector('#endScore');
const recentScore = document.querySelector('#recentScore');
const savedScores = JSON.parse(localStorage.getItem('savedScores')) || [];

endScore.innerText = recentScore;

userName.addEventListener('keyup', () => {
    scoreSaveButton.disabled = !userName.value
});

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: recentScore,
        name: userName.value,
    }

    savedScores.push(score);
    savedScores.sort((a,b) => {
        return b.score - a.score;
    })

    savedScores.splice(4);
}