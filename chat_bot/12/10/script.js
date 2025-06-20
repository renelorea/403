// ChatBot Application
class ChatBot {
    constructor() {
        this.currentBot = null;
        this.messages = [];
        this.isTyping = false;
        this.typingSpeed = 50;
        this.customBotName = '';
        this.theme = 'auto';
        
        // Bot personalities with extensive responses
        this.botPersonalities = {
            gym: {
                name: 'Muscle Mike',
                avatar: '💪',
                theme: 'theme-gym',
                responses: [
                    "¡Vamos! 💪 La constancia vence al talento cuando el talento no es constante.",
                    "¡Perfecto! Recuerda: el dolor de hoy es la fuerza de mañana.",
                    "¡Sigue así! Cada repetición cuenta, cada gota de sudor vale la pena.",
                    "💯 La clave está en la progresión gradual. ¿Has aumentado peso esta semana?",
                    "¡Exacto! El descanso es tan importante como el entrenamiento. ¿Duermes 8 horas?",
                    "¡Dale que puedes! Ese último set es el que marca la diferencia.",
                    "La nutrición es 70% del resultado. ¿Qué comiste hoy?",
                    "¡Brutal! Mantén esa motivación. Los resultados llegan a los consistentes.",
                    "Tip pro: Hidrátate bien antes, durante y después del entrenamiento 💧",
                    "¡Esa actitud! El músculo se construye en el gym, pero se desarrolla descansando."
                ],
                quickResponses: [
                    "Dame una rutina de pecho",
                    "¿Cómo ganar masa muscular?",
                    "Ejercicios para abdomen",
                    "¿Qué comer pre-entreno?",
                    "Rutina para principiantes"
                ]
            },
            chef: {
                name: 'Chef Marco',
                avatar: '👨‍🍳',
                theme: 'theme-chef',
                responses: [
                    "¡Excelente elección! 👨‍🍳 La cocina es el alma del hogar.",
                    "Ricetta perfetta! El secreto está en los ingredientes frescos.",
                    "¡Bravissimo! Un buen sofrito es la base de todo buen plato.",
                    "🍅 Tip de chef: Siempre prueba y ajusta los sabores al final.",
                    "¡Magnifico! Cocinar con amor se nota en cada bocado.",
                    "El mise en place es fundamental: prepara todo antes de empezar.",
                    "¡Fantastico! Las hierbas frescas transforman cualquier plato.",
                    "Consiglio importante: Respeta los tiempos de cocción de cada ingrediente.",
                    "¡Perfetto! La sal realza sabores, no los oculta. Úsala con sabiduría.",
                    "La cocina italiana enseña: simplicidad + calidad = excelencia."
                ],
                quickResponses: [
                    "Receta de pasta carbonara",
                    "¿Cómo hacer pizza casera?",
                    "Salsa de tomate perfecta",
                    "Técnicas básicas de cocina",
                    "Postres fáciles y ricos"
                ]
            },
            life: {
                name: 'Wise Sofia',
                avatar: '🧘‍♀️',
                theme: 'theme-life',
                responses: [
                    "Hermosa reflexión 🧘‍♀️ La vida es un viaje de autoconocimiento.",
                    "Muy sabio. Recuerda: no puedes controlar lo que pasa, pero sí cómo reaccionas.",
                    "✨ Exacto. La gratitud transforma lo que tenemos en suficiente.",
                    "Profundo. El crecimiento ocurre fuera de tu zona de confort.",
                    "Verdad universal: Trata a otros como quieres ser tratado.",
                    "🌱 La paciencia es la clave. Todo proceso requiere su tiempo.",
                    "Sabiduría pura: Invierte en ti mismo, es la mejor inversión.",
                    "El equilibrio es dinámico, no estático. Ajústate constantemente.",
                    "🕯️ La autocompasión no es debilidad, es fortaleza emocional.",
                    "Recuerda: Eres el autor de tu propia historia. ¡Escribe algo hermoso!"
                ],
                quickResponses: [
                    "¿Cómo manejar el estrés?",
                    "Consejos para ser feliz",
                    "¿Cómo superar miedos?",
                    "Equilibrio vida-trabajo",
                    "Autoestima y confianza"
                ]
            },
            knowledge: {
                name: 'Prof. Alex',
                avatar: '🎓',
                theme: 'theme-knowledge',
                responses: [
                    "¡Fascinante pregunta! 🎓 El conocimiento es poder, pero la sabiduría es saber usarlo.",
                    "Dato curioso: El cerebro humano tiene más conexiones que estrellas en la galaxia.",
                    "Interesante 🧠 ¿Sabías que aprendemos mejor cuando enseñamos a otros?",
                    "Excelente curiosidad. La historia nos enseña patrones que se repiten.",
                    "¡Qué buena observación! La ciencia avanza haciendo las preguntas correctas.",
                    "Dato asombroso: La miel nunca se echa a perder. ¡Los arqueólogos han encontrado miel comestible de 3000 años!",
                    "🌍 Geografía fascinante: Rusia tiene 11 zonas horarias diferentes.",
                    "Literatura universal: Leer expande nuestra empatía y comprensión del mundo.",
                    "Matemáticas hermosas: El número Pi aparece en lugares inesperados de la naturaleza.",
                    "🔬 Física increíble: La luz del Sol tarda 8 minutos en llegar a la Tierra."
                ],
                quickResponses: [
                    "Datos curiosos del mundo",
                    "Historia fascinante",
                    "Ciencia explicada fácil",
                    "Geografía mundial",
                    "Literatura clásica"
                ]
            }
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadFromStorage();
        this.showBotSelection();
    }

    setupEventListeners() {
        // Bot selection
        document.querySelectorAll('.bot-card').forEach(card => {
            card.addEventListener('click', (e) => this.selectBot(e.currentTarget.dataset.bot));
        });

        // Start chat
        document.getElementById('startChatBtn').addEventListener('click', () => this.startChat());

        // Back to menu button
        document.getElementById('backToMenuBtn').addEventListener('click', () => this.backToMenu());

        // Settings
        document.getElementById('settingsBtn').addEventListener('click', () => this.toggleSettings());
        document.getElementById('closeSettings').addEventListener('click', () => this.toggleSettings());

        // Clear chat
        document.getElementById('clearBtn').addEventListener('click', () => this.clearChat());

        // Change bot
        document.getElementById('changeBotBtn').addEventListener('click', () => this.showBotSelection());

        // Send message
        document.getElementById('sendBtn').addEventListener('click', () => this.sendMessage());
        document.getElementById('messageInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Quick actions
        document.querySelectorAll('.quick-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const message = e.currentTarget.dataset.message;
                document.getElementById('messageInput').value = message;
                this.sendMessage();
            });
        });

        // Settings inputs
        document.getElementById('customBotName').addEventListener('input', (e) => {
            this.customBotName = e.target.value;
            this.updateBotDisplay();
        });

        document.getElementById('typingSpeed').addEventListener('input', (e) => {
            this.typingSpeed = parseInt(e.target.value);
        });

        document.getElementById('themeSelect').addEventListener('change', (e) => {
            this.theme = e.target.value;
            this.applyTheme();
        });
    }

    selectBot(botId) {
        // Remove previous selection
        document.querySelectorAll('.bot-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Add selection to clicked card
        document.querySelector(`[data-bot="${botId}"]`).classList.add('selected');
        
        this.currentBot = this.botPersonalities[botId];
        
        // Add selection animation
        const selectedCard = document.querySelector(`[data-bot="${botId}"]`);
        selectedCard.style.animation = 'none';
        setTimeout(() => {
            selectedCard.style.animation = 'bounce 0.6s ease-in-out';
        }, 10);
    }

    startChat() {
        if (!this.currentBot) {
            this.showNotification('Por favor selecciona un bot primero');
            return;
        }

        document.getElementById('botSelection').style.display = 'none';
        document.getElementById('chatContainer').classList.add('active');
        
        this.updateBotDisplay();
        this.applyTheme();
        
        // Welcome message from bot
        setTimeout(() => {
            this.addBotMessage(`¡Hola! Soy ${this.currentBot.name} ${this.currentBot.avatar}. ¿En qué puedo ayudarte hoy?`);
        }, 500);
    }

    backToMenu() {
        // Confirm if there are messages
        if (this.messages.length > 0) {
            if (!confirm('¿Estás seguro de que quieres volver al menú? Se mantendrá tu conversación.')) {
                return;
            }
        }

        document.getElementById('chatContainer').classList.remove('active');
        document.getElementById('botSelection').style.display = 'flex';
        
        // Reset selection visually but keep the current bot
        document.querySelectorAll('.bot-card').forEach(card => {
            card.classList.remove('selected');
        });

        // If there's a current bot, show it as selected
        if (this.currentBot) {
            const botType = Object.keys(this.botPersonalities).find(key => 
                this.botPersonalities[key] === this.currentBot
            );
            if (botType) {
                document.querySelector(`[data-bot="${botType}"]`).classList.add('selected');
            }
        }

        this.showNotification('¡Bienvenido de vuelta al menú!');
    }

    updateBotDisplay() {
        const botName = this.customBotName || this.currentBot.name;
        document.getElementById('currentBotAvatar').textContent = this.currentBot.avatar;
        document.getElementById('currentBotName').textContent = botName;
    }

    showBotSelection() {
        document.getElementById('chatContainer').classList.remove('active');
        document.getElementById('botSelection').style.display = 'flex';
        
        // Reset selection
        document.querySelectorAll('.bot-card').forEach(card => {
            card.classList.remove('selected');
        });
    }

    sendMessage() {
        const input = document.getElementById('messageInput');
        const message = input.value.trim();
        
        if (!message) return;

        this.addUserMessage(message);
        input.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Generate bot response
        setTimeout(() => {
            this.hideTypingIndicator();
            this.addBotMessage(this.generateResponse(message));
        }, 1000 + Math.random() * 1000);
    }

    addUserMessage(text) {
        const messageDiv = this.createMessageElement(text, 'user');
        this.appendMessage(messageDiv);
        
        const messageData = {
            id: Date.now(),
            text: text,
            sender: 'user',
            timestamp: new Date(),
            bot: this.currentBot.name
        };
        
        this.messages.push(messageData);
        this.saveToStorage();
    }

    addBotMessage(text) {
        const messageDiv = this.createMessageElement(text, 'bot');
        this.appendMessage(messageDiv);
        
        const messageData = {
            id: Date.now(),
            text: text,
            sender: 'bot',
            timestamp: new Date(),
            bot: this.currentBot.name
        };
        
        this.messages.push(messageData);
        this.saveToStorage();
    }

    createMessageElement(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const avatar = sender === 'bot' ? this.currentBot.avatar : '👤';
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        messageDiv.innerHTML = `
            ${sender === 'bot' ? `<div class="message-avatar">${avatar}</div>` : ''}
            <div class="message-content">
                <div class="message-text">${text}</div>
                <div class="message-time">${time}</div>
            </div>
            ${sender === 'user' ? `<div class="message-avatar">${avatar}</div>` : ''}
        `;
        
        return messageDiv;
    }

    appendMessage(messageElement) {
        const messagesArea = document.getElementById('messagesArea');
        
        // Hide welcome message if exists
        const welcomeMessage = messagesArea.querySelector('.welcome-message');
        if (welcomeMessage) {
            welcomeMessage.style.display = 'none';
        }
        
        messagesArea.appendChild(messageElement);
        messagesArea.scrollTop = messagesArea.scrollHeight;
        
        // Add animation
        messageElement.style.opacity = '0';
        messageElement.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            messageElement.style.transition = 'all 0.3s ease-out';
            messageElement.style.opacity = '1';
            messageElement.style.transform = 'translateY(0)';
        }, 100);
    }

    generateResponse(userMessage) {
        const responses = this.currentBot.responses;
        
        // Simple keyword-based response selection
        const keywords = {
            gym: ['entreno', 'ejercicio', 'músculo', 'peso', 'rutina', 'fuerza', 'fitness'],
            chef: ['comida', 'receta', 'cocinar', 'ingrediente', 'plato', 'cocina', 'sabor'],
            life: ['vida', 'consejo', 'problema', 'feliz', 'estrés', 'amor', 'relación'],
            knowledge: ['qué', 'cómo', 'por qué', 'cuándo', 'dónde', 'historia', 'ciencia']
        };
        
        const botType = Object.keys(this.botPersonalities).find(key => 
            this.botPersonalities[key] === this.currentBot
        );
        
        // Check if message contains relevant keywords
        const relevantKeywords = keywords[botType] || [];
        const hasRelevantKeyword = relevantKeywords.some(keyword => 
            userMessage.toLowerCase().includes(keyword)
        );
        
        if (hasRelevantKeyword) {
            // Return a more contextual response
            const contextualResponses = responses.filter(response => 
                relevantKeywords.some(keyword => response.toLowerCase().includes(keyword))
            );
            
            if (contextualResponses.length > 0) {
                return contextualResponses[Math.floor(Math.random() * contextualResponses.length)];
            }
        }
        
        // Fallback to random response
        return responses[Math.floor(Math.random() * responses.length)];
    }

    showTypingIndicator() {
        document.getElementById('typingIndicator').classList.add('show');
        document.getElementById('botStatus').textContent = 'escribiendo...';
    }

    hideTypingIndicator() {
        document.getElementById('typingIndicator').classList.remove('show');
        document.getElementById('botStatus').textContent = 'En línea';
    }

    clearChat() {
        if (confirm('¿Estás seguro de que quieres limpiar el chat?')) {
            this.messages = [];
            const messagesArea = document.getElementById('messagesArea');
            messagesArea.innerHTML = `
                <div class="welcome-message">
                    <div class="welcome-avatar">👋</div>
                    <div class="welcome-text">
                        <h3>¡Chat limpiado!</h3>
                        <p>Comienza una nueva conversación</p>
                    </div>
                </div>
            `;
            this.saveToStorage();
            this.showNotification('Chat limpiado exitosamente');
        }
    }

    toggleSettings() {
        const panel = document.getElementById('settingsPanel');
        panel.classList.toggle('open');
    }

    applyTheme() {
        const body = document.body;
        body.className = body.className.replace(/theme-\w+/g, '');
        
        if (this.currentBot && this.theme === 'auto') {
            body.classList.add(this.currentBot.theme);
        }
    }

    showNotification(message) {
        // Simple notification system
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #8b5cf6, #10b981);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            backdrop-filter: blur(10px);
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    saveToStorage() {
        localStorage.setItem('chatbot-messages', JSON.stringify(this.messages));
        localStorage.setItem('chatbot-settings', JSON.stringify({
            customBotName: this.customBotName,
            typingSpeed: this.typingSpeed,
            theme: this.theme
        }));
    }

    loadFromStorage() {
        const savedMessages = localStorage.getItem('chatbot-messages');
        if (savedMessages) {
            this.messages = JSON.parse(savedMessages);
        }
        
        const savedSettings = localStorage.getItem('chatbot-settings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            this.customBotName = settings.customBotName || '';
            this.typingSpeed = settings.typingSpeed || 50;
            this.theme = settings.theme || 'auto';
            
            document.getElementById('customBotName').value = this.customBotName;
            document.getElementById('typingSpeed').value = this.typingSpeed;
            document.getElementById('themeSelect').value = this.theme;
        }
    }
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ChatBot();
});

// Add some extra interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Easter egg: Konami code
    let konamiCode = [];
    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konami.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.toString() === konami.toString()) {
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 10000);
        }
    });
    
    // Add rainbow animation
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);
});

// Export for potential external use
window.ChatBot = ChatBot;