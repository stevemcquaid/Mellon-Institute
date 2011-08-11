/**

 *	Created with MAX's HTML Beauty++ 2004

 *	arsenic5_check.js

 *	@author Amani Ahmed, Jordi Cuadros

 *	@date July 27 2004

*/



var nAttempts = 1;

var curActivity=1;

var thisAttemptNumber=0

/**

 * Check function for Activity 1.0

 */

function act1Check(){

	thisAttemptNumber=nAttempts;
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";

	var user_dens=new Array(4);
	user_dens[0]=document.oli_stoich_ars_vl3_act1.density1.value;
	user_dens[1]=document.oli_stoich_ars_vl3_act1.density2.value;
	user_dens[2]=document.oli_stoich_ars_vl3_act1.density3.value;
	user_dens[3]=document.oli_stoich_ars_vl3_act1.density4.value;

	var user_answer="";

	// check for correct answer
	var correct=new Array(4);
	correct[0] = calcDensity(50);
	correct[1] = calcDensity(5);
	correct[2] = calcDensity(.50);
	correct[3] = calcDensity(.050);

	var correctString="";

	for (var i=0;i<4;i++) {
		if(user_dens[i] == ""){
			alert('Please enter an answer before checking.');
			return false;
		}
		correctString += format_sig(correct[i],4)+ ", ";
		user_answer += user_dens[i]+", ";
	}
	
	correctString=correctString.substring(0,correctString.length-2);

	//	alert("Correct: " + correctString);

	user_answer=user_answer.substring(0,user_answer.length-2);

	var nCorrect=0;
	var nNonSig=0;
	var nApprox=0;

	for (var i=0;i<4;i++) {
		if (user_dens[i]==format_sig(correct[i],4)) {
			nCorrect++;
		} else if (format_sig(user_dens[i],4)==format_sig(correct[i],4)){
			nNonSig++;
		} else if (absError(user_dens[i],correct[i],0.001)){
			nApprox++;
		}
	}

	

	// check for expected errors
	var isExpectedError=new Array();
		isExpectedError[0]=false;
	

	// expected error: concentrations ten times larger
	var nErrors=0;

	for (var i=0;i<4;i++) {
		if (absError(user_dens[i],calcDensity(500/Math.pow(10,i)),0.002)) {
			nErrors++;
		}
	}

	if (nErrors==4) isExpectedError[0]=true;

	var message="";

	if (nCorrect==4) {
		message="Excellent, you got all the densities right! Now move to the next question!";
		a1.deactivate();
		a2.activate();
		isAttemptWrong=false;
		errorType="CORRECT";

		// DD Change 23 November 2005
		setCompleted(true);

		nAttempts=0;

	} else if (nCorrect+nNonSig==4) {
		message="Good job, but your results are not expressed with the correct number of significant figures. ";
		message+= "The expected results are "+ correctString +" grams per milliliter. ";
		message+= "Move to the next question but be more careful next time!";
		a1.deactivate();
		a2.activate();	
		isAttemptWrong=false;
		errorType="WRONG_SIGNIFICANT_FIGURES_BUT_CORRECT";		
		nAttempts=0;

	} else if (nCorrect+nNonSig+nApprox==4) {
		message="Pretty good, but your results are not precise enough. ";
		message+= "The correct results are "+ correctString +" grams per milliliter. ";
		message+= "Move to the next question but be more careful next time!";
		a1.deactivate();
		a2.activate();	
		isAttemptWrong=false;
		errorType="APPROXIMATELY_CORRECT";		
		nAttempts=0;

	} else {	
		if (isExpectedError[0]) {
			message="It looks as if your solutions don't have the correct concentrations. ";
			message+="How many grams of solute are in 100 milliliters of a solution that has a concentration of 50 grams per liter? ";
			message+="Are you sure that you're using the right amounts?";
			errorType="VOLUME_ERROR";

		} else if (nCorrect+nApprox>=2) {
			message="Nice! You're doing a good job! ";
			message+= "But " +(4-nCorrect-nApprox-nNonSig)+" of your results have errors larger than expected. ";
			message+= "Go back and check them.";
			errorType="HALF_CORRECT_ERROR";
		} else {
			message="Please try again.";
		}

		if (nAttempts==3) {
			message="This was your third attempt and ";
			message+="your results are not precise enough to get to the next question. Please CLICK REFRESH/RELOAD to start over. ";
			a1.deactivate();
		}

	}
	
	setFeedback(0, message,thisAttemptNumber);		
	logFormCheck(a1.formName,thisAttemptNumber,user_answer+" g/mL",correctString +" g/mL",
			message,!isAttemptWrong,errorType);
	nAttempts++;

	return false;
}



/**
 * Check function for Activity 2.0
 */

function act2Check(){
	var message="";
	user_answer=document.oli_stoich_ars_vl3_act2.density2.value;
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";

	if(user_answer == ""){
		alert('Please enter an answer before checking');
	} else {	
		var gNaAsO2=parseFloat(unk*129.28);
		var volumeNaAsO2mL=gNaAsO2/129.28*22.99/2.66+gNaAsO2/129.28*106.29/8.3;
		var volumeWatermL=water*18.016;
		var correct=gNaAsO2/(volumeWatermL+volumeNaAsO2mL)*1000;
		var badc_answers=new Array ();
			badc_answers[1]= calcDensity(correct);
			badc_answers[2]= calcDensity(correct)/calcDensity(50)*50;
			badc_answers[3]= calcDensity(correct)/calcDensity(5)*5;
			badc_answers[4]= calcDensity(correct)/calcDensity(0.5)*0.5;
			badc_answers[5]= calcDensity(correct)/calcDensity(0.05)*0.05;
			badc_answers[6]= (calcDensity(50)-1)*50/(calcDensity(correct)-1);
			badc_answers[7]= (calcDensity(5)-1)*5/(calcDensity(correct)-1);

		if(relativeError(user_answer,correct,0.05) && number_sig(user_answer)==4){
			message+="Excellent! You did a good job!";
			isAttemptWrong=false;
			errorType="CORRECT";
			a2.deactivate();

		} else {					
			if(relativeError(user_answer, correct, 0.05)) {
				message+="You're pretty close, but your result is not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else if(relativeError(user_answer, badc_answers[1],0.02)) {
				message+="Remember that density and concentration are different concepts; check the video for this unit";
				errorType="DENSITY_FOR_CONCENTRATION_ERROR";
			} else if(relativeError(user_answer, badc_answers[2],0.02) || relativeError(user_answer, badc_answers[3],0.02)
					|| relativeError(user_answer, badc_answers[4],0.02) || relativeError(user_answer, badc_answers[5],0.02)) {
				message+="Remember that the change in density is related to the change in concentration";
				errorType="PROPORTIONALiTY_TO_CONCENTRATION_ERROR";
			} else if(relativeError(user_answer, badc_answers[6],0.02)|| relativeError(user_answer, badc_answers[7],0.02)) {
				message+="It seems that you're stating that the higher the density of the solution is, the lower the concentration. Are you sure that's right?";
				errorType="PROPORTIONAL_CALCULATION_ERROR";
			} else if(user_answer>1000 || user_answer<0) {
				message+="You're giving an unlikely value for an answer. You should check whether your result makes sense before submitting it.";
				errorType="NON_MEANINGFUL_VALUE_ERROR";
			} else {
				message+="Please check your answer and try again.";
			}
			
			if (nAttempts==3) {
				message="This was your third attempt and your answer wasn't correct. ";
				message+="The correct concentration of arsenite is "+format_sig(correct,4)+" grams per liter. Please CLICK REFRESH/RELOAD to start over with a new problem.";
				a2.deactivate();
			} else if (nAttempts > 3) {
				message="You have taken three attempts for this question. Please CLICK REFRESH/RELOAD to start over with a new problem.";
				a2.deactivate();
			}
		}

		setFeedback(1, message,nAttempts);
		logFormCheck(a2.formName,nAttempts,user_answer+" g/L",format_sig(correct,4)+" g/L",
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}

	return false;	

}

/**
* Calculate density(g/mL) from concentration (in g/L)
*/

function calcDensity(conc) {
	var gNaAsO2=parseFloat(conc);
	var volumeNaAsO2mL=gNaAsO2/129.28*22.99/2.66+gNaAsO2/129.28*106.29/8.3;
	var volumeWatermL=1000-volumeNaAsO2mL;
	var gWater=volumeWatermL;
	return (gWater+gNaAsO2)/(volumeNaAsO2mL+volumeWatermL);
}



