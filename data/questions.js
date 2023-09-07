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
        questionText: "IF YOU NEED TO SLOW DOWN OR STOP WHEN OTHER DRIVERS MAY NOT EXPECT IT, YOU SHOULD:",
        options: [
          { text: "Quickly tap your break pedal a few times", isCorrect: false },
          { text: "Use you emergency break", isCorrect: true },
          { text: "Look over your shoulder for traffic in your blind spot", isCorrect: false },
          { text: "Get ready to blow your horn", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU ARE PLANNING TO MAKE A TURN, YOU SHOULD ACTIVATE YOUR TURN SIGNALS:",
        options: [
          { text: "Only if there are other drivers following you", isCorrect: false },
          { text: "Just as the front of your car reaches the intersection", isCorrect: true },
          { text: "3 to 4 seconds before you reach the intersection", isCorrect: false },
          { text: "2 car lengths before reaching the intersection", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "BEFORE PASSING ANOTHER VEHICLE YOU SHOULD:",
        options: [
          { text: "flash your headlights to alert the driver", isCorrect: false },
          { text: "Turn on your four-way flashers to warn the driver", isCorrect: true },
          { text: "Give the proper turn signal to show you are changing lanes", isCorrect: false },
          { text: "Sound your horn to get the drivers attention", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "YOUR BLIND SPOT IS THE AREA OF THE ROAD:",
        options: [
          { text: "You cannot see without moving your head", isCorrect: false },
          { text: "Directly behind the vehicle", isCorrect: true },
          { text: "You see in your rearview mirror", isCorrect: false },
          { text: "You see in your side mirror", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "BEFORE PASSING ANOTHER VEHICLE, YOU SHOULD SIGNAL:",
        options: [
          { text: "Just before changing lanes", isCorrect: false },
          { text: "At any time", isCorrect: true },
          { text: "After changing lanes", isCorrect: false },
          { text: "Early enough so others know your plans", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "BEFORE CHANGING LANES ON A MULTI-LANE HIGHWAY YOU SHOULD:",
        options: [
          { text: "Sound your horn", isCorrect: false },
          { text: "Turn on your headlights", isCorrect: true },
          { text: "Reduce your speed", isCorrect: false },
          { text: "Check your mirrors and blind spots", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU PARK ON THE ROADWAY, YOU SHOULD:",
        options: [
          { text: "Use your four-way flashers", isCorrect: false },
          { text: "Park at an angle", isCorrect: true },
          { text: "Keep your turn signal on", isCorrect: false },
          { text: "Turn your lights on", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "BEFORE BACKING UP, YOU SHOULD:",
        options: [
          { text: "Rely on your mirrors to see if it is clear to proceed", isCorrect: false },
          { text: "Flash your lights", isCorrect: true },
          { text: "Open your door to see if it is clear to proceed", isCorrect: false },
          { text: "Turn your head and look through the rear window", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "TO HELP AVOID CRASHES, YOU SHOULD:",
        options: [
          { text: "Communicate with other drivers on the road", isCorrect: false },
          { text: "Ignore other drivers on the road", isCorrect: true },
          { text: "Drive on side streets and back roads", isCorrect: false },
          { text: "Avoid driving during rush hour", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "THE DRIVER IS:",
        options: [
          { text: "Slowing or stopping", isCorrect: false },
          { text: "Turning left", isCorrect: true },
          { text: "Turning right", isCorrect: false },
          { text: "Opening their door", isCorrect: false },
        ],
        imageUrl: ""FALI SLIKA, // Optional image URL
      },
      {
        questionText: "IF YOUR TURN SIGNALS FAIL, YOU SHOULD USE ___ TO INDICATE YOU ARE TURNING",
        options: [
          { text: "Your horn", isCorrect: false },
          { text: "Your headlights", isCorrect: true },
          { text: "Sound your horn to warn others", isCorrect: false },
          { text: "Use your four-way flashers", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN TRAVELLING BELOW 40 MILES AN HOUR ON A LIMITED ACCESS HIGHWAY, YOU SHOULD:",
        options: [
          { text: "Drive on the shoulder", isCorrect: false },
          { text: "Use your high beams", isCorrect: true },
          { text: "Sound your horn to warn others", isCorrect: false },
          { text: "Use your four-way flashers", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "YOU SHOULD HONK YOUR HORN WHEN YOU:",
        options: [
          { text: "Are travelling through an intersection", isCorrect: false },
          { text: "Are passing a bicylist", isCorrect: true },
          { text: "See a child who is about to run into the street", isCorrect: false },
          { text: "Are parallel parking", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "YOU MUST USE YOUR HEADLIGHTS WHEN OTHER VEHICLES ARE NOT VISIBLE FROM ___ FEET AWAY:",
        options: [
          { text: "1000", isCorrect: false },
          { text: "1500", isCorrect: true },
          { text: "1800", isCorrect: false },
          { text: "1200", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF A VEHICLE USING HIGH BEAMS COMES TOWARDS YOU, YOU SHOULD LOOK TOWARDS ___ OF THE ROAD:",
        options: [
          { text: "Either side", isCorrect: false },
          { text: "The center", isCorrect: false },
          { text: "The right", isCorrect: true},
          { text: "The left", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF A VEHICLE USING HIGH BEAMS COMES TOWARD YOU, YOU SHOULD:",
        options: [
          { text: "Turn on your high beams", isCorrect: false },
          { text: "Turn off your headlights", isCorrect: false },
          { text: "Sound your horn", isCorrect: false},
          { text: "Flash your high beams", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "YOU MAY HONK YOUR HORN WHEN YOU:",
        options: [
          { text: "Have to stop quickly", isCorrect: false },
          { text: "Are passing another car", isCorrect: false},
          { text: "Have lost control of your car", isCorrect: true },
          { text: "Are passing a bicylist", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "YOUR BRAKE LIGHTS TELL OTHER DRIVERS THAT YOU:",
        options: [
          { text: "Are making a turn", isCorrect: false },
          { text: "Have an emergency break on", isCorrect: false},
          { text: "Are changing lanes", isCorrect: false },
          { text: "Are slowing down or stopping", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "BEFORE TURNING YOU SHOULD:",
        options: [
          { text: "Use your signal", isCorrect: true },
          { text: "Turn the wheel", isCorrect: false },
          { text: "Increase your speed", isCorrect: false },
          { text: "Change lanes", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "THE DRIVER IS:",
        options: [
          { text: "Turning left", isCorrect: false },
          { text: "Slowing", isCorrect: false},
          { text: "Stopping", isCorrect: false },
          { text: "Turning right", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg" FALI SLIKA, // Optional image URL
      },
      {
        questionText: "THE DRIVER IS:",
        options: [
          { text: "Turning left", isCorrect: true},
          { text: "Stopping", isCorrect: false },
          { text: "Slowing", isCorrect: false },
          { text: "Turning right", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg" FALI SLIKA, // Optional image URL
      },
      {
        questionText: "IF ANOTHER CAR IS IN DANGER OF HITTING YOU, YOU SHOULD:",
        options: [
          { text: "Sound your horn", isCorrect: true},
          { text: "Wave your arms", isCorrect: false },
          { text: "Use your emergency lights", isCorrect: false },
          { text: "Flash your headlights", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU BEGIN TO FEEL TIRED WHILE DRIVING, THE BEST THING TO DO IS:",
        options: [
          { text: "Get some coffee", isCorrect: false },
          { text: "Open your window", isCorrect: false },
          { text: "Stop driving", isCorrect: true},
          { text: "Turn on the radio", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "THE EFFECT THAT LACK OF SLEEP HAS ON YOUR SAFE DRIVING ABILITY IS THE SAME AS:",
        options: [
          { text: "The same that alcohol has", isCorrect: true},
          { text: "The effect that amphatemanes have", isCorrect: false },
          { text: "The effect that anger has", isCorrect: false },
          { text: "The effect that driving with teenagers has", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "TEENAGERS SHOULD TRY TO GET AT LEAST ___ OF SLEEP EACH NIGHT TO AVOID THE RISK OF DROWSY DRIVING CRASHES.",
        options: [
          { text: "7 hours", isCorrect: false },
          { text: "6 hours", isCorrect: false },
          { text: "8 hours", isCorrect: true},
          { text: "9 hours", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF ANOTHER DRIVERS CUTS YOU OFF IN TRAFFIC, YOU SHOULD:",
        options: [
          { text: "Pull next to the driver and yell at him or her", isCorrect: false },
          { text: "Ignore the other driver", isCorrect: true },
          { text: "Flash your high beams at the driver", isCorrect: false },
          { text: "Get back at the other driver by cutting him or her off", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF SOMEONE IS DRIVING AGGRESSIVELY BEHIND YOU, YOU SHOULD:",
        options: [
          { text: "Try to get out of the agressive driver's way", isCorrect: true },
          { text: "Stare at the driver as they are passing you", isCorrect: false },
          { text: "Speed up as they are passing you", isCorrect: false },
          { text: "Block the passing lane", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "FOR AN AVERAGE PERSON, HOW MANY MINUTES DOES THE BODY NEED TO PROCESS THE ALCOHOL IN ONE DRINK?",
        options: [
          { text: "15", isCorrect: false },
          { text: "60", isCorrect: true },
          { text: "90", isCorrect: false },
          { text: "30", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "___ LIMIT(S) YOUR CONCENTRATION, PERCEPTION, JUDGMENT AND MEMORY.",
        options: [
          { text: "Only a blood alcohol level greater than the legal limit", isCorrect: false },
          { text: "Alcohol does not", isCorrect: false},
          { text: "Even the smallest amount of alcohol", isCorrect: true },
          { text: "Only a blood alcohol level greater than .05", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },  
      {
        questionText: "TAKING DRUGS ALONG WITH ALCOHOL:",
        options: [
          { text: "Increases the risk of a crash", isCorrect: true },
          { text: "Is no more dangerous than alcohol by itself", isCorrect: false },
          { text: "Lessens the effect of alcohol on your ability to drive", isCorrect: false },
          { text: "Has no effect on your general driving ability", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "AS ALCOHOL BUILDS UP IN YOUR BLOOD, IT:",
        options: [
          { text: "Slows down your reactions", isCorrect: true },
          { text: "Makes you feel less confident", isCorrect: false},
          { text: "Begins to metabolize itself more quickly", isCorrect: false },
          { text: "Decreases your driving errors", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "AS YOUR BLOOD ALCOHOL LEVEL IS .04, YOU:",
        options: [
          { text: "Are 2-7 times more likely to have a crash than a person who has not consumed any", isCorrect: true },
          { text: "Are above the legal blood alcohol limit but fine to drive", isCorrect: false },
          { text: "Can be very sure that you will drive safely", isCorrect: false },
          { text: "Should drink plenty of coffee before getting behind the wheel of your car", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU HEAR A FIRE ENGINE SIREN, YOU MUST:",
        options: [
          { text: "Slow down until it passes you", isCorrect: false },
          { text: "Drive with you flashers on", isCorrect: false},
          { text: "Pull over to the side of the road and stop", isCorrect: true },
          { text: "Speed up and take the nearest exit", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU HAVE A TIRE BLOWOUT, YOU SHOULD:",
        options: [
          { text: "Allow the steering wheel to move freely", isCorrect: false },
          { text: "Let the car slow to a stop", isCorrect: true },
          { text: "Continue driving until you reach a garage", isCorrect: false },
          { text: "Brake hard and stop the car immediately", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU CAR BREAKS DOWN ON A HIGHWAY, YOU SHOULD:",
        options: [
          { text: "Sit in you car and wait for help", isCorrect: false },
          { text: "Use your four-way flashers to warn other drivers", isCorrect: true },
          { text: "Sound your horn at passing motorists", isCorrect: false },
          { text: "Flash your headlights at oncoming traffic", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU SEE AN EMERGENCY VEHICLE WITH FLASHING LIGHTS, YOU MUST:",
        options: [
          { text: "Slow down and keep moving in your lane", isCorrect: false },
          { text: "Keep driving in your lane", isCorrect: false },
          { text: "Pull to the curb and stop", isCorrect: true},
          { text: "Stop exactly where you are", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING ON A ONE WAY STREET AND AN EMERGENCY VEHICLE WITH FLASHING VEHICLES IS BEHIND YOUR CAR, YOU SHOULD:",
        options: [
          { text: " Drive with your flashers on", isCorrect: false },
          { text: "Drive toward the nearest road side and stop", isCorrect: true },
          { text: "Speed up and take the nearest exit", isCorrect: false },
          { text: "Slow down until the vehicle passes you", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "AFTER AN EMERGENCY VEHICLE PASSES YOU WITH ITS SIREN ON, YOU SHOULD:",
        options: [
          { text: "Drive closely to the police car", isCorrect: false },
          { text: "Drive as fast as the police car", isCorrect: false },
          { text: "Avoid driving closer than 500 feet behind the emergency vehicle", isCorrect: true },
          { text: "Drive near the curb very slowly", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "CRASHES IN WORK ZONES ARE MOST COMMONLY THE RESULT OF:",
        options: [
          { text: "Tire blow-outs", isCorrect: false },
          { text: "Hydroplaning because of water sprayed on the roadway", isCorrect: false },
          { text: "Loss of steering control after driving over wet paint", isCorrect: false },
          { text: "Carelessness and speeding", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING THROUGH A WORK ZONE, IT IS A GOOD SAFETY PRACTICE TO:",
        options: [
          { text: "Drive close to the vehicle in front of you to keep traffic flowing freely", isCorrect: false },
          { text: "Shorten your usual following distance - by about half", isCorrect: false },
          { text: "Turn on your cruise control", isCorrect: false },
          { text: "Lengthen your usual following distance- by double", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "ON TWO-LANE, TWO-WAY  STREETS ON HIGHWAYS, YOU SHOULD START LEFT TURNS:",
        options: [
          { text: "Close to the center line", isCorrect: true },
          { text: "Close to the outside line", isCorrect: false },
          { text: "In the center of the lane", isCorrect: false },
          { text: "Anywhere in the lane", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "TO TURN LEFT ON MULTI-LANE STREETS AND HIGHWAYS, YOU SHOULD START FROM:",
        options: [
          { text: "The middle of the intersection", isCorrect: false },
          { text: "The right lane", isCorrect: false },
          { text: "The left lane", isCorrect: true },
          { text: "Any lane", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "ON A TWO-LANE ROAD, YOU MAY PASS ANOTHER VEHICLE ON THE RIGHT WHEN:",
        options: [
          { text: "Driving on a single entrance ramp", isCorrect: false },
          { text: "The driver you are passing is travelling slower than the posted speed limit", isCorrect: false },
          { text: "Never", isCorrect: false },
          { text: "The driver you are passing is making a left turn", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "TO PASS A SLOWER-MOVING VEHICLE ON A TWO-LANE ROAD YOU MUST:",
        options: [
          { text: "Not cross the center line", isCorrect: false },
          { text: "Flash your lights to oncoming traffic", isCorrect: false},
          { text: "Use the shoulder", isCorrect: false },
          { text: "Use the lane that belongs to oncoming traffic", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "THESE PAVEMENT MARKINGS TELL YOU THAT AT THE INTERSECTION AHEAD:",
        options: [
          { text: "Center lane traffic may go straight or turn left", isCorrect: true },
          { text: "You can only turn right", isCorrect: false },
          { text: "The center lane mergers into one lane", isCorrect: false },
          { text: "Center lane traffic must turn left", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", FALI SLIKA // Optional image URL
      },
      {
        questionText: "THE MOST IMPORTANT THING TO REMEMBER ABOUT SPEED MANAGMENT AND CURVES IS TO:",
        options: [
          { text: "Drive at the posted speed limit as you enter the curve, then slow down at the sharpest part of the curve", isCorrect: false },
          { text: "Slow down before you enter the drive", isCorrect: true },
          { text: "Accelerate gently before you enter the curve", isCorrect: false },
          { text: "Drive at the posted speed limit of the roadway, before, throughout, and after the curve", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "DRIVERS ENTERING A ROUNDABOUT OR TRAFFIC CIRCLE:",
        options: [
          { text: "Must stop before entering", isCorrect: false },
          { text: "Must yield to drivers in the roundabout or traffic circle", isCorrect: true },
          { text: "Have the right of way if they arive first", isCorrect: false },
          { text: "Have the right of way if there are two lanes", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "THE LAW GIVES ___ THE RIGHT OF WAY AT INTERESCTIONS.",
        options: [
          { text: "No one", isCorrect: true },
          { text: "Drivers turning left", isCorrect: false },
          { text: "Drivers going straight", isCorrect: false },
          { text: "Drivers turning right", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "AT AN INTERSECTION WITH A STOP SIGN, YOU SHOULD STOP AND",
        options: [
          { text: "Check your rearview mirror for cars tailgaiting", isCorrect: false },
          { text: "Go when the vehicle ahead of you goes", isCorrect: false },
          { text: "Look right first, then left, then right again", isCorrect: false },
          { text: "Look left first, then right, then left again", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "TO TURN LEFT ON MULTI-LANE STREETS AND HIGHWAYS, YOU SHOULD START FROM:",
        options: [
          { text: "The middle of the intersection", isCorrect: false },
          { text: "The right lane", isCorrect: false },
          { text: "The left lane", isCorrect: true},
          { text: "Any lane", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN ENTERING A HIGHWAY FROM AN ENTRANCE RAMP, YOU SHOULD GENERALLY:",
        options: [
          { text: "Enter above the speed of traffic to get ahead", isCorrect: false },
          { text: "Enter slowly to avoid other vehicles", isCorrect: false },
          { text: "Stop first, then slowly enter traffic", isCorrect: false },
          { text: "Accelerate to the speed of traffic", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN EXITING A HIGHWAY, YOU SHOULD SLOW DOWN:",
        options: [
          { text: "On the main road, just before the exit lane", isCorrect: false },
          { text: "Once you see the toil booth", isCorrect: false },
          { text: "Once you have moved into the exit lane", isCorrect: true },
          { text: "When you first see the exit sign", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING ON A FREEWAY ENTRANCE RAMP, YOU SHOULD LOOK FOR A GAP IN FREEWAY TRAFFIC BY:",
        options: [
          { text: "Looking in the inside rearview mirror only", isCorrect: false },
          { text: "Looking in the sideview mirror only", isCorrect: false },
          { text: "Looking in both rearview and sideview mirrors", isCorrect: false },
          { text: "Looking in your mirrors and turning your head to look over your shoulder", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU WANT TO GET OFF OF A FREEWAY, BUT YOU MISSED YOUR EXIT, YOU SHOULD:",
        options: [
          { text: "Go to the next exit, and get off of the freewat there", isCorrect: true },
          { text: "Make a U-turn through the median", isCorrect: false },
          { text: "Put onto the shoulder and back your car to the exit", isCorrect: false },
          { text: "Flag down a police officer for an escort back to your exit", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF YOU ARE WAITING TO TURN LEFT AT A MULTILANE INTERSECTION, AND OPPOSING TRAFFIC IS BLOCKING YOUR VIEW, YOU SHOULD:",
        options: [
          { text: "Accelerate rapidly when the first lane you need to cross is clear", isCorrect: false },
          { text: "Wait until you can see all the lanes you need to cross before going ahead with your turn", isCorrect: true },
          { text: "Wait for the opposing driver to wave you across the intersection", isCorrect: false },
          { text: "Edge your car into each lane of opposing traffic as soon as it clears", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN NO SIGNS, SIGNALS OR POLICE TELL YOU WHAT TO DO AT AN INTERSECTION, THE LAW STATES THAT:",
        options: [
          { text: "Drivers on the right must yield to drivers on the left", isCorrect: false },
          { text: "There are no laws stating who must yield", isCorrect: false },
          { text: "Drivers going straight must yield to drivers turning left at an intersection", isCorrect: false },
          { text: "Drivers turning left must yield to drivers going straight through an intersection", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: `"HIGHWAY HYPNOSIS" IS A DRIVER CONDITION THAT CAN RESULT FROM:`,
        options: [
          { text: "Staring at the roadway for long periods of time", isCorrect: true },
          { text: "Frequent rest stops", isCorrect: false},
          { text: "Too much sleep the night before your trip", isCorrect: false },
          { text: "Short trips on expressways", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN PASSING ON MULTI-LANE HIGHWAYS:",
        options: [
          { text: "Be sure the passing lane is clear", isCorrect: true },
          { text: "Pass only on the right", isCorrect: false},
          { text: "Watch for oncoming traffic", isCorrect: false },
          { text: "There is no need to signal", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: `"THE "FOUR-SECOND RULE" REFERS TO HOW ONE SHOULD:`,
        options: [
          { text: "Yield to other cars", isCorrect: false },
          { text: "Turn at stop signs", isCorrect: false },
          { text: "Follow another car", isCorrect: true },
          { text: "Cross an intersection", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IT IS BEST TO KEEP A SPACE CUSHION:",
        options: [
          { text: "Only in back of your vehicle ", isCorrect: false },
          { text: "Only on the left and right side of the vehicle", isCorrect: false },
          { text: "Only in front of the vehicle", isCorrect: false },
          { text: "On all sides of the vehicle", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "ALLOWING A SPACE CUSHION IS IMPORTANT BECAUSE IT:",
        options: [
          { text: "Prevents distractions from other vehicles", isCorrect: false },
          { text: "Allow you time to react to situations", isCorrect: true },
          { text: "Keeps traffic flowing at a safe space", isCorrect: false },
          { text: "Keep other drivers apart", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "ALLOW A LARGER SPACE CUSHION WHEN STOPPING:",
        options: [
          { text: "On an up-hill", isCorrect: true },
          { text: "At an intersection", isCorrect: false },
          { text: "At a stop sign", isCorrect: false },
          { text: "At a toll plaza", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN MAKING A TURN, YOU MUST ___ YOUR SPEED:",
        options: [
          { text: "Increase", isCorrect: false },
          { text: "Maintain", isCorrect: false },
          { text: "Vary", isCorrect: false },
          { text: "Reduce", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING IN TRAFFIC, IT IS SAFEST TO:",
        options: [
          { text: "Fluctuate your speed to keep alert", isCorrect: false },
          { text: "Driver faster than the flow of traffic", isCorrect: false },
          { text: "Drive slower than the flow of traffic", isCorrect: false },
          { text: "Drive with the flow of traffic", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "THE MAXIMUM SPEED LIMIT IN THIS STATE IS ___ MILES PER HOUR:",
        options: [
          { text: "55", isCorrect: false },
          { text: "50", isCorrect: false },
          { text: "70", isCorrect: true },
          { text: "60", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "DRIVE BELOW THE POSTED SPEED LIMIT WHEN:",
        options: [
          { text: "Anything makes conditions less than perfect", isCorrect: true },
          { text: "Others drive below the speed limit", isCorrect: false },
          { text: "Entering a highway where there are other cars", isCorrect: false },
          { text: "You are on a four lane road", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "THE AMOUNT OF SPACE YOU NEED TO CROSS TRAFFIC DEPENDS ON THE:",
        options: [
          { text: "Road and weather conditions and oncoming traffic", isCorrect: true },
          { text: "Presence of a stop sign", isCorrect: false },
          { text: "Use of your turn signals", isCorrect: false },
          { text: "Cars behind you", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "YOUR ABILITY TO STOP IS AFFECTED BY:",
        options: [
          { text: "Signal lights", isCorrect: false },
          { text: "Other cars on the road", isCorrect: false},
          { text: "The time of day", isCorrect: false },
          { text: "The condition of the road", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHICH OF THE FOLLOWING IS TRUE ABOUT THE SPEED OF WHICH YOU TRAVEL:",
        options: [
          { text: "The safe speed to drive depends on many conditions", isCorrect: true },
          { text: "Driving slowly is always safer", isCorrect: false },
          { text: "The speed limit is always a safe speed", isCorrect: false },
          { text: "Accelerating is always dangerous", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "TO PREPARE FOR ANYTHING COMING UP IN THE ROAD AHEAD, YOU SHOULD:",
        options: [
          { text: "Continually scan the entire road and roadsides", isCorrect: true },
          { text: "Stare straight ahead at all times", isCorrect: false },
          { text: "Drive with your left foot resting lightly on the break pedal", isCorrect: false },
          { text: "Maintain focus toward the middle of the road", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "AT HIGHWAY SPPEDS, ON A DRY ROAD, A SAFE FOLLOWING DISTANCE IS AT LEAST:",
        options: [
          { text: "3 seconds of following distance from the car ahead of you", isCorrect: false },
          { text: "2 seconds of following distance from the car ahead of you", isCorrect: true },
          { text: "4 seconds of following distance from the car ahead of you", isCorrect: false },
          { text: "2 car lengths of following distance from the car ahead of you", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: `WHAT CAN YOU DO TO AVOID THE NEED TO MAKE EMERGENCY(OR "PANIC") STOPS WHILE DRIVING IN TRAFFIC?`,
        options: [
          { text: "Honk your horn to make others aware of your presence", isCorrect: false },
          { text: "Look ahead and maintain a safe following distance", isCorrect: true },
          { text: "Drive in the right lane only", isCorrect: false },
          { text: "Drive slower in the flow of traffic", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN FACED WITH ONE ONCOMING CAR TO THE LEFT AND A BICYCLIST TO THE RIGHT, YOU SHOULD:",
        options: [
          { text: "Pull onto the shoulder", isCorrect: false },
          { text: "Split the difference", isCorrect: false },
          { text: "Let the car pass and then pass the bike", isCorrect: true },
          { text: "Pass the bike quickly", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF AN ONCOMING DRIVER IS HEADING TOWARD YOU IN YOUR LANE, YOU SHOULD:",
        options: [
          { text: "Steer right, blow your horn, and accelerate", isCorrect: false },
          { text: "Steer left, blow your horn, and brake", isCorrect: false},
          { text: "Steer right, blow your horn, and brake", isCorrect: true },
          { text: "Stay in the center of your lane, blow your horn, and brake", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "IF THE REAR OF YOUR VEHICLE STARTS TO SKID LEFT, YOU SHOULD:",
        options: [
          { text: "Steer left", isCorrect: true },
          { text: "Hit your breaks", isCorrect: false },
          { text: "Accelerate", isCorrect: false },
          { text: "Steer right", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "THE MOST EFFECTIVE THING YOU CAN DO TO REDUCE YOUR RISK OF GETTING INJURED OR KILLED IN A TRAFFIC CRASH:",
        options: [
          { text: "Wear your seatbelt", isCorrect: true },
          { text: "Limit your driving to week days", isCorrect: false },
          { text: "Stay in the right lane to multi-lane highways", isCorrect: false },
          { text: "Limit your driving to times between 3:00pm and 6:00pm", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING ON SLICK ROADS, YOU SHOULD:",
        options: [
          { text: "Take turns more slowly", isCorrect: true },
          { text: "Change lanes quickly", isCorrect: false},
          { text: "Accelerate quickly", isCorrect: false },
          { text: "Brake hard", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHICH OF THE FOLLOWING IS TRUE ABOUT DRIVING ON A WET ROADWAY:",
        options: [
          { text: "As you drive faster, your tires become less effective", isCorrect: true },
          { text: "Water does not affect cars with good tires", isCorrect: false },
          { text: "Deeper water is less dangerous", isCorrect: false },
          { text: "As you decrease your speed, the roadway becomes more slippery", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING ON WET ROADS YOU SHOULD:",
        options: [
          { text: "Drive the speed limit", isCorrect: false },
          { text: "Drive slightly faster than the speed limit", isCorrect: false},
          { text: "Drive 5 to 10 miles below the speed limit", isCorrect: true },
          { text: "Stay close to the vehicle ahead", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING ON SLIPPERY ROADS, YOU SHOULD:",
        options: [
          { text: "Use alternate routes", isCorrect: false },
          { text: "Drive as you would on dry roads", isCorrect: false },
          { text: "Increase your following distance", isCorrect: true},
          { text: "Avoid crossing at bridges or intersections", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING ON WET ROADS, YOU SHOULD:",
        options: [
          { text: "Increase following distance to 5 or 6 seconds", isCorrect: true },
          { text: "Decrease following distance to 2 seconds", isCorrect: false },
          { text: "Not be concerned about following distance", isCorrect: false },
          { text: "Maintain the 4-second follwing distance rule", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "ROADS FREEZE MORE QUICKLY WHEN THEY ARE:",
        options: [
          { text: "Flat", isCorrect: false },
          { text: "Curvy", isCorrect: false},
          { text: "In the sun", isCorrect: false },
          { text: "Shaded", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "ROADS BECOME MORE SLIPPERY:",
        options: [
          { text: "When it has been raining for an hour or more", isCorrect: false },
          { text: "The day after it rains", isCorrect: false },
          { text: "For the fist 10 or 15 minutes of a rain storm", isCorrect: true },
          { text: "Right after the rain has stopped", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "HYDROPLANING IS USUALLY CAUSED BY:",
        options: [
          { text: "Excessive stops", isCorrect: false },
          { text: "Sudden stops", isCorrect: false},
          { text: "Sudden turns", isCorrect: false },
          { text: "Excessive speed", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "HYDROPLANING CAN BE HELPED BY DRIVING:",
        options: [
          { text: "Through shallow water", isCorrect: false },
          { text: "Faster", isCorrect: false },
          { text: "Slower", isCorrect: true },
          { text: "Through deep watter", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN DRIVING IN FOG, YOU SHOULD USE YOUR ___:",
        options: [
          { text: "Low beam headlights", isCorrect: true },
          { text: "High beam headlights", isCorrect: false },
          { text: "Parking lights", isCorrect: false },
          { text: "Hazard flashers", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "COMPARED TO DRIVING DURING THE DAY, DRIVING AT NIGHT IS:",
        options: [
          { text: "Less dangerous", isCorrect: false },
          { text: "More dangerous", isCorrect: false},
          { text: "No more or less dangerous", isCorrect: true},
          { text: "Easier on your eyes", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "ANYTHING THAT REQUIRES YOU TO ___ COULD CAUSE YOU TO CRASH.",
        options: [
          { text: "Take your eyes off the road", isCorrect: false },
          { text: "Takes your hands off the wheel", isCorrect: false },
          { text: "Take your attention away from the driving task", isCorrect: false },
          { text: "All of the above", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "DISTRACTED DRIVERS ARE AT A GREATER RISK OF A CRASH WHEN THEY ARE USING WHICH OF THE FOLLOWING:",
        options: [
          { text: "CD Player", isCorrect: false },
          { text: "Radio", isCorrect: false},
          { text: "Cell Phone", isCorrect: false },
          { text: "All of the above", isCorrect: true},
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN YOU ARE IN A LINE OF TRAFFIC THAT IS CROSSING A RAILROAD TRACK THAT HAS NO SIGNALS OR GATES:",
        options: [
          { text: "You have the right of way and do not need to check for trains", isCorrect: false },
          { text: "You may pass slower drivers crossing the track", isCorrect: false },
          { text: "You need to make sure there is space to get all the way across the tracks without stopping, before you start to cross", isCorrect: true },
          { text: "All of the above", isCorrect: false },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },
      {
        questionText: "WHEN APPROACHING A STOPPED SCHOOL BUS WITH ITS RED LIGHTS FLASHING AND ITS STOP ARM EXTENDED, YOU MUST:",
        options: [
          { text: "Stop 5 feet away from the bus", isCorrect: false },
          { text: "Stop only if you see children are present", isCorrect: false },
          { text: "Stop and remain stopped until it appears safe to proceed", isCorrect: false },
          { text: "Stop and remain stopped until the red lights stop flashing and the stop arm has been withdrawn", isCorrect: true },
        ],
        imageUrl: "data/images/.white.jpg", // Optional image URL
      },



   

  ];

  //Client side js export syntax
  export default quizQuestions