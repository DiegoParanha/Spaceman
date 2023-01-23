/* constants */
const wordChoice = [
  'sun', 
  'moon', 
  'earth', 
  'jupiter', 
  'saturn', 
  'ufo', 
  'pluto', 
  'mars', 
  'uranus', 
  'venus', 
  'spaceman', 
  'mercury'
]


/* App’s States (variables) */
let answer = '';
let mistakes = 0;
let maxWrong = 6;
let guessed = [];
let wordStatus = null;

/* Cached Element References */


/* Event Listeners */


/* Functions */
init();


function init() {



    render();
}


function render() {

};

function generateWord() {
  answer = wordChoice[Math.floor(Math.random() * wordChoice.length)];
}


function wordBox() {
  let wordsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').join(' ').toUpperCase();

  document.getElementById('keyboard').innerHTML = wordsHTML
}


function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotLight').innerHTML = wordStatus
}

guessedWord();
generateWord();
wordBox();




