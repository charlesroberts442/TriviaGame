/***********************************************************************
 * Copyright (c) 2017 Charles W. Roberts
 * All Rights Reserved
 *
 * No portion of this code may be copied or modified without the
 * prior written permission of Charles Roberts.
 *
 ***********************************************************************/

/**
 * @file Contains the class definition of the QuestionCollection class.
 * @author Charles Roberts
 * @copyright Charles Roberts 2017
 */

/**
 * @classdesc QuestionCollection objects represent the collection of
 * questions in the trivia game.
 */
class QuestionCollection
{
    constructor()
    {
        let _collection = [];
        let _needsIntitialization = true;

        /**
         * addQuestion adds a question to the QuestionCollection object
         * @param {Object} questionToAdd The question to add.
         */
        this.addQuestion = function(questionToAdd)
        {
            _collection.push(questionToAdd);

        }; // End of this.addQuestion = function(questionToAdd)

        /**
         * Initialize initializes the question collection object
         */
        this.Initialize = function()
        {
            if (_needsIntitialization)
            {
                _needsIntitialization = false;
                // Question 1
                let question_1 = new Question("QuestionDisplay");
                question_1.setQuestion("Chainsaws were originally designed for:");
                question_1.setAnswers(["factory manufacturing",
                    "delivering babies",
                    "landscaping",
                    "juggling"
                ]);
                question_1.setVisible(false);
                question_1.setCorrectAnswer(1);
                this.addQuestion(question_1);


                // Question 2
                let question_2 = new Question("QuestionDisplay");
                question_2.setQuestion("When Neil Armstrong came back from the moon he:");
                question_2.setAnswers(["demanded a hamburger",
                    "was asked to prove he was human",
                    "had to go through US customs",
                    "slept for 3 days"
                ]);
                question_2.setVisible(false);
                question_2.setCorrectAnswer(2);
                this.addQuestion(question_2);


                // Question 3
                let question_3 = new Question("QuestionDisplay");
                question_3.setQuestion("group of flamingos is called a(n):");
                question_3.setAnswers(["stilt",
                    "flamboyance",
                    "gaggle",
                    "puff"
                ]);
                question_3.setVisible(false);
                question_3.setCorrectAnswer(1);
                this.addQuestion(question_3);


                // Question 4
                let question_4 = new Question("QuestionDisplay");
                question_4.setQuestion("Scotland's national animal is the:");
                question_4.setAnswers(["unicorn",
                    "terrier",
                    "white tail deer",
                    "mud frog"
                ]);
                question_4.setVisible(false);
                question_4.setCorrectAnswer(0);
                this.addQuestion(question_4);


                // Question 5
                let question_5 = new Question("QuestionDisplay");
                question_5.setQuestion("This author wrote 4 romance novels including \"Zabiba and the king\" which was an overnight bestseller and became an on-stage musical in Baghdad");
                question_5.setAnswers(["JK Rolling",
                    "Stephen Hawking",
                    "Nora Roberts",
                    "Saddam Hussein"
                ]);
                question_5.setVisible(false);
                question_5.setCorrectAnswer(3);
                this.addQuestion(question_5);


                // Question 6
                let question_6 = new Question("QuestionDisplay");
                question_6.setQuestion("Gmail was originally a free email service for  _____ users:");
                question_6.setAnswers(["girlslife.com",
                    "gdot.com",
                    "garfield.com ",
                    "gorgonzolalovers.com"
                ]);
                question_6.setVisible(false);
                question_6.setCorrectAnswer(2);
                this.addQuestion(question_6);


                // Question 7
                let question_7 = new Question("QuestionDisplay");
                question_7.setQuestion("Charlemagne had a younger brother named:");
                question_7.setAnswers(["Christobel",
                    "Carloman",
                    "Magnes",
                    "Christos"
                ]);
                question_7.setVisible(false);
                question_7.setCorrectAnswer(1);
                this.addQuestion(question_7);


                // Question 8
                let question_8 = new Question("QuestionDisplay");
                question_8.setQuestion("Pearls dissolve in:");
                question_8.setAnswers(["milk",
                    "salt water",
                    "dish soap",
                    "vinegar"
                ]);
                question_8.setVisible(false);
                question_8.setCorrectAnswer(3);
                this.addQuestion(question_8);


                // Question 9
                let question_9 = new Question("QuestionDisplay");
                question_9.setQuestion("The dot over the letter \"i\" is called a(n):");
                question_9.setAnswers(["tittle",
                    "pip",
                    "inni",
                    "pointlette"
                ]);
                question_9.setVisible(false);
                question_9.setCorrectAnswer(0);
                this.addQuestion(question_9);


                // Question 10
                let question_10 = new Question("QuestionDisplay");
                question_10.setQuestion("In Wyoming it is illegal to take a picture of a rabbit during the month of:");
                question_10.setAnswers(["March",
                    "August",
                    "June",
                    "November"
                ]);
                question_10.setVisible(false);
                question_10.setCorrectAnswer(2);
                this.addQuestion(question_10);


                // Question 11
                let question_11 = new Question("QuestionDisplay");
                question_11.setQuestion("Before pencil erasers were invented, people used to remove pencil marks with:");
                question_11.setAnswers(["cats",
                    "wadded-up bread",
                    "soap",
                    "melted candle wax"
                ]);
                question_11.setVisible(false);
                question_11.setCorrectAnswer(1);
                this.addQuestion(question_11);


                // Question 12
                let question_12 = new Question("QuestionDisplay");
                question_12.setQuestion("The skin that covers the tip of your elbow is called the:");
                question_12.setAnswers(["burb",
                    "skelbow",
                    "phlenticulus",
                    "wenis"
                ]);
                question_12.setVisible(false);
                question_12.setCorrectAnswer(3);
                this.addQuestion(question_12);


                // Question 13
                let question_13 = new Question("QuestionDisplay");
                question_13.setQuestion("Iran arrested 14 _____ that were found near their border with espionage equipment:");
                question_13.setAnswers(["green berets",
                    "squirrels",
                    "school children",
                    "wildlife photojournalists"
                ]);
                question_13.setVisible(false);
                question_13.setCorrectAnswer(1);
                this.addQuestion(question_13);


                // Question 14
                let question_14 = new Question("QuestionDisplay");
                question_14.setQuestion("A group of pandas is called a(n):");
                question_14.setAnswers(["embarassment",
                    "pandemic",
                    "hoard ",
                    "dweezle"
                ]);
                question_14.setVisible(false);
                question_14.setCorrectAnswer(0);
                this.addQuestion(question_14);


                // Question 15
                let question_15 = new Question("QuestionDisplay");
                question_15.setQuestion("Human birth control pills do not work on: ");
                question_15.setAnswers(["gorillas",
                    "bonobos",
                    "orangutans",
                    "makaks"
                ]);
                question_15.setVisible(false);
                question_15.setCorrectAnswer(3);
                this.addQuestion(question_15);


                // Question 16
                let question_16 = new Question("QuestionDisplay");
                question_16.setQuestion("In the US, ransom payments to kidnappers are:");
                question_16.setAnswers(["mandatory",
                    "tax deductible",
                    "paid by the government",
                    "made on Wednesday's only"
                ]);
                question_16.setVisible(false);
                question_16.setCorrectAnswer(1);
                this.addQuestion(question_16);


                // Question 17
                let question_17 = new Question("QuestionDisplay");
                question_17.setQuestion("Elephants are pregnant for:");
                question_17.setAnswers(["9 months",
                    "5 years",
                    "15 months",
                    "2 years"
                ]);
                question_17.setVisible(false);
                question_17.setCorrectAnswer(3);
                this.addQuestion(question_17);


                // Question 18
                let question_18 = new Question("QuestionDisplay");
                question_18.setQuestion("London's \"Big Ben\" is:");
                question_18.setAnswers(["a bell",
                    "a well known street performer",
                    "a clock tower",
                    "a ferris wheel"
                ]);
                question_18.setVisible(false);
                question_18.setCorrectAnswer(0);
                this.addQuestion(question_18);


                // Question 19
                let question_19 = new Question("QuestionDisplay");
                question_19.setQuestion("Because of hemocyanin, octopus blood is:");
                question_19.setAnswers(["gaseous",
                    "magnetic",
                    "blue",
                    "flammable"
                ]);
                question_19.setVisible(false);
                question_19.setCorrectAnswer(2);
                this.addQuestion(question_19);


                // Question 20
                let question_20 = new Question("QuestionDisplay");
                question_20.setQuestion("In the US senate chamber there is a desk called:");
                question_20.setAnswers(["the forbidden desk",
                    "Ol\' Pete",
                    "time out",
                    "the candy desk"
                ]);
                question_20.setVisible(false);
                question_20.setCorrectAnswer(3);
                this.addQuestion(question_20);


                // Question 21
                let question_21 = new Question("QuestionDisplay");
                question_21.setQuestion("Bubble wrap was originally designed to be:");
                question_21.setAnswers(["fabric",
                    "wall paper",
                    "medical gauze",
                    "cat deterrent "
                ]);
                question_21.setVisible(false);
                question_21.setCorrectAnswer(1);
                this.addQuestion(question_21);


                // Question 22
                let question_22 = new Question("QuestionDisplay");
                question_22.setQuestion("The electric chair was invented by a:");
                question_22.setAnswers(["dentist",
                    "judge",
                    "teacher",
                    "police officer"
                ]);
                question_22.setVisible(false);
                question_22.setCorrectAnswer(0);
                this.addQuestion(question_22);


                // Question 23
                let question_23 = new Question("QuestionDisplay");
                question_23.setQuestion("Coconut water can be used in an emergency as a substitute for:");
                question_23.setAnswers(["lighter fluid",
                    "blood plasma",
                    "gasoline",
                    "snake bite ointment"
                ]);
                question_23.setVisible(false);
                question_23.setCorrectAnswer(1);
                this.addQuestion(question_23);

            } // End of if (_needsIntitialization)

        }; // End of let Initialize = function()

        this.Initialize();

        /**
         * callback is the "big arrow method that is the callback for
         * continue button clicks"
         */
        let callback = () =>
        {
            this.showQuestions();
        };

        var i = 0;
        var lastIndex = _collection.length - 1;
        let showQuestions = {};
        var counter = new CounterDowner(5, callback);
        counter.setDisplayDiv("CounterDownerDisplay");
        let keepGoing = true;

        /**
         * resetGame resets the state variables of a game
         */
        let resetGame = function()
        {

            i = 0;
            lastIndex = _collection.length - 1;
            counter = new CounterDowner(5, callback);
            counter.setDisplayDiv("CounterDownerDisplay");
            let j = 0;
            for (j = 0; j < _collection.length; ++j)
            {
                _collection[j].setCurrentChoice(-1);
                _collection[j].clearRadioButtons();

            }
        };

        /**
         * showQuestions is the method that begins (and continues)
         * a game.  showQuestion is "temporaly recursive" in that each
         * time a question is answered, the timer or button callback again
         * calls showQuestions to show the next question.  This behavior 
         * continues until keepGoing has been set to false.
         */
        this.showQuestions = function()
        {

            while (keepGoing)
            {

                if (i < _collection.length)
                {
                    _collection[i].setVisible(true);


                    if ((i > 0) && (i < _collection.length))
                    {
                        _collection[i - 1].setVisible(false);
                    }

                    counter = new CounterDowner(30, callback);
                    counter.setDisplayDiv("CounterDownerDisplay");
                    counter.startCountDown();
                    ++i;
                    return false;
                }
                else
                {
                    _collection[i - 1].setVisible(false);
                    showScore();
                }

            } // End of while(keepGoing)

        }; // End of let showQuestions = function()

        /**
         * stopCounter stops the question count down counter and then
         * calls showQuestions.   
         */
        this.stopCounter = function()
        {
            counter.stopCounterDown();
            counter = new CounterDowner(30, callback);
            counter.setDisplayDiv("CounterDownerDisplay");
            this.showQuestions();

        }; // End of this.stopCounter = function()

        /**
         * getScore is used to get the current score of the game
         * @return {Number} the number of questions that have the 
         * right answer as their current answer.
         */
        let getScore = function()
        {
            let rightAnswers = 0;
            for (i = 0; i < _collection.length; ++i)
            {
                if (_collection[i].hasCorrectAnswer())
                {
                    ++rightAnswers;
                }
            }

            return rightAnswers;
        }; // End of this.getScore = function()

        /**
         * showScore displays a confirm dialog that shows the number
         * of questions that have the correct answer and asks the user
         * if they want to continue.
         */
        let showScore = function()
        {
            let rightAnswers = getScore();

            console.log("There were " + rightAnswers + " right answers.");

            if (confirm("There were " + rightAnswers + " right answers.\nDo you want to play again?"))
            {
                let j = 0;
                for (j = 0; j < _collection.length; ++j)
                {
                    _collection[j].setCurrentChoice(-1);

                }

                resetGame();
                keepGoing = true;


            }
            else
            {
            	CounterDownerDisplay.style.display = "none";
            	QuestionDisplay.style.display = "none";
            	_myDiv.style.display = "none";
                keepGoing = false;
            }
        };


    } // End of constructor

} // End of class QuestionCollection