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

// const alphabet = [
//   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
//   'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
// ]

const alphabet = [
  "abcdefghijklmnopqrstuvwxyz"
];

/* App’s States (variables) */
let answer = " ";
let mistakes = 0;
let maxWrong = 6;
let guessed = [];
let wordStatus = null;

/* Cached Element References */
let keyboard = document.getElementById("keyboard");
let wordSpotLight = document.getElementById("wordSpotLight");

/* Event Listeners */
function wordBox() {
  let wordsHTML = alphabet[0].split('').join(' ');

  document.getElementById('keyboard').innerHTML = wordsHTML
}


function spotLight() {
  for (let i = 0; i < wordChoice.length; i++) {
    
  }
}

/* Functions */
init();


function init() {



    render();
}


function render() {

};

function generateWord() {
  answer = wordChoice[Math.floor(Math.random() * wordChoice.length)];
  //alert(answer);
}





generateWord();
wordBox();
spotLight();



