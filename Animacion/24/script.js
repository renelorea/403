document.addEventListener('DOMContentLoaded', () => {
    const mathQuestions = [
        { question: "¿Cuánto es 476 + 500 / 33?", answer: "30" },
        { question: "¿Si un tren viaja a 70 km/h y recorre 300 km, ¿cuánto tiempo le tomó?", answer: "4 horas y 17 minutos" },
        { question: "¿Cuántos lados tiene un hexágono?", answer: "6" },
        { question: "¿Cuál es el resultado de 7 multiplicado por 9?", answer: "63" },
        { question: "¿Si tienes 25 manzanas y te comes la mitad, ¿cuántas te quedan?", answer: "12.5" },
        { question: "¿Cuál es el valor de Pi (aproximado a dos decimales)?", answer: "3.14" },
        { question: "¿Cuánto es 120 dividido por 4?", answer: "30" },
        { question: "¿Qué número sigue en la secuencia: 1, 4, 9, 16, ...?", answer: "25" },
        { question: "¿Si un reloj marca las 3:00, ¿cuántos grados hay entre la manecilla de las horas y los minutos?", answer: "90" },
        { question: "¿Cuál es el área de un cuadrado con lado de 5 cm?", answer: "25 cm cuadrados" }
    ];

    const historyQuestions = [
        { question: "¿Qué civilización construyó las pirámides de Giza?", answer: "egipcios" },
        { question: "¿Quién fue el primer emperador romano?", answer: "augusto" },
        { question: "¿En qué año ocurrió la caída del Imperio Romano de Occidente?", answer: "476" },
        { question: "¿Qué río fue crucial para el desarrollo de la civilización mesopotámica?", answer: "éurates y tigris" },
        { question: "¿Quién fue el legendario rey de Esparta que lideró a los 300 en la Batalla de las Termópilas?", answer: "leónidas" },
        { question: "¿Qué gran imperio fue fundado por Ciro el Grande?", answer: "persa" },
        { question: "¿Qué ciudad fue el centro del Imperio Bizantino?", answer: "constantinopla" },
        { question: "¿Qué emperador romano legalizó el cristianismo?", answer: "constantino" },
        { question: "¿Cuál fue el nombre de la famosa biblioteca de la Antigüedad, ubicada en Egipto?", answer: "alejandría" },
        { question: "¿Qué filósofo griego fue maestro de Alejandro Magno?", answer: "aristóteles" }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 30;
    let askedQuestions = [];
    const questionsPerCategory = 5; // Queremos 5 de cada tipo para un total de 10

    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const endScreen = document.getElementById('end-screen');
    const startButton = document.getElementById('start-game-button');
    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answer-input');
    const submitButton = document.getElementById('submit-answer');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');
    const feedbackElement = document.getElementById('feedback');
    const finalScoreElement = document.getElementById('final-score');
    const resultMessageElement = document.getElementById('result-message');
    const restartButton = document.getElementById('restart-game-button');

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function selectRandomQuestions() {
        // Shuffle both arrays
        shuffleArray(mathQuestions);
        shuffleArray(historyQuestions);

        // Select 5 random questions from each category
        const selectedMath = mathQuestions.slice(0, questionsPerCategory);
        const selectedHistory = historyQuestions.slice(0, questionsPerCategory);

        // Combine and shuffle again to mix math and history questions
        askedQuestions = [...selectedMath, ...selectedHistory];
        shuffleArray(askedQuestions); // Shuffle the combined array
    }

    function displayQuestion() {
        if (currentQuestionIndex < askedQuestions.length) {
            const currentQuestion = askedQuestions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;
            answerInput.value = '';
            feedbackElement.textContent = '';
            feedbackElement.className = 'feedback'; // Reset feedback class
            timeLeft = 30;
            timerElement.textContent = timeLeft;
            startTimer();
        } else {
            endGame();
        }
    }

    function startTimer() {
        clearInterval(timer); // Clear any existing timer
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                feedbackElement.textContent = "¡Se acabó el tiempo!";
                feedbackElement.classList.add('timeout');
                setTimeout(() => {
                    currentQuestionIndex++;
                    displayQuestion();
                }, 1500);
            }
        }, 1000);
    }

    function checkAnswer() {
        clearInterval(timer);
        // Normalize user answer and correct answer for comparison
        const userAnswer = answerInput.value.trim().toLowerCase()
                                            .replace(/[^\w\s]/gi, '') // Remove punctuation
                                            .replace(/\s+/g, ' ');   // Replace multiple spaces with single space
        const correctAnswer = askedQuestions[currentQuestionIndex].answer.toLowerCase()
                                                                  .replace(/[^\w\s]/gi, '')
                                                                  .replace(/\s+/g, ' ');

        // Special handling for "Éufrates y Tigris" variations
        if (askedQuestions[currentQuestionIndex].question.includes("mesopotámica")) {
            const possibleAnswers = ["éurates y tigris", "tigris y éurates", "eufrates y tigris", "tigris y eufrates"];
            if (possibleAnswers.includes(userAnswer)) {
                score += 10;
                scoreElement.textContent = score;
                feedbackElement.textContent = "¡Correcto!";
                feedbackElement.classList.add('correct');
            } else {
                feedbackElement.textContent = `Incorrecto. La respuesta correcta era: "${askedQuestions[currentQuestionIndex].answer}"`;
                feedbackElement.classList.add('incorrect');
            }
        } else if (userAnswer === correctAnswer) {
            score += 10;
            scoreElement.textContent = score;
            feedbackElement.textContent = "¡Correcto!";
            feedbackElement.classList.add('correct');
        } else {
            feedbackElement.textContent = `Incorrecto. La respuesta correcta era: "${askedQuestions[currentQuestionIndex].answer}"`;
            feedbackElement.classList.add('incorrect');
        }

        setTimeout(() => {
            currentQuestionIndex++;
            displayQuestion();
        }, 1500);
    }

    function startGame() {
        score = 0;
        currentQuestionIndex = 0;
        scoreElement.textContent = score;
        startScreen.classList.remove('active');
        endScreen.classList.remove('active');
        gameScreen.style.display = 'block'; // Show game screen
        selectRandomQuestions();
        displayQuestion();
    }

    function endGame() {
        gameScreen.style.display = 'none'; // Hide game screen
        endScreen.classList.add('active');
        finalScoreElement.textContent = score;

        // Total possible points is 10 questions * 10 points/question = 100
        if (score > 50) {
            resultMessageElement.textContent = "¡Ganaste!";
            resultMessageElement.style.color = "green";
        } else if (score < 50) {
            resultMessageElement.textContent = "Perdedor.";
            resultMessageElement.style.color = "red";
        } else { // score === 50
            resultMessageElement.textContent = "¡Hiciste tu mejor esfuerzo!";
            resultMessageElement.style.color = "blue";
        }
    }

    startButton.addEventListener('click', startGame);
    submitButton.addEventListener('click', checkAnswer);
    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });
    restartButton.addEventListener('click', startGame);
});