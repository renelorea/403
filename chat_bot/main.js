// Main application logic

document.addEventListener('DOMContentLoaded', function() {
  // Initialize the application
  console.log('ChatBot application initialized');
  
  // Check if the browser supports required features
  if (!window.localStorage) {
    console.warn('Local storage is not supported in this browser. Some features may not work properly.');
  }
  
  // Set focus on the name input when page loads
  const userNameInput = document.getElementById('user-name');
  if (userNameInput) {
    userNameInput.focus();
  }
});