/**
 *	Created with MAX's HTML Beauty++ 2004
 *	pForm.js
 *	@author Amani Ahmed, Jordi Cuadros
 *	@date July 12 2004
*/

var formIndex = 0;

/* Get an element, for whatever modern browser we're using */
function get_element(x)
{
  if (document.getElementById) {
    return(document.getElementById(x));
    }
    else if (document.all) {
return(document.all[x]);
    }
}

/**
 * Provides a hint for a given question by using an array of string values
 * @param hintsan array of strings which define the hints to be given
 */
/* Revised version for new hint system using <div> instead of alert()s. */
var hintIndex = 0;
var hintLastFormIndex=0;
var last_pform = null;

function giveHintOLI(i)
{
  last_pform = this;

  if (i >= 0) {
    hintIndex = i;
  }

  if (this.formHints[hintIndex] == null) {
      hintIndex = 0;
  }

  h = "<b>Hint: </b>" + this.formHints[hintIndex];

  if (hintIndex > 0) {
    hi = hintIndex - 1;
    h += "<br><span class = 'ul' onclick = 'javascript:last_pform.giveHint(" + hi + ")'>Previous Hint</span>";
  }

  if (hintIndex < this.formHints.length-1) {
    if (hintIndex > 0) {
      h += " | ";
    }
    else {
      h += "<br>";
    }

    hi = hintIndex + 1;
    h += "<span class = 'ul' onclick = 'javascript:last_pform.giveHint(-1);'>Next Hint</a>";
  }

  e = get_element(this.hintName);
  e.style.display = "block";
  e = get_element(this.hintName + "_inner");
  e.innerHTML = h;

  logHint(this.formName,hintIndex,this.formHints[hintIndex]);

  hintIndex++;

  return(0);
}

/**
 * Constructs a fill in the blank question form
 * @param formName			string defining the name and ID of the Pform
 	   	  formTitle			string defining the title of the Pform
 		  formQuestion		string defining the question asked
		  formAnswer		string defining the check function to be used along with arguments to be used
		  formInput			array of answerElements and strings to be inserted into the Pform
		  					or a single answerElement
		  formHints			array of strings defining the hints to be given
		  formInstant		boolean defining if a instant feedback window is needed
		  formFeedback	   	boolean defining if a feedback window is needed
*/
function pForm(formName, formTitle, formQuestion, formAnswer, formInput, formHints, formInstant, formFeedback){
	// attributes
	this.formName = removeTags(formName);

	this.hintName = this.formName + "_hint";
	create_hint_box(this.hintName);

	this.formIndex = formIndex;
	this.formTitle = formTitle;
	this.formQuestion = formQuestion;
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
	this.pWrite = pformWrite;
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
    Creates a hint box for this form.
    The hint box is in the same format as the form
    name = the name of the hint box.
**/

function create_hint_box(name)
{
 document.write('<center>\n<span id = "' + name + '" style =  "display: none;"><table class = "question"  style = "margin: 3px; border: black solid 1px;">\n<tr>\n\<td><span id = "' + name + '_inner"></span></td></tr>\n</table>\n</span></center>');
   }


/**
 * Removes all html tags from a given string
 *
 * @param	given	a string containing html tags
 * @return	IDname	a string with all the html tags removed
 */
function removeTags(given){
	var IDname = "";

	if(given.indexOf('-') != -1)
		given = given.substring(0, given.indexOf('-'));
	else if(given.indexOf('+') != -1)
		given = given.substring(0, given.indexOf('+'));

	while(given.length >= 0){
		if(given.indexOf('<') != -1){
			indexBegin = 0;
			indexEnd = given.indexOf('<');
			IDname += given.substring(indexBegin, indexEnd);
			given = given.substring(given.indexOf('>')+1, given.length);
		}else break;
	}

	IDname+=given;
	return IDname;
}

/**
 *	Write a pForm to the page
*/
function pformWrite(){
	inputArea = this.formInput;

	document.writeln("<div class='centered'><form class='questionForm' name='"+this.formName+"' id='"+this.formName+"' onSubmit='return "+this.formAnswer+";'>");
	document.writeln("");
	document.writeln("<table class='question'>");
	document.writeln("<tr>");	// write form title
	document.writeln("<td class='questionTD'><p><span class='qtitle'>"+this.formTitle);

	if (this.formTitle!="" && this.formTitle!=null) {
		document.writeln("&nbsp;");
	}

	document.writeln("<\/span>");
	if(this.formQuestion != "")	{// write form question
		document.writeln("<span class='qtext'>"+this.formQuestion);
		if (this.formQuestion.substring(this.formQuestion.length-1,this.formQuestion.length)==">")
			document.write("<\/span>");
		else
			document.write("&nbsp;&nbsp;&nbsp;<\/span>");
	}
	if(inputArea != null){
		for(c = 0; c < inputArea.length; c++){
			// construct sentence with blanks
				if(inputArea[c].aType != null)
					inputArea[c].writeBlank();
				else
					document.writeln(inputArea[c]+"");
		}
	}

	document.writeln("<\/td>");
	// insert check image and action
	if (this.formAnswer!=null) {
		document.writeln("<td class='buttonTD'><span name='checkimg_"+this.formIndex+"' id='checkimg_"+this.formIndex+"' onclick = '" + this.formAnswer + "'>");
		//		document.writeln("<input type='image' border='0' src='check.png' value='Check' title='Check your answer'></span><\/td>");
		document.writeln("<img border='0' src='check.png' value='Check' title='Check your answer'></span><\/td>");
	} else
		document.writeln("<td><\/td>");

	if(this.formHints != null) { // insert hint image and action
		document.writeln("<td class='buttonTD'><span name='hintimg_"+this.formIndex+"' id='hintimg_"+this.formIndex+"'><span class = 'ul'  onMouseOver='window.status=\"Click on the image for a hint!\"; return true;' onMouseOut='window.status=\"\"; return true;' onClick='return document.forms["+this.formIndex+"].logicalForm.giveHint();'> ");
		document.writeln("<img border='0' src='hint.png' alt='Hint' title='Click here for a hint'><\/span><\/span>");
	} else
		document.writeln("<td>");

	document.writeln("<\/td><\/tr>");

	if(this.formInstant)	// insert instant feedback window
	 	document.writeln("<tr><td class='questionTD' colspan='3'><span class='qinstant'><div class='instant"+this.formIndex+"' id='instant"+this.formIndex+"' name='instant"+this.formIndex+"'>You are about to submit: <\/div><\/span><\/td><\/tr>");
	if(this.formFeedback)	// insert a feedback window
		document.writeln("<tr><td class='questionTD' colspan='3'><div class='feedback"+this.formIndex+"' id='feedback"+this.formIndex+"' name='feedback"+this.formIndex+"'><\/div><\/td><\/tr>");

	document.writeln("<\/table>");
	document.writeln("<\/form><\/div>");

	document.getElementById(this.formName).logicalForm = this;
	maxID = 0;
}

/**
 * Provides a hint for a given question by using an array of string values
 * @param 	hints	an array of strings which define the hints to be given
*/
var hintIndex = 0;
var hintLastFormIndex=0;


function giveHint(){
	var hints=this.formHints;
	if(hintLastFormIndex!=this.formIndex) {
		hintIndex=0;
		hintLastFormIndex=this.formIndex;
	}
	if(hints[hintIndex] == null)
		hintIndex = 0;

	alert(hints[hintIndex]+((hintIndex==this.formHints.length-1)?"":" <Click again on the hint button for another hint>"));
	logHint(this.formName,hintIndex,hints[hintIndex]);
	hintIndex++;
	return false;
}

/**
 *	Hides a given form from view
 *
 *	@param		the formName of the pForm to be hidden
*/
function hide() {
	for (var i=0;i<arguments.length;i++) {
		var obj;
		obj=document.getElementById(arguments[i]);
		if (obj!=null) {
			obj.style.height='0';
			obj.style.display='none';
		}
	}
}

/**
* Method to call the hide function
*/
function hideForm() {
	hide(this.formName);
}

/**
 *	Shows a previously hidden pForm
 *
 *	@param		the formName of the pForm to be shown
*/
function show() {
	for (var i=0;i<arguments.length;i++) {
		var obj;
		obj=document.getElementById(arguments[i]);
		if (obj!=null) {
			obj.style.height='auto';
			obj.style.display='block';
		}
	}
}

/**
* Method to call the hide function
*/
function showForm() {
	show(this.formName);
}

/**
 * Disables the answer blanks of a given pForm
*/

function deactivate() {
/*	var i = 0;
	while(this.formInput[i] != null){
		if(this.formInput[i].aName != null){
			var box = eval("document."+this.formName+"."+(this.formInput[i]).aName);
			box.disabled = true;
		}
		i++;
	}
*/
	for (var i=0;i<document.forms[this.formName].elements.length;i++){
		document.forms[this.formName].elements[i].disabled=true;
	}

	var cbutton = document.getElementById('checkimg_'+this.formIndex);
	if (cbutton!=null) cbutton.style.display='none';
	if(this.formHints != null){
		var hbutton = document.getElementById('hintimg_'+this.formIndex);
		hbutton.style.display='none';
	}
}

/**
 *	Enables previously disabled answer blanks of a given pForm
 */
function activate() {
	for (var i=0;i<document.forms[this.formName].elements.length;i++){
		document.forms[this.formName].elements[i].disabled=false;
	}

	var cbutton = document.getElementById('checkimg_'+this.formIndex);
	if (cbutton!=null) cbutton.style.display='block';
	if(this.formHints != null){
		var hbutton = document.getElementById('hintimg_'+this.formIndex);
		hbutton.style.display='block';
	}
}

/**
 * Hides the feedback area of a given pForm
 */
function hideFeedback() {
	var fdbk=document.getElementById("feedback"+this.formIndex);
	fdbk.style.display = 'none';
}

/**
 * Shows a previously hidden feedback area of a given pForm
*/
function showFeedback() {
	var fdbk=document.getElementById("feedback"+this.formIndex);
	fdbk.style.display = 'block';
}

/**
 * Sets a string value for the contents of a feedback area of a given pForm
 *
 * @param	formIndex 	integer defining the index of a created pForm
 *			message		string defining the text to be entered in the feedback area
 */
function setFeedback(formIndex, message){
	var feedbackNode=document.getElementById("feedback"+formIndex);

	//remove children
	while (feedbackNode.childNodes.length!=0) {
		feedbackNode.removeChild(feedbackNode.childNodes[0]);
	}
	feedbackNode.appendChild(document.createTextNode(message));
//	feedbackNode.className = "feedback3";
}

/**
 * Sets a string value for the contents of a feedback area of a given pForm
 *
 * @param	formIndex 	integer defining the index of a created pForm
 *			message		string defining the text to be entered in the feedback area
 *			attempt_no	integer defining the current attempt number
 */
function setFeedback(formIndex, message, attempt_no){
	var feedbackNode=document.getElementById("feedback"+formIndex);
	if(attempt_no == 0) attempt_no = 1;

	//remove children
	while (feedbackNode.childNodes.length!=0) {
		feedbackNode.removeChild(feedbackNode.childNodes[0]);
	}

	if (message!="") feedbackNode.appendChild(document.createTextNode(message));
	feedbackNode.className = "feedback"+attempt_no;
}

/**
 * Sets a string value for the contents of an instant feedback area of a given pForm
 *
 * @param	formIndex 	integer defining the index of a created pForm
 *			message		string defining the text to be entered in the instant feedback area
 */
function setInstantFeedback(formIndex, message){
	var InstantNode=document.getElementById("instant"+formIndex);

	//remove children
	while (InstantNode.childNodes.length!=0) {
		InstantNode.removeChild(InstantNode.childNodes[0]);
	}
	InstantNode.appendChild(document.createTextNode(message));
}
