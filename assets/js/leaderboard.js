/* jshint esversion: 11 */
const savedScoresList = document.querySelector('#savedScoresList');
const savedScores = JSON.parse(localStorage.getItem('savedScores')) || [];


/*
 *Ensure content is parsed after the DOM has been loaded."
 */
document.addEventListener("DOMContentLoaded", function () {
    /*
     *Insert saved scores and user IDs from the local storage into the front end.
     */
    savedScoresList.innerHTML = savedScores.map(score => {
        return `<li class="highScore"><span class="user-listing">${score.name}</span> 
    earned <span class="user-listing">${score.score}</span> points</li>`;
    }).join('');
})