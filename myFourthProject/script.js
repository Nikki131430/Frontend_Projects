
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const guessButton = document.getElementById("guessButton");
  const userGuessInput = document.getElementById("userGuess");
  const feedback = document.getElementById("feedback");
  
  let attempts = 0;
  
  guessButton.addEventListener("click", () => {
    const userGuess = parseInt(userGuessInput.value);
    attempts++;
  
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      feedback.textContent = "Please enter a number between 1 and 100.";
      return;
    }
  
    if (userGuess === randomNumber) {
      feedback.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
      feedback.style.color = "green";
      guessButton.disabled = true;
      userGuessInput.disabled = true;
    } else if (userGuess < randomNumber) {
      feedback.textContent = "Too low. Try again!";
    } else {
      feedback.textContent = "Too high. Try again!";
    }
  });
