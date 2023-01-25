/* constants */
const wordChoice = [
  'sun', 
  'ufo', 
  'moon', 
  'mars', 
  'earth', 
  'pluto', 
  'venus', 
  'saturn', 
  'uranus', 
  'jupiter', 
  'mercury',
  'spaceman'
]

/* App’s States (variables) */
let answer = " ";
let mistakes = 0;
let maxWrong = 6;
let guessed = [];
let wordStatus = null;

/* Cached Element References */
let wordSpotLight = document.getElementById("wordSpotLight");
let alphabet = document.getElementById("alphabet")

/* Event Listeners */

document.getElementById('alphabet').addEventListener('click', handleChoice);




/* Functions */
init();


function init() {



    render();
}


function render() {

};

function handleChoice(evt) {
  if (evt.target !== 'button') return;

}



function generateWord() {
  answer = wordChoice[Math.floor(Math.random() * wordChoice.length)];
  //alert(answer);
}

// function guessedWord() {
//   wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

//   document.getElementById('wordSpotLight').innerHTML = wordStatus
// }



handleChoice();
generateWord();
// wordBox();



