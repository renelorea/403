// Preguntas en bruto (normales)
const respuestasOriginales = {
  "¿Quién ganó el Mundial 2022?": "Argentina ganó el Mundial de Qatar 2022.",
  "¿Cuál es el mejor jugador del mundo?": "Muchos dicen que Lionel Messi es el mejor jugador del mundo.",
  "¿Cuántos jugadores hay en un equipo de fútbol?": "Un equipo de fútbol tiene 11 jugadores en la cancha.",
  "¿Cuánto dura un partido de fútbol?": "Un partido dura 90 minutos, divididos en dos tiempos de 45 minutos.",
  "¿Qué es un penal?": "Un penal es un tiro directo al arco desde el punto penal, tras una falta en el área.",
  "¿Qué es el fuera de lugar?": "Es cuando un jugador recibe el balón estando más cerca del arco rival que el penúltimo defensor.",
  "¿Quién ha ganado más mundiales?": "Brasil ha ganado más mundiales, con 5 títulos.",
  "¿Qué es la Champions League?": "Es el torneo de clubes más importante de Europa.",
  "¿Qué significa FIFA?": "FIFA significa 'Fédération Internationale de Football Association'.",
  "¿Qué es un clásico en fútbol?": "Es un partido entre dos equipos con gran rivalidad, como Barcelona vs Real Madrid."
};

// Función para normalizar texto (quita acentos, signos, mayúsculas)
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .replace(/[¿?¡!.,]/g, "") // quita signos
    .trim();
}

// Creamos una nueva lista de respuestas con claves normalizadas
const respuestas = {};
for (let pregunta in respuestasOriginales) {
  respuestas[normalizar(pregunta)] = respuestasOriginales[pregunta];
}

// Manejo del chat
document.getElementById("chat-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("user-input");
  const mensajeUsuario = input.value;
  if (!mensajeUsuario.trim()) return;

  agregarMensaje("user", mensajeUsuario);

  const mensajeNormalizado = normalizar(mensajeUsuario);

  let respuesta = respuestas[mensajeNormalizado];
  if (!respuesta) {
    respuesta = "No tengo una respuesta para eso, pregunta algo de fútbol.";
  }

  setTimeout(() => {
    agregarMensaje("bot", respuesta);
  }, 500);

  input.value = "";
});

function agregarMensaje(remitente, texto) {
  const chatBox = document.getElementById("chat-box");
  const mensaje = document.createElement("p");
  mensaje.className = remitente;
  mensaje.textContent = texto;
  chatBox.appendChild(mensaje);
  chatBox.scrollTop = chatBox.scrollHeight;
}
