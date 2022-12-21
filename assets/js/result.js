/* jshint escersion: 11 */
const HIGH_SCORE_LIMIT = 4;
const userName = document.querySelector('#username');
const scoreSaveButton = document.querySelector('#scoreSaveButton');
const endScore = document.querySelector('#endScore');
const recentScore = localStorage.getItem('recentScore');
const savedScores = JSON.parse(localStorage.getItem('savedScores')) || [];
let resultMessageText = document.getElementById('result-message');

/*
 *Ensure content is parsed after the DOM has been loaded."
 */
document.addEventListener("DOMContentLoaded", function () {
    /*
     *Replace placeholder with recent score. 
     */
    endScore.innerText = recentScore;

    /*
     *Enable register button on user input.
     */
    userName.addEventListener('keyup', () => {
        scoreSaveButton.disabled = !userName.value;
    });

    /*
     *Save user ID and end score in local storage and display in the front end.
     */
    saveHighScore = e => {
        e.preventDefault()

        const score = {
            score: recentScore,
            name: userName.value,
        }

        savedScores.push(score);
        savedScores.sort((a, b) => {
            return b.score - a.score;
        })

        savedScores.splice(4);

        localStorage.setItem('savedScores', JSON.stringify(savedScores));

        window.location.assign('leaderboard.html')
    }

    /*
     *Display alternative text depending on user performance. 
     */
    function scoreMessage() {
        if (recentScore >= 50) {
            resultMessageText.innerText = 'The Senātus Rōmānus commends your knowledge!';
        } else if (recentScore < 50) {
            resultMessageText.innerText = 'The Senātus Rōmānus firmly believes you can do better.';
        }

    };

    /*
     *Call the alternative text functionality.
     */
    scoreMessage();
})