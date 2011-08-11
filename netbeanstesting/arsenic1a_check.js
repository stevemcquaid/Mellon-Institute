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
  //	var user_answer	= document.oli_stoich_ars_vl1_act1.sample1.value;
	var user_answer	= document.activity1.sample1.value;
	follow = nAttempts;
	isAttemptWrong=true;
	
	if(user_answer == ""){
		alert('Please enter an answer before checking');
	}else{	
		var errorType="UNKNOWN_ERROR";
		var correct = sample1_rand * 74.9216 * 1e7;

		//Testing
		alert(correct);
		
		var bad_answers=new Array();
			// oxygen's atomic weight used
			bad_answers[0]=sample1_rand * 15.9994 * 1e7;
			// using arsenite molecular weight
			bad_answers[1]=sample1_rand * (74.9216+2*15.9994) * 1e7;
			// dividing by atomic weight
			bad_answers[2]=sample1_rand / 74.9216 * 1e7;
			// taking moles for molarity
			bad_answers[3]=sample1_rand * 74.9216 * 1e8;
			// forgetting the micro
			bad_answers[4]=sample1_rand * 74.9216 * 1e1;
			// taking molarity for grams
			bad_answers[5]=sample1_rand * 74.9216 /(74.9216+2*15.9994) * 1e8;

		var message = "";

		//		alert("Correct: " + correct);

		if(relativeError(user_answer, correct, 0.05) && number_sig(user_answer)==3){
		  alert("We got to set_completed");
		  // DD Change 23 November 2005
		  setCompleted(true);

		  message+="Great Job!";		
		  isAttemptWrong=false;
		  errorType="CORRECT";

		  a1.deactivate();
		}else{					
			if(relativeError(user_answer, correct, 0.05)) {
				message+="You're pretty close! But you still need to express your result with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else if(relativeError(user_answer, correct, 0.10)) {
				message+="You're pretty close! Try to be more precise to get the correct answer. ";
				errorType="INSUFFICIENT_PRECISION_ERROR";
			} else if(relativeError(user_answer, bad_answers[0], 0.02)) {
				message+="It looks like you're using oxygen's atomic weight; are you sure that's the correct value to use? ";
				message+="Please try again.";
				errorType="OXYGEN_ATOMIC_WEIGHT_USED_ERROR";
			} else if(relativeError(user_answer, bad_answers[1], 0.02)) {
				message+="Remember that you must find the concentration of arsenic, not of arsenic-containing species. ";
				message+="Please try again.";
				errorType="MOLECULAR_WEIGHT_USED_ERROR";
			} else if(relativeError(user_answer, bad_answers[2], 0.02)) {
				message+="Remember that the larger the molecular weight of a substance, the more mass you get per mole unit. ";
				message+="Please try again.";
				errorType="PROPORTIONAL_CALCULATION_ERROR";
			} else if(relativeError(user_answer, bad_answers[3], 0.02) || relativeError(user_answer, bad_answers[5], 0.01)) {
				message+="The virtual lab shows solution information in moles, grams or molarity.";
				message+=" Remember to pay attention to what quantity is currently being shown. Please try again";
				errorType="PROPERTY_READ_ERROR";
			} else if(relativeError(user_answer, bad_answers[4], 0.02)) {
				message+="It looks like you're having problems with the units. Please check them and try again.";
				errorType="UNITS_ERROR";
			} else message+="This answer is not correct. Please try again.";

			if (nAttempts==3) {
				message="This was your third attempt and your result wasn't correct. ";
				message+="The correct answer is "+format_sig(correct,3)+" micrograms of arsenic per liter. Please CLICK REFRESH/RELOAD to start over with a new problem.";

				a1.deactivate();
			} else if (nAttempts > 3) {
				message="You have already spent your three allowed attempts for this question. Please CLICK REFRESH/RELOAD to start over with a new problem.";
				a1.deactivate();
			}
		}
	
		setFeedback(0, message,nAttempts);
		logFormCheck(a1.formName,nAttempts,user_answer+" micrograms As",format_sig(correct,3)+" micrograms As",
				message,!isAttemptWrong,errorType);
		
		nAttempts++;
	}
	return false;
}

