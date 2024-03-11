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
      imageUrl: "data/images/black.jpg", // Optional image URL
    },
    {
        questionText: "PEOPLE UNDER 16 YEARS OF AGE WHO USE A FALSE IDENTIFICATION CARD TO BUY ALCOHOL WILL:",
        options: [
          { text: "Not be able to take the driver's exam until their 21st birthday", isCorrect: false },
          { text: "Recieve a driving suspension that starts on their 21st birthday", isCorrect: false },
          { text: "Receive a driving suspension that starts on their 16th birthday ", isCorrect: true },
          { text: "Be sent to an alcohol safety education class", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF A PERSON UNDER 21 YEARS OLD CONSUMES ALCOHOL, BUT IS NOT DRIVING A MOTORVEHICLE, THE PENALTY FOR A FIRST OFFENSE IS:",
        options: [
          { text: "A 6-month probation", isCorrect: false },
          { text: "Sentence to a corrections institution", isCorrect: false },
          { text: "A 90-day driver license suspension and up to a $500 fine", isCorrect: true },
          { text: "Points on the driving record", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "PARENTAL CONSENT TO CONDUCT BREATH, BLOOD, AND URINE TESTS IS:",
        options: [
          { text: "Not required ", isCorrect: true },
          { text: "Required from only one parent", isCorrect: false },
          { text: "Required from both parents", isCorrect: false },
          { text: "Required for people under 16 years old", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IT IS AGAINST THE LAW FOR ANYONE UNDER THE AGE OF 21 TO ______ ALCOHOL.",
        options: [
          { text: "Wear clothes advertising", isCorrect: false },
          { text: "Be in the presence of", isCorrect: false },
          { text: "Serve", isCorrect: false },
          { text: " Consume", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IT IS AGAINST THE LAW FOR ANYONE UNDER THE AGE OF 21 TO ______ ALCOHOL.",
        options: [
          { text: "Possess", isCorrect: true },
          { text: "Be in the presence of", isCorrect: false },
          { text: "Wear clothes advertising", isCorrect: false },
          { text: "Serve", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IT IS AGAINST THE LAW FOR ANYONE UNDER THE AGE OF 21 TO ______ ALCOHOL.",
        options: [
          { text: "Transport", isCorrect: true },
          { text: "Wear clothes advertising", isCorrect: false },
          { text: "Serve", isCorrect: false },
          { text: "Be in the presence of", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "ONE OF THE PENALTIES FOR DRIVING UNDER THE INFLUENCE OF ALCOHOL IS A(N):",
        options: [
          { text: "5-year driver's license suspension", isCorrect: false },
          { text: "$100.00 fine", isCorrect: false },
          { text: "Attendance to Alcohol Highway Safety School ", isCorrect: true },
          { text: "12-hour sentence in jail", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU ARE ARRESTED FOR DRIVING UNDER THE INFLUENCE OF ALCOHOL AND YOU REFUSE TO TAKE THE BLOOD TEST, YOU WILL RECIEVE A:",
        options: [
          { text: "Drug counseling treatment", isCorrect: false },
          { text: "Driver’s License Suspension", isCorrect: true },
          { text: "Sentence of one day in jail", isCorrect: false },
          { text: "$300.00 fine", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF A POLICE OFFICER REQUIRES YOU TO TAKE A BLOOD, BREATH, OR URINE TEST, YOU:",
        options: [
          { text: "Must take the test, or your license will be suspended ", isCorrect: true },
          { text: "May choose the test you prefer", isCorrect: false },
          { text: "Must sign a consent form", isCorrect: false },
          { text: "May refuse if underage", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "FOR A FIRST CONVICTION FOR DRIVING UNDER THE INFLUENCE AT ANY BLOOD ALCOHOL CONCENTRATION LEVEL, YOU COULD: ",
        options: [
          { text: "Lose your license for up to 5 years", isCorrect: false },
          { text: "Be required to drive with a restricted occupational license", isCorrect: false },
          { text: " Be required to conduct a public education class on the dangers of drunk driving", isCorrect: false },
          { text: "Pay a fine of at least $300", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF UNDER 21 YEARS OF AGE YOU ARE CONSIDERED TO BE DRIVING WHILE UNDER THE INFLUENCE IF YOUR BLOOD ALCOHOL LEVEL IS:",
        options: [
          { text: ".08% or higher", isCorrect: false },
          { text: ".05% or higher", isCorrect: false },
          { text: ".02% or higher", isCorrect: true },
          { text: ".10% or higher", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: " IF YOU ARE UNDER AGE 21 AND ARE CONVICTED OF DRIVING UNDER THE INFLUENCE OF ALCOHOL, YOU WILL RECEIVE A ____ LICENSE SUSPENSION FOR A FIRST OFFENSE.",
        options: [
          { text: "60-Day", isCorrect: false },
          { text: "1-Year", isCorrect: true },
          { text: "30-Day", isCorrect: false },
          { text: "6-Month", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: " IF YOU ARE UNDER AGE 21, AND ARE CONVICTED OF CARRYING A FALSE ID CARD, YOU WILL BE REQUIRED TO PAY A $500 FINE AND YOUR LICENSE WILL BE SUSPENDED FOR 90 DAYS",
        options: [
          { text: "Only if your blood alcohol content (BAC) is .02% or higher", isCorrect: false },
          { text: "Only if you were driving at the time of arrest ", isCorrect: false },
          { text: " Only if your blood alcohol content (BAC) is .02% or higher and you were driving at the time of arrest", isCorrect: false },
          { text: "Even if you were not driving", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE ZERO TOLERANCE LAW REDUCED THE BLOOD ALCOHOL CONTENT (BAC) FROM .08% TO ____ FOR DRIVERS UNDER 21 TO BE CHARGED WITH DRIVING UNDER THE INFLUENCE. ",
        options: [
          { text: ".02%", isCorrect: true },
          { text: ".00%", isCorrect: false },
          { text: ".05%", isCorrect: false },
          { text: ".07%", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: " IF YOU ARE STOPPED BY A POLICE OFFICER, YOU SHOULD:",
        options: [
          { text: "Get your paperwork ready before the officer reaches your car", isCorrect: false },
          { text: "Stay in your vehicle with your hands on the steering wheel, and wait for the officer to approach you", isCorrect: true },
          { text: " Get out of your car and walk toward the patrol car", isCorrect: false },
          { text: "Unbuckle your seat belt and lower your window", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
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
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "TEENAGE DRIVERS ARE MORE LIKELY TO BE INVOLVED IN A CRASH WHEN: :",
        options: [
          { text: "They are driving with their pet as a passenger", isCorrect: false },
          { text: "They are driving with adult passengers ", isCorrect: false },
          { text: "They are driving with teenage passengers", isCorrect: true },
          { text: "They are driving without any passengers", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "DRIVERS WHO EAT AND DRINK WHILE DRIVING:",
        options: [
          { text: "Have no driving errors", isCorrect: false },
          { text: "Have trouble driving slow", isCorrect: false },
          { text: "Are better drivers because they are not hungry", isCorrect: false },
          { text: "Have trouble controlling their vehicles", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "PREPARING TO SMOKE AND SMOKING WHILE DRIVING:",
        options: [
          { text: "Do not affect driving abilities", isCorrect: false },
          { text: "Help maintain driver alertness", isCorrect: false },
          { text: "Are distracting activities", isCorrect: true },
          { text: "Are not distracting activities", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE TOP MAJOR CRASH TYPE FOR 16 YEAR OLD DRIVERS IN PENNSYLVANIA IS:",
        options: [
          { text: "Single vehicle/run-off-the-road", isCorrect: true},
          { text: "Being sideswept on an interstate", isCorrect: false },
          { text: "Driving in reverse on a side street", isCorrect: false },
          { text: "Driving on the shoulder of a highway", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN PASSING A BICYCLIST, YOU SHOULD:",
        options: [
          { text: "Blast your horn to alert the bicyclist", isCorrect: false },
          { text: "Move as far left as possible", isCorrect: true },
          { text: "Remain in the center of the lane", isCorrect: false },
          { text: "Put on your for way flashers", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU DRIVE THROUGH AN AREA WHERE CHILDREN ARE PLAYING, YOU SHOULD EXPECT THEM:",
        options: [
          { text: "To know when it's safe to cross", isCorrect: false },
          { text: "To stop at the curb before crossing the street", isCorrect: false },
          { text: "To run out in front of you without looking", isCorrect: true },
          { text: "Not to cross unless they are with an adult", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU ARE DRIVING BEHIND A MOTORCYCLE, YOU MUST:",
        options: [
          { text: "Allow a motorcycle to use a complete lane", isCorrect: true },
          { text: "Drive on the shoulder beside the motorcycle", isCorrect: false },
          { text: "Allow the motorcycle to use only half a lane", isCorrect: false },
          { text: "Pass in the same lane where the motorcycle is driving", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN TRAVELING BEHIND A MOTORCYCLE:",
        options: [
          { text: "Allow a following distance of at least 2 car lengths", isCorrect: false },
          { text: "Allow at least 2 seconds of following distance", isCorrect: false },
          { text: "Allow at least 4 seconds of following distance", isCorrect: true},
          { text: "Allow a following distance of at least 4 motorcycle lengths", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOU NEED TO USE EXTRA CAUTION WHEN DRIVING NEAR A PEDESTRIAN USING A WHITE CANE BECAUSE:",
        options: [
          { text: "They are deaf", isCorrect: false },
          { text: "They have a mental disability", isCorrect: false },
          { text: "They are blind", isCorrect: true },
          { text: "They have a walking problem", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING NEAR A BLIND PEDESTRIAN WHO IS CARRYING A WHITE CANE OR USING A GUIDE DOG, YOU SHOULD:",
        options: [
          { text: "Slow down and be prepared to stop", isCorrect: true },
          { text: "Take the right-of-way", isCorrect: false },
          { text: "Proceed normally", isCorrect: false },
          { text: "Drive away quickly", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHO MUST YIELD WHEN A DRIVER IS TURNING AND A PEDESTRIAN IS CROSSING WITHOUT A TRAFFING LIGHT:",
        options: [
          { text: "Whoever started last", isCorrect: false },
          { text: "The driver", isCorrect: true },
          { text: "Whoever is slower", isCorrect: false },
          { text: "The pedestrian", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "AN ORANGE TRIANGLE ON THE BACK OF A VEHICLE INDICATES THAT VEHICLE:",
        options: [
          { text: "Carries radioactive materials", isCorrect: false },
          { text: "Takes wide turns", isCorrect: false},
          { text: "Travels at slower speeds than normal traffic", isCorrect: true },
          { text: "Makes frequent stops", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "AT NIGHT, IT'S HARDEST TO SEE:",
        options: [
          { text: "Road signs", isCorrect: false },
          { text: "Pedestrians", isCorrect: true },
          { text: "Other motorists", isCorrect: false },
          { text: "Street lights", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN A TRUCK DRIVER BEHIND YOU WANTS TO PASS YOUR VEHICLE, YOUR SPEED SHOULD:",
        options: [
          { text: "Remain steady or decrease", isCorrect: true},
          { text: "Change lanes", isCorrect: false },
          { text: "Change", isCorrect: false },
          { text: "Increase", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN SHARING THE ROAD WITH A TRUCK, IT IS IMPORTANT TO REMEMBER THAT, IN GENERAL, TRUCKS:",
        options: [
          { text: "Take longer distance than cars to stop", isCorrect: true },
          { text: "Require less time to pass on a downgrade than cars", isCorrect: false },
          { text: "Require less radius than cars", isCorrect: false },
          { text: "Require less time to pass on an incline than cars", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU STOP AT A RAILROAD CROSSING WITH MORE THAN ONE TRACK:",
        options: [
          { text: "Wait until you have a clear view of both tracks", isCorrect: true },
          { text: "Stop on the railroad track and watch for another train", isCorrect: false},
          { text: "Go through as soon as the train passes", isCorrect: false },
          { text: "Go through when one of the tracks is free", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU ARE FOLLOWING A TRUCK THAT SWINGS LEFT BEFORE MAKING A RIGHT TURN AT AN INTERSECTION, YOU SHOULD REMEMBER THAT IT IS VERY DANGEROUS TO:",
        options: [
          { text: "Try to squeeze between the truck and the curb to make a right turn", isCorrect: true },
          { text: "Apply your brakes until the truck has completed the turn", isCorrect: false },
          { text: `Violate the "4 - second" following distance rule`, isCorrect: false },
          { text: "Honk your horn at the truck driver", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE ONLY TIME YOU DO NOT HAVE TO STOP FOR A SCHOOL BUS WHOSE RED LIGHTS ARE FLASHING AND STOP ARM IS EXTENDED IS WHEN YOU:",
        options: [
          { text: "Are driving on the opposite side of a divided highway", isCorrect: true },
          { text: "Are behind the bus", isCorrect: false },
          { text: "See no children present", isCorrect: false },
          { text: "Can safely pass on the left", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN A SCHOOL BUS HAS ITS LIGHTS FLASHING AND ITS STOP ARM EXTENDED, YOU MUST:",
        options: [
          { text: "Stop at least 10 feet away from the bus", isCorrect: true },
          { text: "Pass if children have exited the bus", isCorrect: false },
          { text: "Stop if the bus is on the opposite side of a barrier", isCorrect: false },
          { text: "Drive slowely by the bus", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "AFTER A TRAIN HAS PASSED, YOU SHOULD:",
        options: [
          { text: "Check again for approaching trains and proceed with caution", isCorrect: true },
          { text: "Wait for a green light", isCorrect: false },
          { text: "Proceed across the tracks", isCorrect: false },
          { text: "Blow horn and proceed", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU NEED TO SLOW DOWN OR STOP WHEN OTHER DRIVERS MAY NOT EXPECT IT, YOU SHOULD:",
        options: [
          { text: "Quickly tap your break pedal a few times", isCorrect: true },
          { text: "Use you emergency break", isCorrect: false},
          { text: "Look over your shoulder for traffic in your blind spot", isCorrect: false },
          { text: "Get ready to blow your horn", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU ARE PLANNING TO MAKE A TURN, YOU SHOULD ACTIVATE YOUR TURN SIGNALS:",
        options: [
          { text: "Only if there are other drivers following you", isCorrect: false },
          { text: "Just as the front of your car reaches the intersection", isCorrect: false },
          { text: "3 to 4 seconds before you reach the intersection", isCorrect: true },
          { text: "2 car lengths before reaching the intersection", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "BEFORE PASSING ANOTHER VEHICLE YOU SHOULD:",
        options: [
          { text: "flash your headlights to alert the driver", isCorrect: false },
          { text: "Turn on your four-way flashers to warn the driver", isCorrect: false },
          { text: "Give the proper turn signal to show you are changing lanes", isCorrect: true },
          { text: "Sound your horn to get the drivers attention", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOUR BLIND SPOT IS THE AREA OF THE ROAD:",
        options: [
          { text: "You cannot see without moving your head", isCorrect: true },
          { text: "Directly behind the vehicle", isCorrect: false},
          { text: "You see in your rearview mirror", isCorrect: false },
          { text: "You see in your side mirror", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "BEFORE PASSING ANOTHER VEHICLE, YOU SHOULD SIGNAL:",
        options: [
          { text: "Just before changing lanes", isCorrect: false },
          { text: "At any time", isCorrect: false},
          { text: "After changing lanes", isCorrect: false },
          { text: "Early enough so others know your plans", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "BEFORE CHANGING LANES ON A MULTI-LANE HIGHWAY YOU SHOULD:",
        options: [
          { text: "Sound your horn", isCorrect: false },
          { text: "Turn on your headlights", isCorrect: false},
          { text: "Reduce your speed", isCorrect: false },
          { text: "Check your mirrors and blind spots", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU PARK ON THE ROADWAY, YOU SHOULD:",
        options: [
          { text: "Use your four-way flashers", isCorrect: true },
          { text: "Park at an angle", isCorrect: false },
          { text: "Keep your turn signal on", isCorrect: false },
          { text: "Turn your lights on", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "BEFORE BACKING UP, YOU SHOULD:",
        options: [
          { text: "Rely on your mirrors to see if it is clear to proceed", isCorrect: false },
          { text: "Flash your lights", isCorrect: false },
          { text: "Open your door to see if it is clear to proceed", isCorrect: false },
          { text: "Turn your head and look through the rear window", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "TO HELP AVOID CRASHES, YOU SHOULD:",
        options: [
          { text: "Communicate with other drivers on the road", isCorrect: true },
          { text: "Ignore other drivers on the road", isCorrect: false},
          { text: "Drive on side streets and back roads", isCorrect: false },
          { text: "Avoid driving during rush hour", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE DRIVER IS:",
        options: [
          { text: "Slowing or stopping", isCorrect: true },
          { text: "Turning left", isCorrect: false },
          { text: "Turning right", isCorrect: false },
          { text: "Opening their door", isCorrect: false },
        ],
        imageUrl: "", // Optional image URL
      },
      {
        questionText: "IF YOUR TURN SIGNALS FAIL, YOU SHOULD USE ___ TO INDICATE YOU ARE TURNING",
        options: [
          { text: "Your horn", isCorrect: false },
          { text: "Your headlights", isCorrect: false },
          { text: "Sound your horn to warn others", isCorrect: true },
          { text: "Use your four-way flashers", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN TRAVELLING BELOW 40 MILES AN HOUR ON A LIMITED ACCESS HIGHWAY, YOU SHOULD:",
        options: [
          { text: "Drive on the shoulder", isCorrect: false },
          { text: "Use your high beams", isCorrect: false},
          { text: "Sound your horn to warn others", isCorrect: false },
          { text: "Use your four-way flashers", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOU SHOULD HONK YOUR HORN WHEN YOU:",
        options: [
          { text: "Are travelling through an intersection", isCorrect: false },
          { text: "Are passing a bicylist", isCorrect: false},
          { text: "See a child who is about to run into the street", isCorrect: true },
          { text: "Are parallel parking", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOU MUST USE YOUR HEADLIGHTS WHEN OTHER VEHICLES ARE NOT VISIBLE FROM ___ FEET AWAY:",
        options: [
          { text: "1000", isCorrect: true },
          { text: "1500", isCorrect: false },
          { text: "1800", isCorrect: false },
          { text: "1200", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF A VEHICLE USING HIGH BEAMS COMES TOWARDS YOU, YOU SHOULD LOOK TOWARDS ___ OF THE ROAD:",
        options: [
          { text: "Either side", isCorrect: false },
          { text: "The center", isCorrect: false },
          { text: "The right", isCorrect: true},
          { text: "The left", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF A VEHICLE USING HIGH BEAMS COMES TOWARD YOU, YOU SHOULD:",
        options: [
          { text: "Turn on your high beams", isCorrect: false },
          { text: "Turn off your headlights", isCorrect: false },
          { text: "Sound your horn", isCorrect: false},
          { text: "Flash your high beams", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOU MAY HONK YOUR HORN WHEN YOU:",
        options: [
          { text: "Have to stop quickly", isCorrect: false },
          { text: "Are passing another car", isCorrect: false},
          { text: "Have lost control of your car", isCorrect: true },
          { text: "Are passing a bicylist", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOUR BRAKE LIGHTS TELL OTHER DRIVERS THAT YOU:",
        options: [
          { text: "Are making a turn", isCorrect: false },
          { text: "Have an emergency break on", isCorrect: false},
          { text: "Are changing lanes", isCorrect: false },
          { text: "Are slowing down or stopping", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "BEFORE TURNING YOU SHOULD:",
        options: [
          { text: "Use your signal", isCorrect: true },
          { text: "Turn the wheel", isCorrect: false },
          { text: "Increase your speed", isCorrect: false },
          { text: "Change lanes", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE DRIVER IS:",
        options: [
          { text: "Turning left", isCorrect: false },
          { text: "Slowing", isCorrect: false},
          { text: "Stopping", isCorrect: false },
          { text: "Turning right", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg" , // Optional image URL
      },
      {
        questionText: "THE DRIVER IS:",
        options: [
          { text: "Turning left", isCorrect: true},
          { text: "Stopping", isCorrect: false },
          { text: "Slowing", isCorrect: false },
          { text: "Turning right", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg" , // Optional image URL
      },
      {
        questionText: "IF ANOTHER CAR IS IN DANGER OF HITTING YOU, YOU SHOULD:",
        options: [
          { text: "Sound your horn", isCorrect: true},
          { text: "Wave your arms", isCorrect: false },
          { text: "Use your emergency lights", isCorrect: false },
          { text: "Flash your headlights", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU BEGIN TO FEEL TIRED WHILE DRIVING, THE BEST THING TO DO IS:",
        options: [
          { text: "Get some coffee", isCorrect: false },
          { text: "Open your window", isCorrect: false },
          { text: "Stop driving", isCorrect: true},
          { text: "Turn on the radio", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE EFFECT THAT LACK OF SLEEP HAS ON YOUR SAFE DRIVING ABILITY IS THE SAME AS:",
        options: [
          { text: "The same that alcohol has", isCorrect: true},
          { text: "The effect that amphatemanes have", isCorrect: false },
          { text: "The effect that anger has", isCorrect: false },
          { text: "The effect that driving with teenagers has", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "TEENAGERS SHOULD TRY TO GET AT LEAST ___ OF SLEEP EACH NIGHT TO AVOID THE RISK OF DROWSY DRIVING CRASHES.",
        options: [
          { text: "7 hours", isCorrect: false },
          { text: "6 hours", isCorrect: false },
          { text: "8 hours", isCorrect: true},
          { text: "9 hours", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF ANOTHER DRIVERS CUTS YOU OFF IN TRAFFIC, YOU SHOULD:",
        options: [
          { text: "Pull next to the driver and yell at him or her", isCorrect: false },
          { text: "Ignore the other driver", isCorrect: true },
          { text: "Flash your high beams at the driver", isCorrect: false },
          { text: "Get back at the other driver by cutting him or her off", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF SOMEONE IS DRIVING AGGRESSIVELY BEHIND YOU, YOU SHOULD:",
        options: [
          { text: "Try to get out of the agressive driver's way", isCorrect: true },
          { text: "Stare at the driver as they are passing you", isCorrect: false },
          { text: "Speed up as they are passing you", isCorrect: false },
          { text: "Block the passing lane", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "FOR AN AVERAGE PERSON, HOW MANY MINUTES DOES THE BODY NEED TO PROCESS THE ALCOHOL IN ONE DRINK?",
        options: [
          { text: "15", isCorrect: false },
          { text: "60", isCorrect: true },
          { text: "90", isCorrect: false },
          { text: "30", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "___ LIMIT(S) YOUR CONCENTRATION, PERCEPTION, JUDGMENT AND MEMORY.",
        options: [
          { text: "Only a blood alcohol level greater than the legal limit", isCorrect: false },
          { text: "Alcohol does not", isCorrect: false},
          { text: "Even the smallest amount of alcohol", isCorrect: true },
          { text: "Only a blood alcohol level greater than .05", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },  
      {
        questionText: "TAKING DRUGS ALONG WITH ALCOHOL:",
        options: [
          { text: "Increases the risk of a crash", isCorrect: true },
          { text: "Is no more dangerous than alcohol by itself", isCorrect: false },
          { text: "Lessens the effect of alcohol on your ability to drive", isCorrect: false },
          { text: "Has no effect on your general driving ability", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "AS ALCOHOL BUILDS UP IN YOUR BLOOD, IT:",
        options: [
          { text: "Slows down your reactions", isCorrect: true },
          { text: "Makes you feel less confident", isCorrect: false},
          { text: "Begins to metabolize itself more quickly", isCorrect: false },
          { text: "Decreases your driving errors", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "AS YOUR BLOOD ALCOHOL LEVEL IS .04, YOU:",
        options: [
          { text: "Are 2-7 times more likely to have a crash than a person who has not consumed any", isCorrect: true },
          { text: "Are above the legal blood alcohol limit but fine to drive", isCorrect: false },
          { text: "Can be very sure that you will drive safely", isCorrect: false },
          { text: "Should drink plenty of coffee before getting behind the wheel of your car", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU HEAR A FIRE ENGINE SIREN, YOU MUST:",
        options: [
          { text: "Slow down until it passes you", isCorrect: false },
          { text: "Drive with you flashers on", isCorrect: false},
          { text: "Pull over to the side of the road and stop", isCorrect: true },
          { text: "Speed up and take the nearest exit", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU HAVE A TIRE BLOWOUT, YOU SHOULD:",
        options: [
          { text: "Allow the steering wheel to move freely", isCorrect: false },
          { text: "Let the car slow to a stop", isCorrect: true },
          { text: "Continue driving until you reach a garage", isCorrect: false },
          { text: "Brake hard and stop the car immediately", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU CAR BREAKS DOWN ON A HIGHWAY, YOU SHOULD:",
        options: [
          { text: "Sit in you car and wait for help", isCorrect: false },
          { text: "Use your four-way flashers to warn other drivers", isCorrect: true },
          { text: "Sound your horn at passing motorists", isCorrect: false },
          { text: "Flash your headlights at oncoming traffic", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU SEE AN EMERGENCY VEHICLE WITH FLASHING LIGHTS, YOU MUST:",
        options: [
          { text: "Slow down and keep moving in your lane", isCorrect: false },
          { text: "Keep driving in your lane", isCorrect: false },
          { text: "Pull to the curb and stop", isCorrect: true},
          { text: "Stop exactly where you are", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING ON A ONE WAY STREET AND AN EMERGENCY VEHICLE WITH FLASHING VEHICLES IS BEHIND YOUR CAR, YOU SHOULD:",
        options: [
          { text: " Drive with your flashers on", isCorrect: false },
          { text: "Drive toward the nearest road side and stop", isCorrect: true },
          { text: "Speed up and take the nearest exit", isCorrect: false },
          { text: "Slow down until the vehicle passes you", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "AFTER AN EMERGENCY VEHICLE PASSES YOU WITH ITS SIREN ON, YOU SHOULD:",
        options: [
          { text: "Drive closely to the police car", isCorrect: false },
          { text: "Drive as fast as the police car", isCorrect: false },
          { text: "Avoid driving closer than 500 feet behind the emergency vehicle", isCorrect: true },
          { text: "Drive near the curb very slowly", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "CRASHES IN WORK ZONES ARE MOST COMMONLY THE RESULT OF:",
        options: [
          { text: "Tire blow-outs", isCorrect: false },
          { text: "Hydroplaning because of water sprayed on the roadway", isCorrect: false },
          { text: "Loss of steering control after driving over wet paint", isCorrect: false },
          { text: "Carelessness and speeding", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING THROUGH A WORK ZONE, IT IS A GOOD SAFETY PRACTICE TO:",
        options: [
          { text: "Drive close to the vehicle in front of you to keep traffic flowing freely", isCorrect: false },
          { text: "Shorten your usual following distance - by about half", isCorrect: false },
          { text: "Turn on your cruise control", isCorrect: false },
          { text: "Lengthen your usual following distance- by double", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "ON TWO-LANE, TWO-WAY  STREETS ON HIGHWAYS, YOU SHOULD START LEFT TURNS:",
        options: [
          { text: "Close to the center line", isCorrect: true },
          { text: "Close to the outside line", isCorrect: false },
          { text: "In the center of the lane", isCorrect: false },
          { text: "Anywhere in the lane", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "TO TURN LEFT ON MULTI-LANE STREETS AND HIGHWAYS, YOU SHOULD START FROM:",
        options: [
          { text: "The middle of the intersection", isCorrect: false },
          { text: "The right lane", isCorrect: false },
          { text: "The left lane", isCorrect: true },
          { text: "Any lane", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "ON A TWO-LANE ROAD, YOU MAY PASS ANOTHER VEHICLE ON THE RIGHT WHEN:",
        options: [
          { text: "Driving on a single entrance ramp", isCorrect: false },
          { text: "The driver you are passing is travelling slower than the posted speed limit", isCorrect: false },
          { text: "Never", isCorrect: false },
          { text: "The driver you are passing is making a left turn", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "TO PASS A SLOWER-MOVING VEHICLE ON A TWO-LANE ROAD YOU MUST:",
        options: [
          { text: "Not cross the center line", isCorrect: false },
          { text: "Flash your lights to oncoming traffic", isCorrect: false},
          { text: "Use the shoulder", isCorrect: false },
          { text: "Use the lane that belongs to oncoming traffic", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THESE PAVEMENT MARKINGS TELL YOU THAT AT THE INTERSECTION AHEAD:",
        options: [
          { text: "Center lane traffic may go straight or turn left", isCorrect: true },
          { text: "You can only turn right", isCorrect: false },
          { text: "The center lane mergers into one lane", isCorrect: false },
          { text: "Center lane traffic must turn left", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg",  // Optional image URL
      },
      {
        questionText: "THE MOST IMPORTANT THING TO REMEMBER ABOUT SPEED MANAGMENT AND CURVES IS TO:",
        options: [
          { text: "Drive at the posted speed limit as you enter the curve, then slow down at the sharpest part of the curve", isCorrect: false },
          { text: "Slow down before you enter the drive", isCorrect: true },
          { text: "Accelerate gently before you enter the curve", isCorrect: false },
          { text: "Drive at the posted speed limit of the roadway, before, throughout, and after the curve", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "DRIVERS ENTERING A ROUNDABOUT OR TRAFFIC CIRCLE:",
        options: [
          { text: "Must stop before entering", isCorrect: false },
          { text: "Must yield to drivers in the roundabout or traffic circle", isCorrect: true },
          { text: "Have the right of way if they arive first", isCorrect: false },
          { text: "Have the right of way if there are two lanes", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE LAW GIVES ___ THE RIGHT OF WAY AT INTERESCTIONS.",
        options: [
          { text: "No one", isCorrect: true },
          { text: "Drivers turning left", isCorrect: false },
          { text: "Drivers going straight", isCorrect: false },
          { text: "Drivers turning right", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "AT AN INTERSECTION WITH A STOP SIGN, YOU SHOULD STOP AND",
        options: [
          { text: "Check your rearview mirror for cars tailgaiting", isCorrect: false },
          { text: "Go when the vehicle ahead of you goes", isCorrect: false },
          { text: "Look right first, then left, then right again", isCorrect: false },
          { text: "Look left first, then right, then left again", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "TO TURN LEFT ON MULTI-LANE STREETS AND HIGHWAYS, YOU SHOULD START FROM:",
        options: [
          { text: "The middle of the intersection", isCorrect: false },
          { text: "The right lane", isCorrect: false },
          { text: "The left lane", isCorrect: true},
          { text: "Any lane", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN ENTERING A HIGHWAY FROM AN ENTRANCE RAMP, YOU SHOULD GENERALLY:",
        options: [
          { text: "Enter above the speed of traffic to get ahead", isCorrect: false },
          { text: "Enter slowly to avoid other vehicles", isCorrect: false },
          { text: "Stop first, then slowly enter traffic", isCorrect: false },
          { text: "Accelerate to the speed of traffic", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN EXITING A HIGHWAY, YOU SHOULD SLOW DOWN:",
        options: [
          { text: "On the main road, just before the exit lane", isCorrect: false },
          { text: "Once you see the toil booth", isCorrect: false },
          { text: "Once you have moved into the exit lane", isCorrect: true },
          { text: "When you first see the exit sign", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING ON A FREEWAY ENTRANCE RAMP, YOU SHOULD LOOK FOR A GAP IN FREEWAY TRAFFIC BY:",
        options: [
          { text: "Looking in the inside rearview mirror only", isCorrect: false },
          { text: "Looking in the sideview mirror only", isCorrect: false },
          { text: "Looking in both rearview and sideview mirrors", isCorrect: false },
          { text: "Looking in your mirrors and turning your head to look over your shoulder", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU WANT TO GET OFF OF A FREEWAY, BUT YOU MISSED YOUR EXIT, YOU SHOULD:",
        options: [
          { text: "Go to the next exit, and get off of the freewat there", isCorrect: true },
          { text: "Make a U-turn through the median", isCorrect: false },
          { text: "Put onto the shoulder and back your car to the exit", isCorrect: false },
          { text: "Flag down a police officer for an escort back to your exit", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU ARE WAITING TO TURN LEFT AT A MULTILANE INTERSECTION, AND OPPOSING TRAFFIC IS BLOCKING YOUR VIEW, YOU SHOULD:",
        options: [
          { text: "Accelerate rapidly when the first lane you need to cross is clear", isCorrect: false },
          { text: "Wait until you can see all the lanes you need to cross before going ahead with your turn", isCorrect: true },
          { text: "Wait for the opposing driver to wave you across the intersection", isCorrect: false },
          { text: "Edge your car into each lane of opposing traffic as soon as it clears", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN NO SIGNS, SIGNALS OR POLICE TELL YOU WHAT TO DO AT AN INTERSECTION, THE LAW STATES THAT:",
        options: [
          { text: "Drivers on the right must yield to drivers on the left", isCorrect: false },
          { text: "There are no laws stating who must yield", isCorrect: false },
          { text: "Drivers going straight must yield to drivers turning left at an intersection", isCorrect: false },
          { text: "Drivers turning left must yield to drivers going straight through an intersection", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: `"HIGHWAY HYPNOSIS" IS A DRIVER CONDITION THAT CAN RESULT FROM:`,
        options: [
          { text: "Staring at the roadway for long periods of time", isCorrect: true },
          { text: "Frequent rest stops", isCorrect: false},
          { text: "Too much sleep the night before your trip", isCorrect: false },
          { text: "Short trips on expressways", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN PASSING ON MULTI-LANE HIGHWAYS:",
        options: [
          { text: "Be sure the passing lane is clear", isCorrect: true },
          { text: "Pass only on the right", isCorrect: false},
          { text: "Watch for oncoming traffic", isCorrect: false },
          { text: "There is no need to signal", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: `"THE "FOUR-SECOND RULE" REFERS TO HOW ONE SHOULD:`,
        options: [
          { text: "Yield to other cars", isCorrect: false },
          { text: "Turn at stop signs", isCorrect: false },
          { text: "Follow another car", isCorrect: true },
          { text: "Cross an intersection", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IT IS BEST TO KEEP A SPACE CUSHION:",
        options: [
          { text: "Only in back of your vehicle ", isCorrect: false },
          { text: "Only on the left and right side of the vehicle", isCorrect: false },
          { text: "Only in front of the vehicle", isCorrect: false },
          { text: "On all sides of the vehicle", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "ALLOWING A SPACE CUSHION IS IMPORTANT BECAUSE IT:",
        options: [
          { text: "Prevents distractions from other vehicles", isCorrect: false },
          { text: "Allow you time to react to situations", isCorrect: true },
          { text: "Keeps traffic flowing at a safe space", isCorrect: false },
          { text: "Keep other drivers apart", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "ALLOW A LARGER SPACE CUSHION WHEN STOPPING:",
        options: [
          { text: "On an up-hill", isCorrect: true },
          { text: "At an intersection", isCorrect: false },
          { text: "At a stop sign", isCorrect: false },
          { text: "At a toll plaza", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN MAKING A TURN, YOU MUST ___ YOUR SPEED:",
        options: [
          { text: "Increase", isCorrect: false },
          { text: "Maintain", isCorrect: false },
          { text: "Vary", isCorrect: false },
          { text: "Reduce", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING IN TRAFFIC, IT IS SAFEST TO:",
        options: [
          { text: "Fluctuate your speed to keep alert", isCorrect: false },
          { text: "Driver faster than the flow of traffic", isCorrect: false },
          { text: "Drive slower than the flow of traffic", isCorrect: false },
          { text: "Drive with the flow of traffic", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE MAXIMUM SPEED LIMIT IN THIS STATE IS ___ MILES PER HOUR:",
        options: [
          { text: "55", isCorrect: false },
          { text: "50", isCorrect: false },
          { text: "70", isCorrect: true },
          { text: "60", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "DRIVE BELOW THE POSTED SPEED LIMIT WHEN:",
        options: [
          { text: "Anything makes conditions less than perfect", isCorrect: true },
          { text: "Others drive below the speed limit", isCorrect: false },
          { text: "Entering a highway where there are other cars", isCorrect: false },
          { text: "You are on a four lane road", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE AMOUNT OF SPACE YOU NEED TO CROSS TRAFFIC DEPENDS ON THE:",
        options: [
          { text: "Road and weather conditions and oncoming traffic", isCorrect: true },
          { text: "Presence of a stop sign", isCorrect: false },
          { text: "Use of your turn signals", isCorrect: false },
          { text: "Cars behind you", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOUR ABILITY TO STOP IS AFFECTED BY:",
        options: [
          { text: "Signal lights", isCorrect: false },
          { text: "Other cars on the road", isCorrect: false},
          { text: "The time of day", isCorrect: false },
          { text: "The condition of the road", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHICH OF THE FOLLOWING IS TRUE ABOUT THE SPEED OF WHICH YOU TRAVEL:",
        options: [
          { text: "The safe speed to drive depends on many conditions", isCorrect: true },
          { text: "Driving slowly is always safer", isCorrect: false },
          { text: "The speed limit is always a safe speed", isCorrect: false },
          { text: "Accelerating is always dangerous", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "TO PREPARE FOR ANYTHING COMING UP IN THE ROAD AHEAD, YOU SHOULD:",
        options: [
          { text: "Continually scan the entire road and roadsides", isCorrect: true },
          { text: "Stare straight ahead at all times", isCorrect: false },
          { text: "Drive with your left foot resting lightly on the break pedal", isCorrect: false },
          { text: "Maintain focus toward the middle of the road", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "AT HIGHWAY SPPEDS, ON A DRY ROAD, A SAFE FOLLOWING DISTANCE IS AT LEAST:",
        options: [
          { text: "3 seconds of following distance from the car ahead of you", isCorrect: false },
          { text: "2 seconds of following distance from the car ahead of you", isCorrect: true },
          { text: "4 seconds of following distance from the car ahead of you", isCorrect: false },
          { text: "2 car lengths of following distance from the car ahead of you", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: `WHAT CAN YOU DO TO AVOID THE NEED TO MAKE EMERGENCY(OR "PANIC") STOPS WHILE DRIVING IN TRAFFIC?`,
        options: [
          { text: "Honk your horn to make others aware of your presence", isCorrect: false },
          { text: "Look ahead and maintain a safe following distance", isCorrect: true },
          { text: "Drive in the right lane only", isCorrect: false },
          { text: "Drive slower in the flow of traffic", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN FACED WITH ONE ONCOMING CAR TO THE LEFT AND A BICYCLIST TO THE RIGHT, YOU SHOULD:",
        options: [
          { text: "Pull onto the shoulder", isCorrect: false },
          { text: "Split the difference", isCorrect: false },
          { text: "Let the car pass and then pass the bike", isCorrect: true },
          { text: "Pass the bike quickly", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF AN ONCOMING DRIVER IS HEADING TOWARD YOU IN YOUR LANE, YOU SHOULD:",
        options: [
          { text: "Steer right, blow your horn, and accelerate", isCorrect: false },
          { text: "Steer left, blow your horn, and brake", isCorrect: false},
          { text: "Steer right, blow your horn, and brake", isCorrect: true },
          { text: "Stay in the center of your lane, blow your horn, and brake", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF THE REAR OF YOUR VEHICLE STARTS TO SKID LEFT, YOU SHOULD:",
        options: [
          { text: "Steer left", isCorrect: true },
          { text: "Hit your breaks", isCorrect: false },
          { text: "Accelerate", isCorrect: false },
          { text: "Steer right", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE MOST EFFECTIVE THING YOU CAN DO TO REDUCE YOUR RISK OF GETTING INJURED OR KILLED IN A TRAFFIC CRASH:",
        options: [
          { text: "Wear your seatbelt", isCorrect: true },
          { text: "Limit your driving to week days", isCorrect: false },
          { text: "Stay in the right lane to multi-lane highways", isCorrect: false },
          { text: "Limit your driving to times between 3:00pm and 6:00pm", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING ON SLICK ROADS, YOU SHOULD:",
        options: [
          { text: "Take turns more slowly", isCorrect: true },
          { text: "Change lanes quickly", isCorrect: false},
          { text: "Accelerate quickly", isCorrect: false },
          { text: "Brake hard", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHICH OF THE FOLLOWING IS TRUE ABOUT DRIVING ON A WET ROADWAY:",
        options: [
          { text: "As you drive faster, your tires become less effective", isCorrect: true },
          { text: "Water does not affect cars with good tires", isCorrect: false },
          { text: "Deeper water is less dangerous", isCorrect: false },
          { text: "As you decrease your speed, the roadway becomes more slippery", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING ON WET ROADS YOU SHOULD:",
        options: [
          { text: "Drive the speed limit", isCorrect: false },
          { text: "Drive slightly faster than the speed limit", isCorrect: false},
          { text: "Drive 5 to 10 miles below the speed limit", isCorrect: true },
          { text: "Stay close to the vehicle ahead", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING ON SLIPPERY ROADS, YOU SHOULD:",
        options: [
          { text: "Use alternate routes", isCorrect: false },
          { text: "Drive as you would on dry roads", isCorrect: false },
          { text: "Increase your following distance", isCorrect: true},
          { text: "Avoid crossing at bridges or intersections", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING ON WET ROADS, YOU SHOULD:",
        options: [
          { text: "Increase following distance to 5 or 6 seconds", isCorrect: true },
          { text: "Decrease following distance to 2 seconds", isCorrect: false },
          { text: "Not be concerned about following distance", isCorrect: false },
          { text: "Maintain the 4-second follwing distance rule", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "ROADS FREEZE MORE QUICKLY WHEN THEY ARE:",
        options: [
          { text: "Flat", isCorrect: false },
          { text: "Curvy", isCorrect: false},
          { text: "In the sun", isCorrect: false },
          { text: "Shaded", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "ROADS BECOME MORE SLIPPERY:",
        options: [
          { text: "When it has been raining for an hour or more", isCorrect: false },
          { text: "The day after it rains", isCorrect: false },
          { text: "For the fist 10 or 15 minutes of a rain storm", isCorrect: true },
          { text: "Right after the rain has stopped", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "HYDROPLANING IS USUALLY CAUSED BY:",
        options: [
          { text: "Excessive stops", isCorrect: false },
          { text: "Sudden stops", isCorrect: false},
          { text: "Sudden turns", isCorrect: false },
          { text: "Excessive speed", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "HYDROPLANING CAN BE HELPED BY DRIVING:",
        options: [
          { text: "Through shallow water", isCorrect: false },
          { text: "Faster", isCorrect: false },
          { text: "Slower", isCorrect: true },
          { text: "Through deep watter", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING IN FOG, YOU SHOULD USE YOUR ___:",
        options: [
          { text: "Low beam headlights", isCorrect: true },
          { text: "High beam headlights", isCorrect: false },
          { text: "Parking lights", isCorrect: false },
          { text: "Hazard flashers", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "COMPARED TO DRIVING DURING THE DAY, DRIVING AT NIGHT IS:",
        options: [
          { text: "Less dangerous", isCorrect: false },
          { text: "More dangerous", isCorrect: false},
          { text: "No more or less dangerous", isCorrect: true},
          { text: "Easier on your eyes", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "ANYTHING THAT REQUIRES YOU TO ___ COULD CAUSE YOU TO CRASH.",
        options: [
          { text: "Take your eyes off the road", isCorrect: false },
          { text: "Takes your hands off the wheel", isCorrect: false },
          { text: "Take your attention away from the driving task", isCorrect: false },
          { text: "All of the above", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "DISTRACTED DRIVERS ARE AT A GREATER RISK OF A CRASH WHEN THEY ARE USING WHICH OF THE FOLLOWING:",
        options: [
          { text: "CD Player", isCorrect: false },
          { text: "Radio", isCorrect: false},
          { text: "Cell Phone", isCorrect: false },
          { text: "All of the above", isCorrect: true},
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU ARE IN A LINE OF TRAFFIC THAT IS CROSSING A RAILROAD TRACK THAT HAS NO SIGNALS OR GATES:",
        options: [
          { text: "You have the right of way and do not need to check for trains", isCorrect: false },
          { text: "You may pass slower drivers crossing the track", isCorrect: false },
          { text: "You need to make sure there is space to get all the way across the tracks without stopping, before you start to cross", isCorrect: true },
          { text: "All of the above", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN APPROACHING A STOPPED SCHOOL BUS WITH ITS RED LIGHTS FLASHING AND ITS STOP ARM EXTENDED, YOU MUST:",
        options: [
          { text: "Stop 5 feet away from the bus", isCorrect: false },
          { text: "Stop only if you see children are present", isCorrect: false },
          { text: "Stop and remain stopped until it appears safe to proceed", isCorrect: false },
          { text: "Stop and remain stopped until the red lights stop flashing and the stop arm has been withdrawn", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU SEE THIS SIGN, YOU MUST:",
        options: [
          { text: "Stop completely, check for pedestrians, and cross traffic", isCorrect: true },
          { text: "Slow down without coming to a complete stop", isCorrect: false },
          { text: "Slow down completely and wait for a green light", isCorrect: false },
          { text: "Slow down and check for traffic", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS IS THE SHAPE AND COLOR OF A ___ SIGN:",
        options: [
          { text: "Stop", isCorrect: false },
          { text: "Wrong way", isCorrect: false },
          { text: "Yield", isCorrect: true },
          { text: "Do not enter", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGN MEANS:",
        options: [
          { text: "Stop", isCorrect: false },
          { text: "No U-turn", isCorrect: false },
          { text: "Yield ", isCorrect: false },
          { text: "Do not enter", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGN MEANS:",
        options: [
          { text: "No U-turn", isCorrect: true},
          { text: "No left turn", isCorrect: false },
          { text: "No right turn", isCorrect: false },
          { text: "No turning", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGN MEANS:",
        options: [
          { text: "No U-turn", isCorrect: false },
          { text: "No left turn", isCorrect: false },
          { text: "No right turn", isCorrect: true },
          { text: "No turning", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGN MEANS:",
        options: [
          { text: "You must turn left or right", isCorrect: false },
          { text: "You are approaching a T-intersection", isCorrect: false },
          { text: "The road that you are on intersects with a divided highway", isCorrect: true },
          { text: "Designates an overpass above a divided highway", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOU NEED TO USE EXTRA CAUTION WHEN DRIVING NEAR A PEDESTRIAN USING A WHITE CANE BECAUSE:",
        options: [
          { text: "They are deaf", isCorrect: false },
          { text: "They have a mental disability", isCorrect: false },
          { text: "They are blind", isCorrect: true },
          { text: "They have a walking problem", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING NEAR A BLIND PEDESTRIAN WHO IS CARRYING A WHITE CANE OR USING A GUIDE DOG, YOU SHOULD:",
        options: [
          { text: "Slow down and be prepared to stop", isCorrect: true },
          { text: "Take the right-of-way", isCorrect: false },
          { text: "Proceed normally", isCorrect: false },
          { text: "Drive away quickly", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },  
      {
        questionText: "IF THERE ARE NO SIGNALS AT RAILROAD CROSSINGS, YOU SHOULD:",
        options: [
          { text: "Slow down and prepare to stop if you see or hear a train approaching", isCorrect: true },
          { text: "Proceed as quickly as possible over the tracks", isCorrect: false },
          { text: "Proceed through the crossing at a normal rate", isCorrect: false },
          { text: "Proceed slowly over the tracks", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOU MAY DRIVE AROUND THE GATES AT A RAILROAD CROSSING:",
        options: [
          { text: "When the train has passed", isCorrect: false },
          { text: "Never", isCorrect: true },
          { text: "When the lights have stopped flashing", isCorrect: false },
          { text: "When other drivers drive around the gates", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU SEE THIS SIGN ABOVE YOUR LANE, YOU:",
        options: [
          { text: "May not exit the freeway in this lane", isCorrect: false },
          { text: "May continue through the interchange or exit the freeway in this lane", isCorrect: false },
          { text: "May stay in this lane and continue through the interchange", isCorrect: false },
          { text: "Must exit the freeway if you stay in this lane", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "HIGHWAY AND EXPRESSWAY GUIDE SIGNS ARE:",
        options: [
          { text: "Orange with black letters", isCorrect: false },
          { text: "Green with white letters", isCorrect: true },
          { text: "Yellow with black letters", isCorrect: false },
          { text: "Red with white letters", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGNED IS USED TO WARN DRIVERS ABOUT:",
        options: [
          { text: "Upcoming intersections", isCorrect: false },
          { text: "Road construction", isCorrect: false },
          { text: "Road curves ahead", isCorrect: true },
          { text: "Changes in traffic lanes", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGN TELLS YOU THAT:",
        options: [
          { text: "No turns are allowed on this road", isCorrect: false },
          { text: "The road narrows ahead", isCorrect: false },
          { text: "There are a series of curves ahead", isCorrect: true },
          { text: "The road may be slippery when wet", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGN MEANS:",
        options: [
          { text: "Left curve ahead", isCorrect: false },
          { text: "Series of curves", isCorrect: false },
          { text: "S curved ahead", isCorrect: false },
          { text: "Slippery when wet", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGN INDICATES THAT:",
        options: [
          { text: "There is a steep hill ahead", isCorrect: true },
          { text: "No trucks are allowed on the hill", isCorrect: false },
          { text: "A logging road is ahead", isCorrect: false },
          { text: "There are trucks on the hill", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "A YELLOW AND BLACK DIAMOND-SHAPED SIGN:",
        options: [
          { text: "Warns you about conditions on or near the road", isCorrect: true },
          { text: "Helps direct you to cities or towns ahead", isCorrect: false },
          { text: "Tells you about traffic laws and regulations", isCorrect: false },
          { text: "Tells you about road constructions ahead", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE SIGN WITH THIS SHAPE AND COLOR IS A ___ SIGN:",
        options: [
          { text: "No passing zone", isCorrect: true },
          { text: "Wrong way", isCorrect: false },
          { text: "Railroad crossing", isCorrect: false },
          { text: "Stop", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHICH OF THESE SIGNS IS USED TO SHOW THE END OF A DIVIDED HIGHWAY:",
        options: [
          { text: "2", isCorrect: true },
          { text: "4", isCorrect: false },
          { text: "3", isCorrect: false },
          { text: "1", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGN IS USED TO WARN DRIVERS ABOUT:",
        options: [
          { text: "Lane ends, merge left", isCorrect: true },
          { text: "Road curves ahead", isCorrect: false },
          { text: "Right turn", isCorrect: false },
          { text: "Lane change", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGN SHOWS ONE TYPE OF:",
        options: [
          { text: "Right turn", isCorrect: false },
          { text: "Intersection", isCorrect: true },
          { text: "Lane change", isCorrect: false },
          { text: "Road curve", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGN SHOWS ONE TYPE OF:",
        options: [
          { text: "Right turn", isCorrect: false },
          { text: "Intersection", isCorrect: true },
          { text: "Lane change", isCorrect: false },
          { text: "Road curve", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHAT SHOULD YOU BE THE MOST CONCERNED ABOUT WHEN YOU SEE THIS SIGN:",
        options: [
          { text: "Driving with your headlights out of alignment because one side of your car is higher than the other", isCorrect: false },
          { text: "Damaging a tire, if you drift onto the shoulder", isCorrect: false },
          { text: "Hydroplaning, if the shoulder has water on it", isCorrect: false },
          { text: "Losing control of your vehicle, if you drift onto the shoulder, because of a drop off", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHAT IS THE MEANING OF THIS SIGN:",
        options: [
          { text: "The traffic signal ahead is red", isCorrect: false },
          { text: "The traffic signal ahead is broken", isCorrect: false },
          { text: "The traffic signal ahead is green", isCorrect: false },
          { text: "There is a traffic signal ahead", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGN MEANS:",
        options: [
          { text: "Divided highway ends", isCorrect: false },
          { text: "One-way street begins", isCorrect: false },
          { text: "One-way street ends", isCorrect: false },
          { text: "Divided highway begins", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "FROM TOP TO BOTTOM, THE FOLLOWING IS THE PROPER ORDER FOR TRAFFIC LIGHTS:",
        options: [
          { text: "Red, yellow, green", isCorrect: true },
          { text: "Red, green, yellow", isCorrect: false },
          { text: "Green, red, yellow", isCorrect: false },
          { text: "Green, yellow, red", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF A GREEN ARROW TURNS INTO A GREEN LIGHT, YOU:",
        options: [
          { text: "May still turn but you must yield to oncoming traffic", isCorrect: true },
          { text: "May no longer turn and must proceed straight", isCorrect: false },
          { text: "Still have the right of way to turn", isCorrect: false },
          { text: "No longer have to turn the way the arrow indicates", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "A STEADY YELLOW LIGHT AT AN INTERSECTIONS MEANS:",
        options: [
          { text: "Go", isCorrect: false },
          { text: "Yield to other cars", isCorrect: false },
          { text: "Slow down and prepare to stop", isCorrect: true },
          { text: "Stop", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "A FLASHING YELLOW ARROW MEANS THAT YOU:",
        options: [
          { text: "Slow down and proceed with care", isCorrect: false },
          { text: "Continue through if the way is clear", isCorrect: false },
          { text: "Stop and proceed when a green light appears", isCorrect: true },
          { text: "Stop and proceed when the way is clear", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "A FLASHING YELLOW LIGHT MEANS THAT YOU SHOULD:",
        options: [
          { text: "Slow down and proceed with care", isCorrect: true },
          { text: "Continue through if the way is clear", isCorrect: false },
          { text: "Stop and proceed when a green light appears", isCorrect: false },
          { text: "Stop and proceed when the way is clear", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOU MUST STOP WHEN YOU SEE:",
        options: [
          { text: "Flashing red light", isCorrect: true },
          { text: "Steady yellow light", isCorrect: false },
          { text: "Yellow arrow", isCorrect: false },
          { text: "Flashing yellow light", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "A STEADY GREEN LIGHT AT AN INTERSECTION MEANS THAT YOU:",
        options: [
          { text: "Must slow down and prepare to stop", isCorrect: false },
          { text: "Must stop and check for oncoming traffic before proceeding", isCorrect: false },
          { text: "May drive through the intersection if the road is clear", isCorrect: true },
          { text: "May not turn right", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "A STEADY YELLOW LIGHT MEANS THAT A ___ LIGHT WILL SOON APPEAR:",
        options: [
          { text: "Flashing yellow", isCorrect: false },
          { text: "Steady green", isCorrect: false },
          { text: "Steady red", isCorrect: true },
          { text: "Flashing red", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOU MAY CONTINUE CAREFULLY THROUGH A YELLOW LIGHT IF:",
        options: [
          { text: "There is an emergency vehicle crossing your lane", isCorrect: false },
          { text: "There are no pedestrians crossing", isCorrect: false },
          { text: "You are turning right", isCorrect: true },
          { text: "You are within the intersection", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOU MAY TURN LEFT AT A RED LIGHT IF:",
        options: [
          { text: "There is an emergency vehicle coming in the opposite direction", isCorrect: false },
          { text: "You are turning from a two-way street onto a one-way street", isCorrect: false },
          { text: "You are turning from a one-way street onto another one-way street", isCorrect: true },
          { text: "The car in front of you turns left", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "IF A TRAFFIC LIGHT IS BROKEN OR NOT FUNCTIONING YOU SHOULD:",
        options: [
          { text: "Stop and wait for it to be repaired", isCorrect: false },
          { text: "Stop and wait for a police officer to arrive", isCorrect: false },
          { text: "Continue as if it were a four-way stop sign", isCorrect: true },
          { text: "Continue as you normally would", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOU MAY TURN RIGHT ON RED IF YOU:",
        options: [
          { text: "Stop first and check for traffic and pedestrians", isCorrect: true },
          { text: "Have a right turn red arrow", isCorrect: false },
          { text: "Are in the left lane", isCorrect: false },
          { text: "Slow down first", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN MAKING A RIGHT TURN ON A GREEN LIGHT, YOU MUST:",
        options: [
          { text: "Maintain normal driving speed", isCorrect: false },
          { text: "Stop and look for oncoming traffic", isCorrect: false },
          { text: "Yield to pedestrians", isCorrect: true },
          { text: "Increase your normal driving speed", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE SPEED LIMIT IS ___ MILES PER HOUR WHEN THE YELLOW LIGHTS ARE FLASHING ON THE SCHOOL ZONE SPEED SIGN.",
        options: [
          { text: "25", isCorrect: false },
          { text: "15", isCorrect: true },
          { text: "20", isCorrect: false },
          { text: "35", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "A FLASHING RED LIGHT AT A RAILROAD CROSSING MEANS:",
        options: [
          { text: "Stop, do not proceed until signals are completed", isCorrect: true },
          { text: "Slow down and proceed if clear", isCorrect: false },
          { text: "Proceed with caution", isCorrect: false },
          { text: "You have the right-of-way", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS GREEN ARROW ON A LANE USE CONTROL SIGNAL MEANS THAT:",
        options: [
          { text: "You may use this lane", isCorrect: true },
          { text: "No traffic is allowed on this lane", isCorrect: false },
          { text: "You have the right-of-way", isCorrect: false },
          { text: "You must merge into this lane", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGN MEANS:",
        options: [
          { text: "Pedestrians ahead", isCorrect: false },
          { text: "End of construction zone", isCorrect: false },
          { text: "School crossing ahead", isCorrect: false },
          { text: "Flagger ahead", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THIS SIGN MEANS THAT:",
        options: [
          { text: "A community service group is picking up trash along the highway ahead", isCorrect: false },
          { text: "Workers are on or very close to the road in the work zone ahead", isCorrect: true },
          { text: "Children are at play ahead", isCorrect: false },
          { text: "There is a pedestrian crosswalk ahead", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN AN ARROW PANEL IN A WORK ZONE SHOWS EITHER OF THE FOLLOWING PATTERNS, IT MEANS:",
        options: [
          { text: "The bulbs on the sign are burned out", isCorrect: false },
          { text: "Drive with caution", isCorrect: true },
          { text: "Changes lanes immediately", isCorrect: false },
          { text: "Turn your radio on to a station that gives traffic updates", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE CENTER LANE IN THE ILLUSTRATION IS USED FOR:",
        options: [
          { text: "Regular travel", isCorrect: false },
          { text: "Left turns only", isCorrect: true },
          { text: "Passing only", isCorrect: false },
          { text: "Emergency vehicles only", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOU MAY PASS IF THE LINE DIVIDING TWO LANES IS A ___ LINE.",
        options: [
          { text: "Broken white", isCorrect: true },
          { text: "Double solid yellow", isCorrect: false },
          { text: "Solid yellow", isCorrect: false },
          { text: "Solid white", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "LANES OF TRAFFIC MOVING IN THE SAME DIRECTION ARE DIVIDED BY ___ LINES.",
        options: [
          { text: "Yellow", isCorrect: false },
          { text: "White", isCorrect: true },
          { text: "Red", isCorrect: false },
          { text: "Black", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOU MAY NOT PASS ANOTHER CAR ON EITHER SIDE OF A ___ CENTERLINE:",
        options: [
          { text: "Combination solid and broken yellow", isCorrect: false },
          { text: "Single broken yellow", isCorrect: false },
          { text: "Double solid yellow", isCorrect: true },
          { text: "Single broken white", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "YOU MAY CROSS SOLID YELLOW LINES:",
        options: [
          { text: "To pass traffic moving in the same direction", isCorrect: false },
          { text: "During daylight hours only", isCorrect: false },
          { text: "At any time", isCorrect: false },
          { text: "When making turns", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE ROAD EDGE ON THE RIGHT SIDE IS MARKED BY A ___ LINE:",
        options: [
          { text: "Broken white", isCorrect: false },
          { text: "Solid yellow", isCorrect: false },
          { text: "Solid white", isCorrect: true },
          { text: "Broken yellow audio", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },  
      {
        questionText: "LANES OF TRAFFIC MOVING IN THE OPPOSITE DIRECTION ARE DIVIDED BY ___ LINES.",
        options: [
          { text: "White", isCorrect: false },
          { text: "Red", isCorrect: false },
          { text: "Black", isCorrect: false },
          { text: "Yellow", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHN YOU SEE THIS BLACK AND YELLOW SIGN, IT MEANS:",
        options: [
          { text: "The road to the right is for one-way traffic only", isCorrect: false },
          { text: "Detour to the right because of road construction", isCorrect: false },
          { text: "Slow down because the road ahead changes direction at an extreme angle", isCorrect: true },
          { text: "There is a cross road ahead to the right", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU SEE THIS SIGN, IT MEANS:",
        options: [
          { text: "There is an object on the roadway", isCorrect: false },
          { text: "Traffic is coming from the right", isCorrect: false },
          { text: "The road is curving sharply to the left", isCorrect: true },
          { text: "There is a merge point ahead", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "AT AN INTERSECTION  CONTROLLED BY A STOP SIGN, IF YOU CAN'T GET A GOOD VIEW OF CROSS-STREET TRAFFIC WHEN YOU STOP BEHIND THE WHITE TOP BAR PAINTED ON THE PAVEMENT, YOU SHOULD:",
        options: [
          { text: "Wait 5 seconds, then proceed", isCorrect: false },
          { text: "Sound your horn before procedding", isCorrect: false },
          { text: "Put down your windows, listen for traffic, and then proceed", isCorrect: false },
          { text: "Pull forward slowly, check for traffic and pedestrians, and proceed when clear", isCorrect: true },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "THE POSTED SPEED LIMITS SHOW:",
        options: [
          { text: "The minimum legal speed limit", isCorrect: false },
          { text: "The exact speed at which you must travel to avoid a ticket", isCorrect: false },
          { text: "The maximum safe speed under ideal road and weather conditions", isCorrect: true },
          { text: "The maximum safe speed under all road conditions", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "A HIGHWAY WITH TWO-WAY TRAFFIC IS MARKED BY WHICH OF THESE SIGNS?",
        options: [
          { text: "1", isCorrect: false },
          { text: "2", isCorrect: false },
          { text: "3", isCorrect: true },
          { text: "4", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "FROM THE CENTER LANE, WHAT MANEUVERS CAN YOU PERFORM?",
        options: [
          { text: "Make left turns", isCorrect: true },
          { text: "Make U-turns", isCorrect: false },
          { text: "Pass slower-moving traffic", isCorrect: false },
          { text: "All of the above", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },
      {
        questionText: "WHICH OF THESE SIGNS MEANS THAT DRIVERS SHOULD KEEP TO THE RIGHT?",
        options: [
          { text: "2", isCorrect: true },
          { text: "1", isCorrect: false },
          { text: "3", isCorrect: false },
          { text: "4", isCorrect: false },
        ],
        imageUrl: "data/images/black.jpg", // Optional image URL
      },




   

  ];

  //Client side js export syntax
  export default quizQuestions