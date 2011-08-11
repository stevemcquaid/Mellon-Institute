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
function MRProblem() {
	// create the variable structure
	this.mineral1=new Object();
	this.mineral2=new Object();
	this.product=new Object();
	
	// minerals DB
	mineralDB=new Array();
	
	mineralDB[0]=new Object();
	mineralDB[0].chemName="duranosite";
	mineralDB[0].chemForm="As<sub>4<\/sub>S";
	mineralDB[0].nAsAtoms=4;
	mineralDB[0].FW=331.75;
	
	mineralDB[1]=new Object();
	mineralDB[1].chemName="dimorphite";
	mineralDB[1].chemForm="As<sub>4<\/sub>S<sub>3</\sub>";
	mineralDB[1].nAsAtoms=4;
	mineralDB[1].FW=395.88;
	
	mineralDB[2]=new Object();
	mineralDB[2].chemName="ruarsite";
	mineralDB[2].chemForm="RuAsS";
	mineralDB[2].nAsAtoms=1;
	mineralDB[2].FW=208.06;
	
	mineralDB[3]=new Object();
	mineralDB[3].chemName="gersdorffite";
	mineralDB[3].chemForm="NiAsS";
	mineralDB[3].nAsAtoms=1;
	mineralDB[3].FW=165.68;

	mineralDB[4]=new Object();
	mineralDB[4].chemName="getchellite";
	mineralDB[4].chemForm="AsSbS<sub>3<\/sub>";
	mineralDB[4].nAsAtoms=1;
	mineralDB[4].FW=293.81;

	mineralDB[5]=new Object();
	mineralDB[5].chemName="paakkonenite";
	mineralDB[5].chemForm="Sb<sub>2<\/sub>AsS<sub>2<\/sub>";
	mineralDB[5].nAsAtoms=1;
	mineralDB[5].FW=382.55;
	
	mineralDB[6]=new Object();
	mineralDB[6].chemName="orpiment";
	mineralDB[6].chemForm="As<sub>2<\/sub>S<sub>3</\sub>";
	mineralDB[6].nAsAtoms=2;
	mineralDB[6].FW=246.04;


	// product DB
	productDB=new Array();
	
	productDB[0]=new Object();
	productDB[0].chemName="arsenic(III) oxide";
	productDB[0].chemForm="As<sub>2<\/sub>O<sub>3<\/sub>";
	productDB[0].nAsAtoms=2;
	productDB[0].FW=197.84;
	
	productDB[1]=new Object();
	productDB[1].chemName="arsenic(V) oxide";
	productDB[1].chemForm="As<sub>2<\/sub>O<sub>5<\/sub>";
	productDB[1].nAsAtoms=2;
	productDB[1].FW=229.84;
	
	productDB[2]=new Object();
	productDB[2].chemName="iron(III) arsenate";
	productDB[2].chemForm="FeAsO<sub>4<\/sub>";
	productDB[2].nAsAtoms=1;
	productDB[2].FW=194.753;

	productDB[3]=new Object();
	productDB[3].chemName="calcium arsenate";
	productDB[3].chemForm="Ca<sub>3<\/sub>(AsO<sub>4<\/sub>)<sub>2<\/sub>";
	productDB[3].nAsAtoms=2;
	productDB[3].FW=398.051;

	
	var availableMinerals=mineralDB.length;
	var idMineral1=intRandom(0,availableMinerals-2);
	var idMineral2=intRandom(idMineral1+1,availableMinerals-1);
	
	this.mineral1=mineralDB[idMineral1];
	this.mineral2=mineralDB[idMineral2];
	this.product=productDB[intRandom(0, productDB.length-1)];
	this.sampleMass=round_sig(doubleRandom(50,100),4);
	this.proportion1=doubleRandom(0.1,0.9);
	
	this.productMass=round_sig(this.sampleMass*(this.proportion1*this.product.FW/
			this.product.nAsAtoms*this.mineral1.nAsAtoms/this.mineral1.FW+
			(1-this.proportion1)*this.product.FW/
			this.product.nAsAtoms*this.mineral2.nAsAtoms/this.mineral2.FW),4);
	
	this.show_results=show_results;
}

/**
* First form checking routine
*/
function act1Check() {
	var user_answer = new Array();
	user_answer[0] = document.oli_stoich_ars_mixt_act1.productMoles1.value;
	user_answer[1] = document.oli_stoich_ars_mixt_act1.productMoles2.value;
	var userStr=user_answer[0]+ " moles of "+thisProblem.product.chemName+
			" per mole of "+thisProblem.mineral1.chemName+" and "+user_answer[1]+
			" moles of "+thisProblem.product.chemName+" per mole of "+thisProblem.mineral2.chemName;
	
	var message="";	
	var follow=nAttempts;
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	
	if(user_answer[0]=="" || user_answer[1]=="") {
		alert('Please enter an answer before checking');
	} else if(isNaN(user_answer[0]) || isNaN(user_answer[1])) {
		//skip submit
		return false;
	} else {
		var correct = new Array();
		
		correct[0]= thisProblem.mineral1.nAsAtoms/thisProblem.product.nAsAtoms;
		correct[1]= thisProblem.mineral2.nAsAtoms/thisProblem.product.nAsAtoms;

		var correctStr=format_sig(correct[0],3)+ " moles of "+thisProblem.product.chemName+
				" per mole of "+thisProblem.mineral1.chemName+" and "+format_sig(correct[1],3)+
				" moles of "+thisProblem.product.chemName+" per mole of "+thisProblem.mineral2.chemName;

		if(((relativeError(user_answer[0],correct[0],0.01) && number_sig(user_answer[0])==3)
				|| user_answer[0]==correct[0]) &&
				((relativeError(user_answer[1],correct[1],0.01) && number_sig(user_answer[1])==3)
				|| user_answer[1]==correct[1])) {
			message+="Well done!";
		    isAttemptWrong=false;
			errorType="CORRECT";
			a1.deactivate();
			a2.activate();
			nAttempts = 0;
		} else {
			if(relativeError(user_answer[0],correct[0],0.01) && 
				relativeError(user_answer[1],correct[1],0.01)) {
				message+="You're pretty close! But your results are not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else
		 	 	message+="Please check your calculations and try again."; 	

		
			if (nAttempts==3) {
				message="This was your third attempt and your results weren't correct. ";
				message+="The correct results are "+correctStr+".";
				message+=" Make sure to understand your mistake and go on to the next step.";
				nAttempts = 0;
				a2.activate();
				a1.deactivate();
			}else if (nAttempts > 3) {
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
	user_answer[0] = document.oli_stoich_ars_mixt_act2.productGrams1.value;
	user_answer[1] = document.oli_stoich_ars_mixt_act2.productGrams2.value;
	var userStr=user_answer[0]+ " grams of "+thisProblem.product.chemName+
			" per gram of "+thisProblem.mineral1.chemName+" and "+user_answer[1]+
			" grams of "+thisProblem.product.chemName+" per gram of "+thisProblem.mineral2.chemName;
	
	var message="";	
	var follow=nAttempts;
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	
	if(user_answer[0]=="" || user_answer[1]=="") {
		alert('Please enter an answer before checking');
	} else if(isNaN(user_answer[0]) || isNaN(user_answer[1])) {
		//skip submit
		return false;
	} else {
		var correct = new Array();
		
		correct[0]= thisProblem.mineral1.nAsAtoms/thisProblem.product.nAsAtoms*
				thisProblem.product.FW/thisProblem.mineral1.FW;
		correct[1]= thisProblem.mineral2.nAsAtoms/thisProblem.product.nAsAtoms*
				thisProblem.product.FW/thisProblem.mineral2.FW;

		var correctStr=format_sig(correct[0],3)+ " grams of "+thisProblem.product.chemName+
				" per gram of "+thisProblem.mineral1.chemName+" and "+format_sig(correct[1],3)+
				" grams of "+thisProblem.product.chemName+" per gram of "+thisProblem.mineral2.chemName;

		if(relativeError(user_answer[0],correct[0],0.01) && number_sig(user_answer[0])==3 &&
				relativeError(user_answer[1],correct[1],0.01) && number_sig(user_answer[1])==3) {
			message+="Great! You're right!";
		    isAttemptWrong=false;
			errorType="CORRECT";
			a2.deactivate();
			a3.activate();
			nAttempts = 0;
		} else {
			if(relativeError(user_answer[0],correct[0],0.01) && 
				relativeError(user_answer[1],correct[1],0.01)) {
				message+="You're pretty close! But your results are not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else
		 	 	message+="Please check your calculations and try again."; 	

		
			if (nAttempts==3) {
				message="This was your third attempt and your results weren't correct. ";
				message+="The correct results are "+correctStr+".";
				message+=" Make sure to understand your mistake and go on to the next step.";
				nAttempts = 0;
				a3.activate();
				a2.deactivate();
			}else if (nAttempts > 3) {
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
function act3Check() {	var user_answer = new Array();
	user_answer[0] = document.oli_stoich_ars_mixt_act3.productGrams1.value;
	user_answer[1] = document.oli_stoich_ars_mixt_act3.productGrams2.value;
	var userStr=thisProblem.productMass+" g"+removeTags(thisProblem.product.chemForm)+" = "+
			"x g"+removeTags(thisProblem.mineral1.chemForm)+" * "+
			user_answer[0]+
			" g"+removeTags(thisProblem.product.chemForm)+"/g"+removeTags(thisProblem.mineral1.chemForm)+
			" + ("+thisProblem.sampleMass+"-x) g"+removeTags(thisProblem.mineral2.chemForm)+" * "+
			user_answer[1]+
			" g"+removeTags(thisProblem.product.chemForm)+"/g"+removeTags(thisProblem.mineral2.chemForm);
	
	var message="";	
	var follow=nAttempts;
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	
	if(user_answer[0]=="" || user_answer[1]=="") {
		alert('Please enter an answer before checking');
	} else if(isNaN(user_answer[0]) || isNaN(user_answer[1])) {
		//skip submit
		return false;
	} else {
		var correct = new Array();
		
		correct[0]= thisProblem.mineral1.nAsAtoms/thisProblem.product.nAsAtoms*
				thisProblem.product.FW/thisProblem.mineral1.FW;
		correct[1]= thisProblem.mineral2.nAsAtoms/thisProblem.product.nAsAtoms*
				thisProblem.product.FW/thisProblem.mineral2.FW;

		var correctStr=thisProblem.productMass+" g"+removeTags(thisProblem.product.chemForm)+" = "+
			"x g"+removeTags(thisProblem.mineral1.chemForm)+" * "+
			format_sig(correct[0],3)+
			" g"+removeTags(thisProblem.product.chemForm)+"/g"+removeTags(thisProblem.mineral1.chemForm)+
			" + ("+thisProblem.sampleMass+"-x) g"+removeTags(thisProblem.mineral2.chemForm)+" * "+
			format_sig(correct[1],3)+
			" g"+removeTags(thisProblem.product.chemForm)+"/g"+removeTags(thisProblem.mineral2.chemForm);

		if(relativeError(user_answer[0],correct[0],0.01) && number_sig(user_answer[0])==3 &&
				relativeError(user_answer[1],correct[1],0.01) && number_sig(user_answer[1])==3) {
			message+="That's correct!";
		    isAttemptWrong=false;
			errorType="CORRECT";
			a3.deactivate();
			a4.activate();
			nAttempts = 0;
		} else {
			if(relativeError(user_answer[0],correct[0],0.01) && 
				relativeError(user_answer[1],correct[1],0.01)) {
				message+="You're pretty close! But your results are not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else
		 	 	message+="Please check your calculations and try again."; 	

		
			if (nAttempts==3) {
				message="This was your third attempt and your results weren't correct. ";
				message+="The correct expression is: "+correctStr+".";
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
		logFormCheck(a3.formName,follow,userStr,correctStr,
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}
	return false;
}

/**
* Forth form checking routine
*/
function act4Check() {
	var user_answer = document.oli_stoich_ars_mixt_act4.min1Mass.value;
	
	var message="";	
	var follow=nAttempts;
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	
	if(user_answer=="") {
		alert('Please enter an answer before checking');
	} else if(isNaN(user_answer)) {
		//skip submit
		return false;
	} else {
		var correct = (thisProblem.product.nAsAtoms*thisProblem.productMass/thisProblem.product.FW-
				thisProblem.sampleMass*thisProblem.mineral2.nAsAtoms/thisProblem.mineral2.FW)/
				(thisProblem.mineral1.nAsAtoms/thisProblem.mineral1.FW-
				thisProblem.mineral2.nAsAtoms/thisProblem.mineral2.FW);
		
		if(relativeError(user_answer,correct,0.01) && number_sig(user_answer)==3) {
			message+="Right again!";
		    isAttemptWrong=false;
			errorType="CORRECT";
			a4.deactivate();
			a5.activate();
			nAttempts = 0;
		} else {
			if(relativeError(user_answer,correct,0.01)) {
				message+="You're pretty close! But your results are not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else
		 	 	message+="Please check your calculations and try again."; 	

		
			if (nAttempts==3) {
				message="This was your third attempt and your results weren't correct. ";
				message+="The correct result is "+format_sig(correct,3)+ " grams.";
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
		logFormCheck(a4.formName,follow,user_answer+" g",format_sig(correct,3)+ " g",
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}
	return false;
}

/**
* Fifth form checking routine
*/
function act5Check() {
	var user_answer = document.oli_stoich_ars_mixt_act5.min1Percent.value;
	
	var message="";	
	var follow=nAttempts;
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	
	if(user_answer=="") {
		alert('Please enter an answer before checking');
	} else if(isNaN(user_answer)) {
		//skip submit
		return false;
	} else {
		var correct = 100/thisProblem.sampleMass*(thisProblem.product.nAsAtoms*thisProblem.productMass/thisProblem.product.FW-
				thisProblem.sampleMass*thisProblem.mineral2.nAsAtoms/thisProblem.mineral2.FW)/
				(thisProblem.mineral1.nAsAtoms/thisProblem.mineral1.FW-
				thisProblem.mineral2.nAsAtoms/thisProblem.mineral2.FW);
		
		if(relativeError(user_answer,correct,0.01) && number_sig(user_answer)==3) {
			message+="You did it! Good job!";
		    isAttemptWrong=false;
			errorType="CORRECT";
			a5.deactivate();
			nAttempts = 0;
		} else {
			if(relativeError(user_answer,correct,0.01)) {
				message+="You're pretty close! But your results are not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
			} else
		 	 	message+="Please check your calculations and try again."; 	
		
			if (nAttempts==3) {
				message="This was your third attempt and your results weren't correct. ";
				message+="The correct result is "+format_sig(correct,3)+ "%.";
				message+=" CLICK REFRESH/RELOAD to start over with a new problem.";
				a5.deactivate();
			}else if (nAttempts > 3) {
				message="You have already spent your three allowed attempts for this question. CLICK REFRESH/RELOAD to start over with a new problem.";
				a5.deactivate();
			}
		}
			
		setFeedback(a5.formIndex, message ,isAttemptWrong?follow:0);			
		logFormCheck(a5.formName,follow,user_answer+"%",format_sig(correct,3)+ "%",
				message,!isAttemptWrong,errorType);
		nAttempts++;
	}
	return false;
}

/**
* Global form checking routine
*/
function act0Check() {
	var user_answer = document.oli_stoich_ars_mixt_act0.min1Percent.value;
	
	var message="";	
	var follow=nAttempts;
	var isAttemptWrong=true;
	var errorType="UNKNOWN_ERROR";
	
	if(user_answer=="") {
		alert('Please enter an answer before checking');
	} else if(isNaN(user_answer)) {
		//skip submit
		return false;
	} else {
		var correct = 100/thisProblem.sampleMass*(thisProblem.product.nAsAtoms*thisProblem.productMass/thisProblem.product.FW-
				thisProblem.sampleMass*thisProblem.mineral2.nAsAtoms/thisProblem.mineral2.FW)/
				(thisProblem.mineral1.nAsAtoms/thisProblem.mineral1.FW-
				thisProblem.mineral2.nAsAtoms/thisProblem.mineral2.FW);
		
		//Testing
		alert(correct);
		
		
		if(relativeError(user_answer,correct,0.01) && number_sig(user_answer)==3) {
			message+="You did it! Good job!";
			setCompleted(true);  // DD change 9 December 2005
		    isAttemptWrong=false;
			errorType="CORRECT";
			helpable=false;
			a0.deactivate();
			nAttempts = 0;
		} else {
			if(relativeError(user_answer,correct,0.01)) {
				message+="You're pretty close! But your results are not expressed with the correct number of significant figures.";
				errorType="SIGNIFICANT_FIGURES_ERROR";
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
				message+="The correct result is "+format_sig(correct,3)+ "%.";
				message+=" CLICK REFRESH/RELOAD to start over with a new problem.";
				helpable=false;
				a0.deactivate();
			} else if (nAttempts > 3) {
				message="You have already spent your three allowed attempts for this question. CLICK REFRESH/RELOAD to start over with a new problem.";
				a0.deactivate();
			}
		}
			
		setFeedback(a0.formIndex, message ,isAttemptWrong?follow:0);			
		logFormCheck(a0.formName,follow,user_answer+"%",format_sig(correct,3)+ "%",
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
	window.scrollTo(0,0);
	logScaffold("oli_stoich_ars_mixt");
}


function show_results() {
	var results="";
	var correct=new Array();
	
	results+="<p style='background-color:#006600;border-style:solid;color:#ffffff;'>";
	results+="<b>Formula weights of the minerals and product:</b> ";
	results+=thisProblem.mineral1.chemName+" ("+thisProblem.mineral1.FW+" g/mol), ";
	results+=thisProblem.mineral2.chemName+" ("+thisProblem.mineral2.FW+" g/mol), ";
	results+=thisProblem.product.chemName+" ("+thisProblem.product.FW+" g/mol).";
	results+="<br>";

	correct[0]= thisProblem.mineral1.nAsAtoms/thisProblem.product.nAsAtoms;
	correct[1]= thisProblem.mineral2.nAsAtoms/thisProblem.product.nAsAtoms;

	results+="<b>Moles of product per mole of mineral:</b> ";
	results+=thisProblem.mineral1.chemName+": "+format_sig(correct[0],4)+" mol_mineral/mol_product, ";
	results+=thisProblem.mineral2.chemName+": "+format_sig(correct[1],4)+" mol_mineral/mol_product. ";
	results+="<br>";

	correct[0]= thisProblem.mineral1.nAsAtoms/thisProblem.product.nAsAtoms*
				thisProblem.product.FW/thisProblem.mineral1.FW;
	correct[1]= thisProblem.mineral2.nAsAtoms/thisProblem.product.nAsAtoms*
				thisProblem.product.FW/thisProblem.mineral2.FW;

	results+="<b>Grams of product per gram of mineral:</b> ";
	results+=thisProblem.mineral1.chemName+": "+format_sig(correct[0],4)+" g_mineral/g_product, ";
	results+=thisProblem.mineral2.chemName+": "+format_sig(correct[1],4)+" g_mineral/g_product.";
	results+="<br>";

	correct[0]= (thisProblem.product.nAsAtoms*thisProblem.productMass/thisProblem.product.FW-
				thisProblem.sampleMass*thisProblem.mineral2.nAsAtoms/thisProblem.mineral2.FW)/
				(thisProblem.mineral1.nAsAtoms/thisProblem.mineral1.FW-
				thisProblem.mineral2.nAsAtoms/thisProblem.mineral2.FW);
	correct[1]= thisProblem.sampleMass-correct[0];

	results+="<b>Grams of mineral:</b> ";
	results+=thisProblem.mineral1.chemName+": "+format_sig(correct[0],4)+" g, ";
	results+=thisProblem.mineral2.chemName+": "+format_sig(correct[1],4)+" g.";
	results+="<br>";
	
	results+="<b>Percentual composition:</b> ";
	results+=thisProblem.mineral1.chemName+": "+format_sig(correct[0]*100/thisProblem.sampleMass,4)+"%, ";
	results+=thisProblem.mineral2.chemName+": "+format_sig(correct[1]*100/thisProblem.sampleMass,4)+"%. ";
	results+="<br>";

	results+="</p>";
	document.writeln(results);
	
}
