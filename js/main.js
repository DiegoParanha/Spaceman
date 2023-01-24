/*----- constants -----*/
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
  ];

  const maxWrong = 6;

  const IMGS = [
    "img/spaceman.png/spaceman-0.jpg",
    "img/spaceman.png/spaceman-1.jpg",
    "img/spaceman.png/spaceman-2.jpg",
    "img/spaceman.png/spaceman-3.jpg",
    "img/spaceman.png/spaceman-4.jpg",
    "img/spaceman.png/spaceman-5.jpg",
    "img/spaceman.png/spaceman-6.jpg",
];

/*----- state variables -----*/
let answer = " ";
let mistakes = 0;
let guessed = [];
let wordStatus = null;
let gameStatus;


/*----- cached elements  -----*/
const message = document.getElementById('message');
const guess = document.getElementById('spotLight');
const letterButtons = [...document.querySelectorAll('div > button')];
const playButton = document.getElementById('play');
const spaceman = document.querySelector('img');

  /*----- event listeners -----*/
document.getElementById("keyboard").addEventListener("click", handleClick);
playButton.addEventListener("click", init);

  /*----- functions -----*/
init();

function handleClick(evt) {
    console.log(evt.target);
}

function init() {
    console.log('hello');
    guessed = [];
    answer = wordChoice[Math.floor(Math.random() * wordChoice.length)].split('');
    wordStatus = answer.map(letter => ' _ ');
    gameStatus = null;
    render();
};

function render() {
    guess.textContent = wordStatus.join("");
    spaceman.src = `img/spaceman-${guessed.length}.jpg`
}