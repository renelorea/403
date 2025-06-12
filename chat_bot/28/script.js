// Estado global de la aplicación
let appState = {
    currentScreen: 'profile',
    userName: '',
    avatarIndex: 1,
    selectedTopic: '',
    messages: [],
    isTyping: false
};

// Datos de los temas y respuestas
const topicData = {
    "Fútbol": {
        "qué es fútbol": "El fútbol es un deporte de equipo que se juega entre dos equipos de 11 jugadores cada uno con un balón esférico. Es el deporte más popular del mundo, practicado en más de 200 países.",
        "mejor jugador": "El debate sobre el mejor jugador de fútbol suele incluir nombres como Lionel Messi, Cristiano Ronaldo, Pelé y Diego Maradona. Muchos consideran a Messi y Ronaldo los mejores de la era moderna.",
        "cuántos jugadores": "Un equipo de fútbol estándar consta de 11 jugadores en el campo por cada equipo, incluyendo un portero y 10 jugadores de campo.",
        "mundial": "La Copa Mundial de la FIFA es el torneo de fútbol más prestigioso del mundo, celebrado cada cuatro años. El Mundial más reciente se celebró en Qatar en 2022, donde Argentina se coronó campeona.",
        "fuera de juego": "La regla del fuera de juego establece que un jugador atacante está en posición de fuera de juego si está más cerca de la línea de gol contraria que el balón y el penúltimo adversario cuando se le pasa el balón.",
        "champions league": "La UEFA Champions League es la competición de clubes más prestigiosa del fútbol europeo, donde participan los mejores equipos de las ligas europeas compitiendo por el título anualmente.",
        "duración partido": "Un partido de fútbol estándar consta de dos tiempos de 45 minutos, con un descanso de 15 minutos entre ellos. El árbitro puede añadir tiempo adicional (tiempo de descuento).",
        "tarjeta amarilla": "La tarjeta amarilla es mostrada por el árbitro para indicar que un jugador ha sido amonestado oficialmente. Un jugador que recibe dos tarjetas amarillas en el mismo partido recibe una roja y es expulsado.",
        "penalti": "Un penalti se concede cuando un jugador comete una falta dentro de su propia área. Se lanza desde el punto de penalti, con solo el lanzador y el portero involucrados.",
        "var": "El VAR (Árbitro Asistente de Video) es una tecnología utilizada en el fútbol para ayudar a los árbitros a tomar decisiones revisando el video de las jugadas. Se usa para goles, penaltis, tarjetas rojas directas y errores de identidad."
    },
    "Redes Sociales": {
        "qué son redes sociales": "Las redes sociales son plataformas digitales interactivas que facilitan la creación y el intercambio de información, ideas, intereses y otras formas de expresión a través de comunidades y redes virtuales.",
        "plataformas populares": "Las redes sociales más populares globalmente incluyen Facebook, YouTube, WhatsApp, Instagram, TikTok y Twitter (ahora X). Cada una tiene miles de millones o cientos de millones de usuarios.",
        "adicción redes sociales": "La adicción a las redes sociales se refiere al uso excesivo y compulsivo de las plataformas que interfiere con la vida diaria. Los signos incluyen revisar constantemente las plataformas, sentir ansiedad cuando no se puede acceder a ellas y descuidar responsabilidades.",
        "creación contenido": "La creación de contenido para redes sociales implica producir y compartir diversos tipos de medios como texto, imágenes, videos y contenido interactivo adaptado a plataformas y audiencias específicas.",
        "algoritmo": "Los algoritmos de redes sociales son conjuntos de reglas que determinan qué contenido ven los usuarios en sus feeds. Analizan el comportamiento, preferencias y engagement del usuario para personalizar la entrega de contenido.",
        "marketing influencers": "El marketing de influencers es una forma de marketing en redes sociales que involucra respaldos y colocación de productos por personas que tienen un supuesto nivel de conocimiento o influencia social en su campo.",
        "privacidad": "Las preocupaciones de privacidad en redes sociales incluyen recopilación y compartición de datos, reconocimiento facial, seguimiento de ubicación, publicidad dirigida y posibles violaciones de datos que pueden exponer información personal.",
        "métricas engagement": "Las métricas clave de engagement en redes sociales incluyen me gusta, comentarios, compartidos, tasas de clics, alcance, impresiones, crecimiento de seguidores y tasas de conversión que ayudan a medir el rendimiento del contenido.",
        "gestión redes": "La gestión de redes sociales implica planificar, crear, programar, analizar e interactuar con contenido en plataformas sociales para construir audiencia y reconocimiento de marca.",
        "mejores prácticas": "Las mejores prácticas en redes sociales incluyen conocer a tu audiencia, ser consistente, usar visuales de alta calidad, interactuar con seguidores, aprovechar tendencias, monitorear análisis y mantener la autenticidad."
    },
    "Álgebra": {
        "qué es álgebra": "El álgebra es una rama de las matemáticas que usa símbolos y letras para representar números y cantidades en fórmulas y ecuaciones. Ayuda a resolver problemas encontrando valores desconocidos.",
        "ecuaciones lineales": "Una ecuación lineal es una ecuación donde cada término es una constante o el producto de una constante y una variable elevada a la primera potencia. La forma estándar es ax + b = c, donde a, b y c son constantes.",
        "fórmula cuadrática": "La fórmula cuadrática se usa para resolver ecuaciones cuadráticas de la forma ax² + bx + c = 0. La fórmula es x = (-b ± √(b² - 4ac)) / 2a, donde el ± indica que hay dos soluciones.",
        "factorización": "Factorizar en álgebra significa descomponer una expresión en un producto de expresiones más simples. Por ejemplo, x² - 4 se puede factorizar como (x - 2)(x + 2).",
        "polinomios": "Los polinomios son expresiones que consisten en variables y coeficientes usando solo suma, resta, multiplicación y exponentes enteros no negativos. Ejemplos incluyen x² + 2x + 1 o 3y³ - 5y + 2.",
        "sistemas ecuaciones": "Los sistemas de ecuaciones se pueden resolver usando métodos como sustitución, eliminación o matrices. Una solución a un sistema es un conjunto de valores que satisface todas las ecuaciones simultáneamente.",
        "funciones": "Una función es una relación entre entradas y salidas donde cada entrada está relacionada con exactamente una salida. A menudo se escriben como f(x) = expresión, donde x es la variable de entrada.",
        "logaritmos": "Los logaritmos son las operaciones inversas de la exponenciación. Si a^x = b, entonces log_a(b) = x. Son útiles para resolver ecuaciones donde la variable está en el exponente.",
        "desigualdades": "Las desigualdades algebraicas usan símbolos como <, >, ≤, o ≥ en lugar de signos de igual. Al resolver desigualdades, recuerda que multiplicar o dividir ambos lados por un número negativo invierte el signo de la desigualdad.",
        "matrices": "Las matrices son arreglos rectangulares de números organizados en filas y columnas. Se usan para representar y resolver sistemas de ecuaciones lineales, transformaciones y otras estructuras matemáticas."
    },
    "Maquillaje": {
        "básicos maquillaje": "Los básicos del maquillaje incluyen base, corrector, polvo, rubor, sombra de ojos, delineador, máscara de pestañas y labial. Comienza con una buena rutina de cuidado de la piel antes de aplicar maquillaje para mejores resultados.",
        "consejos base": "Para la base, encuentra tu tono correcto probando en la mandíbula. Aplica con brocha, esponja o dedos, comenzando desde el centro de la cara y difuminando hacia afuera. Fija con polvo para mayor duración.",
        "maquillaje ojos": "El maquillaje de ojos típicamente incluye sombra, delineador y máscara. Para principiantes, comienza con sombras neutras, aplica un tono más claro en el párpado y uno más oscuro en el pliegue para dar dimensión.",
        "aplicación labial": "Para una aplicación perfecta de labial, comienza exfoliando e hidratando los labios. Usa un delineador para contornear, luego rellena con labial usando un pincel para precisión o directamente del tubo.",
        "contorno": "El contorneado crea dimensión usando tonos más oscuros para retroceder áreas y tonos más claros para resaltar. Aplica contorno debajo de los pómulos, a lo largo de la mandíbula y lados de la nariz, luego difumina bien.",
        "brochas maquillaje": "Las brochas esenciales incluyen brocha para base, polvo, rubor, sombras (difuminar, párpado, pliegue) y labios. Las brochas de calidad hacen que la aplicación sea más fácil y precisa.",
        "principiantes": "Los principiantes deben comenzar con hidratante con color o base ligera, máscara de pestañas, bálsamo labial con color y sombra neutra. Enfócate en realzar tus rasgos sutilmente mientras desarrollas tus habilidades.",
        "desmaquillado": "Para remover el maquillaje correctamente, usa un desmaquillante adecuado para tu tipo de piel. Los desmaquillantes a base de aceite funcionan bien para maquillaje a prueba de agua. Siempre sigue con un limpiador suave e hidratante.",
        "tendencias": "Las tendencias actuales de maquillaje incluyen estética clean girl (piel minimal y luminosa), delineado gráfico, rubor intenso, cejas laminadas y labios brillantes. Las tendencias cambian por temporada, sigue a influencers de belleza para actualizaciones.",
        "maquillaje duradero": "Para un maquillaje duradero, usa primer antes de la base, fija con polvo, usa spray fijador, opta por fórmulas a prueba de agua y lleva papeles matificantes y un polvo compacto pequeño para retoques durante el día."
    },
    "Alimentación": {
        "dieta balanceada": "Una dieta balanceada incluye una variedad de alimentos de todos los grupos: frutas, verduras, granos integrales, proteínas magras y grasas saludables. Busca comidas coloridas con diferentes nutrientes para apoyar la salud general.",
        "macronutrientes": "Los tres macronutrientes principales son carbohidratos (fuente primaria de energía), proteínas (esenciales para construir y reparar tejidos) y grasas (importantes para la producción de hormonas y absorción de nutrientes).",
        "micronutrientes": "Los micronutrientes son vitaminas y minerales necesarios en cantidades pequeñas pero esenciales para la salud. Incluyen vitamina C, vitamina D, hierro, calcio y zinc, que apoyan varias funciones corporales.",
        "hidratación": "La hidratación adecuada es crucial para la salud. La recomendación general es aproximadamente 8 vasos (2 litros) de agua al día, pero las necesidades varían según el nivel de actividad, clima y factores individuales.",
        "control porciones": "El control de porciones implica ser consciente de cuánto comes. Usa referencias visuales (una porción de proteína debe ser del tamaño de tu palma), mide los alimentos ocasionalmente y escucha las señales de hambre de tu cuerpo.",
        "planificación comidas": "La planificación efectiva de comidas incluye hacer un menú semanal, crear una lista de compras, preparar ingredientes con anticipación y cocinar en lotes. Ahorra tiempo, reduce el desperdicio y ayuda a mantener una dieta balanceada.",
        "etiquetas": "Al leer etiquetas nutricionales, observa el tamaño de las porciones, calorías, macronutrientes, contenido de fibra, azúcares añadidos y la lista de ingredientes. Cuantos menos ingredientes procesados, mejor.",
        "superalimentos": "Los llamados 'superalimentos' son alimentos particularmente nutritivos y beneficiosos para la salud. Ejemplos incluyen bayas, verduras de hoja verde, nueces, semillas, pescado graso y alimentos fermentados. Incluye variedad en tu dieta.",
        "restricciones": "Las restricciones dietéticas comunes incluyen vegetariana, vegana, sin gluten, sin lácteos y keto. Cada una requiere consideraciones específicas de nutrientes para asegurar una nutrición balanceada a pesar de los grupos de alimentos restringidos.",
        "mitos nutrición": "Los mitos comunes de nutrición incluyen 'los carbohidratos son malos', 'sin grasa es más saludable' y 'las desintoxicaciones son necesarias'. La verdad es que la nutrición balanceada es individualizada y la moderación es clave para la mayoría."
    },
    "Gimnasio": {
        "rutina principiante": "Una buena rutina para principiantes incluye ejercicios compuestos como sentadillas, flexiones, remos y estocadas. Comienza con 2-3 sesiones por semana, enfocándote en la forma correcta antes de aumentar pesos o intensidad.",
        "división rutina": "Una división de rutina se refiere a cómo divides tu entrenamiento durante la semana. Las divisiones comunes incluyen cuerpo completo, superior/inferior, empuje/tirón/piernas y división por partes del cuerpo. Elige según tu horario y objetivos.",
        "entrenamiento fuerza": "El entrenamiento de fuerza involucra ejercicios que aumentan la fuerza y resistencia muscular. Usa sobrecarga progresiva (aumentando gradualmente peso, repeticiones o series) para continuar progresando con el tiempo.",
        "ejercicio cardio": "Los ejercicios cardiovasculares elevan tu ritmo cardíaco e incluyen actividades como correr, ciclismo, natación y HIIT. Busca 150 minutos de intensidad moderada o 75 minutos de alta intensidad semanalmente.",
        "forma correcta": "La forma correcta en los ejercicios es crucial para la efectividad y seguridad. Comienza con pesos ligeros para dominar la técnica, considera trabajar con un entrenador inicialmente y usa espejos o grábate para verificar la forma.",
        "recuperación muscular": "La recuperación muscular es esencial para el crecimiento y prevención de lesiones. Las estrategias incluyen nutrición adecuada, sueño suficiente (7-9 horas), recuperación activa, estiramientos, foam rolling y alternar grupos musculares trabajados.",
        "equipamiento": "El equipamiento esencial incluye mancuernas, barras, pesas rusas, bandas de resistencia, banco, rack de sentadillas y máquinas de cardio. Comienza con lo básico y añade equipo especializado conforme avances.",
        "nutrición músculos": "Para ganar músculo, consume proteína adecuada (0.7-1g por libra de peso corporal), come en un ligero superávit calórico, programa la ingesta de proteína alrededor de los entrenamientos y mantente hidratado. Los alimentos integrales deben ser la base.",
        "mesetas": "Cuando alcanzas una meseta, prueba cambiar tu rutina, aumentar la intensidad, ajustar el volumen, incorporar nuevos ejercicios, asegurar recuperación adecuada o reevaluar tu nutrición para continuar progresando.",
        "objetivos fitness": "Los objetivos efectivos de fitness siguen el criterio SMART: Específicos, Medibles, Alcanzables, Relevantes y con Tiempo definido. Rastrea el progreso regularmente y ajusta según sea necesario para mantener la motivación y ver resultados."
    }
};

// Utilidades
function normalizeInput(input) {
    return input.toLowerCase().replace(/[^\w\s]/g, '').trim();
}

function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function getResponse(topic, userInput) {
    const normalizedInput = normalizeInput(userInput);
    const topicResponses = topicData[topic];
    
    // Buscar coincidencia exacta
    for (const [question, answer] of Object.entries(topicResponses)) {
        if (normalizedInput.includes(normalizeInput(question))) {
            return answer;
        }
    }
    
    // Buscar por palabras clave
    for (const [question, answer] of Object.entries(topicResponses)) {
        const keywords = question.split(' ').filter(word => word.length > 3);
        for (const keyword of keywords) {
            if (normalizedInput.includes(normalizeInput(keyword))) {
                return answer;
            }
        }
    }
    
    return `No estoy seguro sobre eso en el contexto de ${topic}. ¿Puedes intentar preguntar algo más sobre ${topic}?`;
}

// Funciones de navegación
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(`${screenName}-screen`).classList.add('active');
    appState.currentScreen = screenName;
}

// Inicialización de avatares
function initializeAvatars() {
    const avatarGrid = document.getElementById('avatar-grid');
    const avatarOptions = [];
    
    // Generar 6 avatares aleatorios
    for (let i = 0; i < 6; i++) {
        avatarOptions.push(Math.floor(Math.random() * 70) + 1);
    }
    
    avatarOptions.forEach((avatarIndex, index) => {
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'avatar-option';
        if (index === 0) avatarDiv.classList.add('selected');
        
        const img = document.createElement('img');
        img.src = `https://i.pravatar.cc/150?img=${avatarIndex}`;
        img.alt = `Avatar ${avatarIndex}`;
        
        avatarDiv.appendChild(img);
        avatarDiv.addEventListener('click', () => {
            document.querySelectorAll('.avatar-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            avatarDiv.classList.add('selected');
            appState.avatarIndex = avatarIndex;
        });
        
        avatarGrid.appendChild(avatarDiv);
    });
    
    appState.avatarIndex = avatarOptions[0];
}

// Manejo del formulario de perfil
function handleProfileForm() {
    const form = document.getElementById('profile-form');
    const nameInput = document.getElementById('user-name');
    const errorDiv = document.getElementById('name-error');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = nameInput.value.trim();
        
        if (name.length < 2) {
            errorDiv.textContent = 'Por favor, ingresa un nombre con al menos 2 caracteres';
            return;
        }
        
        appState.userName = name;
        errorDiv.textContent = '';
        showScreen('topic');
    });
    
    nameInput.addEventListener('input', () => {
        errorDiv.textContent = '';
    });
}

// Manejo de selección de temas
function handleTopicSelection() {
    const topicCards = document.querySelectorAll('.topic-card');
    
    topicCards.forEach(card => {
        card.addEventListener('click', () => {
            const topic = card.getAttribute('data-topic');
            appState.selectedTopic = topic;
            initializeChat();
            showScreen('chat');
        });
    });
}

// Inicializar chat
function initializeChat() {
    const userDisplayName = document.getElementById('user-display-name');
    const currentTopic = document.getElementById('current-topic');
    const userAvatar = document.getElementById('user-avatar');
    
    userDisplayName.textContent = appState.userName;
    currentTopic.textContent = `Chateando sobre ${appState.selectedTopic}`;
    
    const avatarImg = document.createElement('img');
    avatarImg.src = `https://i.pravatar.cc/150?img=${appState.avatarIndex}`;
    avatarImg.alt = appState.userName;
    userAvatar.innerHTML = '';
    userAvatar.appendChild(avatarImg);
    
    // Limpiar mensajes anteriores
    appState.messages = [];
    renderMessages();
    
    // Mensaje inicial del bot
    setTimeout(() => {
        addMessage('bot', `¡Hola ${appState.userName}! Soy tu asistente de ${appState.selectedTopic}. ¿Qué te gustaría saber sobre ${appState.selectedTopic.toLowerCase()}?`);
    }, 1000);
}

// Agregar mensaje
function addMessage(sender, text) {
    const message = {
        id: Date.now(),
        sender: sender,
        text: text,
        timestamp: new Date()
    };
    
    appState.messages.push(message);
    renderMessages();
}

// Renderizar mensajes
function renderMessages() {
    const container = document.getElementById('messages-container');
    container.innerHTML = '';
    
    appState.messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.sender}`;
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        
        const sender = document.createElement('div');
        sender.className = 'message-sender';
        sender.textContent = message.sender === 'user' ? appState.userName : 'ChatBot';
        
        const text = document.createElement('div');
        text.className = 'message-text';
        text.textContent = message.text;
        
        const time = document.createElement('div');
        time.className = 'message-time';
        time.textContent = formatTime(message.timestamp);
        
        bubble.appendChild(sender);
        bubble.appendChild(text);
        bubble.appendChild(time);
        messageDiv.appendChild(bubble);
        
        container.appendChild(messageDiv);
    });
    
    // Mostrar indicador de escritura si está escribiendo
    if (appState.isTyping) {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot';
        typingDiv.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        container.appendChild(typingDiv);
    }
    
    // Scroll al final
    container.scrollTop = container.scrollHeight;
}

// Manejo del formulario de mensajes
function handleMessageForm() {
    const form = document.getElementById('message-form');
    const input = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const message = input.value.trim();
        if (!message) return;
        
        // Agregar mensaje del usuario
        addMessage('user', message);
        input.value = '';
        sendBtn.disabled = true;
        
        // Mostrar indicador de escritura
        appState.isTyping = true;
        renderMessages();
        
        // Simular respuesta del bot
        setTimeout(() => {
            const response = getResponse(appState.selectedTopic, message);
            appState.isTyping = false;
            addMessage('bot', response);
            sendBtn.disabled = false;
            input.focus();
        }, 1500 + Math.random() * 1000);
    });
    
    input.addEventListener('input', () => {
        sendBtn.disabled = input.value.trim() === '';
    });
}

// Manejo del botón de volver
function handleBackButton() {
    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', () => {
        showScreen('topic');
    });
}

// Inicialización de la aplicación
function initializeApp() {
    initializeAvatars();
    handleProfileForm();
    handleTopicSelection();
    handleMessageForm();
    handleBackButton();
    
    // Mostrar la primera pantalla
    showScreen('profile');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeApp);