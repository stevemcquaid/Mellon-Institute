/**
 *	Created with MAX's HTML Beauty++ 2004
 *	empirical_check.js
 *	@author Amani Ahmed, Jordi Cuadros
 *	@date August 24 2004
*/

function calcMinMoles() {
	for(t=0;t<CmdElements.length;t++){
		var molesThisElement = round_sig(CmdElements[t].moles/CmdWeight,3);
		if(molesThisElement < minMoles || minMoles<0) minMoles = molesThisElement;
	}
}

function resetDoc() {
	for(var i=0; i<document.forms.length;i++) {
		document.forms[i].reset();
	}
	empform0.activate();
    logLogIn("oli_stoich_ars_empform");
	return true;
}

var minMoles = -1;		//negative number to indicate undefined
var helpable=true;

/**
 * Prepares the page for the use of scaffolding questions by resetting the values of and deactiviating
 * the base questions and showing the scaffolding questions of the problem
 */
/* We have brought this to to the top to see if it helps us with IE */
function scaffold()
{
	if(helpable==false) return(0);
	
	// DD change - remove this deactivation
	//empform0.deactivate();
	helpable=false;

	for(t=0;t<CmdElements.length;t++){
		eval("a"+t+".show(); a"+t+".activate();");
		eval("b"+t+".show(); b"+t+".activate();");
	}	
	empform.show();
	empform.activate();
	
	nAttempts = 0;

	// DD note: Removing this made no difference
	logScaffold("oli_stoich_ars_empform");

	// DD change to return false as substitute for return(false) in JS
	return(false);
}



/** 
 * Based on the index number and type given, this function changes the color of the appropriate
 * textbox to green or red. Green if the answer is correct and red if it is not. This is the check
 * function for the first two activities on the EmpiricalFormula.html page.  Currently asks for 
 * an exact answer to 3 significant digits on most questions; this can be changed to accept answers
 * in a range instead.
 * @param	s				integer defining index of the specie in the CmdElements array
 *			checkingThis	string defining the type of answer requested
 *
 *	DECIDE WHETHER YOU WANT THE ANSWER IN A RANGE OR EXACT TO A CERTAIN NUMBER OF SIG DIGS
 */
function colorChangeCheck(s, checkingThis){	
	var place = CmdElements[s];	
	var correct="";
	var user_data="";
	var changed_object=null;
	var active_form=null;
	var isWrong=true;
	var feedback_text="";
	var activity="1";
	var errorType="UNKNOWN_ERROR";

	if (minMoles==-1) calcMinMoles();
	
	// cancel feedbacks on the two first steps
	for (var i=0; i<document.forms.length;i++) {
		if (document.forms[i].name.substring(0,"oli_stoich_ars_empform_act1_".length)=="oli_stoich_ars_empform_act1_" ||
				document.forms[i].name.substring(0,"oli_stoich_ars_empform_act1_".length)=="oli_stoich_ars_empform_act2_") {
			setFeedback(i,"",1);
		}
	}	
	switch(checkingThis){
		case "grams":	
			correct = round_sig((gramsCompound * (place.moles * place.weight))/ CmdWeight, 3);
			eval("active_form=document.oli_stoich_ars_empform_act1_"+s+".logicalForm;");
			eval("changed_object=document.oli_stoich_ars_empform_act1_"+s+".grams"+place.specie+"InCmd;");		
			user_data=changed_object.value;
			if(user_data==correct) isWrong=false;
			else feedback_text="This ratio is intented to relate the mass of an element to 100 grams of the compound. Which of your data corresponds to this relationship?";
			break;
		case "moles":
			correct = 1;
			eval("active_form=document.oli_stoich_ars_empform_act1_"+s+".logicalForm;");
			eval("changed_object=document.oli_stoich_ars_empform_act1_"+s+".moles"+place.specie+";");		
			user_data=changed_object.value;
			if(user_data==correct) isWrong=false;
			else feedback_text="How many moles are in a mass equivalent to the atomic weight of an element?";
			break;		
		case "mWeight":
			correct = place.weight;
			eval("active_form=document.oli_stoich_ars_empform_act1_"+s+".logicalForm;");
			eval("changed_object=document.oli_stoich_ars_empform_act1_"+s+".mWeight"+place.specie+";");		
			user_data=changed_object.value;
			if(user_data==correct) isWrong=false;
			else feedback_text="This ratio is intended to convert the mass of this element to the number of moles. What should you use for this purpose?";
			break;
		case "gramsOfCmd":
			correct = gramsCompound;
			eval("active_form=document.oli_stoich_ars_empform_act1_"+s+".logicalForm;");
			eval("changed_object=document.oli_stoich_ars_empform_act1_"+s+".gramsOfCmd;");		
			user_data=changed_object.value;
			if(user_data==correct) isWrong=false;
			else feedback_text="How many grams of compound do you have?";
			break;
		case "gramsOfCmd2":
			correct = gramsCompound;
			eval("active_form=document.oli_stoich_ars_empform_act1_"+s+".logicalForm;");
			eval("changed_object=document.oli_stoich_ars_empform_act1_"+s+".gramsOfCmd2;");		
			user_data=changed_object.value;
			if(user_data==correct) isWrong=false;
			else feedback_text="How many grams of compound do you have?";
			break;
		case "molesInCmd":
			correct = round_sig(place.moles/CmdWeight*100,3);
			eval("active_form=document.oli_stoich_ars_empform_act1_"+s+".logicalForm;");
			eval("changed_object=document.oli_stoich_ars_empform_act1_"+s+".moles"+place.specie+"InCmd;");		
			user_data=changed_object.value;
			if(relativeError(user_data,correct,0.01) && number_sig(user_data)>=3) isWrong=false;
			else
				if(absError(user_data,correct,5*Math.pow(10,Math.floor(Math.log(user_data)/Math.LN10)-number_sig(user_data)))) {
					feedback_text="Watch out for those significant figures! You should be using at least three here.";
					errorType="SIGNIFICANT_FIGURES_ERROR";
				}
			break;
		case "molesInCmd2":
			correct = round_sig(place.moles/CmdWeight*100,3);
			eval("active_form=document.oli_stoich_ars_empform_act2_"+s+".logicalForm;");
			eval("changed_object=document.oli_stoich_ars_empform_act2_"+s+".moles"+place.specie+"InCmd;");		
			user_data=changed_object.value;
			if(relativeError(user_data,correct,0.01) && number_sig(user_data)>=3) isWrong=false;
			else
				if(absError(user_data,correct,5*Math.pow(10,Math.floor(Math.log(user_data)/Math.LN10)-number_sig(user_data)))) {
					feedback_text="Watch out for those significant figures! You should be using at least three here.";
					errorType="SIGNIFICANT_FIGURES_ERROR";			
				} else feedback_text="Remember you have to use the number of moles of this element in 100 grams of compound.";
			break;
		case "smallestMoles":
			correct = minMoles*100;
			eval("active_form=document.oli_stoich_ars_empform_act2_"+s+".logicalForm;");
			eval("changed_object=document.oli_stoich_ars_empform_act2_"+s+".smallestMoles;");		
			user_data=changed_object.value;
			if(relativeError(user_data,correct,0.01) && number_sig(user_data)>=3) isWrong=false;
			else
				if(absError(user_data,correct,5*Math.pow(10,Math.floor(Math.log(user_data)/Math.LN10)-number_sig(user_data)))) {
					feedback_text="Watch out for those significant figures! You should be using at least three here.";
					errorType="SIGNIFICANT_FIGURES_ERROR";
				} else feedback_text="Remember you have to use the smallest number of moles calculated above.";
			break;
		case "ratio": 
			correct = round_sig(place.moles/CmdWeight/minMoles,3);
			eval("active_form=document.oli_stoich_ars_empform_act2_"+s+".logicalForm;");
			eval("changed_object=document.oli_stoich_ars_empform_act2_"+s+"."+place.specie+"Ratio;");		
			user_data=changed_object.value;
			if(relativeError(user_data,correct,0.01)) isWrong=false;
			break;
	}
	activity=active_form.formName.substring(active_form.formName.length-2,active_form.formName.length-1)
	
	if (!(changed_object==null || changed_object.value=="")) {
		if (isWrong) {
			changed_object.style.color='red';
		} else {
			changed_object.style.color='green';
			errorType="CORRECT";
		}
		setFeedback(active_form.formIndex,feedback_text,3);
		logTextboxChange(active_form.formName,changed_object.name,user_data,correct,feedback_text,!isWrong,errorType);
	}
}

/**
 * Check function for the THIRD activity on the Empirical Formula problem
 */
var nAttempts = 1;
function act3Check(){
	var message="";
	var user_answer = new Array(CmdElements.length);
	var user_answer_string="";
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
		
	for(i=0;i<user_answer.length; i++){
		user_answer[i] = eval("document.oli_stoich_ars_empform_act3."+CmdElements[i].specie+"_sub.value");
		if(user_answer[i] == ""){
			user_answer[i] = 1;
		}
		user_answer_string+=""+CmdElements[i].specie+user_answer[i];	
	}		

	var correct_answer="";	
	for(y=0;y<CmdElements.length;y++){
		correct_answer+=CmdElements[y].specie;
		if(CmdElements[y].moles != 1) correct_answer+=CmdElements[y].moles;
	}

	var cnt = 0;
	for(i=0;i<user_answer.length;i++){
		if(user_answer[i] == CmdElements[i].moles)
			cnt++
	}
	
	if(cnt == user_answer.length){
	  setCompleted(true);
		message+="Great Job!";
		isAttemptWrong=false;
		deactivateAll();
		errorType="CORRECT";
	}else {
		if(cnt == user_answer.length-1) {
			message+="You're pretty close! But one of the subscripts is incorrect.";
			errorType="HALF_CORRECT_ERROR";
		} else
	 	 	message+="Try again."; 	
		
		if (nAttempts==3) {
			message="This was your third attempt and your answer wasn't correct. ";
			message+="The correct empirical formula is "+correct_answer;
			message+=".";
			deactivateAll();
		} else if (nAttempts > 3) {
			message="You have already spent your three allowed attempts for this question. CLICK REFRESH/RELOAD to start over with a new problem.";
			deactivateAll();
		}
	}
	setFeedback(document.forms.length-1, message,((isAttemptWrong)?nAttempts:1));			
	logFormCheck("oli_stoich_ars_empform_act3",nAttempts,user_answer_string,correct_answer,
				message,!isAttemptWrong,errorType);
	nAttempts++;
	return false;
}



/**
*	Deactivates all the forms in the document
*/
function deactivateAll() {
	for(var i=0;i<document.forms.length;i++) {
		document.forms[i].logicalForm.deactivate();
	}
}



	
