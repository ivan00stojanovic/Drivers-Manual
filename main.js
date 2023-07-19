const landingPage = document.querySelector(".landing-page");
const quizContainer = document.getElementById("quiz-container");

// Get reference to the "Start Quiz" button
const startQuizBtn = document.getElementById("start-quiz-btn");

// Event listener for the "Start Quiz" button
startQuizBtn.addEventListener("click", () => {
    // Hide the landing page and show the quiz container
    landingPage.style.display = "none";
    quizContainer.style.display = "block";
    console.log('work')
});