/*----- constants -----*/
const COLORS = {

};


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
const letterButtons = [...document.querySelectorAll('div > button')];
const playButton = document.getElementById('play');
const spaceman = document.querySelector('img');

  /*----- event listeners -----*/
// document.getElementById
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
    } else if (gameStatus === "L") {
        return messageEl.textContent = `The Spaceman was lost in space! :( The answer was ${answer.join("")}`
    } else {
        return messageEl.textContent = `You have ${maxWrong - wrongGuesses.length} guesses left`
    }
}

function renderButton () {
  
}


// render button function
// correct turn green/ incorrect turn red
// delcare render button function
// iterate over our letter elements using forEach
// declaring a variable called letter = to the iterator .textContent
// conditonal if statement if incorrect letters.includes(letter) 
// className = wrong
// else if answer.includes(letter) = correct
// else button.className = "" 



function render() {
    guess.textContent = wordStatus.join("");
    spaceman.src = `img/spaceman-${wrongGuesses.length}.jpg`;
    renderMessage();
}

render();




// Add an outline to the words in the spotlight and words on screen to make them stand out
// grey out keyboard letters when chosen




// all buttons disappear and play button says Play again - maybe? 
// playButton.style.visibility = "W" ? 'visible' : 'hidden';
// playButton.disabled = !"W"

// possibly add a hint button