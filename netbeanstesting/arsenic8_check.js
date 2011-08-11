/**
 *	Created with MAX's HTML Beauty++ 2004
 *	arsenic8_check.js
 *	@author Amani Ahmed, Jordi Cuadros
 *	@date August 02 2004
*/

var nAttempts = 1;
/**
 * Check function for Activity 1.0
 */
function act1Check(){
	var isAttemptWrong=true;
	var user_answer = new Array();
	var correct = new Array();
	var bad_answer=new Array();
	var message="";
	var errorType="UNKNOWN_ERROR";
	
	user_answer[0]=document.oli_stoich_ars__vl6_act1.sample1.value;
	user_answer[1]=document.oli_stoich_ars__vl6_act1.sample2.value;
	correct[0]=unkAs3*10;
	correct[1]=unkAs5*10;
	
	//Testing
	alert(correct[0]);
	//Testing
	alert(correct[1]);

	bad_answer[0]=correct[0]+correct[1];
	bad_answer[1]=correct[0]/10;
	bad_answer[2]=correct[1]/10;

	if(user_answer[0] == "" || user_answer[1] == "" || user_answer[0] == null || user_answer[1] == null){
		alert('Please enter an answer before checking');
	}else{	
		var cntCorrectRelativeError = 0; 
		if (relativeError(user_answer[0],correct[0],0.05)) cntCorrectRelativeError+=1;
		if (relativeError(user_answer[1],correct[1],0.05)) cntCorrectRelativeError+=1;
		
		var cntCorrectSignFig = 0;
		if (number_sig(user_answer[0])==3) cntCorrectSignFig+=1;
		if (number_sig(user_answer[1])==3) cntCorrectSignFig+=1;
		
		//alert("Correct: " + correct[0] + "," + correct[1]);

		var follow=nAttempts;
					
		if(cntCorrectRelativeError==2 && cntCorrectSignFig==2){	
			message+="Well done! Now move on to the next question!";
			isAttemptWrong=false;


	errorType="CORRECT";
			a1.deactivate();
			a2.activate();
			nAttempts = 0;
		} else {
			if(cntCorrectRelativeError == 2){
				message+="You're pretty close! But your results are not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			}else if(cntCorrectRelativeError==1) {
				if(relativeError(user_answer[0],correct[0],0.05) && relativeError(user_answer[1],bad_answer[0],0.05)){
					message+="You're doing good! But it seems that you're taking the total amount of arsenic ions for the arsenate.";
					message+=" What will your result be when you titrate after converting all the arsenic to arsenite?";
					errorType="TOTAL_ARSENIC_FOR_ARSENATE_ERROR";
				}else{
					message+="You're doing good! But one of your results is still wrong.";
					errorType="HALF_CORRECT_ERROR";
				}
			} else if (relativeError(user_answer[0],bad_answer[1],0.02) && relativeError(user_answer[1],bad_answer[2],0.02)) {
				message+="It looks as if you have an error in your calculations. Please make sure that you're using the right value for the concentration of the A solution and the volume of sample.";
				errorType="CONCENTRATION_OR_VOLUME_ERROR";
			} else
			 	message+="Please check your answer and try again."; 	
		
			if (nAttempts==3) {
				message="This was your third attempt and your results weren't correct. ";
				message+="The correct results were " +format_sig(correct[0],3)+ " molar of arsenite and ";
				message+=format_sig(correct[1],3)+ " molar of arsenate.";
				a1.deactivate();
			}else if (nAttempts > 3) {
				message="You have already spent your three allowed attempts for this question. CLICK REFRESH/RELOAD to start over with a new problem.";
				a1.deactivate();
			}
    	}
		
		setFeedback(0, message,follow);			
		logFormCheck(a1.formName,follow,user_answer[0]+ " M of arsenite and "+user_answer[1]+ " M of arsenate",
				format_sig(correct[0],3)+ " M of arsenite and "+format_sig(correct[1],3)+ " M of arsenate",
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}	
	return false;
}

var help = false;
/**
 * Check function for Activity 2.0
 */
function act2Check(){
	var message="";
	var user_answer = document.oli_stoich_ars__vl6_act2.mgAs.value;	
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	
	if((user_answer == "") || (user_answer == null)){
		alert('Please enter an answer before checking');
	}else{	
		var correct = (unkAs3+unkAs5)*74.9216*1000*10;

		//Testing
		alert(correct);
		
		var bad_answers=new Array();
			bad_answers[0]=correct/1000;
			bad_answers[1]=unkAs3*74.9216*1000*10;
			bad_answers[2]=unkAs5*74.9216*1000*10;
			bad_answers[3]=(unkAs3+unkAs5)*(74.9216+2*15.994)*1000*10;
			bad_answers[4]=(unkAs3+unkAs5)*(74.9216+4*15.994)*1000*10;
			bad_answers[5]=(unkAs3*(74.9216+2*15.994)+unkAs5*(74.9216+4*15.994))*1000*10;

			//alert("Correct: " + correct);

		if(relativeError(user_answer,correct,0.05) && number_sig(user_answer)==3){	
		  // DD Change 01 December 2005
		  setCompleted(true);
	
			message+="Great Job! You did it!.";
			isAttemptWrong=false;
			errorType="CORRECT";
			a2.deactivate();
		} else {
			if(relativeError(user_answer,correct,0.05)) {
				message+="You're pretty close! But your result is not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else if (relativeError(user_answer,bad_answers[0],0.02)) {
				message+="Please remember that your answer should be given in milligrams. Check your calculations and try again.";
				errorType="UNITS_ERROR";
			} else if (relativeError(user_answer,bad_answers[1],0.02) || relativeError(user_answer,bad_answers[2],0.02)) {
				message+="Did you include all forms of arsenic in the computation?";
				errorType="ONE_SPECIE_ERROR";
			}else if (relativeError(user_answer,bad_answers[3],0.02) || relativeError(user_answer,bad_answers[4],0.02)||
					relativeError(user_answer,bad_answers[5],0.02)) {
				message+="Remember that you must find the concentration of arsenic, not of arsenic-containing species.";
				errorType="MOLECULAR_WEIGHT_USED_ERROR";
			} else
				message+="Please check your answer and try again.";

			if (nAttempts==3) {
				message="This was your third attempt and your result wasn't correct. ";
				message+="The correct answer is "+format_sig(correct,3)+" milligrams of arsenic in the sample. CLICK REFRESH/RELOAD to start over with a new problem.";
				a2.deactivate();
			}else if (nAttempts > 3) {
				message="You have already spent your three allowed attempts for this question. CLICK REFRESH/RELOAD to start over with a new problem.";
				a2.deactivate();
			}
		}
		
		setFeedback(1, message,nAttempts);	
		logFormCheck(a2.formName,nAttempts,user_answer+" mg As",format_sig(correct,3)+" mg As",
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}	
	return false;
}


