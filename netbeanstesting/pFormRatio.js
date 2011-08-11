/**
 *	Created with MAX's HTML Beauty++ 2004
 *	pFormRatio.js
 *	@author Amani Ahmed
 *	@date August 19 2004
*/

/**
 * An object to hold the contents of the top and bottom of a displayed
 * ratio
 * @param	topAE		an answerElement for the top of the ratio (or an empty string)
Î *			topUnits	a string defining the units for top of the ratio
 *			bottomAE	an answerElement for the bottom of the ratio (or an empty string)
 *			bottomUnits	a string defining the units for bottom of the ratio
*/
function ratioContents(topAE, topUnits, bottomAE, bottomUnits){
	this.topAE = topAE;
	this.bottomAE = bottomAE;
	this.topUnits = topUnits;
	this.bottomUnits = bottomUnits;
}

/**	
 * Constructs a fill in the blank question form
 * @param formName			string defining the name and ID of the pFormRatio
 *	   	  formTitle			string defining the title of the pFormRatio
 *		  formQuestion		string defining the question of the pFormRatio
 *		  formAnswer		string defining the check function to be used along with arguments to be used
 *		  formInput			array of answerElements and strings to be inserted into the pFormRatio
 *		  					or a single answerElement
 *		  formHints			array of strings defining the hints to be given
 * 		  formInstant		boolean defining if an instant feedback window is needed
 *		  formFeedback	   	boolean defining if a feedback window is needed
 */
function pFormRatio(formName, formTitle, formQuestion, formAnswer, formInput, formHints, formInstant, formFeedback){
	// attributes
	this.formName = removeTags(formName);
	this.formIndex = formIndex;
	this.formTitle = formTitle;
	this.formQuestion = formQuestion;

	this.hintName = this.formName + "_hint";
	create_hint_box(this.hintName);

	this.formAnswer = formAnswer;

	if(formInput != null){
		if(formInput[0] != null)
			this.formInput = formInput;
		else{
			var modifiedFormInput = new Array(1);
			modifiedFormInput[0] = formInput;
			this.formInput = modifiedFormInput;
		}
	} else this.formInput = formInput;	

	this.formHints = formHints;
	this.formInstant = formInstant;
	this.formFeedback = formFeedback;

	// methods
	this.rWrite = ratioWrite; // different from pForm
	this.activate = activate;
	this.deactivate = deactivate;
	this.hide=hideForm;
	this.show=showForm;
	this.hideFeedback = hideFeedback;
	this.showFeedback = showFeedback;
	this.giveHint = eval("giveHintOLI");
	formIndex++;
}

/**
 *	Writes a ratio based on the information given from a ratioContents in an array
 *	@param	marker		integer defining the current ratio to write from the array
 *			inputArea	array defining all the ratioContents to write
 */
function writeARatio(marker, inputArea){
	document.writeln("<table class='ratio' cellspacing=0 cellpadding=0>");
	document.writeln("<tr>");		

	// insert left paren image
	if(inputArea[marker].bottomAE != null) 
		document.writeln("<td rowspan=2><IMG SRC='lfparenth.gif' HEIGHT='60px'><\/TD>");

	// insert numerator contents
	document.writeln("<TD class='ratioTOP'>");
	if((inputArea[marker].topAE) != null) {
		(inputArea[marker].topAE).writeBlank();
		if(inputArea[marker].topUnits != null)
			document.writeln(inputArea[marker].topUnits);
	}else
		document.writeln(inputArea[marker].topUnits);	
	document.writeln("<\/TD>");

	// insert right paren
	if(inputArea[marker].bottomAE != null && inputArea[marker].bottomAE!=""){
		document.writeln("<td rowspan=2><img src='rtparenth.gif' height='60px'><\/TD>");
	}
	document.writeln("<\/TR>");
	
	document.writeln("<TR>");
	// insert demoninator contents
	if(inputArea[marker].bottomAE != null && inputArea[marker].bottomAE!="") {
		document.writeln("<TD class='ratioBOTTOM'>");
		(inputArea[marker].bottomAE).writeBlank();
	
		if(inputArea[marker].bottomUnits != null && inputArea[marker].bottomUnits != "")
			document.writeln(inputArea[marker].bottomUnits);
		document.writeln("</\td>");
	}else
		if(inputArea[marker].bottomUnits != null && inputArea[marker].bottomUnits != "") {
			document.writeln("<TD class='ratioBOTTOM'>");
			document.writeln(inputArea[marker].bottomUnits);
			document.writeln("</\td>");
		}
	document.writeln("<\/TR>");
	document.writeln("<\/TABLE>");
}


/**
 *	Write a pFormRatio to the page
*/
function ratioWrite(){
	inputArea = this.formInput;
	var nCols=1;
	
	//	document.writeln("<div class='centered'><form class='questionForm' name='"+this.formName+"' id='"+this.formName+"' onSubmit='"+this.formAnswer+";'>");
	document.writeln("<div class='centered'><form class='questionForm' name='"+this.formName+"' id='"+this.formName+"' onSubmit='"+this.formAnswer+"'>");
	document.writeln("<input type='submit' style='display:none;' \/>");
	document.writeln("<table class='question'>");
	document.writeln("<tr><td class='questionTD'>");
	
	if(this.formTitle != "")	// write form title
		document.writeln("<span class='qtitle'>"+this.formTitle+"<\/span>");	
		
	if(this.formQuestion != "")	// write form question
		document.writeln("<span class='qtext'>"+this.formQuestion+"&nbsp&nbsp<\/span>");

	if(inputArea != null){
		document.writeln("<table class='ratioLine' cellspacing=0 cellpadding=0><TR>");
		// insert each ratio within a table so that they line up properly
		for(c = 0; c < inputArea.length; c++){ 
			document.writeln("<td>");
			writeARatio(c, inputArea);
			document.writeln("<\/td>");
		}
		document.writeln("<\/tr><\/table>");
	}
	document.writeln("<\/td>");	
	
	if(this.formAnswer != null) {
		// insert check image and action
		document.writeln("<td class='buttonTD'><a href='#' onMouseOver='window.status=\"Click on the image to check your answer!\";' onMouseOut='window.status=\"\";' onClick='"+this.formAnswer+";' > ");
		// Formerly check_s.gif
		document.writeln("<img border='0' id='checkimg_"+this.formIndex+"'          src='check.png' alt='Check'></a><\/td>");	
		nCols++;
	}

	if(this.formHints != null)	{
		// insert hint image and action
		document.writeln("<td class='buttonTD'><span class = 'ul' onMouseOver='window.status=\"Click on the image for a hint!\";' onClick='window.status=\"\"; document.forms["+this.formIndex+"].logicalForm.giveHint(-1);'> ");
		// formerly hint_s.gif
		document.writeln("<img border='0' id='hintimg_"+this.formIndex+"' src='hint.png' alt='Hint'><\/a><\/td>");
		nCols++;
	}
	document.writeln("<\/tr>");
	if(this.formInstant)		// insert instant feedback window
	 	document.writeln("<tr><td class='questionTD' colspan='"+nCols+"'><span class='qinstant'><div class='instant"+this.formIndex+"' id='instant"+this.formIndex+"' name='instant"+this.formIndex+"'>You are about to submit: <\/div><\/span><\/td><\/tr>");			
	if(this.formFeedback)		// insert feedback window
		document.writeln("<tr><td class='questionTD' colspan='"+nCols+"'><span class='feedback"+this.formIndex+"' id='feedback"+this.formIndex+"' name='feedback"+this.formIndex+"'><\/span><\/td><\/tr>");
	document.writeln("<\/table>");
	document.writeln("<\/form></div>");	
	document.getElementById(this.formName).logicalForm = this;	
	maxID = 0;
}


