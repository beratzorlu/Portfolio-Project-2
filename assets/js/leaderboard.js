const savedScoresList = document.querySelector('#savedScoresList');
const savedScores = JSON.parse(localStorage.getItem('savedScores')) || [];

savedScoresList.innerHTML = savedScores.map(score => {
    return `<li class="high-score"><span class="user-listing">${score.name}</span> earned <span class="user-listing">${score.score}</span> points</li>`
}).join('');
