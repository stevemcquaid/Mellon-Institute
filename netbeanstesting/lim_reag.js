/**
 *	Created with MAX's HTML Beauty++ 2004
 *	lim_reag.js
 *	@author Jordi Cuadros
 *	@date July 12 2004
*/

var nAttempts=1;
var helpable=true;

/**
*	Problem definition object
*/
function LRProblem() {
	this.reactants=new Array();
	this.products=new Array();
	
	switch (intRandom(0,5)) {
		case 0:
		this.reaction="2 AsO<sub>2<\/sub><sup>-<\/sup> + 3 S<sup>2-<\/sup> + 4 H<sub>2<\/sub>O ---> As<sub>2<\/sub>S<sub>3<\/sub>(s)  + 8 OH<sup>-<\/sup>";
		this.reactants[0]=new Object();
		this.reactants[1]=new Object();
		this.reactants[0].name="arsenite";
		this.reactants[1].name="sulfide";
		this.reactants[0].MW=106.9096;
		this.reactants[1].MW=32.066;
		this.reactants[0].coeff=2;
		this.reactants[1].coeff=3;
		this.products[0]=new Object();
		this.products[0].name="arsenic(III) sulfide";
		this.products[0].MW=246.041;
		this.products[0].coeff=1;
		break;
		case 1:
		this.reaction="2 AsO<sub>4<\/sub><sup>-3<\/sup> + 3 Fe<sup>2+<\/sup> ---> Fe<sub>3<\/sub>(AsO<sub>4<\/sub>)<sub>2<\/sub>(s)";
		this.reactants[0]=new Object();
		this.reactants[1]=new Object();
		this.reactants[0].name="arsenate";
		this.reactants[1].name="iron(II) ion";
		this.reactants[0].MW=138.9084;
		this.reactants[1].MW=55.845;
		this.reactants[0].coeff=2;
		this.reactants[1].coeff=3;
		this.products[0]=new Object();
		this.products[0].name="iron(II) arsenate";
		this.products[0].MW=445.352;
		this.products[0].coeff=1;
		break;
		case 2:
		this.reaction="AsO<sub>4<\/sub><sup>-3<\/sup> + Fe<sup>3+<\/sup> ---> FeAsO<sub>4<\/sub>(s)";
		this.reactants[0]=new Object();
		this.reactants[1]=new Object();
		this.reactants[0].name="arsenate";
		this.reactants[1].name="iron(III) ion";
		this.reactants[0].MW=138.9084;
		this.reactants[1].MW=55.845;
		this.reactants[0].coeff=1;
		this.reactants[1].coeff=1;
		this.products[0]=new Object();
		this.products[0].name="iron(III) arsenate";
		this.products[0].MW=194.753;
		this.products[0].coeff=1;
		break;
		case 3:
		this.reaction="2 AsO<sub>4<\/sub><sup>-3<\/sup> + 3 Ca<sup>2+<\/sup> ---> Ca<sub>3<\/sub>(AsO<sub>4<\/sub>)<sub>2<\/sub>(s)";
		this.reactants[0]=new Object();
		this.reactants[1]=new Object();
		this.reactants[0].name="arsenate";
		this.reactants[1].name="calcium ion";
		this.reactants[0].MW=138.9084;
		this.reactants[1].MW=40.078;
		this.reactants[0].coeff=2;
		this.reactants[1].coeff=3;
		this.products[0]=new Object();
		this.products[0].name="calcium arsenate";
		this.products[0].MW=398.051;
		this.products[0].coeff=1;
		break;
		case 4:
		this.reaction="3 AsO<sub>4<\/sub><sup>-3<\/sup> + 5 Ca(OH)<sub>2<\/sub> ---> Ca<sub>5<\/sub>(AsO<sub>4<\/sub>)<sub>3<\/sub>OH(s) + 9 OH<sup>-<\/sup>";
		this.reactants[0]=new Object();
		this.reactants[1]=new Object();
		this.reactants[0].name="arsenate";
		this.reactants[1].name="calcium hydroxide";
		this.reactants[0].MW=138.9084;
		this.reactants[1].MW=74.093;
		this.reactants[0].coeff=3;
		this.reactants[1].coeff=5;
		this.products[0]=new Object();
		this.products[0].name="calcium hydroxide arsenate";
		this.products[0].MW=634.123;
		this.products[0].coeff=1;
		break;
		case 5:
		this.reaction="3 AsO<sub>4<\/sub><sup>-3<\/sup> + 5 PbCl<sub>2<\/sub> ---> Pb<sub>5<\/sub>(AsO<sub>4<\/sub>)<sub>3<\/sub>Cl(s) + 9 Cl<sup>-<\/sup>";
		this.reactants[0]=new Object();
		this.reactants[1]=new Object();
		this.reactants[0].name="arsenate";
		this.reactants[1].name="lead(II) chloride";
		this.reactants[0].MW=138.9084;
		this.reactants[1].MW=278.1;
		this.reactants[0].coeff=3;
		this.reactants[1].coeff=5;
		this.products[0]=new Object();
		this.products[0].name="lead(II) arsenate chloride";
		this.products[0].MW=1488.2;
		this.products[0].coeff=1;
		break;
	}
	
	for (var i=0;i<this.reactants.length;i++) {
		this.reactants[i].mass=round_sig(doubleRandom(0.1,3),3);
		this.reactants[i].massUnit="g";
	}	

	for (var i=0;i<this.products.length;i++) {
		this.products[i].massUnit="g";
	}
		
	this.nreact=this.reactants.length;
	
	this.products[0].molesFinal=-1;
	for (i=0;i<this.nreact;i++) {
		this.reactants[i].moles=this.reactants[i].mass/this.reactants[i].MW;
		this.reactants[i].molesProd=this.reactants[i].moles/this.reactants[i].coeff*this.products[0].coeff;
		if (this.products[0].molesFinal<0 || this.products[0].molesFinal>this.reactants[i].molesProd)
			this.products[0].molesFinal=this.reactants[i].molesProd;
	}
	this.products[0].massFinal=this.products[0].molesFinal*this.products[0].MW;
	
	for (i=0;i<this.nreact;i++) {
		this.reactants[i].molesCons=this.products[0].molesFinal*this.reactants[i].coeff/this.products[0].coeff;
		this.reactants[i].massLeft=(this.reactants[i].moles-this.reactants[i].molesCons)*this.reactants[i].MW;
		if (this.reactants[i].massLeft<0) this.reactants[i].massLeft=0;
	}
	
	this.show_results=show_results;
}

/**
* First form checking routine
*/
function act1Check() {
	var user_answer = new Array();
	var correct = new Array();
	var message="";	
	var cntCorrect=0;
	var cntSigCorrect=0;
	var filled=true;
	var follow=nAttempts;
	var correctStr="";
	var userStr="";
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";

	for (var i=0; i<thisProblem.nreact;i++) {
		user_answer[i]=eval("document.oli_stoich_ars_limreag_act1.react"+i+".value");
		correct[i]=thisProblem.reactants[i].moles;
		correctStr+=" " + format_sig(correct[i],3)+" moles of " +thisProblem.reactants[i].name+",";
		userStr+=" " + user_answer[i]+" moles of "+thisProblem.reactants[i].name+",";
			
		if (user_answer[i]=="" || user_answer[i]==null) {
			alert('Please enter an answer before checking');
			filled=false;
			break;
		}
		if(absError(user_answer[i],correct[i],5*Math.pow(10,Math.floor(Math.log(user_answer[i])/Math.LN10)-number_sig(user_answer[i]))))
			cntCorrect++;
		if (number_sig(user_answer[i])==3) cntSigCorrect++;
	}
	correctStr=correctStr.substring(0,correctStr.length-1);
	userStr=userStr.substring(0,userStr.length-1);
	

	var isBadAnswer=new Array();

	isBadAnswer[0]=true;
	//using the MW of arsenic	
	for (var i=0; i<thisProblem.nreact;i++) {
		if (!relativeError(user_answer[i],thisProblem.reactants[i].mass/74.9216,0.01)) isBadAnswer[0]=false;
	}

	isBadAnswer[1]=true;
	//divide by the stoichiometric coefficients
	for (var i=0; i<thisProblem.nreact;i++) {
		if (!relativeError(user_answer[i],thisProblem.reactants[i].moles/thisProblem.reactants[i].coeff,0.01)) isBadAnswer[1]=false;
	}

	isBadAnswer[2]=true;
	//multiply by MW instead of dividing	
	for (var i=0; i<thisProblem.nreact;i++) {
		if (!relativeError(user_answer[i],thisProblem.reactants[i].mass*thisProblem.reactants[i].MW,0.01)) isBadAnswer[2]=false;
	}
	
		
	if (filled) {
		if (cntCorrect==thisProblem.nreact && cntSigCorrect==thisProblem.nreact) {
			message+="Well done! Now move on to the next question!";
		    isAttemptWrong=false;
			errorType="CORRECT";
			a1.deactivate();
			a2.activate();
			nAttempts = 0;
		} else {
			if(cntCorrect == thisProblem.nreact){
				message+="You're pretty close! But your results are not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else if(cntCorrect==thisProblem.nreact-1) {
				message+="You're doing good! But one of your results is still wrong.";
				errorType="ALL_BUT_ONE_CORRECT_ERROR";
			} else if(isBadAnswer[0]) {
				message+="You seem to be using the atomic weight of arsenic for your calculation. Is this the correct value to use?";
				errorType="ATOMIC_WEIGHT_USED_ERROR";
			} else if(isBadAnswer[1]) {
				message+="You seem to be adjusting the number of moles with the stoichiometric coefficients. Why?";
				errorType="STOICH_COEFF_USED_ERROR";
			} else if(isBadAnswer[2]) {
				message+="It looks like you're multiplying by the molecular weights. Is that how you convert mass to moles?";
				errorType="PROPORTIONAL_CALCULATION_ERROR";
			} else
		 	 	message+="Please check your calculations and try again."; 	

			if (nAttempts==3) {
				message="This was your third attempt and your results weren't correct. ";
				message+="The correct results are "+correctStr+ ".";
				message+=" Make sure to understand your mistake and go on to the next step.";
				nAttempts = 0;
				a1.deactivate();
				a2.activate();
			} else if (nAttempts > 3) {
				message="You have already spent your three allowed attempts for this question. CLICK REFRESH/RELOAD to start over with a new problem.";
				a1.deactivate();
			}
    	}
		
		setFeedback(a1.formIndex, message ,isAttemptWrong?follow:0);			
		logFormCheck(a1.formName,follow,userStr,correctStr,
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}
	return false;
}

/**
* Second form checking routine
*/
function act2Check() {
	var user_answer = new Array();
	var correct = new Array();
	var message="";	
	var cntCorrect=0;
	var cntSigCorrect=0;
	var filled=true;
	var follow=nAttempts;
	var correctStr="";
	var userStr="";
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	
	for (var i=0; i<thisProblem.nreact;i++) {
		user_answer[i]=eval("document.oli_stoich_ars_limreag_act2.prod_for_"+i+".value");
		correct[i]=thisProblem.reactants[i].molesProd;
		correctStr+=" " + format_sig(correct[i],3)+" moles (for " +thisProblem.reactants[i].name+"),";
		userStr+=" " + user_answer[i]+" moles (for " +thisProblem.reactants[i].name+"),";
			
		if (user_answer[i]=="" || user_answer[i]==null) {
			alert('Please enter an answer before checking');
			filled=false;
			break;
		}
		if(absError(user_answer[i],correct[i],5*Math.pow(10,Math.floor(Math.log(user_answer[i])/Math.LN10)-number_sig(user_answer[i]))))
			cntCorrect++;
		if (number_sig(user_answer[i])==3) cntSigCorrect++;
	}
	correctStr=correctStr.substring(0,correctStr.length-1);
	userStr=userStr.substring(0,userStr.length-1);
	
	var isBadAnswer=new Array();
	
	//	alert("Correct: " + correctStr);

	isBadAnswer[0]=true;
	//forgetting the stoichiometric conversion	
	for (var i=0; i<thisProblem.nreact;i++) {
		if (!relativeError(user_answer[i],thisProblem.reactants[i].moles,0.01)) isBadAnswer[0]=false;
	}
	
	isBadAnswer[1]=true;
	//if two reactants, make a ratio to get the amount of product
	if (thisProblem.nreact==2)
		for (var i=0; i<2;i++) {
			if (!(relativeError(user_answer[i],thisProblem.reactants[i].moles*thisProblem.reactants[i].coeff/thisProblem.reactants[1-i].coeff,0.01)
					|| relativeError(user_answer[i],thisProblem.reactants[i].moles*thisProblem.reactants[1-i].coeff/thisProblem.reactants[i].coeff,0.01)))
			 	isBadAnswer[1]=false;
		}
	else isBadAnswer[1]=false;
	
	
	if (filled) {
		if (cntCorrect==thisProblem.nreact && cntSigCorrect==thisProblem.nreact) {
			message+="Correct! Keep going!";
		    isAttemptWrong=false;
			errorType="CORRECT";
			a2.deactivate();
			a3.activate();
			nAttempts = 0;
		} else {
			if(cntCorrect == thisProblem.nreact) {
				message+="You're pretty close! But your results are not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else if(cntCorrect==thisProblem.nreact-1) {
				message+="You're doing good! But one of your results is still wrong.";
				errorType="ALL_BUT_ONE_CORRECT_ERROR";
			} else if (isBadAnswer[0]) {
				message+="It seems that you're not taking into account the stoichiometric coefficients. Are you sure that's correct?";
				errorType="REACTION_STOICH_ERROR";
			} else if (isBadAnswer[1]) {
				message+="You seem to be using the coefficients of both reactants to make each calculation. Remember "+
					 	"that you're trying to calculate the maximum amount of product that would be produced from one reactant "+
						" if all the others were in excess.";
				errorType="OTHER_REACTANTS_COEFFICIENTS_USED_ERROR";
			} else
		 	 	message+="Please check your calculations and try again."; 	
		
			if (nAttempts==3) {
				message="This was your third attempt and your results weren't correct. ";
				message+="The correct results are "+correctStr+ ".";
				message+=" Make sure to understand your mistake and go on to the next step.";
				nAttempts = 0;
				a3.activate();
				a2.deactivate();
			} else if (nAttempts > 3) {
				message="You have already spent your three allowed attempts for this question. CLICK REFRESH/RELOAD to start over with a new problem.";
				a2.deactivate();
			}
		}

		setFeedback(a2.formIndex, message ,isAttemptWrong?follow:0);			
		logFormCheck(a2.formName,follow,userStr,correctStr,
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}
	return false;
}

/**
* Third form checking routine
*/
function act3Check() {
	var message="";	
	var cntCorrect=0;
	var cntSigCorrect=0;
	var filled=true;
	var follow=nAttempts;
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	
	var user_answer=document.oli_stoich_ars_limreag_act3.amount_prod.value;
	var correct=thisProblem.products[0].massFinal;
	
	var isBadAnswer=new Array();
	
	isBadAnswer[0]=false;
	//multiply by the molecular weight of the reactant	
	for (var i=0; i<thisProblem.nreact;i++) {
		if (relativeError(user_answer,thisProblem.reactants[i].molesProd*thisProblem.reactants[i].MW,0.01)) isBadAnswer[0]=true;
	}
	
	isBadAnswer[1]=false;
	//calculating with a non-smallest amount of product	
	for (var i=0; i<thisProblem.nreact;i++) {
		if (relativeError(user_answer,thisProblem.reactants[i].molesProd*thisProblem.products[0].MW,0.01)
				&& !relativeError(user_answer,correct,0.01)) isBadAnswer[1]=true;
	}

	//divdie by MW instead of multiplying
	isBadAnswer[2]=relativeError(user_answer,thisProblem.products[0].molesFinal/thisProblem.products[0].MW,0.01);
			
	if (user_answer=="" || user_answer==null) {
		alert('Please enter an answer before checking');
		filled=false;
	}
	
	if (filled) {
		if (relativeError(user_answer,correct,0.01) && number_sig(user_answer)==3) {
			message+="Very nice! You're almost done!";
		    isAttemptWrong=false;
			errorType="CORRECT";
			a3.deactivate();
			a4.activate();
			nAttempts = 0;
		} else {
			if(absError(user_answer,correct,5*Math.pow(10,Math.floor(Math.log(user_answer)/Math.LN10)-number_sig(user_answer)))) {
				message+="You're pretty close! But your results are not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else if(isBadAnswer[0]) {
				message+="It looks like you're multiplying by the molecular weight of the reactant. Are you sure that gives you the mass of product?";
				errorType="REACTANT_MOLECULAR_WEIGHT_USED_ERROR";
			} else if(isBadAnswer[1]) {  
				message+="The limiting reagent is the one that when completely reacted ends up giving less product. Remember"+
						" that the limiting reagent establishes how far the reaction can go.";
				errorType="LIMITING_REAGENT_ERROR";			
			} else if(isBadAnswer[2]) {
				message+="You seem to be trying to convert moles to mass by dividing by the molecular weight. Is that the correct conversion?";
				errorType="PROPORTIONAL_CALCULATION_ERROR";
			} else
		 	 	message+="Please check your calculations and try again."; 	

			if (nAttempts==3) {
				message="This was your third attempt and your results weren't correct. ";
				message+="The correct result is "+ format_sig(correct, 3)+ " g of "+thisProblem.products[0].name+".";
				message+=" Make sure to understand your mistake and go on to the next step.";
				nAttempts = 0;
				a4.activate();
				a3.deactivate();
			}else if (nAttempts > 3) {
				message="You have already spent your three allowed attempts for this question. CLICK REFRESH/RELOAD to start over with a new problem.";
				a3.deactivate();
			}
		}
			
		setFeedback(a3.formIndex, message ,isAttemptWrong?follow:0);			
		logFormCheck(a3.formName,follow,user_answer+ " g of "+thisProblem.products[0].name,
				correct+ " g of "+thisProblem.products[0].name,
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}
	return false;
}

/**
* Forth form checking routine
*/
function act4Check() {
	var user_answer = new Array();
	var correct = new Array();
	var message="";	
	var cntCorrect=0;
	var cntSigCorrect=0;
	var filled=true;
	var follow=nAttempts;
	var correctStr="";
        var userStr = "";
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	
	for (var i=0; i<thisProblem.nreact;i++) {
		user_answer[i]=eval("document.oli_stoich_ars_limreag_act4.consreact"+i+".value");
		correct[i]=thisProblem.reactants[i].molesCons*thisProblem.reactants[i].MW;

		correctStr+=" " + format_sig(correct[i],3)+" "+thisProblem.reactants[i].massUnit+" of " +thisProblem.reactants[i].name+",";

		userStr+=" " + user_answer[i];
		userStr +=" "+thisProblem.reactants[i].massUnit;
		userStr += " of " +thisProblem.reactants[i].name+",";

		if (user_answer[i]=="" || user_answer[i]==null) {
			alert('Please enter an answer before checking');
			filled=false;
			break;
		}

		if(absError(user_answer[i],correct[i],5*Math.pow(10,Math.floor(Math.log(user_answer[i])/Math.LN10)-number_sig(user_answer[i]))))
			cntCorrect++;
		if (number_sig(user_answer[i])==3) cntSigCorrect++;
	}
	correctStr=correctStr.substring(0,correctStr.length-1);
	userStr=userStr.substring(0,userStr.length-1);
	

	var isBadAnswer=new Array();

	isBadAnswer[0]=true;
	//using the coefficients from the mass of product produced	
	for (var i=0; i<thisProblem.nreact;i++) {
		if (!relativeError(user_answer[i],thisProblem.products[0].massFinal/thisProblem.products[0].coeff*thisProblem.reactants[i].coeff,0.01)) isBadAnswer[0]=false;
	}


	isBadAnswer[1]=true;
	//using the inversed proportion	
	for (var i=0; i<thisProblem.nreact;i++) {
		if (!relativeError(user_answer[i],thisProblem.products[0].molesFinal*thisProblem.products[0].coeff/thisProblem.reactants[i].coeff*thisProblem.reactants[i].MW,0.01)) isBadAnswer[1]=false;
	}
	
	if (filled) {
		if (cntCorrect==thisProblem.nreact && cntSigCorrect==thisProblem.nreact) {
			message+="Perfect! Let's go for the last one!";
		    isAttemptWrong=false;
			errorType="CORRECT";
			a4.deactivate();
			a5.activate();
			nAttempts = 0;
		} else {
			if(cntCorrect == thisProblem.nreact) {
				message+="You're pretty close! But your results are not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else if(cntCorrect==thisProblem.nreact-1) {
				message+="You're doing good! But one of your results is still wrong.";
				errorType="ALL_BUT_ONE_CORRECT_ERROR";
			} else if(isBadAnswer[0]) {
				message+="Remember that the chemical reaction takes place in equivalent numbers of molecules, not equivalent mass.";
				errorType="EQUIVALENT_MASS_ERROR";
			} else if(isBadAnswer[1]) {
				message+="It looks like you're having troubles with the reaction stoichiometry conversion. Remember"+
						" that the larger the coefficient of the reactant, the more reactant will be consumed.";
				errorType="PROPORTIONAL_CALCULATION_ERROR";
			} else
		 	 	message+="Please check your calculations and try again."; 	
		
			if (nAttempts==3) {
				message="This was your third attempt and your results weren't correct. ";
				message+="The correct results are "+correctStr+ ".";
				message+=" Make sure to understand your mistake and go on to the next step.";
				nAttempts = 0;
				a5.activate();
				a4.deactivate();
			}else if (nAttempts > 3) {
				message="You have already spent your three allowed attempts for this question. CLICK REFRESH/RELOAD to start over with a new problem.";
				a4.deactivate();
			}
		}
			
		setFeedback(a4.formIndex, message ,isAttemptWrong?follow:0);			
		logFormCheck(a4.formName,follow,userStr,correctStr,
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}
	return false;
}

/**
* Fifth form checking routine
*/
function act5Check() {
	var user_answer = new Array();
	var correct = new Array();
	var message="";	
	var cntCorrect=0;
	var cntSigCorrect=0;
	var filled=true;
	var follow=nAttempts;
	var correctStr="";
	var userStr="";
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	
	for (var i=0; i<thisProblem.nreact;i++) {
		user_answer[i]=eval("document.oli_stoich_ars_limreag_act5.leftreact"+i+".value");
		correct[i]=thisProblem.reactants[i].massLeft;
		correctStr+=" " + (correct[i]==0?"0":format_sig(correct[i],3))+" "+thisProblem.reactants[i].massUnit+" of " +thisProblem.reactants[i].name+",";
		userStr+=" " + user_answer[i]+" "+thisProblem.reactants[i].massUnit+" of " +thisProblem.reactants[i].name+",";
			
		if (user_answer[i]=="" || user_answer[i]==null) {
			alert('Please enter an answer before checking');
			filled=false;
			break;
		}
		if(absError(user_answer[i],correct[i],5*Math.pow(10,Math.floor(Math.log(user_answer[i])/Math.LN10)-number_sig(user_answer[i])))
			|| (correct[i]==0 && user_answer[i]==0)) cntCorrect++;
		if (number_sig(user_answer[i])==3 || correct[i]==0) cntSigCorrect++;
	}
	correctStr=correctStr.substring(0,correctStr.length-1);
	userStr=userStr.substring(0,userStr.length-1);

	var isBadAnswer=new Array();

	isBadAnswer[0]=true;
	//reporting the mass consumed	
	for (var i=0; i<thisProblem.nreact;i++) {
		if (!relativeError(user_answer[i],thisProblem.reactants[i].molesCons*thisProblem.reactants[i].MW,0.01)) isBadAnswer[0]=false;
	}
	
	isBadAnswer[1]=true;
	//reporting the moles left
	for (var i=0; i<thisProblem.nreact;i++) {
		if (!relativeError(user_answer[i],thisProblem.reactants[i].massLeft/thisProblem.reactants[i].MW,0.01)) isBadAnswer[1]=false;
	}

	if (filled) {
		if (cntCorrect==thisProblem.nreact && cntSigCorrect==thisProblem.nreact) {
			message+="You did it! Good job!";
			setCompleted(true);
		    isAttemptWrong=false;
			errorType="CORRECT";
			a5.deactivate();
			nAttempts = 0;
		} else {
			if(cntCorrect == thisProblem.nreact){
				message+="You're pretty close! But your results are not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else if(cntCorrect==thisProblem.nreact-1) {
				message+="You're doing good! But one of your results is still wrong.";
				errorType="ALL_BUT_ONE_CORRECT_ERROR";
			} else if(isBadAnswer[0]) {
				message+="Remember that you should report the mass of reactants left (not the mass of reactant used).";
				errorType="USED_FOR_LEFT_REPORTED_ERROR";
			} else if(isBadAnswer[1]) {
				message+="Remember that you should report the mass of reactants left (not the amount of substance).";
				errorType="AMOUNT_FOR_MASS_ERROR";
			} else
		 	 	message+="Please check your calculations and try again."; 	
		
			if (nAttempts==3) {
				message="This was your third attempt and your results weren't correct. ";
				message+="The correct results are "+correctStr+ ".";
				message+=" CLICK REFRESH/RELOAD to start over with a new problem.";
				a5.deactivate();
			}else if (nAttempts > 3) {
				message="You have already spent your three allowed attempts for this question. CLICK REFRESH/RELOAD to start over with a new problem.";
				a5.deactivate();
			}
		}
			
		setFeedback(a5.formIndex, message ,isAttemptWrong?follow:0);			
		logFormCheck(a5.formName,follow,userStr,correctStr,
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}
	return false;
}

/**
* Global form checking routine
*/
function act0Check() {
	var user_answer = new Array();
	var correct = new Array();
	var message="";	
	var cntCorrect=0;
	var cntSigCorrect=0;
	var filled=true;
	var follow=nAttempts;
	var correctStr="";
	var userStr="";
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	
	for (var i=0; i<thisProblem.nreact;i++) {
		user_answer[i]=eval("document.oli_stoich_ars_limreag_act0.leftreact"+i+".value");
		correct[i]=thisProblem.reactants[i].massLeft;
		correctStr+=" " + (correct[i]==0?"0":format_sig(correct[i],3))+" "+thisProblem.reactants[i].massUnit+" of " +thisProblem.reactants[i].name+",";
		userStr+=" " + user_answer[i]+" "+thisProblem.reactants[i].massUnit+" of " +thisProblem.reactants[i].name+",";
			
		if (user_answer[i]=="" || user_answer[i]==null) {
			alert('Please enter an answer before checking');
			filled=false;
			break;
		}
		if(absError(user_answer[i],correct[i],5*Math.pow(10,Math.floor(Math.log(user_answer[i])/Math.LN10)-number_sig(user_answer[i])))
			|| (correct[i]==0 && user_answer[i]==0)) cntCorrect++;
		if (number_sig(user_answer[i])==3 || correct[i]==0) cntSigCorrect++;
	}
	correctStr=correctStr.substring(0,correctStr.length-1);
	userStr=userStr.substring(0,userStr.length-1);

	//Testing
	alert(correctStr);
	

	var isBadAnswer=new Array();

	isBadAnswer[0]=true;
	//reporting the mass consumed	
	for (var i=0; i<thisProblem.nreact;i++) {
		if (!relativeError(user_answer[i],thisProblem.reactants[i].molesCons*thisProblem.reactants[i].MW,0.01)) isBadAnswer[0]=false;
	}
	
	isBadAnswer[1]=true;
	//reporting the moles left
	for (var i=0; i<thisProblem.nreact;i++) {
		if (!relativeError(user_answer[i],thisProblem.reactants[i].massLeft/thisProblem.reactants[i].MW,0.01)) isBadAnswer[1]=false;
	}

	if (filled) {
		if (cntCorrect==thisProblem.nreact && cntSigCorrect==thisProblem.nreact) {
			message+="You did it! Good job!";
		    isAttemptWrong=false;
			errorType="CORRECT";
			setCompleted(true);   // DD Change 9 December 2005 
			a0.deactivate();
			helpable=false;
			nAttempts = 0;
		} else {
			if(cntCorrect == thisProblem.nreact){
				message+="You're pretty close! But your results are not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else if(cntCorrect==thisProblem.nreact-1) {
				message+="You're doing good! But one of your results is still wrong.";
				errorType="ALL_BUT_ONE_CORRECT_ERROR";
			} else if(isBadAnswer[0]) {
				message+="Remember that you should report the mass of reactants left (not the mass of reactant used).";
				errorType="USED_FOR_LEFT_REPORTED_ERROR";
			} else if(isBadAnswer[1]) {
				message+="Remember that you should report the mass of reactants left (not the amount of substance).";
				errorType="AMOUNT_FOR_MASS_ERROR";
			} else
		 	 	message+="Please check your calculations and try again."; 	

			if(nAttempts == 2) {
				if(confirm("You seem to be having difficulties with this problem. Would you like some help on it?")){
					scaffold();
					message="Let's go through the problem step by step.";
				}	
			}
		
			if (nAttempts==3) {
				message="This was your third attempt and your results weren't correct. ";
				message+="The correct results are "+correctStr+ ".";
				message+=" CLICK REFRESH/RELOAD to start over with a new problem.";
				helpable=false;
				a0.deactivate();
			}else if (nAttempts > 3) {
				message="You have already spent your three allowed attempts for this question. CLICK REFRESH/RELOAD to start over with a new problem.";
				a0.deactivate();
			}
		}
			
		setFeedback(a0.formIndex, message ,isAttemptWrong?follow:0);			
		logFormCheck(a0.formName,follow,userStr,correctStr,
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
	if(helpable==false) return;
	
	helpable=false;

	a1.show();
	a2.show();
	a3.show();
	a4.show();
	a5.show();
	
	a0.deactivate();
	a1.activate();
	
	nAttempts = 0;
	logScaffold("oli_stoich_ars_limreag");
}


function show_results() {
	var results="";

	results+="<p style='background-color:#006600;border-style:solid;color:#ffffff;'><b>Amount of reactants in the system:</b>";
	for (var i=0; i<this.nreact;i++) {
		results+=" " + format_sig(this.reactants[i].moles,3)+" moles of " +this.reactants[i].name+",";
	}
	results+="<br>";

	results+="<b>Amount of product obtained if all the reactant is consumed:</b>";
	for (var i=0; i<this.nreact;i++) {
		results+=" " + format_sig(this.reactants[i].molesProd,3)+" moles (for " +this.reactants[i].name+"),";
	}
	results+="<br>";

	results+="<b>Mass of product obtained :</b>";
	results+=" " + format_sig(this.products[0].massFinal,3)+ " g of "+this.products[0].name+".";
	results+="<br>";
	
	results+="<b>Mass of reactants consumed:</b>";
	for (var i=0; i<this.nreact;i++) {
		results+=" " + format_sig(this.reactants[i].molesCons*this.reactants[i].MW,3)+" "+this.reactants[i].massUnit+" of " +this.reactants[i].name+",";
	}
	results+="<br>";
	results+="<b>Mass of reactants left:</b>";
	for (var i=0; i<this.nreact;i++) {
		results+=" " + (this.reactants[i].massLeft==0?"0":format_sig(this.reactants[i].massLeft,3))+" "+this.reactants[i].massUnit+" of " +this.reactants[i].name+",";
	}
	results+="<br>";
	
	results+="</p>";
	document.writeln(results);
	
}
