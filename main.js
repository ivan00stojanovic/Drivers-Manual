const landingPage = document.querySelector(".landing-page");
const quizContainer = document.getElementById("quiz-container");
const nextQuestionBtn = document.getElementById('next-question-btn');
const optionOne = document.getElementById('option1')
const optionTwo = document.getElementById('option2')
const optionThree = document.getElementById('option3')
const optionFour = document.getElementById('option4')
const options = document.querySelector('.quiz-option')
const optionsArray = [optionOne, optionTwo, optionThree, optionFour]

// Get reference to the "Start Quiz" button
const startQuizBtn = document.getElementById("start-quiz-btn");

// Event listener for the "Start Quiz" button
startQuizBtn.addEventListener("click", () => {
    // Hide the landing page and show the quiz container
    landingPage.style.display = "none";
    quizContainer.style.display = "block";
});

 const handleOptionSelection = () => {
    // Show the "Next Question" button when an option is selected
    nextQuestionBtn.style.display = 'block';
    
    // Disable all options once an option is selected (optional)
    optionsArray.forEach(option => {
      option.disabled = true;
    });
  }
  
  // Add event listeners to all quiz options to handle selection
  optionsArray.forEach(option => {
    option.addEventListener('click', handleOptionSelection);
  });
  
  // Add event listener to the "Next Question" button to handle next question logic
  nextQuestionBtn.addEventListener('click', function() {
    // Hide the "Next Question" button again for the next question
    nextQuestionBtn.style.display = 'none';
    
    // Enable all options for the next question (optional)
    optionsArray.forEach(option => {
      option.disabled = false;
    });
  
    // Call a function here to proceed to the next question in your quiz
    // You can update the question text, options, and image programmatically.
  });
