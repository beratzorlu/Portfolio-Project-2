/*
*Declare an array of fun facts to be chosen from.
*Randomise the strings in the array.
*Choose one string from the randomised array.
*Insert it into the html.
*Repeat
*/


let facts = ["fact1","fact2","fact3"];
const funFactsText = document.getElementById('fun-fact-text');

//Fisher-Yates Shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}; 

//Shuffle facts array
shuffle(facts);

//Target last string from the randomised array
let selectFact = facts.pop();

//Insert string from shuffled array into markup
function displayFact() {
    funFactsText.innerText = `Fun Fact: ${selectFact}`
}

//Repeat
displayFact();