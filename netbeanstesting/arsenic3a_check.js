var nAttempts = 1;
var follow = nAttempts;
var isAttemptWrong=true;

function randInt(n) {
    return Math.floor(Math.random() * n);
}

choices = new Array(0.100, 0.200, 0.300, 0.400, 0.500);
concentration = choices[randInt(choices.length)];
question = "How many grams of sodium arsenite were used to make 100 mL of "+concentration+" molar solution?";


function check3a() {
    grams = document.question3aform.question3a.value;
    if (grams == "") {
        alert("Please enter an answer before checking.");
        return false;
    }    
    
    message = "";
    correct = 0.1 * concentration * 129.91;

    //Testing
    alert(correct);

    relerror = relativeError(grams, correct, 0.05);
    if (!relerror) { // wrong
        isAttemptWrong = true;         
        nAttempts++;
        n = 4 - nAttempts;
        if (n > 0)
            alert("Your answer is wrong, but you still have "+n+ (n > 1? " chances": " chance")+" left.");
        if (nAttempts > 3) {
            a1.deactivate();
            alert("You've used your three chances.\n The correct answer was "+format_sig(correct,3)+" g NaAsO2. Refresh the page and start over.");
        }
    }
    
    else { // right
        alert("Correct!");
        isAttemptWrong = false;
        try {
		    setCompleted(true);   
		}
		catch (err) { }
		a1.deactivate();     
    }
    logFormCheck(a1.formName, nAttempts,grams+" grams of sodium arsenite", format_sig(correct,3)+" grams of sodium arsenite",
			message,!isAttemptWrong,"");
    return false;
}