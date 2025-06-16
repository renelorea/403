document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const personalGreeting = document.getElementById('personal-greeting');

    let studentName = localStorage.getItem('studentName'); // Try to get name from localStorage
    let chatbotPersona = {};

    // Define different chatbot personas
    const personas = {
        "ana": {
            greeting: "¡Hola, Ana! ¡Bienvenida al mundo del maquillaje! Estoy aquí para responder a tus preguntas con un toque elegante y sofisticado.",
            style: "elegante",
            responses: {
                "base": "La base de maquillaje es fundamental para unificar el tono de la piel y crear un lienzo perfecto, Ana. Siempre elige una que coincida con tu subtono de piel.",
                "correctores": "Los correctores, mi querida Ana, son tus aliados para disimular imperfecciones y ojeras. Aplícalos a toques ligeros para un acabado impecable.",
                "sombras": "Las sombras de ojos, Ana, te permiten expresar tu creatividad. Para un look sofisticado, opta por tonos neutros y difumínalos con maestría.",
                "labial": "Un labial es el toque final de todo look, Ana. Un rojo clásico o un nude elegante siempre te harán lucir radiante.",
                "rimel": "El rímel, Ana, abre tu mirada y define tus pestañas. Aplica varias capas para un efecto dramático y cautivador.",
                "cejas": "Las cejas enmarcan tu rostro, Ana. Rellénalas suavemente y péinalas para un acabado natural y pulcro.",
                "iluminador": "El iluminador, Ana, resalta tus puntos altos. Aplícalo en los pómulos, arco de cupido y puente de la nariz para un brillo sutil.",
                "contorno": "El contorno, Ana, define tus facciones y crea dimensión. Úsalo para esculpir los pómulos y la mandíbula con precisión.",
                "brochas": "Las brochas son herramientas esenciales, Ana. Asegúrate de tener brochas de buena calidad para cada paso del maquillaje y límpialas regularmente.",
                "desmaquillar": "Desmaquillarse es crucial, Ana. Siempre retira todo el maquillaje antes de dormir para mantener tu piel sana y radiante."
            }
        },
        "sofia": {
            greeting: "¡Qué onda, Sofía! ¡Lista para brillar con el maquillaje! Aquí tu amiga virtual para ayudarte con tips cool y súper fáciles.",
            style: "amigable y casual",
            responses: {
                "base": "La base es para que tu piel se vea parejita, Sofía. Busca una que sea de tu tono para que se vea natural, ¿va?",
                "correctores": "Los correctores son para esconder granitos y ojeras, Sofía. Ponlos a toquecitos y difumina bien para que no se note.",
                "sombras": "¡Las sombras son para jugar con los ojos, Sofía! Usa los colores que te gusten y mézclalos para que se vea pro.",
                "labial": "El labial es el toque final, Sofía. ¡Elige el que te dé más buena vibra! Un rojo o un tono más tranqui, lo que prefieras.",
                "rimel": "El rímel hace que tus pestañas se vean más largas y bonitas, Sofía. Ponte varias capas para que se vean impactantes.",
                "cejas": "Las cejas son el marco de tu cara, Sofía. Péinalas y rellénalas poquito para que se vean bien definidas pero naturales.",
                "iluminador": "El iluminador es para que brillen tus puntos altos, Sofía. Ponte un poco en los pómulos y la nariz para un glow increíble.",
                "contorno": "El contorno es para darle forma a tu cara, Sofía. Úsalo para resaltar tus pómulos y la mandíbula de forma sutil.",
                "brochas": "Las brochas son súper importantes, Sofía. Ten unas buenas y lávalas seguido para que tu maquillaje quede perfecto.",
                "desmaquillar": "¡Siempre quítate el maquillaje antes de dormir, Sofía! Tu piel te lo va a agradecer muchísimo."
            }
        },
        "default": {
            greeting: "¡Hola! Soy tu asistente de maquillaje. Estoy aquí para resolver tus dudas y ayudarte a lucir espectacular.",
            style: "profesional y útil",
            responses: {
                "base": "La base de maquillaje es crucial para unificar el tono de la piel y proporcionar una cobertura uniforme. Es importante seleccionar el tono correcto para su tipo de piel.",
                "correctores": "Los correctores se utilizan para neutralizar imperfecciones, ojeras y rojeces. Aplíquelos con precisión y difumine suavemente.",
                "sombras": "Las sombras de ojos permiten crear profundidad y dimensión. Experimente con diferentes tonos y técnicas de difuminado para diversos looks.",
                "labial": "El labial es un elemento clave para completar cualquier look. Hay una amplia gama de colores y acabados para elegir, adaptándose a cada ocasión.",
                "rimel": "El rímel realza las pestañas, aportando volumen, longitud y curvatura. Esencial para abrir la mirada.",
                "cejas": "Las cejas enmarcan el rostro y son fundamentales para la expresión. Defínalas y rellénelas con productos adecuados para un acabado natural y pulcro.",
                "iluminador": "El iluminador se aplica en puntos estratégicos del rostro para atraer la luz y proporcionar un brillo saludable. Es ideal para pómulos, arco de cupido y puente de la nariz.",
                "contorno": "El contorno se utiliza para esculpir el rostro, creando sombras que definen los pómulos, la mandíbula y la nariz. Se aplica con tonos más oscuros que el de su piel.",
                "brochas": "Las brochas son herramientas esenciales para una aplicación precisa y uniforme del maquillaje. Es importante mantenerlas limpias para evitar la acumulación de bacterias.",
                "desmaquillar": "El desmaquillado es un paso vital en la rutina de cuidado de la piel para remover residuos de maquillaje, impurezas y permitir que la piel respire."
            }
        }
    };

    // Function to set student name and persona
    function setStudentInfo() {
        if (!studentName) {
            studentName = prompt("¡Hola! ¿Cuál es tu nombre?").toLowerCase();
            if (studentName) {
                localStorage.setItem('studentName', studentName);
            } else {
                studentName = "invitado"; // Default if no name is entered
            }
        }

        if (personas[studentName]) {
            chatbotPersona = personas[studentName];
        } else {
            chatbotPersona = personas["default"];
        }
        personalGreeting.textContent = chatbotPersona.greeting;
        addBotMessage(chatbotPersona.greeting);
    }

    // Function to add messages to the chat window
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        const messageBubble = document.createElement('div');
        messageBubble.classList.add('message-bubble');
        messageBubble.textContent = text;
        messageDiv.appendChild(messageBubble);
        chatWindow.appendChild(messageDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
    }

    function addUserMessage(text) {
        addMessage(text, 'user');
    }

    function addBotMessage(text) {
        addMessage(text, 'bot');
    }

    // Function to get bot response based on user input
    function getBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normalize for accents

        // Check for keywords
        if (userMessage.includes("base") || userMessage.includes("foundation")) {
            return chatbotPersona.responses.base;
        } else if (userMessage.includes("corrector") || userMessage.includes("concealer")) {
            return chatbotPersona.responses.correctores;
        } else if (userMessage.includes("sombra") || userMessage.includes("sombras")) {
            return chatbotPersona.responses.sombras;
        } else if (userMessage.includes("labial") || userMessage.includes("lipstick")) {
            return chatbotPersona.responses.labial;
        } else if (userMessage.includes("rimel") || userMessage.includes("mascara")) {
            return chatbotPersona.responses.rimel;
        } else if (userMessage.includes("ceja") || userMessage.includes("cejas")) {
            return chatbotPersona.responses.cejas;
        } else if (userMessage.includes("iluminador") || userMessage.includes("highlighter")) {
            return chatbotPersona.responses.iluminador;
        } else if (userMessage.includes("contorno") || userMessage.includes("contour")) {
            return chatbotPersona.responses.contorno;
        } else if (userMessage.includes("brocha") || userMessage.includes("brochas")) {
            return chatbotPersona.responses.brochas;
        } else if (userMessage.includes("desmaquillar") || userMessage.includes("desmaquillante")) {
            return chatbotPersona.responses.desmaquillar;
        } else if (userMessage.includes("hola") || userMessage.includes("hi")) {
             return `¡Hola de nuevo, ${studentName}! ¿Qué más te gustaría saber sobre maquillaje?`;
        }
        else {
            return "Lo siento, solo puedo responder preguntas sobre los siguientes temas de maquillaje: base, correctores, sombras, labial, rímel, cejas, iluminador, contorno, brochas, y desmaquillar. ¿Puedes reformular tu pregunta?";
        }
    }

    // Event listener for send button
    sendButton.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            addUserMessage(message);
            userInput.value = '';
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addBotMessage(botResponse);
            }, 500); // Simulate typing delay
        }
    });

    // Event listener for Enter key
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    // Initialize the chat
    setStudentInfo();
});