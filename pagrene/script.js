const respuestas = {
  "¿qué es el maquillaje?": "Es el arte de aplicar productos cosméticos para resaltar la belleza del rostro o cuerpo.",
  "¿cuáles son los tipos de base?": "Existen bases líquidas, en polvo, en barra, mousse y en crema.",
  "¿qué es un primer?": "Es un producto que se aplica antes de la base para alisar la piel y hacer que el maquillaje dure más.",
  "¿para qué sirve el corrector?": "Sirve para cubrir imperfecciones como ojeras, granitos o manchas.",
  "¿qué brochas necesito?": "Las básicas son: brocha para base, polvo, rubor, sombras y difuminado.",
  "¿cómo se hace un delineado?": "Puedes usar lápiz, gel o líquido. Comienza desde el lagrimal hasta el final del ojo, siguiendo la línea de las pestañas.",
  "¿qué es el contouring?": "Es una técnica para definir el rostro usando tonos claros y oscuros.",
  "¿cómo elegir el tono de base?": "Debe coincidir con el tono de tu piel y probarse en el cuello o mandíbula.",
  "¿cuánto dura el maquillaje?": "Depende de los productos, pero puede durar de 4 a 12 horas.",
  "¿es necesario desmaquillarse?": "Sí, es fundamental para evitar obstrucciones en los poros y cuidar la piel."
};

function sendMessage() {
  const input = document.getElementById("user-input");
  const userText = input.value.trim();
  if (userText === "") return;

  addMessage(userText, "user");

  const pregunta = userText.toLowerCase();
  const respuesta = respuestas[pregunta] || "Lo siento, no tengo una respuesta para esa pregunta.";

  setTimeout(() => {
    addMessage(respuesta, "bot");
  }, 500);

  input.value = "";
}

function addMessage(text, sender) {
  const chatBody = document.getElementById("chat-body");
  const message = document.createElement("div");
  message.className = `chat-message ${sender}`;
  message.textContent = text;
  chatBody.appendChild(message);
  chatBody.scrollTop = chatBody.scrollHeight;
}
