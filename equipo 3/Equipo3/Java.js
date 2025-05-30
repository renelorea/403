const sounds = {
  correct: new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3'),
  incorrect: new Audio('https://assets.mixkit.co/active_storage/sfx/2002/2002-preview.mp3'),
  gameOver: new Audio('https://assets.mixkit.co/active_storage/sfx/2020/2020-preview.mp3')
};

// Game state variables
let currentGame = 'memorama';
let timeLeft = 60;
let timerInterval;
let score = 0;

// DOM Elements
const gameNavButtons = document.querySelectorAll('.nav-btn');
const gameSections = document.querySelectorAll('.game-section');
const timerDisplay = document.getElementById('time-left');
const scoreDisplay = document.getElementById('score');
const gameOverModal = document.getElementById('game-over-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const finalScoreDisplay = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again-btn');

// Event Listeners for Navigation
gameNavButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Reset game before switching
    resetCurrentGame();
    clearInterval(timerInterval);
    
    // Update navigation
    gameNavButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Show selected game
    const selectedGame = button.getAttribute('data-game');
    currentGame = selectedGame;
    
    gameSections.forEach(section => {
      section.classList.remove('active');
      if (section.id === selectedGame) {
        section.classList.add('active');
      }
    });
    
    // Initialize the selected game
    initGame(selectedGame);
  });
});

// Initialize game based on type
function initGame(gameType) {
  resetScore();
  resetTimer();
  startTimer();
  
  switch(gameType) {
    case 'memorama':
      initMemoryGame();
      break;
    case 'hangman':
      initHangmanGame();
      break;
    case 'mental':
      initMentalGame();
      break;
  }
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (!isPaused) {
      timeLeft--;
      updateTimerDisplay();

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        gameOver('¡Se acabó el tiempo!');
      }
    }
  }, 1000);
}


function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
  
  // Add visual cues when time is running out
  if (timeLeft <= 10) {
    timerDisplay.style.color = 'var(--error)';
  } else {
    timerDisplay.style.color = '';
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 60;
  updateTimerDisplay();
}

// Score functions
function updateScore(points) {
  score += points;
  scoreDisplay.textContent = score;
  
  // Visual feedback when score changes
  scoreDisplay.classList.add('score-change');
  setTimeout(() => scoreDisplay.classList.remove('score-change'), 300);
}

function resetScore() {
  score = 0;
  scoreDisplay.textContent = score;
}

// Game over function
function gameOver(message) {
  sounds.gameOver.play();
  clearInterval(timerInterval);
  
  modalTitle.textContent = message;
  finalScoreDisplay.textContent = score;
  gameOverModal.classList.remove('hidden');
}

// Event listener for Play Again button
playAgainBtn.addEventListener('click', () => {
  gameOverModal.classList.add('hidden');
  resetCurrentGame();
  initGame(currentGame);
});

// Reset current game
function resetCurrentGame() {
  switch(currentGame) {
    case 'memorama':
      resetMemoryGame();
      break;
    case 'hangman':
      resetHangmanGame();
      break;
    case 'mental':
      resetMentalGame();
      break;
  }
}

// Event listeners for restart buttons
document.getElementById('restart-memorama').addEventListener('click', () => {
  resetMemoryGame();
  initMemoryGame();
  resetTimer();
  resetScore();
  startTimer();
});

document.getElementById('restart-hangman').addEventListener('click', () => {
  resetHangmanGame();
  initHangmanGame();
  resetTimer();
  resetScore();
  startTimer();
});

document.getElementById('restart-mental').addEventListener('click', () => {
  resetMentalGame();
  initMentalGame();
  resetTimer();
  resetScore();
  startTimer();
});

// =============================================================================
// MEMORY GAME
// =============================================================================

// Memory Game Variables
const memoryBoard = document.getElementById('memory-board');
let memoryCards = [];
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;

// Initialize Memory Game
function initMemoryGame() {
  const emojis = ['🎮', '💻', '🖱️', '📲', '🔊', '💾', '📟', 'cecytem'];
  memoryCards = [...emojis, ...emojis]; // Duplicar para crear pares
  shuffleArray(memoryCards);

  memoryBoard.innerHTML = '';

  memoryCards.forEach((value, index) => {
    const card = document.createElement('div');
    card.classList.add('memory-card');
    card.dataset.value = value;

    const front = document.createElement('div');
    front.classList.add('front');
    if (value === 'cecytem') {
      const img = document.createElement('img');
      img.src = 'Logo.png'; // Asegúrate que la ruta sea correcta
      img.alt = 'CECYTEM';
      img.style.width = '70%';
      img.style.height = 'auto';
      front.appendChild(img);
    } else {
      front.textContent = value;
    }

    const back = document.createElement('div');
    back.classList.add('back');
    back.textContent = '?';

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', flipCard);
    memoryBoard.appendChild(card);
  });

  matchedPairs = 0;
  lockBoard = false;
}


// Flip card function
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  
  this.classList.add('flipped');
  
  if (!hasFlippedCard) {
    // First card flipped
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  
  // Second card flipped
  secondCard = this;
  checkForMatch();
}

// Check if cards match
function checkForMatch() {
  let isMatch = firstCard.dataset.value === secondCard.dataset.value;
  
  if (isMatch) {
    disableCards();
    sounds.correct.play();
    updateScore(10);
    matchedPairs++;
    
    // Check if all pairs are matched
    if (matchedPairs === memoryCards.length / 2) {
      setTimeout(() => {
        gameOver('Great Job!');
      }, 500);
    }
  } else {
    unflipCards();
    sounds.incorrect.play();
  }
}

// Disable matched cards
function disableCards() {
  firstCard.classList.add('matched');
  secondCard.classList.add('matched');
  
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  resetBoard();
}

// Unflip non-matching cards
function unflipCards() {
  lockBoard = true;
  
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    
    resetBoard();
  }, 1000);
}

// Reset board after each turn
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Reset Memory Game
function resetMemoryGame() {
  memoryBoard.innerHTML = '';
  matchedPairs = 0;
  resetBoard();
}

// =============================================================================
// HANGMAN GAME
// =============================================================================

// Hangman Game Variables
const wordDisplay = document.getElementById('word-display');
const keyboard = document.getElementById('keyboard');
const hintBtn = document.getElementById('hint-btn');
const hintText = document.getElementById('hint-text');
const hintsLeftDisplay = document.getElementById('hints-left');
const hangParts = document.querySelectorAll('.hang-part');

const words = [
  { "word": "JAVASCRIPT", "hint": "Un lenguaje de programación popular para el desarrollo web" },
  { "word": "AHORCADO", "hint": "El nombre de este juego" },
  { "word": "COMPUTADORA", "hint": "Un dispositivo electrónico para procesar datos" },
  { "word": "ALGORITMO", "hint": "Un procedimiento paso a paso para cálculos" },
  { "word": "DESARROLLADOR", "hint": "Alguien que escribe código" },
  { "word": "INTERNET", "hint": "Red global de computadoras conectadas" },
  { "word": "BASEDEDATOS", "hint": "Colección organizada de datos" },
  { "word": "CECYTEM", "hint": "La Mejor escuela de Cuautitlan" },
  { "word": "SOFTWARE", "hint": "Programas y aplicaciones de computadora" },
  { "word": "PROGRAMACIÓN", "hint": "Proceso de creación de software para computadoras" },
  { "word": "HTML", "hint": "Lenguaje de marcado utilizado para crear páginas web" },
  { "word": "PYTHON", "hint": "Lenguaje de programación muy usado en ciencia de datos y automatización" },
  { "word": "VARIABLE", "hint": "Elemento usado para almacenar valores en programación" },
  { "word": "ROUTER", "hint": "Dispositivo que conecta redes y dirige el tráfico de Internet" },
  { "word": "FUNCION", "hint": "Bloque de código que realiza una tarea específica" },
  { "word": "ESTUDIANTE", "hint": "Persona que aprende en una escuela o institución" },
  { "word": "SERVIDOR", "hint": "Computadora que proporciona datos a otras en una red" },
  { "word": "DOMINIO", "hint": "Nombre que identifica un sitio web en Internet" },
  { "word": "BIT", "hint": "La unidad de información más pequeña en computación" }
];

let selectedWord = {};
let guessedLetters = [];
let wrongGuesses = 0;
let hintsLeft = 3;

// Initialize Hangman Game
function initHangmanGame() {
  // Select a random word
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
  wrongGuesses = 0;
  hintsLeft = 3;
  hintsLeftDisplay.textContent = hintsLeft;
  hintText.classList.add('hidden');
  
  // Reset hangman figure
  hangParts.forEach(part => part.classList.add('hidden'));
  
  // Create word display
  createWordDisplay();
  
  // Create keyboard
  createKeyboard();
  
  // Add hint button event listener
  hintBtn.addEventListener('click', showHint);
}

// Create word display
function createWordDisplay() {
  wordDisplay.innerHTML = '';
  
  for (let letter of selectedWord.word) {
    const letterBox = document.createElement('div');
    letterBox.classList.add('letter-box');
    
    if (guessedLetters.includes(letter)) {
      letterBox.textContent = letter;
    }
    
    wordDisplay.appendChild(letterBox);
  }
}

// Create keyboard
function createKeyboard() {
  keyboard.innerHTML = '';
  
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const keyButton = document.createElement('button');
    keyButton.classList.add('key-btn');
    keyButton.textContent = letter;
    
    if (guessedLetters.includes(letter)) {
      keyButton.classList.add('used');
      if (selectedWord.word.includes(letter)) {
        keyButton.classList.add('correct');
      } else {
        keyButton.classList.add('wrong');
      }
    }
    
    keyButton.addEventListener('click', () => handleGuess(letter));
    keyboard.appendChild(keyButton);
  }
}

// Handle letter guess
function handleGuess(letter) {
  if (guessedLetters.includes(letter)) return;
  
  guessedLetters.push(letter);
  
  // Update keyboard
  const keyButton = document.querySelector(`.key-btn:nth-child(${letter.charCodeAt(0) - 64})`);
  keyButton.classList.add('used');
  
  // Check if letter is in the word
  if (selectedWord.word.includes(letter)) {
    keyButton.classList.add('correct');
    sounds.correct.play();
    updateScore(5);
    
    // Update word display
    createWordDisplay();
    
    // Check if word is complete
    checkWinCondition();
  } else {
    keyButton.classList.add('wrong');
    sounds.incorrect.play();
    wrongGuesses++;
    
    // Show next part of hangman
    if (wrongGuesses <= hangParts.length) {
      hangParts[wrongGuesses - 1].classList.remove('hidden');
    }
    
    // Check if game over
    if (wrongGuesses >= 6) {
      setTimeout(() => {
        gameOver('Game Over!');
        
        // Reveal the word
        const letterBoxes = wordDisplay.querySelectorAll('.letter-box');
        selectedWord.word.split('').forEach((letter, index) => {
          letterBoxes[index].textContent = letter;
        });
      }, 500);
    }
  }
}

// Check win condition
function checkWinCondition() {
  const word = selectedWord.word;
  const isComplete = [...word].every(letter => guessedLetters.includes(letter));
  
  if (isComplete) {
    setTimeout(() => {
      gameOver('You Won!');
    }, 500);
  }
}

// Show hint
function showHint() {
  if (hintsLeft <= 0) return;
  
  hintsLeft--;
  hintsLeftDisplay.textContent = hintsLeft;
  hintText.textContent = selectedWord.hint;
  hintText.classList.remove('hidden');
  
  // Disable hint button if no hints left
  if (hintsLeft <= 0) {
    hintBtn.disabled = true;
    hintBtn.style.opacity = 0.5;
  }
}

// Reset Hangman Game
function resetHangmanGame() {
  wordDisplay.innerHTML = '';
  keyboard.innerHTML = '';
  hintText.classList.add('hidden');
  hangParts.forEach(part => part.classList.add('hidden'));
  hintBtn.disabled = false;
  hintBtn.style.opacity = 1;
}

// =============================================================================
// MENTAL GAME
// =============================================================================

// Mental Game Variables
const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');

const mentalQuestions = [
  {
    "question": "¿Cuál es el siguiente número en la secuencia: 2, 4, 8, 16, ...?",
    "options": ["24", "32", "30", "64"],
    "answer": 1
  },
  {
    "question": "Si una camisa cuesta $20 y tiene un descuento del 25%, ¿cuánto cuesta?",
    "options": ["$15", "$16", "$5", "$18"],
    "answer": 0
  },
  {
    "question": "¿Qué palabra no pertenece al grupo: Manzana, Banana, Cereza, Papa?",
    "options": ["Manzana", "Banana", "Cereza", "Papa"],
    "answer": 3
  },
  {
    "question": "Completa la analogía: Pájaro es al cielo como pez es al...",
    "options": ["Barco", "Agua", "Escama", "Nadar"],
    "answer": 1
  },
  {
    "question": "Si 5+3=28, 9+1=910, 8+6=?",
    "options": ["14", "48", "814", "86"],
    "answer": 2
  },
  {
    "question": "¿Qué número no encaja: 12, 36, 42, 49, 50?",
    "options": ["12", "42", "49", "50"],
    "answer": 2
  },
  {
    "question": "¿Qué sigue en el patrón: O, T, T, F, F, S, S, ?",
    "options": ["E", "N", "O", "T"],
    "answer": 0
  },
  {
    "question": "Si reordenas las letras 'LAPPLE', obtienes el nombre de un(a):",
    "options": ["Fruta", "Animal", "País", "Vegetal"],
    "answer": 0
  },
  {
    "question": "¿Cuál es el número que falta: 1, 4, 9, 16, 25, ?",
    "options": ["30", "36", "49", "64"],
    "answer": 1
  },
  {
    "question": "Un tren eléctrico va hacia el norte a 100 km/h. El viento sopla hacia el oeste a 100 km/h. ¿Hacia dónde va el humo?",
    "options": ["Norte", "Sur", "Este", "No hay humo"],
    "answer": 3
  },
  {
    "question": "¿Cuántos meses del año tienen 28 días?",
    "options": ["1", "12", "2", "Depende si es año bisiesto"],
    "answer": 1
  },
  {
    "question": "Tengo ciudades pero no casas, montañas pero no árboles, y agua pero no peces. ¿Qué soy?",
    "options": ["Mapa", "Sueño", "Planeta", "Libro"],
    "answer": 0
  },
  {
    "question": "Si un avión se estrella justo en la frontera entre México y EE.UU., ¿dónde entierran a los sobrevivientes?",
    "options": ["En EE.UU.", "En México", "No se entierran", "En la frontera"],
    "answer": 2
  },
  {
    "question": "¿Qué palabra se escribe incorrectamente en el diccionario?",
    "options": ["Incorrectamente", "Ortografía", "Diccionario", "Ninguna"],
    "answer": 0
  },
  {
    "question": "Si tienes un solo fósforo y entras en una cabaña fría con una lámpara de queroseno, una vela y una chimenea, ¿qué enciendes primero?",
    "options": ["La lámpara", "La vela", "El fósforo", "La chimenea"],
    "answer": 2
  },
  {
    "question": "El padre de Juan tiene cinco hijos: A, E, I, O y... ¿quién es el quinto?",
    "options": ["U", "Juan", "Luis", "Pedro"],
    "answer": 1
  },
  {
    "question": "¿Cuál pesa más: 1 kg de plomo o 1 kg de algodón?",
    "options": ["El plomo", "El algodón", "Pesan lo mismo", "Depende del volumen"],
    "answer": 2
  },
  {
    "question": "¿Qué número completa la serie? 1, 1, 2, 3, 5, 8, 13, ?",
    "options": ["18", "20", "21", "22"],
    "answer": 2
  },
  {
    "question": "¿Qué figura geométrica tiene tres lados?",
    "options": ["Círculo", "Rectángulo", "Triángulo", "Pentágono"],
    "answer": 2
  }
];

let currentQuestionIndex = 0;
let questionsAnswered = 0;

// Initialize Mental Game
function initMentalGame() {
  currentQuestionIndex = Math.floor(Math.random() * mentalQuestions.length);
  questionsAnswered = 0;
  displayQuestion();
}

// Display current question
function displayQuestion() {
  const currentQuestion = mentalQuestions[currentQuestionIndex];
  
  questionContainer.textContent = currentQuestion.question;
  optionsContainer.innerHTML = '';
  
  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement('button');
    optionButton.classList.add('option-btn');
    optionButton.textContent = option;
    
    optionButton.addEventListener('click', () => {
      checkAnswer(index);
    });
    
    optionsContainer.appendChild(optionButton);
  });
}

// Check answer
function checkAnswer(selectedIndex) {
  const currentQuestion = mentalQuestions[currentQuestionIndex];
  
  if (selectedIndex === currentQuestion.answer) {
    sounds.correct.play();
    updateScore(10);
    
    // Visual feedback
    optionsContainer.querySelectorAll('.option-btn')[selectedIndex].style.backgroundColor = 'var(--success)';
    optionsContainer.querySelectorAll('.option-btn')[selectedIndex].style.color = 'white';
  } else {
    sounds.incorrect.play();
    
    // Visual feedback
    optionsContainer.querySelectorAll('.option-btn')[selectedIndex].style.backgroundColor = 'var(--error)';
    optionsContainer.querySelectorAll('.option-btn')[selectedIndex].style.color = 'white';
    
    // Show correct answer
    optionsContainer.querySelectorAll('.option-btn')[currentQuestion.answer].style.backgroundColor = 'var(--success)';
    optionsContainer.querySelectorAll('.option-btn')[currentQuestion.answer].style.color = 'white';
  }
  
  // Disable all options
  optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    btn.style.cursor = 'default';
  });
  
  questionsAnswered++;
  
  // Move to next question after delay
  setTimeout(() => {
    // Get a new question index (different from current)
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * mentalQuestions.length);
    } while (newIndex === currentQuestionIndex);
    
    currentQuestionIndex = newIndex;
    displayQuestion();
  }, 1500);
}

// Reset Mental Game
function resetMentalGame() {
  questionsAnswered = 0;
  optionsContainer.innerHTML = '';
  questionContainer.textContent = '';
}

// Utility function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Initialize the default game (Memory)
initGame('memorama');
const rulesData = {
  memorama: "Encuentra todas las parejas de cartas volteándolas de dos en dos. Si las cartas coinciden, se quedan descubiertas. Si no, se voltean nuevamente.",
  hangman: "Adivina la palabra secreta letra por letra. Tienes un número limitado de errores antes de que se complete el dibujo del ahorcado.",
  mental: "Lee la pregunta y selecciona la opción correcta lo más rápido posible. ¡Acierta la mayor cantidad de acertijos en un minuto!",
};

function openRules(game) {
  const modal = document.getElementById('rules-modal');
  const title = document.getElementById('rules-title');
  const text = document.getElementById('rules-text');

  const capitalizedName = game.charAt(0).toUpperCase() + game.slice(1);
  title.textContent = `Reglas de ${capitalizedName}`;
  text.textContent = rulesData[game] || 'Reglas no disponibles.';

  modal.classList.remove('hidden');
}

function closeRules() {
  document.getElementById('rules-modal').classList.add('hidden');
}
let isPaused = false;
const pauseBtn = document.getElementById('pause-btn');

pauseBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? '▶️ Reanudar' : '⏸️ Pausar';

  if (isPaused) {
    clearInterval(timerInterval);
    document.querySelector('.game-section.active').classList.add('paused');
  } else {
    startTimer();
    document.querySelector('.game-section.active').classList.remove('paused');
  }
});
