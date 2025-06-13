// Elementos del DOM
const setupSection = document.getElementById('setup-section');
const chatSection = document.getElementById('chat-section');
const topicButtons = document.querySelectorAll('.topic-btn');
const botNameInput = document.getElementById('bot-name');
const startChatBtn = document.getElementById('start-chat-btn');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const resetBtn = document.getElementById('reset-btn');
const personalityPreview = document.getElementById('personality-preview-message');
const suggestionChips = document.getElementById('suggestion-chips');
const chatBotName = document.getElementById('chat-bot-name');
const chatTopic = document.getElementById('chat-topic');
const chatAvatar = document.getElementById('chat-avatar');
const questionCount = document.getElementById('question-count');

// Controles deslizantes de personalidad
const formalitySlider = document.getElementById('formality');
const enthusiasmSlider = document.getElementById('enthusiasm');
const humorSlider = document.getElementById('humor');
const detailSlider = document.getElementById('detail');

// Visualización de valores de rasgos
const formalityValue = document.getElementById('formality-value');
const enthusiasmValue = document.getElementById('enthusiasm-value');
const humorValue = document.getElementById('humor-value');
const detailValue = document.getElementById('detail-value');

// Estado de la Aplicación
const appState = {
  selectedTopic: null,
  botName: '',
  questionCount: 0,
  MAX_QUESTIONS: 10,
  personality: {
    formality: 5,
    enthusiasm: 5,
    humor: 5,
    detail: 5
  }
};

// Datos de Temas
const topicData = {
  futbol: {
    name: 'Fútbol',
    color: '#4CAF50',
    suggestedQuestions: [
      '¿Cuáles son las reglas básicas del fútbol?',
      '¿Quiénes son los mejores jugadores de la historia?',
      '¿Cómo funciona la Copa Mundial?',
      '¿Qué es el fuera de juego en fútbol?'
    ],
    responses: {
      'reglas': 'Las reglas básicas del fútbol son simples: dos equipos intentan marcar goles metiendo el balón en la portería contraria. Cada equipo tiene 11 jugadores, y el partido se juega en dos tiempos de 45 minutos cada uno.',
      'jugadores': 'Algunos de los mejores jugadores incluyen a Pelé, Diego Maradona, Lionel Messi y Cristiano Ronaldo. Cada uno ha dejado un legado increíble en este deporte.',
      'mundial': 'La Copa Mundial de la FIFA se celebra cada cuatro años. 32 equipos se clasifican a través de competiciones regionales y luego compiten en un torneo de un mes para determinar el campeón mundial.',
      'fuera': 'Un jugador está en posición de fuera de juego si está más cerca de la línea de meta contraria que el balón y el penúltimo adversario cuando el balón es jugado hacia él.',
      'default': '¡Esa es una pregunta interesante sobre fútbol! El hermoso juego está lleno de emoción y estrategia. ¿Te gustaría saber más sobre aspectos específicos del fútbol?'
    }
  },
  redes: {
    name: 'Redes Sociales',
    color: '#2196F3',
    suggestedQuestions: [
      '¿Cómo funcionan los algoritmos de redes sociales?',
      '¿Cuáles son las plataformas más populares?',
      '¿Cómo puedo aumentar mis seguidores?',
      '¿Qué es una estrategia de contenido?'
    ],
    responses: {
      'algoritmo': 'Los algoritmos de redes sociales analizan el comportamiento del usuario, patrones de interacción y relevancia del contenido para determinar qué aparece en tu feed. Priorizan el contenido que genera alta interacción.',
      'plataforma': 'Las plataformas de redes sociales más populares incluyen Facebook, Instagram, Twitter, TikTok y LinkedIn. Cada plataforma sirve para diferentes propósitos y audiencias.',
      'seguidores': 'Para aumentar tus seguidores, concéntrate en crear contenido consistente y de alta calidad, interactúa con tu audiencia, usa hashtags relevantes y publica en horarios óptimos.',
      'default': '¡Las redes sociales están en constante evolución! Hay muchas estrategias y mejores prácticas para explorar. ¿Qué aspecto específico te interesa?'
    }
  },
  algebra: {
    name: 'Álgebra',
    color: '#FF9800',
    suggestedQuestions: [
      '¿Qué son las ecuaciones lineales?',
      '¿Cómo resuelvo ecuaciones cuadráticas?',
      '¿Cuál es la fórmula cuadrática?',
      '¿Cómo funcionan las variables en álgebra?'
    ],
    responses: {
      'lineal': 'Las ecuaciones lineales son ecuaciones donde las variables solo están elevadas a la primera potencia. Forman una línea recta cuando se grafican y siguen el formato ax + b = y.',
      'cuadratica': 'Las ecuaciones cuadráticas se pueden resolver factorizando, completando el cuadrado o usando la fórmula cuadrática: x = (-b ± √(b² - 4ac)) / 2a',
      'variable': 'Las variables son símbolos (generalmente letras) que representan valores desconocidos en expresiones algebraicas. Nos ayudan a resolver problemas con cantidades desconocidas.',
      'default': '¡El álgebra es la base de las matemáticas superiores! Nos ayuda a resolver problemas complejos mediante el uso de variables y ecuaciones. ¿Sobre qué te gustaría aprender más?'
    }
  },
  maquillaje: {
    name: 'Maquillaje',
    color: '#E91E63',
    suggestedQuestions: [
      '¿Cuáles son los pasos básicos del maquillaje?',
      '¿Cómo elijo una base de maquillaje?',
      '¿Qué brochas necesito?',
      '¿Cómo hago un smokey eye?'
    ],
    responses: {
      'basico': 'Los pasos básicos del maquillaje son: 1) Primer 2) Base 3) Corrector 4) Polvo 5) Rubor/Bronceador 6) Maquillaje de ojos 7) Labios. ¡Siempre comienza con el cuidado de la piel!',
      'base': 'Elige una base coincidiendo con tu subtono y probando el tono en tu mandíbula. Busca fórmulas que se adapten a tu tipo de piel (seca, grasa, mixta).',
      'brochas': 'Las brochas esenciales incluyen: brocha para base, brocha para polvo, brocha para rubor, brochas para sombras de ojos (aplicador y difuminador), y una brocha angulada para cejas.',
      'default': '¡El maquillaje es una maravillosa forma de expresión personal! Hay infinitas técnicas y productos para explorar. ¿Qué aspecto del maquillaje te interesa?'
    }
  },
  nutricion: {
    name: 'Nutrición',
    color: '#4CAF50',
    suggestedQuestions: [
      '¿Qué es una dieta equilibrada?',
      '¿Cuántas calorías necesito?',
      '¿Qué son los macronutrientes?',
      '¿Mejores alimentos para la energía?'
    ],
    responses: {
      'dieta': 'Una dieta equilibrada incluye proteínas, carbohidratos, grasas saludables, vitaminas y minerales. Busca variedad y control de porciones en tus comidas.',
      'calorias': 'Las necesidades calóricas diarias varían según la edad, el género, el nivel de actividad y los objetivos. Un adulto promedio necesita 2000-2500 calorías, pero consulta a un profesional para obtener consejos personalizados.',
      'macro': 'Los macronutrientes son proteínas (4 cal/g), carbohidratos (4 cal/g) y grasas (9 cal/g). Proporcionan energía y son esenciales para las funciones corporales.',
      'default': '¡La nutrición es clave para un estilo de vida saludable! Entender lo que comes te ayuda a tomar mejores decisiones alimenticias. ¿Qué te gustaría aprender?'
    }
  },
  gimnasio: {
    name: 'Gimnasio',
    color: '#FF5722',
    suggestedQuestions: [
      '¿Cómo empiezo a hacer ejercicio?',
      '¿Qué es la forma correcta?',
      '¿Con qué frecuencia debo entrenar?',
      '¿Mejores ejercicios para principiantes?'
    ],
    responses: {
      'empezar': 'Comienza con un entrenamiento básico de cuerpo completo 2-3 veces por semana. Concéntrate en ejercicios compuestos como sentadillas, flexiones y remos. ¡Siempre calienta primero!',
      'forma': 'La forma correcta significa mantener la alineación, controlar el movimiento y activar los músculos adecuados. Previene lesiones y maximiza los resultados.',
      'entrenar': 'La frecuencia de entrenamiento depende de tus objetivos y capacidad de recuperación. Los principiantes deberían comenzar con 3-4 días por semana, permitiendo días de descanso entre entrenamientos.',
      'default': '¡El gimnasio es un gran lugar para mejorar tu salud y estado físico! Hay muchos aspectos para entrenar de manera efectiva. ¿Sobre qué te gustaría saber más?'
    }
  }
};

// Inicializar la aplicación
function init() {
  // Agregar oyentes de eventos
  topicButtons.forEach(btn => {
    btn.addEventListener('click', () => selectTopic(btn.dataset.topic));
  });
  
  botNameInput.addEventListener('input', updateBotName);
  
  // Eventos de los controles deslizantes de personalidad
  formalitySlider.addEventListener('input', updatePersonality);
  enthusiasmSlider.addEventListener('input', updatePersonality);
  humorSlider.addEventListener('input', updatePersonality);
  detailSlider.addEventListener('input', updatePersonality);
  
  // Eventos de chat
  startChatBtn.addEventListener('click', startChat);
  sendBtn.addEventListener('click', sendMessage);
  resetBtn.addEventListener('click', resetChat);
  userInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') sendMessage();
  });
  
  // Vista previa inicial de personalidad
  updatePersonality();
}

// Seleccionar tema
function selectTopic(topic) {
  // Quitar clase seleccionada de todos los botones
  topicButtons.forEach(btn => btn.classList.remove('selected'));
  
  // Agregar clase seleccionada al botón clicado
  const selectedBtn = document.querySelector(`[data-topic="${topic}"]`);
  if (selectedBtn) selectedBtn.classList.add('selected');
  
  // Actualizar estado de la aplicación
  appState.selectedTopic = topic;
  
  // Actualizar preguntas sugeridas
  updateSuggestedQuestions();
  
  // Actualizar vista previa de personalidad
  updatePersonality();
  
  // Habilitar/deshabilitar botón de inicio
  validateSetup();
}

// Actualizar nombre del bot
function updateBotName(e) {
  appState.botName = e.target.value.trim();
  validateSetup();
  updatePersonality();
}

// Actualizar rasgos de personalidad
function updatePersonality() {
  // Actualizar valores de rasgos
  appState.personality = {
    formality: parseInt(formalitySlider.value),
    enthusiasm: parseInt(enthusiasmSlider.value),
    humor: parseInt(humorSlider.value),
    detail: parseInt(detailSlider.value)
  };
  
  // Actualizar visualización de valores
  formalityValue.textContent = appState.personality.formality;
  enthusiasmValue.textContent = appState.personality.enthusiasm;
  humorValue.textContent = appState.personality.humor;
  detailValue.textContent = appState.personality.detail;
  
  // Actualizar vista previa
  updatePersonalityPreview();
  
  // Validar configuración
  validateSetup();
}

// Validar configuración
function validateSetup() {
  if (appState.selectedTopic && appState.botName.trim()) {
    startChatBtn.disabled = false;
  } else {
    startChatBtn.disabled = true;
  }
}

// Actualizar preguntas sugeridas basadas en el tema seleccionado
function updateSuggestedQuestions() {
  if (!appState.selectedTopic) return;
  
  // Obtener preguntas sugeridas para el tema seleccionado
  const suggestedQs = topicData[appState.selectedTopic].suggestedQuestions;
  
  // Limpiar chips de sugerencias existentes
  suggestionChips.innerHTML = '';
  
  // Agregar nuevos chips de sugerencias
  suggestedQs.forEach(question => {
    const chip = document.createElement('button');
    chip.classList.add('suggestion-chip');
    chip.textContent = question;
    chip.addEventListener('click', () => {
      userInput.value = question;
      sendMessage();
    });
    suggestionChips.appendChild(chip);
  });
}

// Actualizar vista previa de personalidad
function updatePersonalityPreview() {
  // Obtener rasgos de personalidad
  const { formality, enthusiasm, humor, detail } = appState.personality;
  
  // Generar un saludo personalizado basado en la personalidad
  let greeting = "Hola";
  
  // Agregar entusiasmo
  if (enthusiasm >= 8) {
    greeting += "!! ¡Estoy MUY emocionado";
  } else if (enthusiasm >= 5) {
    greeting += "! Estoy feliz";
  } else {
    greeting += ". Estoy";
  }
  
  // Agregar nombre
  if (appState.botName) {
    greeting += ` de ser tu asistente IA, ${appState.botName}.`;
  } else {
    greeting += " de ser tu asistente IA.";
  }
  
  // Agregar humor
  if (humor >= 8) {
    greeting += " Prometo mantener las cosas divertidas y quizás incluso incluir algún chiste o dos. 😄";
  } else if (humor >= 5) {
    greeting += " Intentaré hacer nuestra conversación agradable.";
  } else {
    greeting += " Me concentraré en proporcionar información precisa.";
  }
  
  // Agregar formalidad y detalle
  if (formality >= 8) {
    greeting += " Me esforzaré por comunicarme de manera profesional y formal";
  } else if (formality >= 5) {
    greeting += " Mantendré un tono conversacional equilibrado";
  } else {
    greeting += " Mantendré las cosas casuales y relajadas";
  }
  
  if (detail >= 8) {
    greeting += " y proporcionaré respuestas completas y detalladas a tus consultas.";
  } else if (detail >= 5) {
    greeting += " con un buen equilibrio de detalles en mis respuestas.";
  } else {
    greeting += " con respuestas breves y directas.";
  }
  
  // Agregar tema si está seleccionado
  if (appState.selectedTopic) {
    const topicName = topicData[appState.selectedTopic].name;
    greeting += ` ¡Estoy listo para responder tus preguntas sobre ${topicName}!`;
  }
  
  // Actualizar vista previa
  personalityPreview.textContent = greeting;
}

// Iniciar chat
function startChat() {
  if (!appState.selectedTopic || !appState.botName) return;
  
  // Ocultar sección de configuración
  setupSection.classList.add('hidden');
  
  // Mostrar sección de chat
  chatSection.classList.remove('hidden');
  
  // Actualizar encabezado de chat
  chatBotName.textContent = appState.botName;
  chatTopic.textContent = `Tema: ${topicData[appState.selectedTopic].name}`;
  chatAvatar.textContent = appState.botName.charAt(0).toUpperCase();
  chatAvatar.style.background = `linear-gradient(to right, var(--primary-500), ${topicData[appState.selectedTopic].color})`;
  
  // Agregar mensaje de bienvenida
  addBotMessage(personalityPreview.textContent);
  
  // Enfocar en el input
  userInput.focus();
}

// Reiniciar chat
function resetChat() {
  // Reiniciar estado de la aplicación
  appState.selectedTopic = null;
  appState.questionCount = 0;
  
  // Actualizar contador de preguntas
  questionCount.textContent = '0';
  
  // Limpiar mensajes de chat
  chatMessages.innerHTML = '';
  
  // Limpiar entrada
  userInput.value = '';
  
  // Mostrar sección de configuración
  setupSection.classList.remove('hidden');
  
  // Ocultar sección de chat
  chatSection.classList.add('hidden');
  
  // Quitar clase seleccionada de todos los botones de tema
  topicButtons.forEach(btn => btn.classList.remove('selected'));
  
  // Deshabilitar botón de inicio de chat
  startChatBtn.disabled = true;
}

// Agregar mensaje del bot al chat
function addBotMessage(text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', 'bot');
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  
  // Desplazar al fondo
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Agregar mensaje del usuario al chat
function addUserMessage(text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', 'user');
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  
  // Desplazar al fondo
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Mostrar indicador de escritura
function showTypingIndicator() {
  const indicator = document.createElement('div');
  indicator.classList.add('typing-indicator');
  indicator.innerHTML = `
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  `;
  indicator.id = 'typing-indicator';
  chatMessages.appendChild(indicator);
  
  // Desplazar al fondo
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Ocultar indicador de escritura
function hideTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) {
    indicator.remove();
  }
}

// Enviar mensaje
function sendMessage() {
  const message = userInput.value.trim();
  
  // No enviar mensajes vacíos
  if (!message) return;
  
  // Agregar mensaje del usuario al chat
  addUserMessage(message);
  
  // Limpiar entrada
  userInput.value = '';
  
  // Mostrar indicador de escritura
  showTypingIndicator();
  
  // Procesar mensaje y obtener respuesta
  setTimeout(() => {
    // Ocultar indicador de escritura
    hideTypingIndicator();
    
    // Obtener respuesta
    const response = getResponse(message);
    
    // Agregar mensaje del bot al chat
    addBotMessage(response);
    
    // Actualizar contador de preguntas si esta fue una pregunta válida
    if (isValidQuestion(message)) {
      appState.questionCount++;
      questionCount.textContent = appState.questionCount;
      
      // Comprobar si hemos alcanzado el número máximo de preguntas
      if (appState.questionCount >= appState.MAX_QUESTIONS) {
        // Agregar mensaje de finalización
        setTimeout(() => {
          addBotMessage(`¡Excelente trabajo! Has completado todas las ${appState.MAX_QUESTIONS} preguntas sobre ${topicData[appState.selectedTopic].name}. Si quieres probar otro tema, haz clic en el botón "Elegir Nuevo Tema" a continuación.`);
        }, 1000);
      }
    }
  }, 1500); // Simular retraso de escritura
}

// Comprobar si un mensaje es una pregunta válida
function isValidQuestion(message) {
  // Comprobación simple - debe terminar con ? y tener al menos 5 caracteres
  return message.trim().endsWith('?') && message.trim().length >= 5;
}

// Obtener respuesta para un mensaje
function getResponse(message) {
  const topic = topicData[appState.selectedTopic];
  const responses = topic.responses;
  
  // Comprobar palabras clave específicas en el mensaje
  let responseKey = 'default';
  
  // Convertir mensaje a minúsculas para coincidencia sin distinción entre mayúsculas y minúsculas
  const lowerMessage = message.toLowerCase();
  
  // Comprobar cada clave de respuesta para una coincidencia
  for (const key in responses) {
    if (key !== 'default' && lowerMessage.includes(key)) {
      responseKey = key;
      break;
    }
  }
  
  // Obtener la respuesta base
  let response = responses[responseKey];
  
  // Modificar respuesta basada en la configuración de personalidad
  response = personalizeResponse(response);
  
  return response;
}

// Personalizar respuesta basada en configuración de personalidad
function personalizeResponse(response) {
  const { formality, enthusiasm, humor, detail } = appState.personality;
  let personalizedResponse = response;
  
  // Ajustar formalidad
  if (formality >= 8) {
    // Reemplazos de lenguaje formal
    personalizedResponse = personalizedResponse
      .replace(/Creo/g, "Considero")
      .replace(/Estoy/g, "Me encuentro")
      .replace(/no/g, "no")
      .replace(/no puedo/g, "no me es posible");
      
    // Agregar apertura formal
    personalizedResponse = `En efecto, ${personalizedResponse}`;
  } else if (formality <= 3) {
    // Lenguaje casual
    personalizedResponse = personalizedResponse
      .replace(/Además/g, "También")
      .replace(/Sin embargo/g, "Pero")
      .replace(/Por lo tanto/g, "Así que");
      
    // Agregar apertura casual
    personalizedResponse = `¡Hey! ${personalizedResponse}`;
  }
  
  // Ajustar entusiasmo
  if (enthusiasm >= 8) {
    // Agregar signos de exclamación y lenguaje entusiasta
    personalizedResponse = personalizedResponse.replace(/\./g, "! ");
    personalizedResponse += " ¡Estoy realmente emocionado de ayudarte a aprender más sobre esto!";
  } else if (enthusiasm <= 3) {
    // Tono más reservado
    personalizedResponse = personalizedResponse.replace(/!/g, ".");
  }
  
  // Ajustar humor
  if (humor >= 8) {
    // Agregar un chiste o comentario ligero basado en el tema
    const jokes = {
      futbol: " Y recuerda, el fútbol es como la pizza: incluso cuando es malo, sigue siendo bastante bueno. 😄",
      redes: " Solo no pases tanto tiempo en redes sociales que te olvides de publicar sobre la vida real. 😉",
      algebra: " Chiste matemático en camino: ¿Por qué el matemático derramó toda su comida? ¡Tuvo problemas con la fórmula del volumen! 🤓",
      maquillaje: " Recuerda, la mejor habilidad de maquillaje es poder hacer el delineado de ojos igual en ambos lados sin tener una crisis. 💄",
      nutricion: " ¡Come tus verduras! O como me gusta llamarlas, 'alimentos saludables a regañadientes'. 🥦",
      gimnasio: " Recuerda, el único mal entrenamiento es el que no ocurrió... o aquel en el que te dejaste caer una pesa en el pie. 💪"
    };
    
    personalizedResponse += jokes[appState.selectedTopic];
  }
  
  // Ajustar nivel de detalle
  if (detail >= 8 && personalizedResponse.length < 500) {
    // Agregar más detalles o ejemplos
    personalizedResponse += " Para elaborar más, este concepto es particularmente importante porque construye la base para una comprensión más profunda. Muchos expertos en el campo enfatizan este punto como conocimiento crucial.";
  } else if (detail <= 3 && personalizedResponse.length > 200) {
    // Acortar la respuesta
    personalizedResponse = personalizedResponse.split('. ').slice(0, 3).join('. ') + '.';
  }
  
  return personalizedResponse;
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', init);