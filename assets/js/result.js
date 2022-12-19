const HIGH_SCORE_LIMIT = 4;
const userName = document.querySelector('#username');
const scoreSaveButton = document.querySelector('#scoreSaveButton');
const endScore = document.querySelector('#endScore');
const recentScore = localStorage.getItem('recentScore');
const savedScores = JSON.parse(localStorage.getItem('savedScores')) || [];

endScore.innerText = recentScore;

userName.addEventListener('keyup', () => {
    scoreSaveButton.disabled = !userName.value;
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

    localStorage.setItem('savedScores', JSON.stringify(savedScores));

    window.location.assign('leaderboard.html')
}

function scoreMessage () {
    if(recentScore >= 50) {
        document.getElementById('result-message').innerText = 'The Senātus Rōmānus commends your knowledge!';
    } else if (recentScore < 50) {
        document.getElementById('result-message').innerText = 'The Senātus Rōmānus firmly believes you can do better.';
    }

};

scoreMessage();

