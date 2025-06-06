const respuestas = {
    "popular": "El fútbol es el deporte más popular del mundo.",
    "mejores": "Messi y Ronaldo son considerados los mejores jugadores.",
    "mundial": "El Mundial se juega cada 4 años.",
    "champions": "La Champions League es el torneo más prestigioso en Europa.",
    "copas": "Brasil ha ganado más Copas del Mundo que cualquier otro país.",
    "champions_titulos": "El Real Madrid tiene el récord de títulos de Champions.",
    "var": "El VAR ha cambiado la forma en que se arbitra el fútbol.",
    "legendas": "Pelé y Maradona son leyendas del fútbol.",
    "tactica": "El fútbol moderno depende mucho de la táctica.",
    "ingresos": "Las ligas europeas generan los mayores ingresos."
};

function enviarPregunta() {
    let chatBox = document.getElementById("chat-box");
    let preguntaSeleccionada = document.getElementById("pregunta-select").value; // Obtener el valor del select

    if (preguntaSeleccionada === "") {
        chatBox.innerHTML += `<p><strong>ChatBot:</strong> Por favor, selecciona una pregunta antes de enviar.</p>`;
        return;
    }

    let respuesta = respuestas[preguntaSeleccionada]; // Buscar la respuesta en el objeto

    chatBox.innerHTML += `<p><strong>Usuario:</strong> ${document.getElementById("pregunta-select").selectedOptions[0].text}</p>`;
    chatBox.innerHTML += `<p><strong>ChatBot:</strong> ${respuesta}</p>`;

    chatBox.scrollTop = chatBox.scrollHeight; // Ajustar el scroll para ver la respuesta más reciente
}