class ChatBot {
    constructor() {
        this.userName = '';
        this.currentTopic = '';
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.gamePhase = 'name'; // name, topic-selection, questions, finished
        this.questions = [];
        
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendButton');
        this.statsContainer = document.getElementById('statsContainer');
        this.currentQuestionEl = document.getElementById('currentQuestion');
        this.currentScoreEl = document.getElementById('currentScore');
        this.currentTopicEl = document.getElementById('currentTopic');
        
        this.initializeEventListeners();
        this.loadQuestions();
        this.enableInput();
    }

    initializeEventListeners() {
        this.sendButton.addEventListener('click', () => this.handleUserInput());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserInput();
        });
    }

    enableInput() {
        this.userInput.disabled = false;
        this.sendButton.disabled = false;
        this.userInput.focus();
    }

    disableInput() {
        this.userInput.disabled = true;
        this.sendButton.disabled = true;
    }

    addMessage(content, isUser = false, hasButtons = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        if (typeof content === 'string') {
            contentDiv.innerHTML = `<p>${content}</p>`;
        } else {
            contentDiv.appendChild(content);
        }
        
        messageDiv.appendChild(contentDiv);
        this.chatMessages.appendChild(messageDiv);
        
        if (!hasButtons) {
            this.scrollToBottom();
        }
        
        return contentDiv;
    }

    scrollToBottom() {
        setTimeout(() => {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }, 100);
    }

    handleUserInput() {
        const input = this.userInput.value.trim();
        if (!input) return;

        this.addMessage(input, true);
        this.userInput.value = '';
        
        if (this.gamePhase === 'name') {
            this.handleNameInput(input);
        }
    }

    handleNameInput(name) {
        this.userName = name;
        this.gamePhase = 'topic-selection';
        
        setTimeout(() => {
            const welcomeMessage = `¡Perfecto, ${this.userName}! 🎉<br><br>
                Es un placer conocerte. Ahora selecciona el tema sobre el que te gustaría que te haga 10 preguntas:`;
            
            const messageContent = this.addMessage('', false, true);
            messageContent.innerHTML = `<p>${welcomeMessage}</p>`;
            
            this.createTopicButtons(messageContent);
            this.disableInput();
            this.scrollToBottom();
        }, 1000);
    }

    createTopicButtons(container) {
        const topics = [
            { id: 'futbol', name: 'FÚTBOL ⚽', icon: '⚽' },
            { id: 'redes', name: 'REDES SOCIALES 📱', icon: '📱' },
            { id: 'algebra', name: 'ÁLGEBRA 🔢', icon: '🔢' },
            { id: 'maquillaje', name: 'MAQUILLAJE 💄', icon: '💄' },
            { id: 'alimentacion', name: 'ALIMENTACIÓN 🍎', icon: '🍎' },
            { id: 'gym', name: 'GYM 💪', icon: '💪' }
        ];

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'topic-buttons';

        topics.forEach(topic => {
            const button = document.createElement('button');
            button.className = 'topic-btn';
            button.textContent = topic.name;
            button.addEventListener('click', () => this.selectTopic(topic.id, topic.name));
            buttonsContainer.appendChild(button);
        });

        container.appendChild(buttonsContainer);
    }

    selectTopic(topicId, topicName) {
        this.currentTopic = topicId;
        this.currentTopicEl.textContent = topicName.split(' ')[0];
        this.questions = this.getQuestionsForTopic(topicId);
        this.gamePhase = 'questions';
        
        // Deshabilitar todos los botones de tema
        document.querySelectorAll('.topic-btn').forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.5';
        });

        setTimeout(() => {
            this.addMessage(`¡Excelente elección, ${this.userName}! 🎯<br><br>
                Has seleccionado <strong>${topicName}</strong>. Ahora comenzaremos con las 10 preguntas.<br><br>
                ¡Buena suerte! 🍀`);
            
            this.statsContainer.style.display = 'block';
            this.updateStats();
            
            setTimeout(() => {
                this.askNextQuestion();
            }, 2000);
        }, 1000);
    }

    askNextQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.finishGame();
            return;
        }

        const question = this.questions[this.currentQuestionIndex];
        const questionNumber = this.currentQuestionIndex + 1;
        
        const questionText = `<strong>Pregunta ${questionNumber}/10:</strong><br><br>${question.question}`;
        
        const messageContent = this.addMessage('', false, true);
        messageContent.innerHTML = `<p>${questionText}</p>`;
        
        if (question.type === 'multiple') {
            this.createMultipleChoiceButtons(messageContent, question);
        } else {
            this.createTrueFalseButtons(messageContent, question);
        }
        
        this.updateStats();
        this.scrollToBottom();
    }

    createMultipleChoiceButtons(container, question) {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'answer-buttons';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn multiple-choice';
            button.textContent = option;
            button.addEventListener('click', () => this.handleAnswer(index, question.correct, button));
            buttonsContainer.appendChild(button);
        });

        container.appendChild(buttonsContainer);
    }

    createTrueFalseButtons(container, question) {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'answer-buttons';

        const trueBtn = document.createElement('button');
        trueBtn.className = 'answer-btn';
        trueBtn.textContent = 'Verdadero ✅';
        trueBtn.addEventListener('click', () => this.handleAnswer(true, question.correct, trueBtn));

        const falseBtn = document.createElement('button');
        falseBtn.className = 'answer-btn';
        falseBtn.textContent = 'Falso ❌';
        falseBtn.addEventListener('click', () => this.handleAnswer(false, question.correct, falseBtn));

        buttonsContainer.appendChild(trueBtn);
        buttonsContainer.appendChild(falseBtn);
        container.appendChild(buttonsContainer);
    }

    handleAnswer(userAnswer, correctAnswer, buttonElement) {
        // Deshabilitar todos los botones de respuesta
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.6';
        });

        const isCorrect = userAnswer === correctAnswer;
        
        if (isCorrect) {
            this.score++;
            buttonElement.classList.add('correct-answer');
            
            setTimeout(() => {
                this.addMessage(`¡Correcto, ${this.userName}! 🎉 ¡Excelente! 🌟`);
                this.nextQuestion();
            }, 1500);
        } else {
            buttonElement.classList.add('incorrect-answer');
            
            const question = this.questions[this.currentQuestionIndex];
            let correctAnswerText = '';
            
            if (question.type === 'multiple') {
                correctAnswerText = question.options[correctAnswer];
            } else {
                correctAnswerText = correctAnswer ? 'Verdadero' : 'Falso';
            }
            
            setTimeout(() => {
                this.addMessage(`No es correcto, ${this.userName}. 😔<br><br>
                    La respuesta correcta era: <strong>${correctAnswerText}</strong><br><br>
                    ¡No te preocupes, sigamos adelante! 💪`);
                this.nextQuestion();
            }, 1500);
        }
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.updateStats();
        
        setTimeout(() => {
            this.askNextQuestion();
        }, 2000);
    }

    updateStats() {
        this.currentQuestionEl.textContent = `${this.currentQuestionIndex}/10`;
        this.currentScoreEl.textContent = this.score;
    }

    finishGame() {
        this.gamePhase = 'finished';
        
        const percentage = (this.score / 10) * 100;
        let message = '';
        let emoji = '';
        
        if (percentage >= 90) {
            message = `¡INCREÍBLE, ${this.userName}! 🏆🎉<br><br>
                Has obtenido una puntuación excelente: <strong>${this.score}/10 (${percentage}%)</strong><br><br>
                ¡Eres un verdadero experto en este tema! 🌟✨`;
            emoji = '🏆';
        } else if (percentage >= 70) {
            message = `¡Muy bien, ${this.userName}! 👏😊<br><br>
                Tu puntuación es: <strong>${this.score}/10 (${percentage}%)</strong><br><br>
                ¡Buen trabajo! Tienes un conocimiento sólido del tema. 💪`;
            emoji = '👏';
        } else if (percentage >= 50) {
            message = `¡Buen intento, ${this.userName}! 😊📚<br><br>
                Tu puntuación es: <strong>${this.score}/10 (${percentage}%)</strong><br><br>
                Hay espacio para mejorar, pero vas por buen camino. ¡Sigue estudiando! 📖`;
            emoji = '📚';
        } else {
            message = `¡No te desanimes, ${this.userName}! 💪❤️<br><br>
                Tu puntuación es: <strong>${this.score}/10 (${percentage}%)</strong><br><br>
                Todos empezamos por algún lugar. ¡La práctica hace al maestro! 🌱`;
            emoji = '💪';
        }
        
        const finalMessage = this.addMessage('');
        finalMessage.innerHTML = `<p>${message}</p>
            <p style="margin-top: 20px; padding: 15px; background: linear-gradient(135deg, #F0F9FF, #E0F2FE); border-radius: 10px; border-left: 4px solid #0EA5E9;">
                <strong>¿Te gustó el desafío?</strong><br>
                ¡Puedes volver a intentarlo con otro tema! 🔄
            </p>`;
        
        // Añadir botón para reiniciar
        setTimeout(() => {
            const restartMessage = this.addMessage('', false, true);
            restartMessage.innerHTML = `<p>¿Quieres probar con otro tema, ${this.userName}? 🎯</p>`;
            
            const restartButton = document.createElement('button');
            restartButton.className = 'topic-btn';
            restartButton.textContent = '🔄 Comenzar Nuevo Desafío';
            restartButton.style.marginTop = '15px';
            restartButton.addEventListener('click', () => this.restart());
            
            restartMessage.appendChild(restartButton);
            this.scrollToBottom();
        }, 3000);
    }

    restart() {
        this.currentTopic = '';
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.gamePhase = 'topic-selection';
        this.questions = [];
        
        this.currentQuestionEl.textContent = '0/10';
        this.currentScoreEl.textContent = '0';
        this.currentTopicEl.textContent = '-';
        
        setTimeout(() => {
            const welcomeMessage = `¡Perfecto, ${this.userName}! 🎉<br><br>
                ¡Vamos por otro desafío! Selecciona un nuevo tema:`;
            
            const messageContent = this.addMessage('', false, true);
            messageContent.innerHTML = `<p>${welcomeMessage}</p>`;
            
            this.createTopicButtons(messageContent);
            this.scrollToBottom();
        }, 1000);
    }

    loadQuestions() {
        this.questionBank = {
            futbol: [
                {
                    question: "¿En qué año se celebró el primer Mundial de Fútbol?",
                    type: "multiple",
                    options: ["1930", "1928", "1932", "1934"],
                    correct: 0
                },
                {
                    question: "¿Cuántos jugadores hay en un equipo de fútbol en el campo?",
                    type: "multiple",
                    options: ["10", "11", "12", "9"],
                    correct: 1
                },
                {
                    question: "El fútbol se juega con las manos",
                    type: "boolean",
                    correct: false
                },
                {
                    question: "¿Quién es considerado el mejor jugador de fútbol de todos los tiempos por muchos expertos?",
                    type: "multiple",
                    options: ["Pelé", "Maradona", "Messi", "Ronaldo"],
                    correct: 0
                },
                {
                    question: "¿Cuál es la duración oficial de un partido de fútbol?",
                    type: "multiple",
                    options: ["80 minutos", "90 minutos", "100 minutos", "85 minutos"],
                    correct: 1
                },
                {
                    question: "La tarjeta roja significa expulsión del jugador",
                    type: "boolean",
                    correct: true
                },
                {
                    question: "¿En qué país se originó el fútbol moderno?",
                    type: "multiple",
                    options: ["Brasil", "Argentina", "Inglaterra", "España"],
                    correct: 2
                },
                {
                    question: "¿Cuántos mundiales ha ganado Brasil?",
                    type: "multiple",
                    options: ["3", "4", "5", "6"],
                    correct: 2
                },
                {
                    question: "El offside (fuera de juego) se puede dar en cualquier parte del campo",
                    type: "boolean",
                    correct: false
                },
                {
                    question: "¿Cómo se llama el torneo de clubes más prestigioso de Europa?",
                    type: "multiple",
                    options: ["Liga Europa", "Champions League", "Copa del Rey", "Premier League"],
                    correct: 1
                }
            ],
            redes: [
                {
                    question: "¿En qué año fue fundado Facebook?",
                    type: "multiple",
                    options: ["2003", "2004", "2005", "2006"],
                    correct: 1
                },
                {
                    question: "¿Cuál es el límite de caracteres original de Twitter?",
                    type: "multiple",
                    options: ["120", "140", "160", "180"],
                    correct: 1
                },
                {
                    question: "Instagram fue comprado por Facebook",
                    type: "boolean",
                    correct: true
                },
                {
                    question: "¿Qué red social es conocida por sus videos cortos y música?",
                    type: "multiple",
                    options: ["Snapchat", "TikTok", "Vine", "Instagram"],
                    correct: 1
                },
                {
                    question: "¿Cuál es la red social profesional más popular?",
                    type: "multiple",
                    options: ["Facebook", "Twitter", "LinkedIn", "Instagram"],
                    correct: 2
                },
                {
                    question: "YouTube fue fundado antes que Facebook",
                    type: "boolean",
                    correct: false
                },
                {
                    question: "¿Qué significa 'DM' en redes sociales?",
                    type: "multiple",
                    options: ["Direct Message", "Daily Message", "Digital Media", "Data Management"],
                    correct: 0
                },
                {
                    question: "¿Cuál fue la primera red social en alcanzar 1 billón de usuarios?",
                    type: "multiple",
                    options: ["Twitter", "Instagram", "Facebook", "YouTube"],
                    correct: 2
                },
                {
                    question: "Los hashtags (#) fueron creados originalmente para Twitter",
                    type: "boolean",
                    correct: true
                },
                {
                    question: "¿Qué red social es famosa por sus 'Stories' que desaparecen en 24 horas?",
                    type: "multiple",
                    options: ["Facebook", "Snapchat", "Twitter", "LinkedIn"],
                    correct: 1
                }
            ],
            algebra: [
                {
                    question: "¿Cuál es el resultado de 2x + 3 cuando x = 5?",
                    type: "multiple",
                    options: ["10", "13", "11", "15"],
                    correct: 1
                },
                {
                    question: "¿Qué valor de x satisface la ecuación 3x - 6 = 9?",
                    type: "multiple",
                    options: ["3", "4", "5", "6"],
                    correct: 2
                },
                {
                    question: "Una ecuación lineal siempre tiene una solución única",
                    type: "boolean",
                    correct: false
                },
                {
                    question: "¿Cuál es la forma estándar de una ecuación cuadrática?",
                    type: "multiple",
                    options: ["y = mx + b", "ax² + bx + c = 0", "x² + y² = r²", "y = ab^x"],
                    correct: 1
                },
                {
                    question: "¿Cuál es el resultado de (x + 3)(x - 2)?",
                    type: "multiple",
                    options: ["x² + x - 6", "x² - x - 6", "x² + 5x - 6", "x² - 5x + 6"],
                    correct: 0
                },
                {
                    question: "El exponente en x³ es 3",
                    type: "boolean",
                    correct: true
                },
                {
                    question: "¿Cuál es la inversa de la función f(x) = 2x + 1?",
                    type: "multiple",
                    options: ["f⁻¹(x) = (x-1)/2", "f⁻¹(x) = (x+1)/2", "f⁻¹(x) = 2x-1", "f⁻¹(x) = x/2-1"],
                    correct: 0
                },
                {
                    question: "¿Cuántas soluciones tiene la ecuación x² = 16?",
                    type: "multiple",
                    options: ["1", "2", "3", "0"],
                    correct: 1
                },
                {
                    question: "La pendiente de una línea horizontal es 0",
                    type: "boolean",
                    correct: true
                },
                {
                    question: "¿Cuál es el discriminante de la ecuación x² - 4x + 4 = 0?",
                    type: "multiple",
                    options: ["-4", "0", "4", "16"],
                    correct: 1
                }
            ],
            maquillaje: [
                {
                    question: "¿Cuál es el primer paso básico en una rutina de maquillaje?",
                    type: "multiple",
                    options: ["Máscara", "Base", "Primer", "Rubor"],
                    correct: 2
                },
                {
                    question: "¿Qué herramienta se usa para difuminar sombras de ojos?",
                    type: "multiple",
                    options: ["Pincel plano", "Pincel difuminador", "Esponja", "Delineador"],
                    correct: 1
                },
                {
                    question: "El contorno se aplica en las zonas que queremos destacar",
                    type: "boolean",
                    correct: false
                },
                {
                    question: "¿Qué producto se usa para fijar el maquillaje?",
                    type: "multiple",
                    options: ["Primer", "Setting spray", "Bronceador", "Iluminador"],
                    correct: 1
                },
                {
                    question: "¿Cuál es la función principal del corrector?",
                    type: "multiple",
                    options: ["Dar color", "Cubrir imperfecciones", "Iluminar", "Contornear"],
                    correct: 1
                },
                {
                    question: "La base debe ser un tono más oscuro que tu piel natural",
                    type: "boolean",
                    correct: false
                },
                {
                    question: "¿Qué colores son complementarios en la rueda cromática?",
                    type: "multiple",
                    options: ["Azul y verde", "Rojo y verde", "Amarillo y naranja", "Violeta y rosa"],
                    correct: 1
                },
                {
                    question: "¿Cuál es el propósito del primer para ojos?",
                    type: "multiple",
                    options: ["Dar color", "Hacer que las sombras duren más", "Delinear", "Iluminar"],
                    correct: 1
                },
                {
                    question: "El iluminador se aplica en las zonas más altas del rostro",
                    type: "boolean",
                    correct: true
                },
                {
                    question: "¿Qué técnica se usa para crear un efecto de ojos ahumados?",
                    type: "multiple",
                    options: ["Difuminado", "Delineado", "Recorte", "Sellado"],
                    correct: 0
                }
            ],
            alimentacion: [
                {
                    question: "¿Cuántos grupos alimentarios principales existen?",
                    type: "multiple",
                    options: ["4", "5", "6", "7"],
                    correct: 1
                },
                {
                    question: "¿Cuál es la porción diaria recomendada de frutas y verduras?",
                    type: "multiple",
                    options: ["3 porciones", "5 porciones", "7 porciones", "10 porciones"],
                    correct: 1
                },
                {
                    question: "Los carbohidratos son la principal fuente de energía del cuerpo",
                    type: "boolean",
                    correct: true
                },
                {
                    question: "¿Cuál de estos alimentos es rico en proteínas?",
                    type: "multiple",
                    options: ["Pan", "Pollo", "Manzana", "Arroz"],
                    correct: 1
                },
                {
                    question: "¿Cuántos litros de agua se recomienda beber al día?",
                    type: "multiple",
                    options: ["1-1.5 litros", "2-2.5 litros", "3-4 litros", "5 litros"],
                    correct: 1
                },
                {
                    question: "Las grasas trans son beneficiosas para la salud",
                    type: "boolean",
                    correct: false
                },
                {
                    question: "¿Qué vitamina se obtiene principalmente del sol?",
                    type: "multiple",
                    options: ["Vitamina A", "Vitamina B", "Vitamina C", "Vitamina D"],
                    correct: 3
                },
                {
                    question: "¿Cuál es el mineral más importante para los huesos?",
                    type: "multiple",
                    options: ["Hierro", "Calcio", "Zinc", "Magnesio"],
                    correct: 1
                },
                {
                    question: "Los alimentos procesados contienen más nutrientes que los frescos",
                    type: "boolean",
                    correct: false
                },
                {
                    question: "¿Qué nutriente proporciona más calorías por gramo?",
                    type: "multiple",
                    options: ["Carbohidratos", "Proteínas", "Grasas", "Vitaminas"],
                    correct: 2
                }
            ],
            gym: [
                {
                    question: "¿Cuántos días a la semana se recomienda entrenar para principiantes?",
                    type: "multiple",
                    options: ["2-3 días", "4-5 días", "6-7 días", "1 día"],
                    correct: 0
                },
                {
                    question: "¿Cuál es el ejercicio principal para trabajar el pecho?",
                    type: "multiple",
                    options: ["Sentadillas", "Press de banca", "Remo", "Curl de bíceps"],
                    correct: 1
                },
                {
                    question: "El cardio debe hacerse antes del entrenamiento de fuerza",
                    type: "boolean",
                    correct: false
                },
                {
                    question: "¿Cuánto tiempo se recomienda descansar entre series?",
                    type: "multiple",
                    options: ["30 segundos", "1-3 minutos", "5 minutos", "10 minutos"],
                    correct: 1
                },
                {
                    question: "¿Cuál es el ejercicio más completo para las piernas?",
                    type: "multiple",
                    options: ["Extensiones", "Curl femoral", "Sentadillas", "Pantorrillas"],
                    correct: 2
                },
                {
                    question: "Es necesario sentir dolor para que el ejercicio sea efectivo",
                    type: "boolean",
                    correct: false
                },
                {
                    question: "¿Qué significa 'ROM' en el gimnasio?",
                    type: "multiple",
                    options: ["Rango de Movimento", "Repeticiones por Minuto", "Resistencia Máxima", "Rutina de Músculos"],
                    correct: 0
                },
                {
                    question: "¿Cuántas repeticiones se recomiendan para ganar fuerza?",
                    type: "multiple",
                    options: ["1-5 reps", "6-8 reps", "12-15 reps", "20+ reps"],
                    correct: 0
                },
                {
                    question: "Los músculos crecen durante el descanso, no durante el ejercicio",
                    type: "boolean",
                    correct: true
                },
                {
                    question: "¿Cuál es el ejercicio más efectivo para el core?",
                    type: "multiple",
                    options: ["Crunches", "Plancha", "Sit-ups", "Elevación de piernas"],
                    correct: 1
                }
            ]
        };
    }

    getQuestionsForTopic(topic) {
        return this.questionBank[topic] || [];
    }
}

// Inicializar el chatbot cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new ChatBot();
});