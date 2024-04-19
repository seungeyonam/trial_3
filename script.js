// Function to handle the "Game Start" button click
function startGame() {
  // Show the game area
  document.getElementById('game-area').style.display = 'block';
  // Hide the "Game Start" button
  document.getElementById('start-button').style.display = 'none';
}

// Event listener for "Game Start" button click
document.getElementById('start-button').addEventListener('click', startGame);

// Function to handle the "Start Game" button click
function startGame() {
  // Redirect the user to the next page
  window.location.href = "next_page.html";
}

// Event listener for "Start Game" button click
document.getElementById('start-button').addEventListener('click', startGame);
