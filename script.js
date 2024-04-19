// Function to handle the "Game Start" button click
function startGame() {
  // Show the game area
  document.getElementById('game-area').style.display = 'block';
  // Hide the "Game Start" button
  document.getElementById('start-button').style.display = 'none';
}

// Event listener for "Game Start" button click
document.getElementById('start-button').addEventListener('click', startGame);
