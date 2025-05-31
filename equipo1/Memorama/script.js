// Datos de los temas del juego
const temasJuego = {
  paises: [
    { emoji: '🗼', name: 'París', habitat: '🇫🇷', habitatName: 'Francia' },
    { emoji: '🗽', name: 'Nueva York', habitat: '🇺🇸', habitatName: 'Estados Unidos' },
    { emoji: '🏛️', name: 'Roma', habitat: '🇮🇹', habitatName: 'Italia' },
    { emoji: '⛩️', name: 'Tokio', habitat: '🇯🇵', habitatName: 'Japón' },
    { emoji: '🕌', name: 'Dubai', habitat: '🇦🇪', habitatName: 'Emiratos Árabes' },
    { emoji: '🏰', name: 'Madrid', habitat: '🇪🇸', habitatName: 'España' },
    { emoji: '🎡', name: 'Londres', habitat: '🇬🇧', habitatName: 'Reino Unido' },
    { emoji: '🗿', name: 'Santiago', habitat: '🇨🇱', habitatName: 'Chile' },
    { emoji: '🏺', name: 'Atenas', habitat: '🇬🇷', habitatName: 'Grecia' },
    { emoji: '🎭', name: 'Moscú', habitat: '🇷🇺', habitatName: 'Rusia' },
    { emoji: '🎪', name: 'Berlín', habitat: '🇩🇪', habitatName: 'Alemania' },
    { emoji: '🌉', name: 'Pekín', habitat: '🇨🇳', habitatName: 'China' }
  ],
  animales: [
    { emoji: '🐯', name: 'Tigre', habitat: '🌿', habitatName: 'Selva' },
    { emoji: '🐻', name: 'Oso', habitat: '🏔️', habitatName: 'Montañas' },
    { emoji: '🦊', name: 'Zorro', habitat: '🌲', habitatName: 'Bosque' },
    { emoji: '🐪', name: 'Camello', habitat: '🏜️', habitatName: 'Desierto' },
    { emoji: '🐧', name: 'Pingüino', habitat: '❄️', habitatName: 'Ártico' },
    { emoji: '🦈', name: 'Tiburón', habitat: '🌊', habitatName: 'Océano' },
    { emoji: '🐘', name: 'Elefante', habitat: '🌾', habitatName: 'Sabana' },
    { emoji: '🦘', name: 'Canguro', habitat: '🌵', habitatName: 'Outback' },
    { emoji: '🦒', name: 'Jirafa', habitat: '🌴', habitatName: 'Llanuras' },
    { emoji: '🐬', name: 'Delfín', habitat: '🏝️', habitatName: 'Costa' },
    { emoji: '🦙', name: 'Llama', habitat: '⛰️', habitatName: 'Andes' },
    { emoji: '🐨', name: 'Koala', habitat: '🌳', habitatName: 'Eucalipto' }
  ],
  instrumentos: [
    { emoji: '🎸', name: 'Guitarra', habitat: '🎼', habitatName: 'Cuerdas' },
    { emoji: '🎹', name: 'Piano', habitat: '🎵', habitatName: 'Teclas' },
    { emoji: '🥁', name: 'Batería', habitat: '🔊', habitatName: 'Percusión' },
    { emoji: '🎺', name: 'Trompeta', habitat: '🎶', habitatName: 'Viento Metal' },
    { emoji: '🎻', name: 'Violín', habitat: '🎭', habitatName: 'Orquesta' },
    { emoji: '🪘', name: 'Tambor', habitat: '🌍', habitatName: 'Tribal' },
    { emoji: '🎷', name: 'Saxofón', habitat: '🎪', habitatName: 'Jazz' },
    { emoji: '🪕', name: 'Banjo', habitat: '🤠', habitatName: 'Country' },
    { emoji: '📯', name: 'Trompa', habitat: '🏰', habitatName: 'Medieval' },
    { emoji: '🎙️', name: 'Micrófono', habitat: '🎤', habitatName: 'Vocal' },
    { emoji: '🪗', name: 'Acordeón', habitat: '💃', habitatName: 'Folklore' },
    { emoji: '🔔', name: 'Campana', habitat: '⛪', habitatName: 'Iglesia' }
  ],
  quimica: [
    { emoji: 'H', name: 'Hidrógeno', habitat: '💧', habitatName: 'Agua' },
    { emoji: 'O', name: 'Oxígeno', habitat: '🌬️', habitatName: 'Aire' },
    { emoji: 'Au', name: 'Oro', habitat: '💍', habitatName: 'Metal Precioso' },
    { emoji: 'Fe', name: 'Hierro', habitat: '⚒️', habitatName: 'Metal' },
    { emoji: 'Na', name: 'Sodio', habitat: '🧂', habitatName: 'Sal' },
    { emoji: 'Cl', name: 'Cloro', habitat: '🏊', habitatName: 'Piscina' },
    { emoji: 'C', name: 'Carbono', habitat: '💎', habitatName: 'Diamante' },
    { emoji: 'He', name: 'Helio', habitat: '🎈', habitatName: 'Globo' },
    { emoji: 'N', name: 'Nitrógeno', habitat: '🌱', habitatName: 'Plantas' },
    { emoji: 'Ca', name: 'Calcio', habitat: '🥛', habitatName: 'Leche' },
    { emoji: 'Ag', name: 'Plata', habitat: '📷', habitatName: 'Fotografía' },
    { emoji: 'Cu', name: 'Cobre', habitat: '🔌', habitatName: 'Electricidad' }
  ],
  cuerpo: [
    { emoji: '👁️', name: 'Ojo', habitat: 'Eye', habitatName: 'Inglés' },
    { emoji: '👃', name: 'Nariz', habitat: 'Nose', habitatName: 'Inglés' },
    { emoji: '👄', name: 'Boca', habitat: 'Mouth', habitatName: 'Inglés' },
    { emoji: '👂', name: 'Oreja', habitat: 'Ear', habitatName: 'Inglés' },
    { emoji: '🦷', name: 'Diente', habitat: 'Tooth', habitatName: 'Inglés' },
    { emoji: '👅', name: 'Lengua', habitat: 'Tongue', habitatName: 'Inglés' },
    { emoji: '🦴', name: 'Hueso', habitat: 'Bone', habitatName: 'Inglés' },
    { emoji: '🫀', name: 'Corazón', habitat: 'Heart', habitatName: 'Inglés' },
    { emoji: '🧠', name: 'Cerebro', habitat: 'Brain', habitatName: 'Inglés' },
    { emoji: '🦿', name: 'Pierna', habitat: 'Leg', habitatName: 'Inglés' },
    { emoji: '💪', name: 'Brazo', habitat: 'Arm', habitatName: 'Inglés' },
    { emoji: '🖐️', name: 'Mano', habitat: 'Hand', habitatName: 'Inglés' }
  ],
  historia: [
    { emoji: '🎨', name: 'Da Vinci', habitat: '🖼️', habitatName: 'Arte y Ciencia' },
    { emoji: '⚛️', name: 'Einstein', habitat: '💡', habitatName: 'Relatividad' },
    { emoji: '🔬', name: 'Pasteur', habitat: '🦠', habitatName: 'Microbiología' },
    { emoji: '🧬', name: 'Darwin', habitat: '🐢', habitatName: 'Evolución' },
    { emoji: '⚡', name: 'Tesla', habitat: '💡', habitatName: 'Electricidad' },
    { emoji: '🔭', name: 'Galileo', habitat: '🌠', habitatName: 'Astronomía' },
    { emoji: '💉', name: 'Fleming', habitat: '🔬', habitatName: 'Penicilina' },
    { emoji: '🧪', name:  'Curie', habitat: '☢️', habitatName: 'Radioactividad' },
    { emoji: '🎭', name: 'Shakespeare', habitat: '📚', habitatName: 'Literatura' },
    { emoji: '🎼', name: 'Mozart', habitat: '🎵', habitatName: 'Música' },
    { emoji: '🎨', name: 'Van Gogh', habitat: '🌻', habitatName: 'Pintura' },
    { emoji: '✊', name: 'Gandhi', habitat: '☮️', habitatName: 'Paz' }
  ],
  banderas: [
    {
      emoji: 'https://flagcdn.com/w160/mx.png',
      name: 'México',
      habitat: '🌵',
      habitatName: 'Azteca'
    },
    {
      emoji: 'https://flagcdn.com/w160/br.png',
      name: 'Brasil',
      habitat: '🌴',
      habitatName: 'Amazonas'
    },
    {
      emoji: 'https://flagcdn.com/w160/jp.png',
      name: 'Japón',
      habitat: '🗻',
      habitatName: 'Fuji'
    },
    {
      emoji: 'https://flagcdn.com/w160/in.png',
      name: 'India',
      habitat: '🕌',
      habitatName: 'Taj Mahal'
    },
    {
      emoji: 'https://flagcdn.com/w160/gb.png',
      name: 'Reino Unido',
      habitat: '🎡',
      habitatName: 'London Eye'
    },
    {
      emoji: 'https://flagcdn.com/w160/fr.png',
      name: 'Francia',
      habitat: '🗼',
      habitatName: 'Torre Eiffel'
    },
    {
      emoji: 'https://flagcdn.com/w160/it.png',
      name: 'Italia',
      habitat: '🏛️',
      habitatName: 'Coliseo'
    },
    {
      emoji: 'https://flagcdn.com/w160/cn.png',
      name: 'China',
      habitat: '🧱',
      habitatName: 'Gran Muralla'
    },
    {
      emoji: 'https://flagcdn.com/w160/es.png',
      name: 'España',
      habitat: '⚽',
      habitatName: 'Fútbol'
    },
    {
      emoji: 'https://flagcdn.com/w160/au.png',
      name: 'Australia',
      habitat: '🦘',
      habitatName: 'Canguro'
    },
    {
      emoji: 'https://flagcdn.com/w160/ca.png',
      name: 'Canadá',
      habitat: '🍁',
      habitatName: 'Arce'
    },
    {
      emoji: 'https://flagcdn.com/w160/ru.png',
      name: 'Rusia',
      habitat: '⛪',
      habitatName: 'San Basilio'
    }
  ]
};

// Game data and state
const gameState = {
  players: [
    { name: 'Jugador 1', avatar: '🦊', score: 0 },
    { name: 'Jugador 2', avatar: '🐨', score: 0 }
  ],
  currentPlayer: 0,
  isSinglePlayer: true,
  difficulty: 6,
  attempts: 0,
  matchedPairs: 0,
  firstCard: null,
  secondCard: null,
  canFlip: true,
  gameStarted: false,
  timer: 0,
  timerInterval: null,
  cards: [],
  selectedTheme: 'animales'
};

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const victoryScreen = document.getElementById('victory-screen');
const singlePlayerBtn = document.getElementById('single-player-btn');
const twoPlayerBtn = document.getElementById('two-player-btn');
const player1Name = document.getElementById('player1-name');
const player2Name = document.getElementById('player2-name');
const player2Form = document.getElementById('player2-form');
const startGameBtn = document.getElementById('start-game');
const gameBoard = document.getElementById('game-board');
const timerDisplay = document.getElementById('timer');
const attemptsDisplay = document.getElementById('attempts');
const currentPlayerDisplay = document.getElementById('current-player');
const playerAvatar = document.getElementById('player-avatar');
const playerName = document.getElementById('player-name');
const restartBtn = document.getElementById('restart-btn');
const newGameBtn = document.getElementById('new-game-btn');
const winnerAvatar = document.getElementById('winner-avatar');
const winnerName = document.getElementById('winner-name');
const finalTime = document.getElementById('final-time');
const finalAttempts = document.getElementById('final-attempts');
const finalScore = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again');
const backToMenuBtn = document.getElementById('back-to-menu');
const themeSelector = document.getElementById('theme-selector');

// Event Listeners for Welcome Screen
singlePlayerBtn.addEventListener('click', () => {
  singlePlayerBtn.classList.add('active');
  twoPlayerBtn.classList.remove('active');
  player2Form.style.display = 'none';
  gameState.isSinglePlayer = true;
});

twoPlayerBtn.addEventListener('click', () => {
  twoPlayerBtn.classList.add('active');
  singlePlayerBtn.classList.remove('active');
  player2Form.style.display = 'block';
  gameState.isSinglePlayer = false;
});

// Theme selection
themeSelector.addEventListener('change', (e) => {
  gameState.selectedTheme = e.target.value;
});

// Avatar selection
document.querySelectorAll('.avatar').forEach(avatar => {
  avatar.addEventListener('click', function() {
    const parentSelector = this.closest('.avatar-selector');
    parentSelector.querySelectorAll('.avatar').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
  });
});

// Difficulty selection
document.querySelectorAll('.difficulty-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    gameState.difficulty = parseInt(this.dataset.pairs);
  });
});

startGameBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);
newGameBtn.addEventListener('click', returnToMenu);
playAgainBtn.addEventListener('click', restartGame);
backToMenuBtn.addEventListener('click', returnToMenu);

function startGame() {
  // Get player names and avatars
  gameState.players[0].name = player1Name.value || 'Jugador 1';
  gameState.players[0].avatar = document.querySelector('.player-form:first-child .avatar.active').textContent;
  
  if (!gameState.isSinglePlayer) {
    gameState.players[1].name = player2Name.value || 'Jugador 2';
    gameState.players[1].avatar = document.querySelector('#player2-form .avatar.active').textContent;
    // Randomly select starting player
    gameState.currentPlayer = Math.random() < 0.5 ? 0 : 1;
  } else {
    gameState.currentPlayer = 0;
  }
  
  // Reset game state
  gameState.attempts = 0;
  gameState.matchedPairs = 0;
  gameState.firstCard = null;
  gameState.secondCard = null;
  gameState.canFlip = true;
  gameState.gameStarted = false;
  gameState.timer = 0;
  
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
  }
  
  welcomeScreen.classList.remove('active');
  gameScreen.classList.add('active');
  victoryScreen.classList.remove('active');
  
  updatePlayerDisplay();
  
  gameBoard.className = 'game-board';
  if (gameState.difficulty === 8) {
    gameBoard.classList.add('medium');
  } else if (gameState.difficulty === 12) {
    gameBoard.classList.add('hard');
  }
  
  generateCards();
  updateTimer();
  updateAttempts();
}

function generateCards() {
  gameBoard.innerHTML = '';
  
  const themeData = temasJuego[gameState.selectedTheme];
  const shuffledItems = [...themeData]
    .sort(() => Math.random() - 0.5)
    .slice(0, gameState.difficulty);
  
  const cardPairs = [];
  shuffledItems.forEach(item => {
    cardPairs.push({
      id: `item-${item.name.toLowerCase()}`,
      content: item.emoji,
      label: item.name,
      type: 'item',
      match: `match-${item.name.toLowerCase()}`
    });
    
    cardPairs.push({
      id: `match-${item.name.toLowerCase()}`,
      content: item.habitat,
      label: item.habitatName,
      type: 'match',
      match: `item-${item.name.toLowerCase()}`
    });
  });
  
  gameState.cards = cardPairs.sort(() => Math.random() - 0.5);
  
  gameState.cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.dataset.index = index;
    
    const isImage = card.content.startsWith('http');
    
    cardElement.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="https://images.seeklogo.com/logo-png/20/2/cecytem-logo-png_seeklogo-201352.png" alt="CECYTEM" class="card-logo">
          <div class="card-team">Equipo 1</div>
        </div>
        <div class="card-back">
          <div class="card-content">
            ${isImage ? `<img src="${card.content}" alt="${card.label}">` : card.content}
          </div>
          <div class="card-label">${card.label}</div>
        </div>
      </div>
    `;
    
    cardElement.addEventListener('click', () => flipCard(index));
    gameBoard.appendChild(cardElement);
  });
}

function flipCard(index) {
  const card = document.querySelector(`.card[data-index="${index}"]`);
  const cardData = gameState.cards[index];
  
  if (!gameState.gameStarted) {
    gameState.gameStarted = true;
    startTimer();
  }
  
  if (
    !gameState.canFlip ||
    card.classList.contains('flipped') ||
    card.classList.contains('matched') ||
    (gameState.firstCard !== null && gameState.firstCard === index)
  ) {
    return;
  }
  
  card.classList.add('flipped');
  
  if (gameState.firstCard === null) {
    gameState.firstCard = index;
    return;
  }
  
  gameState.secondCard = index;
  gameState.canFlip = false;
  gameState.attempts++;
  updateAttempts();
  
  checkForMatch();
}

function checkForMatch() {
  const firstCardData = gameState.cards[gameState.firstCard];
  const secondCardData = gameState.cards[gameState.secondCard];
  const firstCardElement = document.querySelector(`.card[data-index="${gameState.firstCard}"]`);
  const secondCardElement = document.querySelector(`.card[data-index="${gameState.secondCard}"]`);
  
  if (firstCardData.id === secondCardData.match) {
    firstCardElement.classList.add('matched');
    secondCardElement.classList.add('matched');
    
    gameState.players[gameState.currentPlayer].score++;
    gameState.matchedPairs++;
    
    gameState.firstCard = null;
    gameState.secondCard = null;
    gameState.canFlip = true;
    
    if (gameState.matchedPairs === gameState.difficulty) {
      endGame();
      return;
    }
  } else {
    firstCardElement.classList.add('wrong');
    secondCardElement.classList.add('wrong');
    
    setTimeout(() => {
      firstCardElement.classList.remove('flipped', 'wrong');
      secondCardElement.classList.remove('flipped', 'wrong');
      
      gameState.firstCard = null;
      gameState.secondCard = null;
      gameState.canFlip = true;
      
      if (!gameState.isSinglePlayer) {
        gameState.currentPlayer = 1 - gameState.currentPlayer;
        updatePlayerDisplay();
      }
    }, 1000);
  }
}

function updatePlayerDisplay() {
  const player = gameState.players[gameState.currentPlayer];
  playerAvatar.textContent = player.avatar;
  playerName.textContent = player.name;
}

function startTimer() {
  gameState.timerInterval = setInterval(() => {
    gameState.timer++;
    updateTimer();
  }, 1000);
}

function updateTimer() {
  timerDisplay.textContent = `Tiempo: ${gameState.timer}s`;
}

function updateAttempts() {
  attemptsDisplay.textContent = `Intentos: ${gameState.attempts}`;
}

function endGame() {
  clearInterval(gameState.timerInterval);
  
  const score = calculateScore();
  
  if (gameState.isSinglePlayer) {
    winnerAvatar.textContent = gameState.players[0].avatar;
    winnerName.textContent = gameState.players[0].name;
  } else {
    const player1 = gameState.players[0];
    const player2 = gameState.players[1];
    
    if (player1.score > player2.score) {
      winnerAvatar.textContent = player1.avatar;
      winnerName.textContent = player1.name;
    } else if (player2.score > player1.score) {
      winnerAvatar.textContent = player2.avatar;
      winnerName.textContent = player2.name;
    } else {
      winnerAvatar.textContent = '🏆';
      winnerName.textContent = '¡Empate!';
    }
  }
  
  finalTime.textContent = `Tiempo: ${gameState.timer}s`;
  finalAttempts.textContent = `Intentos: ${gameState.attempts}`;
  finalScore.textContent = `Puntaje: ${score}`;
  
  setTimeout(() => {
    gameScreen.classList.remove('active');
    victoryScreen.classList.add('active');
    createConfetti();
  }, 1000);
}

function calculateScore() {
  const timeMultiplier = gameState.difficulty === 6 ? 2 : gameState.difficulty === 8 ? 1.5 : 1;
  const attemptMultiplier = gameState.difficulty === 6 ? 15 : gameState.difficulty === 8 ? 10 : 5;
  
  let score = 1000 - (gameState.timer * timeMultiplier + gameState.attempts * attemptMultiplier);
  return Math.max(0, Math.round(score));
}

function restartGame() {
  victoryScreen.classList.remove('active');
  startGame();
}

function returnToMenu() {
  gameScreen.classList.remove('active');
  victoryScreen.classList.remove('active');
  welcomeScreen.classList.add('active');
  
  gameState.players[0].score = 0;
  gameState.players[1].score = 0;
}

function createConfetti() {
  const confettiContainer = document.querySelector('.confetti');
  confettiContainer.innerHTML = '';
  
  const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 5 + 3}px`;
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.position = 'absolute';
    confetti.style.top = `-10px`;
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.opacity = Math.random() + 0.5;
    confetti.style.transformOrigin = 'center';
    confetti.style.borderRadius = '2px';
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    
    confetti.style.setProperty('--rotation', `${Math.random() * 360}deg`);
    confetti.style.setProperty('--translation', `${Math.random() * 100 - 50}px`);
    
    confettiContainer.appendChild(confetti);
  }
}