import quizQuestions from "./data/questions.js";

// TODO:
// 1. Limit to 2 skips per test, make it look better
// 2. Pop Up after test finish, either after 18 right ones or 5 wrong ones
// 3. Add Images to corresponding questions

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
let correctDisplay = document.querySelector('.correct')
let incorrectDisplay = document.querySelector('.incorrect')
let skippedDisplay = document.querySelector('.skipped')

// Counters for each possible answer result 
let correctCounter = 0
let incorrectCounter = 0
let skippedCounter = 0


document.addEventListener('keydown', function(event) {
    const key = event.key;
    const selectedOption = document.querySelector(`[data-key="${key}"]`);
    // console.log('hejo')
     
    if (selectedOption) {
          selectedOption.click(); 
          console.log(selectedOption.value)
        }else if(key === ' ' && landingPage.style.display !== 'none' ){
          startQuizBtn.click()
          console.log('sajsasj')
        }else if(key === ' ' && nextQuestionBtn.style.display !== 'block') {
          skippedCounter++;
          skippedDisplay.innerText = `Skipped: ${skippedCounter} / 2`
          nextQuestionBtn.click();
            if(skippedCounter > 2){
               console.log('tu mach')
              //  alert('Only 2 skips allowed per test')
            }
        }else if( key === ' '){
          nextQuestionBtn.click()
        }
  });

// Event listener for the "Start Quiz" button
startQuizBtn.addEventListener("click", () => {
    // Hide the landing page and show the quiz container
    landingPage.style.display = "none"; tipSection.style.display = 'none';
    quizContainer.style.display = "block";
    displayQuestion(quizQuestions[Math.floor(Math.random() * quizQuestions.length)])
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
    displayQuestion(quizQuestions[Math.floor(Math.random() * quizQuestions.length)])
  
    // Enable all options for the next question
    optionsArray.forEach(option => {
      option.disabled = false;
    });
  });
  


  // WILL NEED TO WRITE A CHECK CORRECT ANSWER FUNCTION HERE
  // Event listener for the options
  // optionsArray.forEach(option, index => {
  //   option.addEventListener('click', function() {
  //     // You can add code to handle the user's selection here.
  //     // For example, update the UI to show if the selection is correct or not.
  //     // Show the "Next Question" button after the user clicks an option
  //     if (index === correctAnswerIndex) {
  //       option.classList.add('correct-option'); // Apply the green animation to the correct option
  //       console.log('Hell Yeah');
  //   }
      
  //     nextQuestionBtn.style.display = 'block';
  //   //   option.disabled = true
  //     // Update the correctDisplay based on the user's answer (example)
  //   // const isCorrectAnswer = 5/* Your logic to determine if the answer is correct */;
  //   // if (isCorrectAnswer) {
  //   //   correctDisplay += 1;
  //   // }
    
  //   // Update the correctDisplay display
  //   // correctCounterDisplay.textContent = `correctDisplay: ${correctDisplay}`
  
  //     // Disable all options to prevent further clicks until the user clicks "Next Question"
  //     optionsArray.forEach(option => {
  //       option.disabled = true;
  //     });
  //   });
  // });

  
let correctAnswerIndex

  const displayQuestion = (question) => {
    // Set the question text
    questionh1.innerHTML = question.questionText;
  
    // Shuffle the options for this question
    const shuffledOptions = shuffleOptions([...question.options]);
  
    optionsArray.forEach((el, i) => {
      el.innerText = 'Option ' + (i + 1) + ' - ' + shuffledOptions[i].text;
      el.classList.remove('correct-option');
      el.classList.remove('wrong-option');
  
      if (shuffledOptions[i].isCorrect) {
        correctAnswerIndex = i;
      }
    });
  };
  
  // Function to shuffle the options array for each question independently
  const shuffleOptions = (answerOptions) => {
    return answerOptions.sort(() => 0.5 - Math.random());
  };

  

// Add the click event listener to each option
optionsArray.forEach((option, index) => {
    option.addEventListener('click', function() {
        // Check if the clicked option is correct
        if (index === correctAnswerIndex) {
          correctCounter++
            option.classList.add('correct-option'); // Apply the green animation to the correct option
            console.log('Hell Yeah');
        }else{
          incorrectCounter++
          incorrectDisplay.innerText = ` Wrong : ${incorrectCounter}` 
          option.classList.add('wrong-option')
          console.log('What is love')
          const correctOption = optionsArray[correctAnswerIndex];
          correctOption.classList.add('correct-option');
        }
        nextQuestionBtn.style.display = 'block';
        // Disable all options to prevent further clicks until the user clicks "Next Question"
        optionsArray.forEach(option => {
            option.disabled = true;
        });
          correctDisplay.innerText = `Correct: ${correctCounter} / 18`
    });
});
    
    
    // Loop through the options and set the text for each button
    // question.options.forEach((option, index) => {
    //   optionsArray[index].textContent = option.text;
    //   optionsArray[index].dataset.isCorrect = option.isCorrect;
    // });

  const fadeAway = (btn) =>{
    btn.style.display = 'none';
    btn.classList.remove('animate-peace')
    btn.disabled = false
  }
  
  

