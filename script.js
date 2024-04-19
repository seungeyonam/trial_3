// Function to handle the "Game Start" button click
function startGame() {
  // Show the game area
  document.getElementById('game-area').style.display = 'block';
  // Hide the "Game Start" button
  document.getElementById('start-button').style.display = 'none';
}

// Event listener for "Game Start" button click
document.getElementById('start-button').addEventListener('click', startGame);


// Function to handle option 1
function chooseOption1() {
  document.getElementById('result').textContent = "I did.";
  // Add logic for Scene 1
}

function nextScene() {
  // Update the content of the game area to the next scene
  document.getElementById('game-area').innerHTML = `
    <h2>Next Scene</h2>
    <p>This is the next scene of the game.</p>
  `;
}

// Function to handle option 2
function chooseOption2() {
  document.getElementById('result').textContent = "어쩔개밥바라기";
  // Add logic for Scene 2
}

// Event listener for Option 1 button click
document.getElementById('option1').addEventListener('click', function() {
  console.log("Option 1 clicked");
  chooseOption1();
});

// Event listener for Option 2 button click
document.getElementById('option2').addEventListener('click', function() {
  console.log("Option 2 clicked");
  chooseOption2();
});

