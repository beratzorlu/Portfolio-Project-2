const savedScoresList = document.querySelector('#savedScoresList');
const savedScores = JSON.parse(localStorage.getItem('savedScores')) || [];

savedScoresList.innerHTML = savedScores.map(score => {
    return `<li class="high-score">${score.name} earned ${score.score} points`
})
