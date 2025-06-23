let currentWord = '';
let maskedWord = [];
let guessedLetters = new Set();
let incorrectGuesses = 0;
let maxIncorrectGuesses = 7;
let words = {
    easy: ['CASA', 'PERRO', 'SOL', 'FLOR', 'LIBRO', 'GATO', 'MESA', 'CAMA', 'LECHE', 'AGUA'],
    medium: ['ELEFANTE', 'COMPUTADORA', 'MURCIELAGO', 'CHOCOLATE', 'UNIVERSO', 'GUITARRA', 'OCEANO', 'TECLADO', 'VENTANA', 'BICICLETA'],
    hard: ['PARALELEPIPEDO', 'ORNITORRINCO', 'KILIMANJARO', 'ESOTERICO', 'XILOFONO', 'HIPOPOTAMO', 'ANFIBIO', 'ESTERNOCLEIDOMASTOIDEO', 'OFTALMOLOGO', 'QUIROPRÁCTICO'],
};
let availableWords = [];
let gameStarted = false;
let hintUsed = false;

const wordToGuessElement = document.getElementById('wordToGuess');
const keyboardElement = document.querySelector('.keyboard');
const hangmanCanvas = document.getElementById('hangmanCanvas');
const ctx = hangmanCanvas.getContext('2d');
const messageOverlay = document.getElementById('messageOverlay');
const gameMessage = document.getElementById('gameMessage');
const correctWordDisplay = document.getElementById('correctWord');
const playAgainButton = document.getElementById('playAgain');
const difficultySelect = document.getElementById('difficulty');
const startGameButton = document.getElementById('startGame');
const hintButton = document.getElementById('hintButton');
const hintText = document.getElementById('hintText');
const confettiContainer = document.getElementById('confetti');

function initializeGame() {
    incorrectGuesses = 0;
    guessedLetters.clear();
    hintUsed = false;
    hintText.textContent = '';
    hintButton.disabled = false;
    gameStarted = false;
    messageOverlay.classList.remove('show');
    confettiContainer.innerHTML = '';
    wordToGuessElement.textContent = '';
    keyboardElement.innerHTML = '';
    const allKeys = keyboardElement.querySelectorAll('.key');
    allKeys.forEach(key => {
        key.classList.remove('disabled');
        key.disabled = false;
    });
    drawHangman();
}

startGameButton.addEventListener('click', () => {
    initializeGame();
    const difficulty = difficultySelect.value;
    availableWords = [...words[difficulty]];
    pickNewWord();
    generateKeyboard();
    gameStarted = true;
});

function pickNewWord() {
    if (availableWords.length === 0) {
        alert("¡No hay más palabras en esta dificultad! Reiniciando la lista.");
        const difficulty = difficultySelect.value;
        availableWords = [...words[difficulty]];
    }

    const randomIndex = Math.floor(Math.random() * availableWords.length);
    currentWord = availableWords.splice(randomIndex, 1)[0].toUpperCase();
    maskedWord = Array(currentWord.length).fill('_');
    updateWordDisplay();
}

function updateWordDisplay() {
    wordToGuessElement.innerHTML = maskedWord.map(letter => `<span>${letter}</span>`).join('');
}

function generateKeyboard() {
    keyboardElement.innerHTML = '';
    const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    alphabet.split('').forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.classList.add('key');
        button.addEventListener('click', () => handleGuess(letter));
        keyboardElement.appendChild(button);
    });
}

function handleGuess(letter) {
    if (!gameStarted || guessedLetters.has(letter) || letter === '') {
        return;
    }

    guessedLetters.add(letter);
    const keyButton = Array.from(keyboardElement.children).find(btn => btn.textContent === letter);
    if (keyButton) {
        keyButton.classList.add('disabled');
        keyButton.disabled = true;
    }

    if (currentWord.includes(letter)) {
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === letter) {
                maskedWord[i] = letter;
            }
        }
        updateWordDisplay();
        checkWinCondition();
    } else {
        incorrectGuesses++;
        drawHangman();
        checkLossCondition();
    }
}

function drawHangman() {
    ctx.clearRect(0, 0, hangmanCanvas.width, hangmanCanvas.height);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#333';

    ctx.beginPath();
    ctx.moveTo(10, 240);
    ctx.lineTo(100, 240);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(30, 240);
    ctx.lineTo(30, 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(30, 10);
    ctx.lineTo(150, 10);
    ctx.stroke();

    ctx.strokeStyle = 'red';

    if (incorrectGuesses >= 1) {
        ctx.beginPath();
        ctx.moveTo(150, 10);
        ctx.lineTo(150, 40);
        ctx.stroke();
    }
    if (incorrectGuesses >= 2) {
        ctx.beginPath();
        ctx.arc(150, 65, 25, 0, Math.PI * 2, true);
        ctx.stroke();
    }
    if (incorrectGuesses >= 3) {
        ctx.beginPath();
        ctx.moveTo(150, 90);
        ctx.lineTo(150, 150);
        ctx.stroke();
    }
    if (incorrectGuesses >= 4) {
        ctx.beginPath();
        ctx.moveTo(150, 110);
        ctx.lineTo(125, 130);
        ctx.stroke();
    }
    if (incorrectGuesses >= 5) {
        ctx.beginPath();
        ctx.moveTo(150, 110);
        ctx.lineTo(175, 130);
        ctx.stroke();
    }
    if (incorrectGuesses >= 6) {
        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.lineTo(130, 190);
        ctx.stroke();
    }
    if (incorrectGuesses >= 7) {
        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.lineTo(170, 190);
        ctx.stroke();
    }
}

function checkWinCondition() {
    if (maskedWord.join('') === currentWord) {
        endGame(true);
    }
}

function checkLossCondition() {
    if (incorrectGuesses >= maxIncorrectGuesses) {
        endGame(false);
    }
}

function endGame(isWin) {
    gameStarted = false;
    Array.from(keyboardElement.children).forEach(button => {
        button.disabled = true;
        button.classList.add('disabled');
    });
    hintButton.disabled = true;
    messageOverlay.classList.add('show');

    if (isWin) {
        gameMessage.textContent = '¡FELICIDADES! ¡Has ganado!';
        correctWordDisplay.textContent = '';
        triggerConfetti();
    } else {
        gameMessage.textContent = '¡Lo siento, has perdido!';
        correctWordDisplay.textContent = `La palabra era: ${currentWord}`;
    }
}

playAgainButton.addEventListener('click', () => {
    initializeGame();
});

hintButton.addEventListener('click', () => {
    if (!gameStarted || hintUsed) return;

    const hiddenLetters = [];
    for (let i = 0; i < currentWord.length; i++) {
        if (maskedWord[i] === '_') {
            hiddenLetters.push(currentWord[i]);
        }
    }

    if (hiddenLetters.length > 0) {
        const uniqueHiddenLetters = [...new Set(hiddenLetters)];
        const hintLetter = uniqueHiddenLetters[Math.floor(Math.random() * uniqueHiddenLetters.length)];
        hintText.textContent = `Pista: Una de las letras es "${hintLetter}"`;
        hintUsed = true;
        hintButton.disabled = true;

    } else {
        hintText.textContent = 'No hay más letras ocultas para darte una pista.';
        hintButton.disabled = true;
    }
});

function triggerConfetti() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        const size = Math.random() * 8 + 5;
        const delay = Math.random() * 0.5;
        const animationDuration = Math.random() * 3 + 2;

        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${-20 - Math.random() * 50}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `fall ${animationDuration}s linear ${delay}s forwards, fadeOut ${animationDuration}s ${delay}s forwards`;

        confettiContainer.appendChild(confetti);

        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
});
