/**
 *	Created with MAX's HTML Beauty++ 2004
 *	arsenic2_check.js
 *	@author Amani Ahmed, Jordi Cuadros
 *	@date July 27 2004
*/

var nAttempts = 1;
var follow = nAttempts;
/**
 * Check function for Activity 1.0
 */
function act1Check(){
	var user_answer = document.oli_stoich_ars_vl4_act1.ad_prediction.value;
	var correct = ad_amount*74.9216/2;	var errorType="UNKNOWN_ERROR";

	//Testing
	alert(correct);

	var badans = new Array ();
		badans[1] = ad_amount*(74.9216+2*15.9994)/2;
		badans[2] = ad_amount/74.9216/2;

	var message="";
	var isAttemptWrong=true;
	follow = nAttempts;

	//	alert("Correct: " + correct);

	if(user_answer =="" || user_answer==null){
		alert('Please fill in all the blanks before checking');
	}else{
		if(relativeError(user_answer, correct, 0.05) && number_sig(user_answer)==3){
			message+="Well done! Good job!";			isAttemptWrong=false;
			// DD Change 23 November 2005
			setCompleted(true);

			errorType="CORRECT";
			a1.deactivate();
		}else {
			if(relativeError(user_answer, correct, 0.05)) {
				message+="That's pretty good, but you still need to express your result with the correct number of significant figures.";				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else if(relativeError(user_answer, correct, 0.10)) {
				message+="You're within 10% of the correct answers! Try to make your calculations more precisely. ";				errorType="INSUFFICIENT_PRECISION_ERROR";
			} else if (relativeError(user_answer, badans[1], 0.02)) {
				message+="Remember that the arsenic weight is only a fraction of the total arsenite weight.";
				errorType="MOLECULAR_WEIGHT_USED_ERROR";
			} else if (relativeError(user_answer, badans[2], 0.02)) {
				message+="It looks like you're not checking your units before submitting your answer. Please try again.";				errorType="UNITS_ERROR";
			} else message+="Please check your answer and try again.";
			if (nAttempts==3) {				message="This was your third attempt and your result wasn't correct. ";				message+="The correct answer is "+format_sig(correct,3)+" grams of arsenic per 100 grams of adsorbent. Please CLICK REFRESH/RELOAD to start over with a new problem.";				a1.deactivate();
			}else if (nAttempts > 3) {				message="You already used three allowed for this question. Please CLICK REFRESH/RELOAD to start over with a new problem.";				a1.deactivate();			}
		}

		setFeedback(0, message, nAttempts);		logFormCheck(a1.formName,nAttempts,user_answer+" g As per 100 g of adsorbent",format_sig(correct,3)+" g As per 100 g of adsorbent",
				message,!isAttemptWrong,errorType);
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

