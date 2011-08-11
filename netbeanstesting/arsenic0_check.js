/**
 *	arsenic1a_check.js
 *	@author Amani Ahmed, Jordi Cuadros
 *	@date August 02 2004
*/

var nAttempts = 1;
var follow = nAttempts;
var isAttemptWrong=true;

/**
 * Check function for Activity 1.0
 */
function act1Check(){
	var user_answer	= document.oli_stoich_ars_vl0_act1.sample1.value;
	follow = nAttempts;
	isAttemptWrong=true;
	
	if(user_answer == ""){
		alert('Please enter an answer before checking');
	}else{	
		var errorType="UNKNOWN_ERROR";
		var correct = sample1_rand * 10;

		//Testing
		alert(correct);

		var message = "";

		if(relativeError(user_answer, correct, 0.05) && number_sig(user_answer)==3){
			message+="Great Job!";
			isAttemptWrong=false;
			errorType="CORRECT";	

			// DD Change 12 November 2005
			setCompleted(true);

			a1.deactivate();
		} else {
			if(relativeError(user_answer, correct, 0.05)) {
				message+="You're pretty close! But you still need to express your result with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else if(relativeError(user_answer, correct, 0.10)) {
				message+="You're pretty close! Try to be more precise to get the correct answer. ";
				errorType="INSUFFICIENT_PRECISION_ERROR";
			} else 
				message+="This answer is not correct. Please try again.";
			
			if (nAttempts==3) {
				message="This was your third attempt and your result wasn't correct. ";
				message+="The correct answer is "+format_sig(correct,3)+" moles per liter of arsenite. Please CLICK REFRESH/RELOAD to start over with a new problem.";
				a1.deactivate();
			} else if (nAttempts > 3) {
				message="You have already spent your three allowed attempts for this question. Please CLICK REFRESH/RELOAD to start over with a new problem.";
				a1.deactivate();
			}
		}
	
		setFeedback(0, message,nAttempts);
		logFormCheck(a1.formName,nAttempts,user_answer+" M",format_sig(correct,3)+" M",
			message,!isAttemptWrong,errorType);
		
		nAttempts++;
	}	return false;
}
