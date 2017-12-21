/***********************************************************************
 * Copyright (c) 2017 Charles W. Roberts
 * All Rights Reserved
 *
 * No portion of this code may be copied or modified without the
 * prior written permission of Charles Roberts.
 *
 ***********************************************************************/

/**
 * @file Contains the class definition of the CounterDowner class.
 * CounterDowner objects count down from some time value.
 * @author Charles Roberts
 * @copyright Charles Roberts 2017
 */

/**
 * @classdesc CounterDowner objects count down from some time value..
 */
class CounterDowner
{
    constructor(startCount, callBack)
    {
        let _startCount = startCount;
        let _callBack = callBack;
        let _counterID = 0;
        let _currentCount = startCount;
        let _displayDiv = "";
        let _displayString = "";

        /**
         * makeDisplayString creates the string to be displayed showing
         * how much time remains before the counter object reaches zero.
         * 
         * @return {String} The string showing how much time remains
         * before the counter object reaches zero.
         */
        function makeDisplayString()
        {
            let hasHours = false;
            let hasMinutes = false;
            let hoursString = "";
            let minutesString = "";
            let secondsString = "";
            let Num = _currentCount;
            let returnedString = "";
            if (Num > 3600)
            {
                let hoursNum = Math.floor(Num / 3600);
                Num = Num - hoursNum * 3600;
                hasHours = true;
                if(hoursNum < 10)
                {
                	hoursString = "0" + hoursNum.toString();
                }
                else
                {
                	hoursString = hoursNum.toString();
                }
            }
            else
            {
                hoursString = "00";
            }

            if ((Num > 60) || hasHours)
            {
            	hasMinutes = true;
                let minutesNum = Math.floor(Num / 60);
                Num = Num - minutesNum * 60;
                if( 0 === minutesNum)
                {
                	minutesString = "00";
                }

                else if((minutesNum < 10) && (minutesNum > 0))
                {
                	minutesString = "0" + minutesNum.toString();
                }
                
                else
                {
                	minutesString = minutesNum.toString();
                }

            }
            else
            {
                minutesString = "00";
            }

            if(Num < 10)
            {
            	 secondsString = "0" + Num.toString();
            }
            else
            {
            	secondsString = Num.toString();
            }

            if(hasHours)
            {
            returnedString = hoursString + ":" +
                minutesString + ":" + secondsString;
            }
            else 
            {
            	returnedString = minutesString + ":" + secondsString;
            }
            

            return returnedString;


        } // End of function makeDisplayString()

        /**
         * timerTic the callback for the interval counter.  It is 
         * called once per second.
         */
        function timerTic()
        {
            // Decrement the count
            --_currentCount;

            if (_displayDiv != "")
            {

                let displayDiv = document.getElementById(_displayDiv);
                let displayString = makeDisplayString();
                //let displayString = "fuck"
                displayDiv.innerHTML = displayString;


            } // End of if(_displayDiv != 0)

            // Has the counter reached zero?
            if (_currentCount === 0)
            {
                if (_callBack != 0)
                {
                    _callBack();
                }

                clearInterval(_counterID);

            }


        } // End of function timerTic()

        /**
         * startCountDown starts the counter counting down
         */
        this.startCountDown = function()
        {
            _counterID = setInterval(timerTic, 1000);

        }; // End of this.startCountDown = function()

        /**
         * setDisplayDiv sets the counters _display data member
         */
        this.setDisplayDiv = function(displayDiv)
        {
            _displayDiv = displayDiv;

        };

        /**
         * stopCounterDown clears the current interval counter and
         * sets the CounterDowner's current count to zero.
         */
        this.stopCounterDown = function()
        {
            clearInterval(_counterID);
            _currentCount = 0;
        };


    } // End of constructor()

} // End of class CounterDowner