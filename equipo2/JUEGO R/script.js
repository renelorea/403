// Datos y estado del juego
const gameState = {
  currentGame: null,
  players: [],
  currentPlayerIndex: 0,
  difficulty: 'facil',
  timeLimit: 0,
  timerInterval: null,
  scores: {},
  logros: [
    { id: 'primero', name: 'Primera Partida', description: 'Completar tu primer juego', unlocked: false },
    { id: 'ganar_ahorcado', name: 'Adivino', description: 'Ganar una partida de Ahorcado', unlocked: false },
    { id: 'ganar_memorama', name: 'Memoria Prodigiosa', description: 'Completar un juego de Memorama', unlocked: false },
    { id: 'ganar_habilidad', name: 'Mente Ágil', description: 'Superar el nivel 3 en Habilidad Mental', unlocked: false },
    { id: 'perfecto', name: 'Perfeccionista', description: 'Ganar sin cometer errores', unlocked: false },
    { id: 'rapidez', name: 'Velocista', description: 'Completar un juego en menos de 30 segundos', unlocked: false },
    { id: 'maestro', name: 'Maestro del Juego', description: 'Ganar en dificultad difícil', unlocked: false },
    { id: 'multijugador', name: 'Competidor', description: 'Ganar una partida multijugador', unlocked: false }
  ]
};

// Datos de los juegos
const juegosData = {
  ahorcado: {
    categorias: {
      animales: {
        palabras: ['perro', 'gato', 'elefante', 'jirafa', 'tigre', 'leon', 'ballena', 'delfin', 'cocodrilo', 'rinoceronte'],
        pistas: {
          perro: 'Mejor amigo del hombre',
          gato: 'Felino doméstico que ronronea',
          elefante: 'El mamífero terrestre más grande',
          jirafa: 'Animal con cuello muy largo',
          tigre: 'Felino rayado',
          leon: 'Rey de la selva',
          ballena: 'Mamífero marino de gran tamaño',
          delfin: 'Mamífero marino muy inteligente',
          cocodrilo: 'Reptil de gran tamaño con poderosas mandíbulas',
          rinoceronte: 'Mamífero con cuernos en la nariz'
        }
      },
      paises: {
        palabras: ['mexico', 'españa', 'brasil', 'argentina', 'colombia', 'chile', 'peru', 'venezuela', 'ecuador', 'canada'],
        pistas: {
          mexico: 'País conocido por sus tacos y tequila',
          españa: 'País europeo donde se habla español',
          brasil: 'El país más grande de Sudamérica',
          argentina: 'País conocido por el tango y la carne',
          colombia: 'País conocido por su café y esmeraldas',
          chile: 'País largo y delgado en Sudamérica',
          peru: 'País con Machu Picchu',
          venezuela: 'País con las cataratas del Ángel',
          ecuador: 'País ubicado en la línea ecuatorial',
          canada: 'País conocido por el jarabe de maple'
        }
      },
      deportes: {
        palabras: ['futbol', 'baloncesto', 'tenis', 'natacion', 'atletismo', 'voleibol', 'beisbol', 'golf', 'boxeo', 'ciclismo'],
        pistas: {
          futbol: 'Deporte que se juega con los pies',
          baloncesto: 'Deporte donde hay que encestar',
          tenis: 'Deporte con raquetas',
          natacion: 'Deporte acuático',
          atletismo: 'Incluye carreras, saltos y lanzamientos',
          voleibol: 'Deporte donde no se deja caer un balón',
          beisbol: 'Deporte con bate y pelota',
          golf: 'Deporte con palos y hoyos',
          boxeo: 'Deporte de combate con guantes',
          ciclismo: 'Deporte sobre ruedas'
        }
      },
      comida: {
        palabras: ['pizza', 'hamburguesa', 'tacos', 'paella', 'sushi', 'pasta', 'enchiladas', 'ceviche', 'empanadas', 'tamales'],
        pistas: {
          pizza: 'Platillo italiano redondo con queso',
          hamburguesa: 'Sándwich con carne molida',
          tacos: 'Tortilla doblada con relleno',
          paella: 'Platillo español con arroz y azafrán',
          sushi: 'Comida japonesa con arroz y pescado crudo',
          pasta: 'Comida italiana con diferentes formas',
          enchiladas: 'Tortillas bañadas en salsa y rellenas',
          ceviche: 'Pescado crudo marinado en limón',
          empanadas: 'Masa rellena horneada o frita',
          tamales: 'Masa de maíz rellena y cocinada en hojas'
        }
      },
      peliculas: {
        palabras: ['titanic', 'matrix', 'avatar', 'gladiador', 'batman', 'superman', 'frozen', 'terminator', 'rocky', 'alien'],
        pistas: {
          titanic: 'Película sobre un famoso naufragio',
          matrix: 'Realidad virtual y píldoras de colores',
          avatar: 'Habitantes azules de otro planeta',
          gladiador: 'Guerrero romano en busca de venganza',
          batman: 'Superhéroe murciélago de Ciudad Gótica',
          superman: 'Superhéroe de Krypton',
          frozen: 'Princesa con poderes de hielo',
          terminator: 'Robot del futuro',
          rocky: 'Boxeador de Filadelfia',
          alien: 'Criatura espacial aterradora'
        }
      }
    },
    estado: {
      palabraActual: '',
      letrasMostradas: [],
      letrasUsadas: [],
      errores: 0,
      maxErrores: 6,
      categoriaActual: 'animales',
      pistaActual: ''
    }
  },
  memorama: {
    iconos: [
      '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼',
      '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔',
      '🦄', '🦋', '🐢', '🐠', '🦉', '🦒', '🦈', '🐘'
    ],
    estado: {
      tarjetas: [],
      tarjetasVolteadas: [],
      paresEncontrados: 0,
      totalPares: 0,
      movimientos: 0,
      numTarjetas: 20 // Valor por defecto
    }
  },
  habilidad: {
    tipos: ['calculo', 'secuencia', 'memoria'],
    estado: {
      tipoActual: '',
      nivel: 1,
      preguntaActual: '',
      respuestaCorrecta: null,
      opciones: [],
      secuencia: [],
      secuenciaUsuario: [],
      mostrandoSecuencia: false,
      preguntasCorrectas: 0,
      totalPreguntas: 0
    }
  }
};

// Funciones de utilidad
function obtenerJugadorActual() {
  return gameState.players[gameState.currentPlayerIndex];
}

function siguienteJugador() {
  gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
  return obtenerJugadorActual();
}

function actualizarTurnoJugador() {
  const jugadorActual = obtenerJugadorActual();
  document.querySelectorAll(`.player-turn span`).forEach(span => {
    span.textContent = jugadorActual;
  });
}

function actualizarPuntaje() {
  const jugadorActual = obtenerJugadorActual();
  const puntaje = gameState.scores[jugadorActual] || 0;
  document.querySelectorAll(`#${gameState.currentGame}-score`).forEach(span => {
    span.textContent = puntaje;
  });
}

function incrementarPuntaje(puntos) {
  const jugadorActual = obtenerJugadorActual();
  if (!gameState.scores[jugadorActual]) {
    gameState.scores[jugadorActual] = 0;
  }
  gameState.scores[jugadorActual] += puntos;
  actualizarPuntaje();
}

function obtenerGanador() {
  let maxPuntaje = -1;
  let ganador = null;
  
  for (const [jugador, puntaje] of Object.entries(gameState.scores)) {
    if (puntaje > maxPuntaje) {
      maxPuntaje = puntaje;
      ganador = jugador;
    }
  }
  
  return { ganador, puntaje: maxPuntaje };
}

function iniciarTemporizador() {
  // Ajustar tiempo según dificultad
  let tiempoBase;
  switch(gameState.currentGame) {
    case 'memorama':
      tiempoBase = juegosData.memorama.estado.numTarjetas * 3; // 3 segundos por par
      break;
    default:
      tiempoBase = 180; // 3 minutos por defecto
  }

  switch(gameState.difficulty) {
    case 'facil':
      gameState.timeLimit = tiempoBase;
      break;
    case 'medio':
      gameState.timeLimit = Math.floor(tiempoBase * 0.7);
      break;
    case 'dificil':
      gameState.timeLimit = Math.floor(tiempoBase * 0.5);
      break;
  }

  if (gameState.timeLimit <= 0) {
    document.querySelectorAll('.timer').forEach(timer => timer.classList.add('hidden'));
    return;
  }

  let tiempoRestante = gameState.timeLimit;
  document.querySelectorAll('.timer').forEach(timer => timer.classList.remove('hidden'));
  document.querySelectorAll(`#${gameState.currentGame}-timer`).forEach(span => {
    span.textContent = formatearTiempo(tiempoRestante);
  });

  clearInterval(gameState.timerInterval);
  gameState.timerInterval = setInterval(() => {
    tiempoRestante--;
    document.querySelectorAll(`#${gameState.currentGame}-timer`).forEach(span => {
      span.textContent = formatearTiempo(tiempoRestante);
    });

    if (tiempoRestante <= 0) {
      clearInterval(gameState.timerInterval);
      mostrarResultado('¡Tiempo agotado!', 'Se ha acabado el tiempo. ¡Inténtalo de nuevo!');
    }
  }, 1000);
}

function detenerTemporizador() {
  clearInterval(gameState.timerInterval);
}

function formatearTiempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const segs = segundos % 60;
  return `${minutos}:${segs < 10 ? '0' : ''}${segs}`;
}

function mostrarResultado(titulo, mensaje, stats = '') {
  detenerTemporizador();
  
  // Si hay múltiples jugadores, mostrar el ganador
  if (gameState.players.length > 1) {
    const { ganador, puntaje } = obtenerGanador();
    mensaje += `\n\n¡${ganador} gana con ${puntaje} puntos!`;
    
    // Agregar puntajes de todos los jugadores
    stats += '<br><br>Puntajes finales:<br>';
    for (const [jugador, puntos] of Object.entries(gameState.scores)) {
      stats += `${jugador}: ${puntos} puntos<br>`;
    }
  }
  
  document.getElementById('resultado-titulo').textContent = titulo;
  document.getElementById('resultado-mensaje').textContent = mensaje;
  
  const statsContainer = document.getElementById('resultado-stats');
  if (stats) {
    statsContainer.innerHTML = stats;
    statsContainer.classList.remove('hidden');
  } else {
    statsContainer.classList.add('hidden');
  }
  
  document.getElementById('resultado-modal').classList.remove('hidden');
}

function desbloquearLogro(id) {
  const logro = gameState.logros.find(l => l.id === id);
  if (logro && !logro.unlocked) {
    logro.unlocked = true;
    // Mostrar notificación
    const notification = document.createElement('div');
    notification.className = 'logro-notification';
    notification.innerHTML = `
      <i class="fas fa-trophy"></i>
      <div>
        <h4>¡Logro desbloqueado!</h4>
        <p>${logro.name}</p>
      </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
    
    // Actualizar el modal de logros si está abierto
    actualizarLogrosModal();
  }
}

function actualizarLogrosModal() {
  const container = document.getElementById('logros-container');
  container.innerHTML = '';
  
  if (gameState.logros.every(l => !l.unlocked)) {
    container.innerHTML = '<p>¡Juega para desbloquear logros!</p>';
    return;
  }
  
  gameState.logros.forEach(logro => {
    const logroElement = document.createElement('div');
    logroElement.className = `logro-card ${logro.unlocked ? 'desbloqueado' : ''}`;
    logroElement.innerHTML = `
      <div class="logro-icon">
        <i class="fas fa-trophy"></i>
      </div>
      <div class="logro-info">
        <h4>${logro.name}</h4>
        <p>${logro.description}</p>
      </div>
    `;
    container.appendChild(logroElement);
  });
}

// Navegación y configuración
document.addEventListener('DOMContentLoaded', () => {
  // Eventos de navegación
  document.querySelectorAll('nav a, .btn-jugar').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const gameId = e.target.closest('[data-game]').dataset.game;
      irAConfiguracion(gameId);
    });
  });

  // Volver al inicio
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      ocultarTodosSectores();
      document.getElementById('inicio').classList.remove('hidden');
    });
  });

  // Configuración de jugadores
  document.querySelectorAll('.player-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.player-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const numPlayers = parseInt(btn.dataset.players);
      actualizarJugadoresInputs(numPlayers);
    });
  });

  // Configuración de dificultad
  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Configuración de número de tarjetas para Memorama
  document.querySelectorAll('.cards-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cards-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      juegosData.memorama.estado.numTarjetas = parseInt(btn.dataset.cards);
    });
  });

  // Iniciar juego
  document.getElementById('start-game').addEventListener('click', iniciarJuego);

  // Modal de resultados
  document.getElementById('jugar-otra-vez').addEventListener('click', () => {
    document.getElementById('resultado-modal').classList.add('hidden');
    reiniciarJuegoActual();
  });

  document.getElementById('volver-inicio').addEventListener('click', () => {
    document.getElementById('resultado-modal').classList.add('hidden');
    ocultarTodosSectores();
    document.getElementById('inicio').classList.remove('hidden');
  });

  // Modal de logros
  document.getElementById('mostrar-logros').addEventListener('click', () => {
    actualizarLogrosModal();
    document.getElementById('logros-modal').classList.remove('hidden');
  });

  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.closest('.modal').classList.add('hidden');
    });
  });

  // Cerrar modales al hacer clic fuera
  window.addEventListener('click', (e) => {
    document.querySelectorAll('.modal').forEach(modal => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });

  // Inicialización del juego de Ahorcado
  document.querySelectorAll('.tecla').forEach(tecla => {
    tecla.addEventListener('click', (e) => {
      if (e.target.classList.contains('used')) return;
      const letra = e.target.textContent.toLowerCase();
      comprobarLetraAhorcado(letra);
    });
  });

  document.getElementById('categoria').addEventListener('change', (e) => {
    juegosData.ahorcado.estado.categoriaActual = e.target.value;
    reiniciarAhorcado();
  });

  // Inicialización del juego de Habilidad Mental
  document.getElementById('habilidad-start').addEventListener('click', iniciarNivelHabilidad);
});

function irAConfiguracion(gameId) {
  gameState.currentGame = gameId;
  
  ocultarTodosSectores();
  document.getElementById('configuracion').classList.remove('hidden');
  document.getElementById('juego-nombre').textContent = {
    'ahorcado': 'El Ahorcado',
    'memorama': 'Memorama',
    'habilidad': 'Habilidad Mental'
  }[gameId];
  
  // Mostrar/ocultar opciones específicas del juego
  const cardOptions = document.querySelector('.cards-options');
  if (cardOptions) {
    cardOptions.classList.toggle('hidden', gameId !== 'memorama');
  }
}

function ocultarTodosSectores() {
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
  });
  detenerTemporizador();
}

function actualizarJugadoresInputs(numPlayers) {
  const container = document.getElementById('player-names');
  container.innerHTML = '';
  
  for (let i = 1; i <= numPlayers; i++) {
    const div = document.createElement('div');
    div.className = 'player-input';
    div.innerHTML = `
      <label for="player${i}">Jugador ${i}:</label>
      <input type="text" id="player${i}" value="Jugador ${i}">
    `;
    container.appendChild(div);
  }
}

function iniciarJuego() {
  // Obtener configuración
  const numPlayers = document.querySelector('.player-btn.active').dataset.players;
  gameState.difficulty = document.querySelector('.diff-btn.active').dataset.diff;
  
  // Obtener nombres de jugadores
  gameState.players = [];
  for (let i = 1; i <= numPlayers; i++) {
    const nombre = document.getElementById(`player${i}`).value || `Jugador ${i}`;
    gameState.players.push(nombre);
  }
  
  gameState.currentPlayerIndex = 0;
  gameState.scores = {};
  
  // Iniciar el juego seleccionado
  ocultarTodosSectores();
  document.getElementById(gameState.currentGame).classList.remove('hidden');
  
  actualizarTurnoJugador();
  actualizarPuntaje();
  
  switch(gameState.currentGame) {
    case 'ahorcado':
      iniciarAhorcado();
      break;
    case 'memorama':
      iniciarMemorama();
      break;
    case 'habilidad':
      iniciarHabilidadMental();
      break;
  }
  
  iniciarTemporizador();
  
  // Desbloquear logro de primera partida
  desbloquearLogro('primero');
}

function reiniciarJuegoActual() {
  switch(gameState.currentGame) {
    case 'ahorcado':
      reiniciarAhorcado();
      break;
    case 'memorama':
      reiniciarMemorama();
      break;
    case 'habilidad':
      reiniciarHabilidadMental();
      break;
  }
  
  iniciarTemporizador();
}

// Lógica del juego de Ahorcado
function iniciarAhorcado() {
  reiniciarAhorcado();
}

function reiniciarAhorcado() {
  const estado = juegosData.ahorcado.estado;
  
  // Reiniciar estado
  estado.errores = 0;
  estado.letrasUsadas = [];
  
  // Ocultar partes del ahorcado
  document.querySelectorAll('.hangman-part.hidden').forEach(part => {
    part.classList.remove('hidden');
  });
  
  document.querySelectorAll('.hangman-part:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4))').forEach(part => {
    part.classList.add('hidden');
  });
  
  // Reiniciar teclado
  document.querySelectorAll('.tecla').forEach(tecla => {
    tecla.classList.remove('used', 'correct', 'incorrect');
  });
  
  // Seleccionar palabra aleatoria de la categoría actual
  const categoria = estado.categoriaActual;
  const palabras = juegosData.ahorcado.categorias[categoria].palabras;
  const indice = Math.floor(Math.random() * palabras.length);
  estado.palabraActual = palabras[indice];
  estado.pistaActual = juegosData.ahorcado.categorias[categoria].pistas[estado.palabraActual];
  
  // Mostrar pista
  document.getElementById('pista-texto').textContent = estado.pistaActual;
  
  // Crear espacios para las letras
  estado.letrasMostradas = Array(estado.palabraActual.length).fill('');
  actualizarPalabraAhorcado();
}

function actualizarPalabraAhorcado() {
  const container = document.getElementById('palabra-container');
  container.innerHTML = '';
  
  juegosData.ahorcado.estado.letrasMostradas.forEach(letra => {
    const span = document.createElement('div');
    span.className = 'letra-espacio';
    span.textContent = letra.toUpperCase();
    container.appendChild(span);
  });
}

function comprobarLetraAhorcado(letra) {
  const estado = juegosData.ahorcado.estado;
  
  // Marcar la letra como usada
  document.querySelectorAll(`.tecla`).forEach(tecla => {
    if (tecla.textContent.toLowerCase() === letra) {
      tecla.classList.add('used');
    }
  });
  
  estado.letrasUsadas.push(letra);
  
  // Comprobar si la letra está en la palabra
  let acierto = false;
  for (let i = 0; i < estado.palabraActual.length; i++) {
    if (estado.palabraActual[i] === letra) {
      estado.letrasMostradas[i] = letra;
      acierto = true;
    }
  }
  
  if (acierto) {
    // Marcar tecla como correcta
    document.querySelectorAll(`.tecla`).forEach(tecla => {
      if (tecla.textContent.toLowerCase() === letra) {
        tecla.classList.add('correct');
      }
    });
    
    // Actualizar palabra mostrada
    actualizarPalabraAhorcado();
    
    // Comprobar si ha ganado
    if (!estado.letrasMostradas.includes('')) {
      finalizarAhorcado(true);
    }
    
    // Incrementar puntaje
    incrementarPuntaje(10);
  } else {
    // Marcar tecla como incorrecta
    document.querySelectorAll(`.tecla`).forEach(tecla => {
      if (tecla.textContent.toLowerCase() === letra) {
        tecla.classList.add('incorrect');
      }
    });
    
    // Mostrar siguiente parte del ahorcado
    estado.errores++;
    const partes = document.querySelectorAll('.hangman-part.hidden');
    if (partes.length > 0 && estado.errores <= estado.maxErrores) {
      partes[0].classList.remove('hidden');
    }
    
    // Comprobar si ha perdido
    if (estado.errores >= estado.maxErrores) {
      finalizarAhorcado(false);
    } else if (gameState.players.length > 1) {
      // Pasar al siguiente jugador solo si no ha perdido
      siguienteJugador();
      actualizarTurnoJugador();
    }
  }
}

function finalizarAhorcado(victoria) {
  detenerTemporizador();
  
  if (victoria) {
    const mensaje = `¡Felicidades! Has adivinado la palabra "${juegosData.ahorcado.estado.palabraActual.toUpperCase()}"`;
    
    // Desbloquear logros
    desbloquearLogro('ganar_ahorcado');
    
    if (juegosData.ahorcado.estado.errores === 0) {
      desbloquearLogro('perfecto');
    }
    
    if (gameState.difficulty === 'dificil') {
      desbloquearLogro('maestro');
    }
    
    if (gameState.players.length > 1) {
      desbloquearLogro('multijugador');
    }
    
    mostrarResultado('¡Victoria!', mensaje, `Errores: ${juegosData.ahorcado.estado.errores} de ${juegosData.ahorcado.estado.maxErrores}`);
  } else {
    // Mostrar la palabra completa
    juegosData.ahorcado.estado.letrasMostradas = juegosData.ahorcado.estado.palabraActual.split('');
    actualizarPalabraAhorcado();
    
    mostrarResultado('¡Has perdido!', `La palabra era: "${juegosData.ahorcado.estado.palabraActual.toUpperCase()}"`);
  }
}

// Lógica del juego de Memorama
function iniciarMemorama() {
  reiniciarMemorama();
}

function reiniciarMemorama() {
  const estado = juegosData.memorama.estado;
  
  // Reiniciar estado
  estado.tarjetasVolteadas = [];
  estado.paresEncontrados = 0;
  estado.movimientos = 0;
  
  // Determinar número de pares según la configuración
  const numPares = estado.numTarjetas / 2;
  estado.totalPares = numPares;
  
  // Crear tarjetas
  const iconos = juegosData.memorama.iconos.slice(0, numPares);
  let tarjetas = [...iconos, ...iconos]; // Duplicar para crear pares
  
  // Mezclar tarjetas
  tarjetas = mezclarArray(tarjetas);
  estado.tarjetas = tarjetas;
  
  // Crear tablero
  const tablero = document.getElementById('memorama-tablero');
  tablero.innerHTML = '';
  
  // Definir columnas según el número de tarjetas
  const columnas = Math.ceil(Math.sqrt(estado.numTarjetas));
  tablero.style.gridTemplateColumns = `repeat(${columnas}, 1fr)`;
  
  tarjetas.forEach((icono, index) => {
    const carta = document.createElement('div');
    carta.className = 'carta';
    carta.dataset.index = index;
    carta.innerHTML = `
      <div class="carta-inner">
        <div class="carta-front">
          <img src="https://images.seeklogo.com/logo-png/20/2/cecytem-logo-png_seeklogo-201352.png" alt="CECYTEM Logo">
          <div class="equipo">EQUIPO 2</div>
        </div>
        <div class="carta-back">${icono}</div>
      </div>
    `;
    
    carta.addEventListener('click', () => voltearTarjeta(index));
    tablero.appendChild(carta);
  });
}

function mezclarArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function voltearTarjeta(index) {
  const estado = juegosData.memorama.estado;
  
  // No hacer nada si ya hay dos tarjetas volteadas o si la tarjeta ya está volteada
  if (estado.tarjetasVolteadas.length >= 2 || estado.tarjetasVolteadas.includes(index)) return;
  
  // Obtener todas las tarjetas y la tarjeta seleccionada
  const tarjetas = document.querySelectorAll('.carta');
  const tarjeta = tarjetas[index];
  
  // Voltear la tarjeta
  tarjeta.classList.add('flipped');
  estado.tarjetasVolteadas.push(index);
  
  // Si se han volteado dos tarjetas, comprobar si son pareja
  if (estado.tarjetasVolteadas.length === 2) {
    estado.movimientos++;
    
    const [index1, index2] = estado.tarjetasVolteadas;
    const sonPareja = estado.tarjetas[index1] === estado.tarjetas[index2];
    
    if (sonPareja) {
      // Si son pareja, incrementar puntaje y limpiar tarjetas volteadas
      estado.paresEncontrados++;
      incrementarPuntaje(20);
      
      // Animar las tarjetas
      tarjetas[index1].classList.add('success-animation');
      tarjetas[index2].classList.add('success-animation');
      
      setTimeout(() => {
        tarjetas[index1].classList.remove('success-animation');
        tarjetas[index2].classList.remove('success-animation');
        estado.tarjetasVolteadas = [];
        
        // Comprobar si se ha completado el juego
        if (estado.paresEncontrados >= estado.totalPares) {
          finalizarMemorama();
        }
      }, 1000);
    } else {
      // Si no son pareja, descartar después de un tiempo
      setTimeout(() => {
        tarjetas[index1].classList.remove('flipped');
        tarjetas[index2].classList.remove('flipped');
        
        // Animar error
        tarjetas[index1].classList.add('error-animation');
        tarjetas[index2].classList.add('error-animation');
        
        setTimeout(() => {
          tarjetas[index1].classList.remove('error-animation');
          tarjetas[index2].classList.remove('error-animation');
          estado.tarjetasVolteadas = [];
          
          // Pasar al siguiente jugador en modo multijugador
          if (gameState.players.length > 1) {
            siguienteJugador();
            actualizarTurnoJugador();
          }
        }, 500);
      }, 1000);
    }
  }
}

function finalizarMemorama() {
  detenerTemporizador();
  
  const estado = juegosData.memorama.estado;
  const tiempoTranscurrido = gameState.timeLimit - parseInt(document.getElementById('memorama-timer').textContent.split(':').reduce((acc, time) => (60 * acc) + parseInt(time)));
  
  const mensaje = `¡Has encontrado todos los pares en ${estado.movimientos} movimientos!`;
  
  // Desbloquear logros
  desbloquearLogro('ganar_memorama');
  
  if (gameState.difficulty === 'dificil') {
    desbloquearLogro('maestro');
  }
  
  if (tiempoTranscurrido < 30 && gameState.timeLimit > 0) {
    desbloquearLogro('rapidez');
  }
  
  if (gameState.players.length > 1) {
    desbloquearLogro('multijugador');
  }
  
  mostrarResultado('¡Juego completado!', mensaje, `Movimientos: ${estado.movimientos}<br>Pares encontrados: ${estado.paresEncontrados}`);
}

// Lógica del juego de Habilidad Mental
function iniciarHabilidadMental() {
  reiniciarHabilidadMental();
}

function reiniciarHabilidadMental() {
  const estado = juegosData.habilidad.estado;
  
  // Reiniciar estado
  estado.nivel = 1;
  estado.preguntasCorrectas = 0;
  estado.totalPreguntas = 0;
  
  document.getElementById('habilidad-level').textContent = estado.nivel;
  document.getElementById('habilidad-instruction').textContent = 'Prepárate para el desafío...';
  document.getElementById('habilidad-area').innerHTML = '';
  document.getElementById('habilidad-start').classList.remove('hidden');
  document.getElementById('habilidad-options').classList.add('hidden');
}

function iniciarNivelHabilidad() {
  const estado = juegosData.habilidad.estado;
  
  // Ocultar botón de inicio
  document.getElementById('habilidad-start').classList.add('hidden');
  
  // Seleccionar tipo de juego aleatorio
  const tipos = juegosData.habilidad.tipos;
  estado.tipoActual = tipos[Math.floor(Math.random() * tipos.length)];
  
  switch(estado.tipoActual) {
    case 'calculo':
      generarPreguntaCalculo();
      break;
    case 'secuencia':
      generarSecuencia();
      break;
    case 'memoria':
      generarPruebaMemoria();
      break;
  }
}

function generarPreguntaCalculo() {
  const estado = juegosData.habilidad.estado;
  const nivel = estado.nivel;
  
  let num1, num2, operacion, resultado;
  
  // Ajustar dificultad según nivel
  const maxNum = 10 * nivel;
  
  // Determinar operación
  const opIndex = Math.floor(Math.random() * (nivel > 2 ? 3 : 2)); // En nivel 3+ incluir multiplicación
  
  num1 = Math.floor(Math.random() * maxNum) + 1;
  num2 = Math.floor(Math.random() * maxNum) + 1;
  
  switch(opIndex) {
    case 0: // Suma
      operacion = '+';
      resultado = num1 + num2;
      break;
    case 1: // Resta
      // Asegurar que el resultado sea positivo
      if (num1 < num2) [num1, num2] = [num2, num1];
      operacion = '-';
      resultado = num1 - num2;
      break;
    case 2: // Multiplicación
      // Reducir un poco la dificultad para multiplicación
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      operacion = '×';
      resultado = num1 * num2;
      break;
  }
  
  estado.preguntaActual = `${num1} ${operacion} ${num2} = ?`;
  estado.respuestaCorrecta = resultado;
  
  // Generar opciones
  const opciones = [resultado];
  while (opciones.length < 4) {
    // Generar respuestas incorrectas cercanas
    let opcionIncorrecta = resultado + (Math.floor(Math.random() * 10) - 5);
    if (opcionIncorrecta !== resultado && !opciones.includes(opcionIncorrecta) && opcionIncorrecta > 0) {
      opciones.push(opcionIncorrecta);
    }
  }
  
  estado.opciones = mezclarArray(opciones);
  
  // Mostrar pregunta y opciones
  document.getElementById('habilidad-instruction').textContent = 'Resuelve la operación:';
  
  const area = document.getElementById('habilidad-area');
  area.innerHTML = `
    <div class="operacion-matematica">${estado.preguntaActual}</div>
  `;
  
  const optionsContainer = document.getElementById('habilidad-options');
  optionsContainer.innerHTML = '';
  optionsContainer.classList.remove('hidden');
  
  estado.opciones.forEach(opcion => {
    const btn = document.createElement('button');
    btn.className = 'habilidad-option';
    btn.textContent = opcion;
    btn.addEventListener('click', () => comprobarRespuestaHabilidad(opcion));
    optionsContainer.appendChild(btn);
  });
}

function generarSecuencia() {
  const estado = juegosData.habilidad.estado;
  const nivel = estado.nivel;
  
  // Longitud de la secuencia según nivel
  const longitud = nivel + 2;
  
  // Generar secuencia (puede ser numérica o de patrones)
  const tipoSecuencia = Math.random() > 0.5 ? 'numerica' : 'patron';
  
  if (tipoSecuencia === 'numerica') {
    // Secuencia numérica con patrón
    const inicio = Math.floor(Math.random() * 10);
    const incremento = Math.floor(Math.random() * 5) + 1;
    
    estado.secuencia = Array(longitud).fill(0).map((_, i) => inicio + (i * incremento));
    // Eliminar un elemento para que el usuario lo complete
    const indiceOculto = Math.floor(Math.random() * longitud);
    estado.respuestaCorrecta = estado.secuencia[indiceOculto];
    estado.secuencia[indiceOculto] = '?';
    
    // Generar opciones
    const opciones = [estado.respuestaCorrecta];
    while (opciones.length < 4) {
      const opcionIncorrecta = estado.respuestaCorrecta + (Math.floor(Math.random() * 10) - 5);
      if (!opciones.includes(opcionIncorrecta)) {
        opciones.push(opcionIncorrecta);
      }
    }
    estado.opciones = mezclarArray(opciones);
    
    // Mostrar secuencia y opciones
    document.getElementById('habilidad-instruction').textContent = 'Completa la secuencia:';
    
    const area = document.getElementById('habilidad-area');
    area.innerHTML = `
      <div class="secuencia">
        ${estado.secuencia.map(num => `<div class="secuencia-item">${num}</div>`).join('')}
      </div>
    `;
    
    const optionsContainer = document.getElementById('habilidad-options');
    optionsContainer.innerHTML = '';
    optionsContainer.classList.remove('hidden');
    
    estado.opciones.forEach(opcion => {
      const btn = document.createElement('button');
      btn.className = 'habilidad-option';
      btn.textContent = opcion;
      btn.addEventListener('click', () => comprobarRespuestaHabilidad(opcion));
      optionsContainer.appendChild(btn);
    });
  } else {
    // Secuencia de patrones (repite lo que ves)
    estado.secuencia = Array(longitud).fill(0).map(() => Math.floor(Math.random() * 4));
    estado.secuenciaUsuario = [];
    
    // Mostrar instrucciones
    document.getElementById('habilidad-instruction').textContent = 'Memoriza la secuencia y repítela:';
    
    // Crear área de juego
    const area = document.getElementById('habilidad-area');
    area.innerHTML = `
      <div class="patron-secuencia">
        <div class="patron-grid">
          <div class="patron-btn" data-index="0"></div>
          <div class="patron-btn" data-index="1"></div>
          <div class="patron-btn" data-index="2"></div>
          <div class="patron-btn" data-index="3"></div>
        </div>
      </div>
    `;
    
    // Animar la secuencia para que el usuario la memorice
    estado.mostrandoSecuencia = true;
    
    const botones = document.querySelectorAll('.patron-btn');
    let i = 0;
    
    const interval = setInterval(() => {
      if (i >= estado.secuencia.length) {
        clearInterval(interval);
        estado.mostrandoSecuencia = false;
        
        // Activar botones para entrada del usuario
        botones.forEach(btn => {
          btn.addEventListener('click', (e) => {
            if (estado.mostrandoSecuencia) return;
            
            const index = parseInt(e.target.dataset.index);
            estado.secuenciaUsuario.push(index);
            
            // Animar botón presionado
            e.target.classList.add('active');
            setTimeout(() => e.target.classList.remove('active'), 300);
            
            // Comprobar si la secuencia está completa
            if (estado.secuenciaUsuario.length >= estado.secuencia.length) {
              // Comprobar si la secuencia es correcta
              let correcta = true;
              for (let j = 0; j < estado.secuencia.length; j++) {
                if (estado.secuencia[j] !== estado.secuenciaUsuario[j]) {
                  correcta = false;
                  break;
                }
              }
              
              if (correcta) {
                estado.preguntasCorrectas++;
                incrementarPuntaje(30);
                siguienteNivelHabilidad();
              } else {
                finalizarHabilidadMental(false);
              }
            }
          });
        });
        
        return;
      }
      
      // Iluminar el botón correspondiente
      const indice = estado.secuencia[i];
      botones[indice].classList.add('active');
      
      setTimeout(() => {
        botones[indice].classList.remove('active');
      }, 500);
      
      i++;
    }, 1000);
    
    document.getElementById('habilidad-options').classList.add('hidden');
  }
}

function generarPruebaMemoria() {
  const estado = juegosData.habilidad.estado;
  const nivel = estado.nivel;
  
  // Número de elementos a recordar según nivel
  const numElementos = nivel + 2;
  
  // Generar elementos aleatorios (números, letras o símbolos)
  const tipoElementos = ['numeros', 'letras', 'simbolos'][Math.floor(Math.random() * 3)];
  let elementos = [];
  
  switch(tipoElementos) {
    case 'numeros':
      for (let i = 0; i < numElementos; i++) {
        elementos.push(Math.floor(Math.random() * 100));
      }
      break;
    case 'letras':
      const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      for (let i = 0; i < numElementos; i++) {
        elementos.push(letras[Math.floor(Math.random() * letras.length)]);
      }
      break;
    case 'simbolos':
      const simbolos = '!@#$%^&*+=?';
      for (let i = 0; i < numElementos; i++) {
        elementos.push(simbolos[Math.floor(Math.random() * simbolos.length)]);
      }
      break;
  }
  
  estado.secuencia = [...elementos];
  
  // Mostrar instrucciones
  document.getElementById('habilidad-instruction').textContent = `Memoriza estos ${tipoElementos}:`;
  
  // Mostrar elementos para memorizar
  const area = document.getElementById('habilidad-area');
  area.innerHTML = `
    <div class="memoria-elementos">
      ${elementos.map(elem => `<div class="memoria-item">${elem}</div>`).join('')}
    </div>
  `;
  
  // Ocultar después de un tiempo proporcional al nivel
  setTimeout(() => {
    // Ocultar elementos
    area.innerHTML = '';
    
    // Solicitar respuesta (puede ser recordar el orden o encontrar un elemento específico)
    const tipoPregunta = Math.random() > 0.5 ? 'orden' : 'elemento';
    
    if (tipoPregunta === 'orden') {
      // Desordena los elementos
      const elementosDesordenados = mezclarArray([...elementos]);
      
      document.getElementById('habilidad-instruction').textContent = 'Ordena los elementos como aparecieron:';
      
      // Crear área para ordenar
      area.innerHTML = `
        <div class="memoria-orden">
          <div class="orden-elementos-destino"></div>
          <div class="orden-elementos-origen">
            ${elementosDesordenados.map((elem, i) => `<div class="memoria-item draggable" data-valor="${elem}" data-index="${i}">${elem}</div>`).join('')}
          </div>
        </div>
      `;
      
      // Implementar arrastrar y soltar
      const draggables = document.querySelectorAll('.draggable');
      const dropzone = document.querySelector('.orden-elementos-destino');
      
      draggables.forEach(item => {
        item.addEventListener('dragstart', () => {
          item.classList.add('dragging');
        });
        
        item.addEventListener('dragend', () => {
          item.classList.remove('dragging');
          
          // Comprobar si todos los elementos han sido ordenados
          if (dropzone.children.length >= elementos.length) {
            // Comprobar si el orden es correcto
            let ordenCorrecto = true;
            for (let i = 0; i < elementos.length; i++) {
              if (dropzone.children[i].dataset.valor != elementos[i]) {
                ordenCorrecto = false;
                break;
              }
            }
            
            if (ordenCorrecto) {
              estado.preguntasCorrectas++;
              incrementarPuntaje(30);
              siguienteNivelHabilidad();
            } else {
              finalizarHabilidadMental(false);
            }
          }
        });
        
        item.setAttribute('draggable', true);
      });
      
      dropzone.addEventListener('dragover', e => {
        e.preventDefault();
        const dragging = document.querySelector('.dragging');
        dropzone.appendChild(dragging);
      });
    } else {
      // Preguntar por un elemento específico
      const indiceElemento = Math.floor(Math.random() * elementos.length);
      estado.respuestaCorrecta = elementos[indiceElemento];
      
      document.getElementById('habilidad-instruction').textContent = `¿Cuál era el elemento en la posición ${indiceElemento + 1}?`;
      
      // Generar opciones
      let opciones = [estado.respuestaCorrecta];
      
      // Añadir opciones incorrectas
      while (opciones.length < 4) {
        let opcionIncorrecta;
        if (tipoElementos === 'numeros') {
          opcionIncorrecta = Math.floor(Math.random() * 100);
        } else if (tipoElementos === 'letras') {
          const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          opcionIncorrecta = letras[Math.floor(Math.random() * letras.length)];
        } else {
          const simbolos = '!@#$%^&*+=?';
          opcionIncorrecta = simbolos[Math.floor(Math.random() * simbolos.length)];
        }
        
        if (!opciones.includes(opcionIncorrecta)) {
          opciones.push(opcionIncorrecta);
        }
      }
      
      estado.opciones = mezclarArray(opciones);
      
      // Mostrar opciones
      const optionsContainer = document.getElementById('habilidad-options');
      optionsContainer.innerHTML = '';
      optionsContainer.classList.remove('hidden');
      
      estado.opciones.forEach(opcion => {
        const btn = document.createElement('button');
        btn.className = 'habilidad-option';
        btn.textContent = opcion;
        btn.addEventListener('click', () => comprobarRespuestaHabilidad(opcion));
        optionsContainer.appendChild(btn);
      });
    }
  }, 1000 + (nivel * 500)); // Tiempo proporcional al nivel
}

function comprobarRespuestaHabilidad(respuesta) {
  const estado = juegosData.habilidad.estado;
  
  if (respuesta === estado.respuestaCorrecta) {
    // Respuesta correcta
    estado.preguntasCorrectas++;
    incrementarPuntaje(20);
    
    // Animar respuesta correcta
    document.querySelectorAll('.habilidad-option').forEach(btn => {
      if (btn.textContent == respuesta) {
        btn.classList.add('success-animation');
      }
    });
    
    setTimeout(() => {
      siguienteNivelHabilidad();
    }, 1000);
  } else {
    // Respuesta incorrecta
    document.querySelectorAll('.habilidad-option').forEach(btn => {
      if (btn.textContent == respuesta) {
        btn.classList.add('error-animation');
      }
    });
    
    setTimeout(() => {
      finalizarHabilidadMental(false);
    }, 1000);
  }
}

function siguienteNivelHabilidad() {
  const estado = juegosData.habilidad.estado;
  
  estado.nivel++;
  estado.totalPreguntas++;
  
  document.getElementById('habilidad-level').textContent = estado.nivel;
  
  // Desbloquear logro si alcanza nivel 3
  if (estado.nivel >= 3) {
    desbloquearLogro('ganar_habilidad');
  }
  
  // Iniciar siguiente nivel
  iniciarNivelHabilidad();
}

function finalizarHabilidadMental(victoria = true) {
  detenerTemporizador();
  
  const estado = juegosData.habilidad.estado;
  
  let mensaje, titulo;
  
  if (victoria) {
    titulo = '¡Felicidades!';
    mensaje = `Has completado ${estado.preguntasCorrectas} preguntas correctamente y alcanzado el nivel ${estado.nivel}.`;
  } else {
    titulo = 'Fin del juego';
    mensaje = `Has completado ${estado.preguntasCorrectas} preguntas correctamente y alcanzado el nivel ${estado.nivel}.`;
  }
  
  // Desbloquear logros
  if (estado.nivel >= 3) {
    desbloquearLogro('ganar_habilidad');
  }
  
  if (gameState.difficulty === 'dificil') {
    desbloquearLogro('maestro');
  }
  
  if (gameState.players.length > 1) {
    desbloquearLogro('multijugador');
  }
  
  mostrarResultado(titulo, mensaje, `Nivel alcanzado: ${estado.nivel}<br>Preguntas correctas: ${estado.preguntasCorrectas}/${estado.totalPreguntas}`);
}

// Inicialización del sitio
document.addEventListener('DOMContentLoaded', () => {
  // Verificar si hay alguna ruta en la URL
  const hash = window.location.hash.substring(1);
  if (hash && ['ahorcado', 'memorama', 'habilidad'].includes(hash)) {
    irAConfiguracion(hash);
  }
});