const respuestas = {
    "uso": "El maquillaje resalta la belleza natural.",
    "labiales": "Los labiales mate son tendencia.",
    "primer_paso": "El primer paso antes de aplicar maquillaje es hidratar la piel.",
    "brochas": "Las brochas son clave para una buena aplicación del maquillaje.",
    "ocasiones": "El maquillaje cambia según la ocasión: casual, profesional o de fiesta.",
    "corrector": "El corrector oculta imperfecciones y ayuda a unificar el tono de la piel.",
    "iluminador": "Los iluminadores resaltan áreas específicas del rostro para un efecto radiante.",
    "marcas": "Existen muchas marcas reconocidas de maquillaje, como MAC, Fenty Beauty y Maybelline.",
    "coreano": "El maquillaje coreano es famoso por su acabado natural y piel luminosa.",
    "contouring": "La técnica del 'contouring' redefine el rostro, resaltando y afinando facciones."
};

function enviarPregunta() {
    let chatBox = document.getElementById("chat-box");
    let preguntaSeleccionada = document.getElementById("pregunta-select").value;

    if (preguntaSeleccionada === "") {
        chatBox.innerHTML += `<p><strong>ChatBot:</strong> Por favor, selecciona una pregunta antes de enviar.</p>`;
        return;
    }

    let respuesta = respuestas[preguntaSeleccionada];

    chatBox.innerHTML += `<p><strong>Usuario:</strong> ${document.getElementById("pregunta-select").selectedOptions[0].text}</p>`;
    chatBox.innerHTML += `<p><strong>ChatBot:</strong> ${respuesta}</p>`;

    chatBox.scrollTop = chatBox.scrollHeight; // Ajustar el scroll para ver la respuesta más reciente
}