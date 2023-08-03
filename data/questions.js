const quizQuestions = [
    // Chapter 4 Review Questions
    {
      questionText: "THE MINIMUM DRINKING AGE IN THIS STATE IS ____ YEARS.",
      options: [
        { text: "9", isCorrect: false },
        { text: "21", isCorrect: true },
        { text: "20", isCorrect: false },
        { text: "18", isCorrect: false },
      ],
      imageUrl: "data/images/.white.jpg", // Optional image URL
    },
    {
        questionText: "PEOPLE UNDER 16 YEARS OF AGE WHO USE A FALSE IDENTIFICATION CARD TO BUY ALCOHOL WILL:",
        options: [
          { text: "Not be able to take the driver's exam until their 21st birthday", isCorrect: false },
          { text: "Recieve a driving suspension that starts on their 21st birthday", isCorrect: false },
          { text: "Receive a driving suspension that starts on their 16th birthday ", isCorrect: true },
          { text: "Be sent to an alcohol safety education class", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF A PERSON UNDER 21 YEARS OLD CONSUMES ALCOHOL, BUT IS NOT DRIVING A MOTORVEHICLE, THE PENALTY FOR A FIRST OFFENSE IS:",
        options: [
          { text: "A 6-month probation", isCorrect: false },
          { text: "Sentence to a corrections institution", isCorrect: false },
          { text: "A 90-day driver license suspension and up to a $500 fine", isCorrect: true },
          { text: "Points on the driving record", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "PARENTAL CONSENT TO CONDUCT BREATH, BLOOD, AND URINE TESTS IS:",
        options: [
          { text: "Not required ", isCorrect: true },
          { text: "Required from only one parent", isCorrect: false },
          { text: "Required from both parents", isCorrect: false },
          { text: "Required for people under 16 years old", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IT IS AGAINST THE LAW FOR ANYONE UNDER THE AGE OF 21 TO ______ ALCOHOL.",
        options: [
          { text: "Wear clothes advertising", isCorrect: false },
          { text: "Be in the presence of", isCorrect: false },
          { text: "Serve", isCorrect: false },
          { text: " Consume", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IT IS AGAINST THE LAW FOR ANYONE UNDER THE AGE OF 21 TO ______ ALCOHOL.",
        options: [
          { text: "Possess", isCorrect: true },
          { text: "Be in the presence of", isCorrect: false },
          { text: "Wear clothes advertising", isCorrect: false },
          { text: "Serve", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IT IS AGAINST THE LAW FOR ANYONE UNDER THE AGE OF 21 TO ______ ALCOHOL.",
        options: [
          { text: "Transport", isCorrect: true },
          { text: "Wear clothes advertising", isCorrect: false },
          { text: "Serve", isCorrect: false },
          { text: "Be in the presence of", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "ONE OF THE PENALTIES FOR DRIVING UNDER THE INFLUENCE OF ALCOHOL IS A(N):",
        options: [
          { text: "5-year driver's license suspension", isCorrect: false },
          { text: "$100.00 fine", isCorrect: false },
          { text: "Attendance to Alcohol Highway Safety School ", isCorrect: true },
          { text: "12-hour sentence in jail", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU ARE ARRESTED FOR DRIVING UNDER THE INFLUENCE OF ALCOHOL AND YOU REFUSE TO TAKE THE BLOOD TEST, YOU WILL RECIEVE A:",
        options: [
          { text: "Drug counseling treatment", isCorrect: false },
          { text: "Driver’s License Suspension", isCorrect: true },
          { text: "Sentence of one day in jail", isCorrect: false },
          { text: "$300.00 fine", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF A POLICE OFFICER REQUIRES YOU TO TAKE A BLOOD, BREATH, OR URINE TEST, YOU:",
        options: [
          { text: "Must take the test, or your license will be suspended ", isCorrect: true },
          { text: "May choose the test you prefer", isCorrect: false },
          { text: "Must sign a consent form", isCorrect: false },
          { text: "May refuse if underage", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "FOR A FIRST CONVICTION FOR DRIVING UNDER THE INFLUENCE AT ANY BLOOD ALCOHOL CONCENTRATION LEVEL, YOU COULD: ",
        options: [
          { text: "Lose your license for up to 5 years", isCorrect: false },
          { text: "Be required to drive with a restricted occupational license", isCorrect: false },
          { text: " Be required to conduct a public education class on the dangers of drunk driving", isCorrect: false },
          { text: "Pay a fine of at least $300", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF UNDER 21 YEARS OF AGE YOU ARE CONSIDERED TO BE DRIVING WHILE UNDER THE INFLUENCE IF YOUR BLOOD ALCOHOL LEVEL IS:",
        options: [
          { text: ".08% or higher", isCorrect: false },
          { text: ".05% or higher", isCorrect: false },
          { text: ".02% or higher", isCorrect: true },
          { text: ".10% or higher", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: " IF YOU ARE UNDER AGE 21 AND ARE CONVICTED OF DRIVING UNDER THE INFLUENCE OF ALCOHOL, YOU WILL RECEIVE A ____ LICENSE SUSPENSION FOR A FIRST OFFENSE.",
        options: [
          { text: "60-Day", isCorrect: false },
          { text: "1-Year", isCorrect: true },
          { text: "30-Day", isCorrect: false },
          { text: "6-Month", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: " IF YOU ARE UNDER AGE 21, AND ARE CONVICTED OF CARRYING A FALSE ID CARD, YOU WILL BE REQUIRED TO PAY A $500 FINE AND YOUR LICENSE WILL BE SUSPENDED FOR 90 DAYS",
        options: [
          { text: "Only if your blood alcohol content (BAC) is .02% or higher", isCorrect: false },
          { text: "Only if you were driving at the time of arrest ", isCorrect: false },
          { text: " Only if your blood alcohol content (BAC) is .02% or higher and you were driving at the time of arrest", isCorrect: false },
          { text: "Even if you were not driving", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "THE ZERO TOLERANCE LAW REDUCED THE BLOOD ALCOHOL CONTENT (BAC) FROM .08% TO ____ FOR DRIVERS UNDER 21 TO BE CHARGED WITH DRIVING UNDER THE INFLUENCE. ",
        options: [
          { text: ".02%", isCorrect: true },
          { text: ".00%", isCorrect: false },
          { text: ".05%", isCorrect: false },
          { text: ".07%", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: " IF YOU ARE STOPPED BY A POLICE OFFICER, YOU SHOULD:",
        options: [
          { text: "Get your paperwork ready before the officer reaches your car", isCorrect: false },
          { text: "Stay in your vehicle with your hands on the steering wheel, and wait for the officer to approach you", isCorrect: true },
          { text: " Get out of your car and walk toward the patrol car", isCorrect: false },
          { text: "Unbuckle your seat belt and lower your window", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
   
  ];

  //Client side js export syntax
  export default quizQuestions