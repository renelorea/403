const responses = {
  "¿qué es el gym?": "El gym es un lugar donde se realizan ejercicios físicos para mejorar la salud y la condición física.",
  "¿cuántas veces a la semana debo ir al gym?": "Lo ideal es ir de 3 a 5 veces por semana dependiendo de tus objetivos.",
  "¿qué debo comer antes de entrenar?": "Antes de entrenar, consume carbohidratos complejos y algo de proteína, como avena con yogurt.",
  "¿qué suplementos puedo tomar?": "Algunos comunes son proteína, creatina, BCAA y pre-entrenos. Consulta a un profesional.",
  "¿cuánto tiempo debo entrenar?": "Un entrenamiento efectivo puede durar entre 45 minutos y 1 hora.",
  "¿es bueno entrenar en ayunas?": "Depende de tus objetivos, pero muchas personas lo hacen para quemar grasa.",
  "¿qué es la hipertrofia?": "Es el aumento del tamaño del músculo debido al entrenamiento de fuerza.",
  "¿puedo perder grasa y ganar músculo a la vez?": "Sí, pero es difícil. Se necesita una dieta adecuada y entrenamiento constante.",
  "¿cuánto debo descansar entre series?": "Entre 30 segundos a 1.5 minutos, dependiendo del objetivo.",
  "¿por qué es importante estirar?": "Ayuda a prevenir lesiones, mejora la flexibilidad y la recuperación muscular."
};

function answerQuestion() {
  const select = document.getElementById("question-select");
  const question = select.value;
  const chatBox = document.getElementById("chat-box");

  if (!question) {
    alert("Por favor, selecciona una pregunta.");
    return;
  }

  const response = responses[question];

  chatBox.innerHTML += `<p><strong>Tú:</strong> ${question}</p>`;
  chatBox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}
