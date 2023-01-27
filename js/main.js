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

const hints = [
    'Burning ball of fire in the sky',
    'Flying saucer',
    'Opposite of the sun',
    'Millions of them in the sky',
    'Fourth planet from the sun',
    'The planet we all live on',
    'The planet that is not a planet anymore :(',
    'A icy solar system body that releases gas',
    "Known as Earth's sister planet",
    'The planet with the giant ring around it',
    'A rocky or metallic body from outer space',
    'The seventh furthest planet from the sun',
    'A system full of stars - Milky Way',
    'Another name for the universe',
    'The largest planet in our solar system',
    'The smallest planet in our solar system',
    'The man that is in space',
    'A rocket that a spaceman flies in'
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
let hint;


/*----- cached elements  -----*/
const messageEl = document.getElementById('message');
const guess = document.getElementById('spotLight');
const playButton = document.getElementById('play');
const spaceman = document.querySelector('img');
const letterBtns = [...document.querySelectorAll('#keyboard > button')];
const hintButton = document.getElementById('hint');
const hintBox = document.getElementById('hintBox');

/*----- event listeners -----*/
const userClick = document.getElementById("keyboard");
userClick.addEventListener("click", handleClick);
playButton.addEventListener("click", init);
hintButton.addEventListener("click", getHint)

/*----- functions -----*/
init();

function init() {
    wrongGuesses = [];
    let idx = Math.floor(Math.random() * wordChoice.length)
    answer = wordChoice[idx].split('');
    hint = hints[idx];
    hintBox.style.visibility = 'hidden';
    wordStatus = answer.map(letter => ' _ ');
    gameStatus = null;
    render();
};


function handleClick(evt) {
    const letter = evt.target.textContent;
    if (gameStatus === "W" || gameStatus === "L") return;
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
    if (wrongGuesses.length > maxWrong - 1) return "L";
    return null;
}


function renderMessage() {
    if (gameStatus === "W") {
        messageEl.textContent = "You saved the Spaceman! :D"
        messageEl.style.color = 'green';
    } else if (gameStatus === "L") {
        messageEl.innerHTML = `The Spaceman was lost in Space!:(` + `<span id="secret">The Answer was ${answer.join("")}</span>`
        messageEl.style.color = 'red';
    } else {
        messageEl.textContent = `You have ${maxWrong - wrongGuesses.length} guesses left!`
        messageEl.style.color = null;
    }
}

function renderButtonStyle() {
    letterBtns.forEach(function (btn) {
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

function resetButton() {
    if (gameStatus === null) {
        playButton.innerHTML = "Reset";
    } else playButton.innerHTML = "Play Again!";
    
}

function getHint() {
    hintBox.style.visibility = 'visible';
    hintBox.innerHTML = hint;
}

function render() {
    guess.textContent = wordStatus.join(" ");
    spaceman.src = `img/spaceman-${wrongGuesses.length}.jpg`;
    renderButtonStyle();
    resetButton();
    renderMessage();
}

render();