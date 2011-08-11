/**
 *	Created with MAX's HTML Beauty++ 2004
 *	arsenic6_check.js
 *	@author Amani Ahmed, Jordi Cuadros
 *	@date July 28 2004
*/

var nAttempts = 1;

/**
 * Check function for Activity 1.1 (the first scaffolding question)
 */
function act11Check(){
	var user_answer = document.oli_stoich_ars_vl5_act1_1.mLs_A.value;
	var follow=nAttempts;
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";

	if(user_answer == ""){
		alert('Please enter an answer before checking');
	} else {	
	    var correct = unknownAsMoles * 20000;
	    var bad_answers=new Array();
	    	bad_answers[0]=correct*10;
	    
		//		alert("Correct: " + correct);

		var message = "";

		if(relativeError(user_answer,correct,0.05) && number_sig(user_answer)==3) {
			message+="Excellent!";
			isAttemptWrong=false;
			errorType="CORRECT";
			a2.deactivate();
			a3.activate();
			nAttempts=0;		
		} else {					
			if(relativeError(user_answer,correct,0.05)) {
				message+="Pretty good, but the number of significant figures is not correct. Please try again.";
				errorType="SIGNIFICANT_FIGURES_ERROR";				
			} else if(relativeError(user_answer, correct, 0.10)) {
				message+="You're within 10% of the correct answer! Try to get closer to the exact answer.";
				errorType="INSUFFICIENT_PRECISION_ERROR";
			} else if(relativeError(user_answer, bad_answers[0], 0.02)) {
				message+="Remember you should report the amount of Red-K9 solution needed to titrate 100 milliliters of the sample.";
				errorType="VOLUME_ERROR";
			} else message+="Please check your result and try again.";
			
			if (nAttempts==3) {
				message="This was your third attempt and your result wasn't correct. ";
				message+="The correct answer is "+format_sig(correct,3)+" milliliters of 0.05 molar Red-K9 solution. Please CLICK REFRESH or RELOAD to start over with a new problem.";
				a2.deactivate();
			} else if (nAttempts > 3) {
				message="You already used three attempts for this question. Please CLICK REFRESH or RELOAD to start over with a new problem.";
				a2.deactivate();
			}
		}
		
		setFeedback(1, message,follow);
		logFormCheck(a2.formName,follow,user_answer+" mL",format_sig(correct,3)+" mL",
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}	
	return false;
}

/**
 * Check function for Activity 1.2 (the second scaffolding question)
 */
function act12Check(){
	var user_answer = document.oli_stoich_ars_vl5_act1_2.moles_A.value;
	var follow=nAttempts;
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	
	if(user_answer == ""){
		alert('Please enter an answer before checking');
	}else {	
	    var correct = unknownAsMoles;
	    var bad_answers=new Array();
	    	bad_answers[0]=correct/0.05/0.05;
	    	bad_answers[1]=correct*1000;
	    
		//		alert("Correct: " + correct);

		var message = "";
		if(relativeError(user_answer,correct,0.05) && number_sig(user_answer)==3){
			a3.deactivate();
			a4.activate();
			isAttemptWrong=false;
			errorType="CORRECT";
			setFeedback(3, "Now try the first question again using the calculations you made above.", 3);
			nAttempts=0;
			message+="Great Job!";
		} else {
			if(relativeError(user_answer,correct,0.05)) {
				message+="That looks great, but the number of significant figures is not correct. Please try again.";
				errorType="SIGNIFICANT_FIGURES_ERROR";				
			} else if(relativeError(user_answer, correct, 0.10)) {
				message+="You're within 10% of the correct answer! Try to make your calculations more precise.";
				errorType="INSUFFICIENT_PRECISION_ERROR";
			} else if(relativeError(user_answer, bad_answers[0], 0.02)) {
				message+="Remember that the larger the concentration is, the more moles of solute are in the solution. Have you checked the units for your answer?";
				errorType="PROPORTIONAL_CALCULATION_ERROR";
			} else if(relativeError(user_answer, bad_answers[1], 0.02)) {
				message+="Remember that molar (M) is equivalent to moles per liter (mol/L). Have you checked the units for your answer?";
				errorType="UNITS_ERROR";
			} else message+="Please check your result and try again.";

			if (nAttempts==3) {
				message="This was your third attempt and your result wasn't correct. ";
				message+="The correct answer is "+format_sig(correct,3)+" moles of Red-K9. Please CLICK REFRESH/RELOAD to start over with a new problem.";
				a3.deactivate();
			} else if (nAttempts > 3) {
				message="You have already spent your three allowed attempts for this question. Please CLICK REFRESH/RELOAD to start over with a new problem.";
				a3.deactivate();
			}
		}
		
		setFeedback(2, message,follow);
		logFormCheck(a3.formName,follow,user_answer+" moles",format_sig(correct,3)+" moles",
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}
	return false;
}

var help = false;

/**
 * Check function for Activity 1.0
 */
function act1Check(isTheFirst){
	var user_answer	= "";
	var a;
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	var follow=nAttempts;

	if (isTheFirst) {
		user_answer	= document.oli_stoich_ars_vl5_act1.M_As1.value;
		a=a1;
	} else {
		user_answer	= document.oli_stoich_ars_vl5_act1_3.M_As2.value;
		a=a4;
	}

	if(user_answer == "" || user_answer == null){
		alert('Please enter an answer before checking');
	} else {	
	    var correct = unknownAsMoles * 10;

	    //Testing
		alert(correct);
		
		var bad_answers=new Array();
			bad_answers[0]=unknownAsMoles;		//nmoles
			bad_answers[1]=correct*20;			//forget conc A
			bad_answers[2]=unknownAsMoles*20; 	//volume of titrating agent

			//		alert("Correct: " + correct);

		var message = "";
		if (relativeError(user_answer,correct,0.05) && number_sig(user_answer)==3) {
		        // DD Change 9 December 2005
		        setCompleted(true);
			message+="Great Job!";
			isAttemptWrong=false;
			errorType="CORRECT";
			a.deactivate();
		} else {					
			if(relativeError(user_answer,correct,0.05)) {
				message+="You're doing a good job, but your result is not expressed in the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else if(relativeError(user_answer, correct, 0.10)) {
				message+="You're within 10% of the correct answer! Try to calculate your answers more precisely. ";
				errorType="INSUFFICIENT_PRECISION_ERROR";
			} else if(relativeError(user_answer, bad_answers[0], 0.02)) {
				message+="What is the volume that you are titrating? Please check your answer and try again.";
				errorType="VOLUME_ERROR";
			} else if(relativeError(user_answer, bad_answers[1], 0.02)) {
				message+="What's the concentration of the titrating agent? Please check your answer and try again.";
				errorType="CONCENTRATION_ERROR";
			} else if(relativeError(user_answer, bad_answers[2], 0.02)) {
				message+="It looks like the answer you gave is the volume required to titrate the sample. Is that correct?";
				errorType="VOLUME_FOR_CONCENTRATION_ERROR";
			} else message+="Please check your answer and try again.";
			
			if(nAttempts >= 2 && help == false && isTheFirst) {
				if(confirm("You seem to be having difficulties with this problem. Would you like some help on it?")){
					scaffold();
					help = true;
				}	
			}
			
			if (nAttempts==3) {
				message="This was your third attempt and your result wasn't correct. ";
				message+="The correct answers are "+format_sig(correct,3)+" molar of arsenite in the water sample. Please CLICK REFRESH/RELOAD to start over with a new problem.";
				a.deactivate();
			} else if (nAttempts > 3) {
				message="You already used three attempts for this question. Please CLICK REFRESH/RELOAD to start over with a new problem.";
				a.deactivate();
			}
		}

		setFeedback(a.formIndex, message,follow);
		logFormCheck(a.formName,follow,user_answer+" M",format_sig(correct,3)+" M",
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}
	return false;
}


/**
 * Prepares the page for the use of scaffolding questions by resetting the values of and deactiviating
 * the base questions and showing the scaffolding questions of the problem
 */
function scaffold(){
	a1.hide();
	a1.hideFeedback();
	setFeedback(1, "Let's go through the problem step by step.", 3);
	a2.show();
	a3.show();
	a4.show();
	a2.activate();
	a3.deactivate();
	a4.deactivate();
	nAttempts = 0;
	logScaffold("oli_stoich_ars_vl5");
}
