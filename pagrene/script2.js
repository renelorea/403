const respuestas = {
    "¿Qué es el maquillaje?": "El maquillaje es el arte de aplicar productos cosméticos en la piel para resaltar la belleza.",
    "¿Cuál es la mejor base de maquillaje?": "La mejor base depende de tu tipo de piel. Las pieles secas prefieren bases hidratantes, mientras que las grasas optan por bases mate.",
    "¿Cómo evitar que el maquillaje se corra?": "Utiliza un buen primer y sella con polvo translúcido.",
    "¿Cuál es el mejor delineador?": "El delineador en gel es ideal para trazos precisos y duraderos.",
    "¿Cómo elegir un labial adecuado?": "Escoge tonos que complementen tu piel y ocasión.",
    "¿Cómo cuidar los pinceles de maquillaje?": "Lávalos con agua tibia y jabón cada semana para evitar bacterias.",
    "¿Qué productos son esenciales para un maquillaje básico?": "Base, corrector, rubor, máscara de pestañas y labial.",
    "¿Cómo lograr un maquillaje natural?": "Utiliza tonos suaves y difumina bien los productos.",
    "¿Cómo evitar el efecto máscara?": "Aplica base en pequeñas cantidades y difumina bien.",
    "¿Qué es el contouring?": "Es una técnica que define los rasgos del rostro usando luces y sombras."
};

function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim(); // Elimina espacios extra
    let chatBox = document.getElementById("chat-box");

    if (userInput === "") {
        return; // No enviar mensajes vacíos
    }

    let response = respuestas[userInput] || "Lo siento, no tengo respuesta para eso. Intenta otra pregunta sobre maquillaje.";

    chatBox.innerHTML += `<p><strong>👩 Tú:</strong> ${userInput}</p>`;
    chatBox.innerHTML += `<p><strong>🤖 Chatbot:</strong> ${response}</p>`;

    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight; // Hace scroll automático para ver la última respuesta
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}