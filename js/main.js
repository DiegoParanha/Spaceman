/*----- constants -----*/
const wordChoice = [
    'SUN', 
    'UFO', 
    'MOON',
    'STAR',
    'MARS', 
    'EARTH', 
    'PLUTO',
    'COMET', 
    'VENUS', 
    'SATURN', 
    'METEOR',
    'URANUS', 
    'GALAXY',
    'COSMOS',
    'JUPITER', 
    'MERCURY',
    'SPACEMAN',
    'SPACESHIP'
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


/*----- cached elements  -----*/
const messageEl = document.getElementById('message');
const guess = document.getElementById('spotLight');
const playButton = document.getElementById('play');
const spaceman = document.querySelector('img');
const letterBtns = [...document.querySelectorAll('#keyboard > button')];

  /*----- event listeners -----*/
const userClick = document.getElementById("keyboard");
userClick.addEventListener("click", handleClick);
playButton.addEventListener("click", init);

  /*----- functions -----*/
init();

function init() {
    wrongGuesses = [];
    answer = wordChoice[Math.floor(Math.random() * wordChoice.length)].split('');
    wordStatus = answer.map(letter => ' _ ');
    gameStatus = null;
    render();
};


function handleClick(evt) {
    const letter = evt.target.textContent;
    if(gameStatus === "W" || gameStatus === "L") return;
    if (gameStatus || evt.target.tagName !== 'BUTTON' || wrongGuesses.includes(letter)) return;
    if (answer.includes(letter)) {
        answer.forEach((char, idx) => {
            if (char === letter) wordStatus[idx] = letter
        })
    } else {
        wrongGuesses.push(letter)
    }
    gameStatus = getWinner();
    render();
}


function getWinner() {
    if (!wordStatus.includes(" _ ")) return "W";
    if (wrongGuesses.length > maxWrong -1) return "L";
    return null;
}


function renderMessage() {
    if (gameStatus === "W") {
        messageEl.textContent = "You saved the Spaceman! :D"
        messageEl.style.color = 'green';
    } else if (gameStatus === "L") {
            messageEl.textContent = `The Spaceman was lost in space! :( The answer was ${answer.join("")}`
            messageEl.style.color = 'red';
    } else {
            messageEl.textContent = `You have ${maxWrong - wrongGuesses.length} guesses left!`
            messageEl.style.color = null;
            
    }
}

function renderButtonStyle () {
    letterBtns.forEach(function(btn) {
        const letter = btn.textContent;
        if (wrongGuesses.includes(letter)) {
            btn.style.backgroundColor = 'red';
        } else if (wordStatus.includes(letter)) {
            btn.style.backgroundColor = 'green';
        } else {
            btn.style.backgroundColor = null;
        }
    }) 
}



function render() {
    guess.textContent = wordStatus.join(" ");
    spaceman.src = `img/spaceman-${wrongGuesses.length}.jpg`;
    renderButtonStyle();
    renderMessage();
}

render();





// grey out keyboard letters when chosen




// all buttons disappear and play button says Play again - maybe? 
// playButton.style.visibility = "W" ? 'visible' : 'hidden';
// playButton.disabled = !"W"

// possibly add a hint button