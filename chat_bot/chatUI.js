// Chat interface functionality
document.addEventListener('DOMContentLoaded', function() {
  // DOM elements
  const welcomeScreen = document.getElementById('welcome-screen');
  const chatContainer = document.getElementById('chat-container');
  const userNameInput = document.getElementById('user-name');
  const topicCards = document.querySelectorAll('.topic-card');
  const startChatButton = document.getElementById('start-chat');
  const chatMessages = document.getElementById('chat-messages');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const typingIndicator = document.getElementById('typing-indicator');
  const chatTopicIcon = document.getElementById('chat-topic-icon');
  const chatTopicName = document.getElementById('chat-topic-name');
  const headerUserName = document.getElementById('header-user-name');

  // App state
  let selectedTopic = null;
  let userName = '';
  let askedQuestions = []; // Track questions already asked
  let currentTopicData = null;

  // Set up topic selection
  topicCards.forEach(card => {
    card.addEventListener('click', function() {
      // Remove selected class from all cards
      topicCards.forEach(c => c.classList.remove('selected'));
      // Add selected class to clicked card
      this.classList.add('selected');
      // Store selected topic
      selectedTopic = this.getAttribute('data-topic');
      // Enable start button if name is also entered
      if (userNameInput.value.trim() !== '') {
        startChatButton.disabled = false;
      }
    });
  });

  // Handle name input
  userNameInput.addEventListener('input', function() {
    if (this.value.trim() !== '' && selectedTopic) {
      startChatButton.disabled = false;
    } else {
      startChatButton.disabled = true;
    }
  });

  // Start chat button
  startChatButton.addEventListener('click', function() {
    if (userNameInput.value.trim() !== '' && selectedTopic) {
      userName = userNameInput.value.trim();
      initializeChat(selectedTopic, userName);
    }
  });

  // Initialize the chat with selected topic
  function initializeChat(topic, name) {
    // Hide welcome screen, show chat
    welcomeScreen.classList.add('hidden');
    chatContainer.classList.remove('hidden');
    
    // Set theme based on topic
    document.body.className = '';
    document.body.classList.add(`${topic}-theme`);
    
    // Set chat header info
    currentTopicData = chatbotData[topic];
    chatTopicIcon.textContent = currentTopicData.icon;
    chatTopicName.textContent = currentTopicData.name;
    headerUserName.textContent = name;
    
    // Clear any previous messages
    chatMessages.innerHTML = '';
    askedQuestions = [];
    
    // Add greeting message
    setTimeout(() => {
      addBotMessage(`¡Hola ${name}! ${currentTopicData.greeting}`);
    }, 500);
  }

  // Add a user message to the chat
  function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Add a bot message to the chat
  function addBotMessage(message) {
    showTypingIndicator();
    
    // Simulate typing delay based on message length
    const typingDelay = Math.min(1000, message.length * 10);
    
    setTimeout(() => {
      hideTypingIndicator();
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', 'bot-message');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, typingDelay);
  }

  // Show typing indicator
  function showTypingIndicator() {
    typingIndicator.classList.remove('hidden');
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Hide typing indicator
  function hideTypingIndicator() {
    typingIndicator.classList.add('hidden');
  }

  // Handle sending a message
  function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
      addUserMessage(message);
      messageInput.value = '';
      
      // Process the message and get a response
      processUserMessage(message);
    }
  }

  // Process user message and generate response
  function processUserMessage(message) {
    if (!currentTopicData) return;
    
    // Check if the message matches any question patterns
    const questions = currentTopicData.questions;
    let foundAnswer = false;
    
    // Try to find an exact match or similar question
    for (const q of questions) {
      if (messageContainsQuestion(message, q.question)) {
        // Check if this question was already asked
        if (!askedQuestions.includes(q.question)) {
          askedQuestions.push(q.question);
          addBotMessage(q.answer);
          foundAnswer = true;
          break;
        }
      }
    }
    
    // If no answer found or question was already asked
    if (!foundAnswer) {
      // Find a random unasked question to suggest
      const unansweredQuestions = questions.filter(q => !askedQuestions.includes(q.question));
      
      if (unansweredQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
        const suggestion = unansweredQuestions[randomIndex];
        
        addBotMessage(`No estoy seguro de cómo responder a eso. ¿Por qué no me preguntas sobre: "${suggestion.question}"?`);
      } else {
        // All questions have been asked
        addBotMessage(`¡Parece que ya hemos cubierto todas las preguntas comunes sobre ${currentTopicData.name}! Si quieres explorar otro tema, puedes reiniciar el chat.`);
      }
    }
  }

  // Check if user message contains a question pattern
  function messageContainsQuestion(userMessage, questionPattern) {
    // Convert both to lowercase for case-insensitive matching
    const userLower = userMessage.toLowerCase();
    const patternLower = questionPattern.toLowerCase();
    
    // Check for direct matches
    if (userLower === patternLower) return true;
    
    // Check if user message contains key parts of the question
    const keyWords = getKeyWords(patternLower);
    const matchCount = keyWords.filter(word => userLower.includes(word)).length;
    
    // If more than 60% of keywords match, consider it a match
    return matchCount >= Math.ceil(keyWords.length * 0.6);
  }

  // Extract key words from a question (words with 4+ chars, excluding common words)
  function getKeyWords(question) {
    const commonWords = ['como', 'cual', 'cuales', 'cuando', 'donde', 'porque', 'para', 'debo', 'puedo', 'eres', 'esta', 'este', 'estos', 'estas', 'mejor', 'peor', 'bueno', 'malo', 'entre', 'desde', 'hasta', 'antes', 'despues', 'durante', 'cada', 'todo', 'todos', 'toda', 'todas', 'mucho', 'poco', 'algun', 'alguna', 'algunos', 'algunas', 'ningun', 'ninguna', 'ningunos', 'ningunas', 'otro', 'otra', 'otros', 'otras'];
    
    // Split by spaces and punctuation, filter out short and common words
    return question.split(/[\s,.?!:;()]+/)
      .filter(word => word.length >= 4 && !commonWords.includes(word));
  }

  // Send button event
  sendButton.addEventListener('click', sendMessage);

  // Enter key to send message
  messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
});