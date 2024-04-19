// Function to handle the "Game Start" button click
function startGame() {
  // Show the game area
  document.getElementById('game-area').style.display = 'block';
  // Hide the "Game Start" button
  document.getElementById('start-button').style.display = 'none';
}

// Function to handle Option 1 button click
function chooseOption1() {
  // Redirect the user to the page for Option 1
  window.location.href = "option1.html";
}

// Function to handle Option 2 button click
function chooseOption2() {
  // Redirect the user to the page for Option 2
  window.location.href = "option2.html";
}

// Event listener for Option 1 button click
document.getElementById('option1').addEventListener('click', chooseOption1);

// Event listener for Option 2 button click
document.getElementById('option2').addEventListener('click', chooseOption2);
