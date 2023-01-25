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
let wrongGuesses = [];
let wordStatus = null;
let gameStatus;
let winner;


/*----- cached elements  -----*/
const message = document.getElementById('message');
const guess = document.getElementById('spotLight');
const letterButtons = [...document.querySelectorAll('div > button')];
const playButton = document.getElementById('play');
const spaceman = document.querySelector('img');
const winMessage = document.getElementById('winMessage')
const loseMessage = document.getElementById('loseMessage')

  /*----- event listeners -----*/
document.getElementById("keyboard").addEventListener("click", handleClick);
playButton.addEventListener("click", init);

  /*----- functions -----*/
init();

function init() {
    wrongGuesses = [];
    answer = wordChoice[Math.floor(Math.random() * wordChoice.length)].split('');
    wordStatus = answer.map(letter => ' _ ');
    gameStatus = null;
    winner = null;
    render();
};

function handleClick(evt) {
    const letter = evt.target.textContent;
    if (gameStatus || evt.target.tagName !== 'BUTTON' || wrongGuesses.includes(letter)) return;
        console.log(evt.target.textContent);
    if (answer.includes(letter)) {
        answer.forEach((char, idx) => {
            if (char === letter) wordStatus[idx] = letter
        })
    } else {
        wrongGuesses.push(letter)
    }
    winner = getWinner();
    render();
}


function getWinner() {
    if (wordStatus === answer) {
        winMessage.innerText = "You saved the Spaceman! :D";
    } else (wordStatus === maxWrong) 
      return  loseMessage.innerText = "The Spaceman was lost in space! :("
    
}


function render() {
    guess.textContent = wordStatus.join("");
    spaceman.src = `img/spaceman-${wrongGuesses.length}.jpg`;
}


// Add an outline to the words in the spotlight and words on screen to make them stand out
// grey out keyboard letters when chosen

// how to set a max limit for space man images
// set a limit to once game is won


// fix win logic so loseMessage appears when maxWrong is hit
// fix win logic so WinMessage appeats when answer is hit



// all buttons disappear and play button says Play again - maybe? 
// possibly add a hint button