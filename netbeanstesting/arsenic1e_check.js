/**

 *	arsenic1e_check.js
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

	var user_answer	= document.oli_stoich_ars_vl2_act1.sample1.value;

	follow = nAttempts;

	isAttemptWrong=true;

	

	if(user_answer == ""){

		alert('Please enter an answer before checking');

	}else{	

		var errorType="UNKNOWN_ERROR";
		var correct = (sample1_rand + sample2_rand) * 74.9216  * 1e7;

		//Testing
		alert(correct);
		
		var bad_answers=new Array();

			// using the atomic weight of oxygen

			bad_answers[0]=(sample1_rand+ sample2_rand) * 15.994 * 1e7;

			// using the molecular weights of arsenite and arsenate

			bad_answers[1]=(sample1_rand * (74.9216+2*15.9994) + (sample2_rand * (74.9216+4*15.9994))) * 1e7;

			// dividing instead of multiplying by atomic weight

			bad_answers[2]=(sample1_rand + sample2_rand) / 74.9216 * 1e7;

			// taking molarity for moles

			bad_answers[3]=(sample1_rand + sample2_rand) * 74.9216 * 1e8;

			// forgetting the micro

			bad_answers[4]=(sample1_rand + sample2_rand) * 74.9216 * 1e1;

			// taking the molarity for grams

			bad_answers[5]=(sample1_rand /(74.9216+2*15.9994)+ sample2_rand /(74.9216+4*15.9994))* 74.9216  * 1e8;

			// forgetting the arsenite			

			bad_answers[6]=sample2_rand * 74.9216  * 1e7;

			// forgetting the arsenate

			bad_answers[7]=sample1_rand * 74.9216  * 1e7;




		var wrong_mantisa=sample1_rand/Math.pow(10,Math.floor(Math.log(sample1_rand)/Math.log(10)))+

						sample2_rand/Math.pow(10,Math.floor(Math.log(sample2_rand)/Math.log(10)));

			

			bad_answers[8]=wrong_mantisa*Math.pow(10,Math.floor(Math.log(sample1_rand)/Math.log(10)))* 74.9216  * 1e7;

			bad_answers[9]=wrong_mantisa*Math.pow(10,Math.floor(Math.log(sample2_rand)/Math.log(10)))* 74.9216  * 1e7;		

		

		var message = "";

		//		alert("Correct: " + correct);

		if(relativeError(user_answer, correct, 0.05) && number_sig(user_answer)==3){
		  setCompleted(true);
		  message+="Great Job!";
		  isAttemptWrong=false;
		  errorType="CORRECT";

		  a1.deactivate();
		} else {					

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

			} else if(relativeError(user_answer, bad_answers[3], 0.02) || relativeError(user_answer, bad_answers[5], 0.02)) {
				message+="The virtual lab shows solution information in moles, grams or molarity.";
				message+=" Remember to pay attention to what quantity is currently being shown. Please try again";
				errorType="PROPERTY_READ_ERROR";

			} else if(relativeError(user_answer, bad_answers[4], 0.02)) {
				message+="It looks like you're having problems with the units. Please check them and try again.";
				errorType="UNITS_ERROR";

			} else if(relativeError(user_answer, bad_answers[7], 0.02) || relativeError(user_answer, bad_answers[6], 0.02)) {

				message+="Did you include all forms of arsenic in the computation?";
				errorType="SPECIE_MISSED_ERROR";
				
			} else if(relativeError(user_answer, bad_answers[8], 0.02) || relativeError(user_answer, bad_answers[9], 0.02)) {

				message+="Remember that the concentrations are usually small numbers expressed in scientific notation. Please try again.";
				errorType="SCIENTIFIC_NOTATION_MISREAD_ERROR";

			} else message+="This answer is not correct. Please check it and try again.";



			if (nAttempts==3) {

				message="This was your third attempt and your result wasn\'t correct. ";
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

