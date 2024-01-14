document.addEventListener("DOMContentLoaded", function () {
    // Generate a random number between 1 and 10
    const correctCard = Math.floor(Math.random() * 10) + 1;
  
    const submitGuessBtn = document.getElementById('submitGuessBtn');
    submitGuessBtn.addEventListener('click', guessCard);
  
    function guessCard() {
      const guessInput = document.getElementById('guessInput');
      const outputElement = document.getElementById('output');
      
      const userGuess = guessInput.value;
  
      if (userGuess === '') {
        outputElement.textContent = 'Please enter a valid guess.';
      } else {
        const guess = parseInt(userGuess);
  
        if (guess >= 1 && guess <= 10) {
          if (guess === correctCard) {
            outputElement.textContent = 'Congratulations! You guessed the correct card!';
            submitGuessBtn.disabled = true;
            guessInput.disabled = true;
          } else {
            outputElement.textContent = `Sorry, the correct card was ${correctCard}. Try again.`;
          }
        } else {
          outputElement.textContent = 'Please enter a number between 1 and 10.';
        }
      }
    }
  });
  