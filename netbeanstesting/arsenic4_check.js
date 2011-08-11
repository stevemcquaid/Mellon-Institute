/**
 *	Created with MAX's HTML Beauty++ 2004
 *	arsenic4_check.js
 *	@author Amani Ahmed, Jordi Cuadros
 *	@date July 28 2004
*/

var nAttempts = 1;
var help = false;
/**
 * Check function for Activity 1.0
 */
function act1Check(){
	var user_answer	= "";
	var a=a1;
	user_answer	= document.activity1.M_As1.value;
	var isAttemptWrong=true;

	if(user_answer == "" || user_answer == null){
		alert('Please enter an answer before checking');
	} else{	
	    var correct = unknownAsMoles * 10000;
	
	    //	    alert("Correct: " + correct);

		var message = "";
	
		if(relativeError(user_answer,correct,0.05) && number_sig(user_answer)==3) {
			// DD Change 23 November 2005
			setCompleted(true);

			message+="Great Job!";
			isAttemptWrong=false;
			a.deactivate();
		}else if(nAttempts < 3){					
			if(relativeError(user_answer,correct,0.05) && number_sig(user_answer)!=3) {
				message+="Pretty good! But your result is not expressed with the correct number of significant figures.";
			} else if(relativeError(user_answer, correct, 0.10))
				message+="You're within 10% of the correct answers! Try to get a more precise answer. ";
			else if(relativeError(user_answer, correct/1000, 0.02))
				message+="It looks like you're expressing your result in M units instead of mM. Please check your answer and try again.";
			else if(relativeError(user_answer, correct/10, 0.02))
				message+="It seems you may be forgetting to consider the real volume of the sample. Please check your answer and try again.";
			else message+="Please check your answer and try again.";
			
		}else if (nAttempts==3) {
	   		message+="This was your third attempt and your result wasn't correct. ";
	   		message+="The correct answer is "+format_sig(correct,3)+" mM of arsenite in the water sample. Please CLICK REFRESH/RELOAD to start over with a new problem.";
	   		a.deactivate();
		}else if (nAttempts > 3) {
			message="You have already spent your three allowed attempts for this question. Please CLICK REFRESH/RELOAD to start over with a new problem.";
			a.deactivate();
		}
	
		setFeedback(a.formIndex, message,nAttempts);
		if(window.logUserAction) logUserAction("Arsenic4_activity1_check()", "txt", checkString(a.formIndex,isAttemptWrong,nAttempts,user_answer+" mM of arsenite",message));	
		nAttempts++;

	}
	return false;
}

/**	
 * Constructs a string that reports the statistics of the user's latest attempt of the 
 * problem including the attempt number, user-given answers and feedback
 *
 * @return toTrace		a string containing information about the user's last attempt
*/
function checkString(fIndex,isWrong,nAtt,usAns,message) {
    var toTrace=isWrong?"Wrong":"Correct";
    	toTrace += " checking of form "+fIndex;
		toTrace += "(attempt "+nAtt+ "). ";	
		toTrace += "The delivered answer is "+usAns+". ";
		toTrace += "The system answers: "+message;
	return toTrace;
}
