/***********************************************************************
 * Copyright (c) 2017 Charles W. Roberts
 * All Rights Reserved
 *
 * No portion of this code may be copied or modified without the
 * prior written permission of Charles Roberts.
 *
 ***********************************************************************/

QC = new QuestionCollection();

startGame = function()
{
	let _instructionDiv = document.getElementById("instructions");
	let _questionDiv = document.getElementById("QuestionDisplay");
	let _counterDiv = document.getElementById("CounterDownerDisplay");
	let _startDiv = document.getElementById("startButton");

	_startDiv.style.display = "none";
	_instructionDiv.style.display = "none";
	_questionDiv.style.display = "block";
	_counterDiv.style.display = "block";
	

QC.showQuestions();
   
};

/**
 * the QC is a collection of question for the trivia game. 
 * @type {QuestionCollection}
 */
