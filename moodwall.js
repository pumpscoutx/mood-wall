// Object to store each mood and its count
let moodCount = {};

function submitAnswer() {
  const inputField = document.getElementById('user-answer');
  const answer = inputField.value.trim().toLowerCase();
  
  if (answer) {
    // Update the count for the entered mood
    if (moodCount[answer]) {
      moodCount[answer] += 1;
    } else {
      moodCount[answer] = 1;
    }
    
    // Update the mood wall display
    displayMoodWall();
  }
  
  // Clear the input field
  inputField.value = '';
}

function displayMoodWall() {
  const moodBubblesContainer = document.getElementById('mood-bubbles');
  moodBubblesContainer.innerHTML = ''; // Clear existing bubbles
  
  // Loop through each mood entry in moodCount
  for (const [mood, count] of Object.entries(moodCount)) {
    // Create a new bubble element for this mood
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Increase bubble size based on the count
    // Base size is 14px plus 4px for every time the mood has been entered
    const fontSize = 14 + count * 4;
    bubble.style.fontSize = `${fontSize}px`;
    
    // Optionally, you could also adjust the width/height based on the count
    // For example:
    const size = 50 + count * 10; // base 50px plus extra for each count
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Set the text to display the mood and its count
    bubble.textContent = `${mood} (${count})`;
    
    // Append the bubble to the container
    moodBubblesContainer.appendChild(bubble);
  }
}
