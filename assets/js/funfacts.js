/* jshint esversion: 11 */
let facts = ["Rome was founded in 753BC by its first king, Romulus.",
    "Did you know Roman legend says that Romulus had a twin brother called Remus?",
    "The Romans didn't spend all their time fighting, they were amazing architects and engineers too!",
    "Did you know that ancient Romans wore Togas to show how wealthy they were?",
    "Tunics were among the most popular daily attire in Ancient Rome.",
    "Did you know ancient Romans didn't have tomatoes?",
    "Bathing together was normal and encouraged, it was a way for Romans to discuss politics and socialise!",
    "Romans played games like Roman Chess and dice, and ball games like soccer and handball to pass time.",
    "Did you know that Roman children went to school every day of the week?",
    "Ancient Roman clothing was a symbol of status and power and purple was the most prestigious.",
    "The dome of the Pantheon in Rome is still the world’s largest unsupported concrete dome.",
    "The Circus Maximus held more spectators than the biggest sports stadium in the world today.",
    "Sometimes the Romans would flood the whole Colosseum or Circus Maximus for a boat battle.",
    "Romans used to eat dormice and other unusual foods like flamingo.",
    "If you were invited to a dinner party in Ancient Rome, you would be shown to a room lined with couches, not tables and chairs.",
    "Similar to the 21st Century, graffiti was a big part of daily life in Ancient Rome.",
    "Did you know that Ancient Rome had an organised military from the beginning?",
    "Tradition has it that Rome had seven kings before it became a republic.",
    "Victory in the Pyrrhic War in 275 BC made Rome dominant in Italy.",
    "Carthage is about 10km from Tunis, capital of Tunisia.",
    "At the Battle of Cannae in 216 BC, Hannibal inflicted on Rome the worst defeat in its military history!",
    "The Battle of the Teutoburg Forest in 9 AD probably stopped Rome's expansion at the River Rhine.",
    "The Battle of Abritus in 251 AD saw two Roman Emperors killed!",
    "Did you know that much of the Romans' architectural mastery is due to their use of concrete?",
    "Romans didn't invent either the arch or the vault, but they perfected both!",
    "Roman sewers are less celebrated but just as vital to urban life...",
    "The transport of people, goods and above all soldiers relied on Rome's amazing network of roads.",
    "Did you know that Roman bridges still stand and are in use today?"
];

/*
 *Ensure content is parsed after the DOM has been loaded."
 */
document.addEventListener("DOMContentLoaded", function () {

    const funFactsText = document.getElementById('fun-fact-text');

    /*
     *Fisher-Yates Shuffle
     */
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    /*
     *Shuffle facts array
     */
    shuffle(facts);

    /*
     *Target last string from the randomised array
     */
    let selectFact = facts.pop();

    /*
     *Insert string from shuffled array into markup
     */
    function displayFact() {
        funFactsText.innerText = `Fun Fact: ${selectFact}`;
    }

    /*
     *Repeat
     */
    displayFact();
});