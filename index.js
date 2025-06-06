// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  document.body.style.backgroundColor = ''
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const keyDisplay = document.getElementById('keyPressDisplay');
  keyDisplay.textContent = `${event.key}`;
  keyDisplay.style.display = 'block';
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  const inputField = document.getElementById('textInput');
  const displayArea = document.getElementById('textInputDisplay');
  displayArea.textContent = inputField.value;
  displayArea.style.display = 'block';
  inputField.style.display = 'block';
}

// Attach Event Listeners

// Attach event listener to change background color when the button is clicked
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor)

// Attach event listener to reset background color when the body is double-clicked
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor)

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener('keydown', displayKeyPress)

// Attach event listener to display user input in real-time as they type
document.getElementById('textInput').addEventListener('input', displayUserInput)
