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
      //Chapter 3 review questions
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
      {
        questionText: "TEENAGE DRIVERS ARE MORE LIKELY TO BE INVOLVED IN A CRASH WHEN: :",
        options: [
          { text: "They are driving with their pet as a passenger", isCorrect: false },
          { text: "They are driving with adult passengers ", isCorrect: true },
          { text: "They are driving with teenage passengers", isCorrect: false },
          { text: "They are driving without any passengers", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "DRIVERS WHO EAT AND DRINK WHILE DRIVING:",
        options: [
          { text: "Have no driving errors", isCorrect: false },
          { text: "Have trouble driving slow", isCorrect: true },
          { text: "Are better drivers because they are not hungry", isCorrect: false },
          { text: "Have trouble controlling their vehicles", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "PREPARING TO SMOKE AND SMOKING WHILE DRIVING:",
        options: [
          { text: "Do not affect driving abilities", isCorrect: false },
          { text: "Help maintain driver alertness", isCorrect: true },
          { text: "Are distracting activities", isCorrect: false },
          { text: "Are not distracting activities", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "THE TOP MAJOR CRASH TYPE FOR 16 YEAR OLD DRIVERS IN PENNSYLVANIA IS:",
        options: [
          { text: "Single vehicle/run-off-the-road", isCorrect: false },
          { text: "Being sideswept on an interstate", isCorrect: true },
          { text: "Driving in reverse on a side street", isCorrect: false },
          { text: "Driving on the shoulder of a highway", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN PASSING A BICYCLIST, YOU SHOULD:",
        options: [
          { text: "Blast your horn to alert the bicyclist", isCorrect: false },
          { text: "Move as far left as possible", isCorrect: true },
          { text: "Remain in the center of the lane", isCorrect: false },
          { text: "Put on your for way flashers", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU DRIVE THROUGH AN AREA WHERE CHILDREN ARE PLAYING, YOU SHOULD EXPECT THEM:",
        options: [
          { text: "To know when it's safe to cross", isCorrect: false },
          { text: "To stop at the curb before crossing the street", isCorrect: true },
          { text: "To run out in front of you without looking", isCorrect: false },
          { text: "Not to cross unless they are with an adult", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU ARE DRIVING BEHIND A MOTORCYCLE, YOU MUST:",
        options: [
          { text: "Allow a motorcycle to use a complete lane", isCorrect: false },
          { text: "Drive on the shoulder beside the motorcycle", isCorrect: true },
          { text: "Allow the motorcycle to use only half a lane", isCorrect: false },
          { text: "Pass in the same lane where the motorcycle is driving", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN TRAVELING BEHIND A MOTORCYCLE:",
        options: [
          { text: "Allow a following distance of at least 2 car lengths", isCorrect: false },
          { text: "Allow at least 2 seconds of following distance", isCorrect: true },
          { text: "Allow at least 4 seconds of following distance", isCorrect: false },
          { text: "Allow a following distance of at least 4 motorcycle lengths", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "YOU NEED TO USE EXTRA CAUTION WHEN DRIVING NEAR A PEDESTRIAN USING A WHITE CANE BECAUSE:",
        options: [
          { text: "They are deaf", isCorrect: false },
          { text: "They have a mental disability", isCorrect: true },
          { text: "They are blind", isCorrect: false },
          { text: "They have a walking problem", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING NEAR A BLIND PEDESTRIAN WHO IS CARRYING A WHITE CANE OR USING A GUIDE DOG, YOU SHOULD:",
        options: [
          { text: "Slow down and be prepared to stop", isCorrect: false },
          { text: "Take the right-of-way", isCorrect: true },
          { text: "Proceed normally", isCorrect: false },
          { text: "Drive away quickly", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHO MUST YIELD WHEN A DRIVER IS TURNING AND A PEDESTRIAN IS CROSSING WITHOUT A TRAFFING LIGHT:",
        options: [
          { text: "Whoever started last", isCorrect: false },
          { text: "The driver", isCorrect: true },
          { text: "Whoever is slower", isCorrect: false },
          { text: "The pedestrian", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "AN ORANGE TRIANGLE ON THE BACK OF A VEHICLE INDICATES THAT VEHICLE:",
        options: [
          { text: "Carries radioactive materials", isCorrect: false },
          { text: "Takes wide turns", isCorrect: true },
          { text: "Travels at slower speeds than normal traffic", isCorrect: false },
          { text: "Makes frequent stops", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "AT NIGHT, IT'S HARDEST TO SEE:",
        options: [
          { text: "Road signs", isCorrect: false },
          { text: "Pedestrians", isCorrect: true },
          { text: "Other motorists", isCorrect: false },
          { text: "Street lights", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN A TRUCK DRIVER BEHIND YOU WANTS TO PASS YOUR VEHICLE, YOUR SPEED SHOULD:",
        options: [
          { text: "Remain steady or decrease", isCorrect: false },
          { text: "Change lanes", isCorrect: true },
          { text: "Change", isCorrect: false },
          { text: "Increase", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN SHARING THE ROAD WITH A TRUCK, IT IS IMPORTANT TO REMEMBER THAT, IN GENERAL, TRUCKS:",
        options: [
          { text: "Take longer distance than cars to stop", isCorrect: false },
          { text: "Require less time to pass on a downgrade than cars", isCorrect: true },
          { text: "Require less radius than cars", isCorrect: false },
          { text: "Require less time to pass on an incline than cars", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU STOP AT A RAILROAD CROSSING WITH MORE THAN ONE TRACK:",
        options: [
          { text: "Wait until you have a clear view of both tracks", isCorrect: false },
          { text: "Stop on the railroad track and watch for another train", isCorrect: true },
          { text: "Go through as soon as the train passes", isCorrect: false },
          { text: "Go through when one of the tracks is free", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU ARE FOLLOWING A TRUCK THAT SWINGS LEFT BEFORE MAKING A RIGHT TURN AT AN INTERSECTION, YOU SHOULD REMEMBER THAT IT IS VERY DANGEROUS TO:",
        options: [
          { text: "Try to squeeze between the truck and the curb to make a right turn", isCorrect: false },
          { text: "Apply your brakes until the truck has completed the turn", isCorrect: true },
          { text: `Violate the "4 - second" following distance rule`, isCorrect: false },
          { text: "Honk your horn at the truck driver", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "THE ONLY TIME YOU DO NOT HAVE TO STOP FOR A SCHOOL BUS WHOSE RED LIGHTS ARE FLASHING AND STOP ARM IS EXTENDED IS WHEN YOU:",
        options: [
          { text: "Are driving on the opposite side of a divided highway", isCorrect: false },
          { text: "Are behind the bus", isCorrect: true },
          { text: "See no children present", isCorrect: false },
          { text: "Can safely pass on the left", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN A SCHOOL BUS HAS ITS LIGHTS FLASHING AND ITS STOP ARM EXTENDED, YOU MUST:",
        options: [
          { text: "Stop at least 10 feet away from the bus", isCorrect: false },
          { text: "Pass if children have exited the bus", isCorrect: true },
          { text: "Stop if the bus is on the opposite side of a barrier", isCorrect: false },
          { text: "Drive slowely by the bus", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "AFTER A TRAIN HAS PASSED, YOU SHOULD:",
        options: [
          { text: "Check again for approaching trains and proceed with caution", isCorrect: false },
          { text: "Wait for a green light", isCorrect: true },
          { text: "Proceed across the tracks", isCorrect: false },
          { text: "Blow horn and proceed", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "AFTER A TRAIN HAS PASSED, YOU SHOULD:",
        options: [
          { text: "Check again for approaching trains and proceed with caution", isCorrect: false },
          { text: "Wait for a green light", isCorrect: true },
          { text: "Proceed across the tracks", isCorrect: false },
          { text: "Blow horn and proceed", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      
   

  ];

  //Client side js export syntax
  export default quizQuestions