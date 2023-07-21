import quizQuestions from "./data/questions.js";


const landingPage = document.querySelector(".landing-page");
const tipSection = document.querySelector('.centered-content')
const quizContainer = document.getElementById("quiz-container");
const questionh1 = document.querySelector('.question-text')
const nextQuestionBtn = document.getElementById('next-question-btn');
const optionOne = document.getElementById('option1')
const optionTwo = document.getElementById('option2')
const optionThree = document.getElementById('option3')
const optionFour = document.getElementById('option4')
const options = document.querySelector('.quiz-option')
const optionsArray = [optionOne, optionTwo, optionThree, optionFour]
const startQuizBtn = document.getElementById("start-quiz-btn");


document.addEventListener('keydown', function(event) {
    const key = event.key;
    const selectedOption = document.querySelector(`[data-key="${key}"]`);
        if (selectedOption) {
          selectedOption.click(); 
          console.log(selectedOption.value)
        }else if(key === 'Enter') {
            nextQuestionBtn.click()
        }
  });

// Event listener for the "Start Quiz" button
startQuizBtn.addEventListener("click", () => {
    // Hide the landing page and show the quiz container
    landingPage.style.display = "none"; tipSection.style.display = 'none';
    quizContainer.style.display = "block";
    // displayQuestion(quizQuestions[Math.floor(Math.random() * 16)])
    console.log(quizQuestions[2].options[2  ].text)
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
  
 // Event listener for the "Next Question" button
nextQuestionBtn.addEventListener('click', function() {
    // Hide the "Next Question" button again for the next question
    nextQuestionBtn.classList.add('animate-peace')
    nextQuestionBtn.disabled = true
    setTimeout(fadeAway, 200, nextQuestionBtn);
  
    // Enable all options for the next question
    optionsArray.forEach(option => {
      option.disabled = false;
    });
  });
  
  // Event listener for the options
  optionsArray.forEach(option => {
    option.addEventListener('click', function() {
      // You can add code to handle the user's selection here.
      // For example, update the UI to show if the selection is correct or not.
      // Show the "Next Question" button after the user clicks an option
      console.log('gggffd')
      nextQuestionBtn.style.display = 'block';
    //   option.disabled = true
      // Update the score based on the user's answer (example)
    // const isCorrectAnswer = 5/* Your logic to determine if the answer is correct */;
    // if (isCorrectAnswer) {
    //   score += 1;
    // }
    
    // Update the score display
    // scoreDisplay.textContent = `Score: ${score}`
  
      // Disable all options to prevent further clicks until the user clicks "Next Question"
      optionsArray.forEach(option => {
        option.disabled = true;
      });
    });
  });

  const displayQuestion = (question) =>  {
    // Set the question text
    questionh1.textContent = question.questionText;
    optionsArray.forEach((option, index) => {

    })
    console.log(question)
  
    // Loop through the options and set the text for each button
    // question.options.forEach((option, index) => {
    //   optionsArray[index].textContent = option.text;
    //   optionsArray[index].dataset.isCorrect = option.isCorrect;
    // });
  }

  const fadeAway = (btn) =>{
    btn.style.display = 'none';
    btn.classList.remove('animate-peace')
    btn.disabled = false
  }
  
  

