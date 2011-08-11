/*
 * validateForm() - a function to check the validity of the response,
 *                  i.e. whether the user answer to all questions.
 */
function validateStartForm(){
	var error_string = "";

    /*Check whether question 1 is answered*/
    var class_select = false;
    var class_length = document.myform.class.length;

    for(var i = 0; i < class_length; i++){
        if(document.myform.class[i].checked){
			class_select = true;
            break;
        }
    }
    if(!class_select) error_string += "Please select a response for Question 1!\n";

    /*Check whether question 2 is answered*/
    var is_class_select = false;
    var is_class_length = document.myform.isForClass.length;

    for(var i = 0; i < is_class_length; i++){
        if(document.myform.isForClass[i].checked){
			is_class_select = true;
            break;
        }
	}
    if(!is_class_select) error_string += "Please select a response for Question 2!\n";

    /*Check whether question 3 is answered*/
    var satisfaction_select = false;
    var satisfaction_length = document.myform.satisfaction.length;

    for(var i = 0; i < satisfaction_length; i++){
        if(document.myform.satisfaction[i].checked){
            satisfaction_select = true;
            break;
        }
    }
    if(!satisfaction_select) error_string += "Please select a response for Question 3!\n";
	
	/*Check whether question 4 is answered*/
    satisfaction_select = false;
    satisfaction_length = document.myform.satisfaction2.length;

    for(var i = 0; i < satisfaction_length; i++){
        if(document.myform.satisfaction2[i].checked){
            satisfaction_select = true;
            break;
        }
    }
    if(!satisfaction_select) error_string += "Please select a response for Question 4!\n";
         
    /*Have alert window if some questions unanswered*/
    if(error_string == "") {
		return true;
	}
    else {alert(error_string); return false;}
}

/*
 * validateEndForm() - a function to check the validity of the response,
 *                     i.e. whether the user answer to all questions.
 */
function validateEndForm(){
    var error_string = "";

    /*Check whether question 1 is answered*/
    var ques1_select = false;
    var ques1_length = window.document.my_form.satisfaction.length;

    for(var i = 0; i < ques1_length; i++){
        if(window.document.my_form.satisfaction[i].checked){
            ques1_select = true;
            break;
		}
    }
    if(!ques1_select) error_string += "Please select a response for Question 3!\n";

    /*Check whether question 2 is answered*/
    var ques2_select = false;
    var ques2_length = window.document.my_form.satisfaction2.length;

    for(var i = 0; i < ques2_length; i++){
        if(window.document.my_form.satisfaction2[i].checked){
            ques2_select = true;
            break;
        }
    }
    if(!ques2_select) error_string += "Please select a response for Question 4!\n";
	
	/*Check whether question 3 is answered*/
    var ques3_select = false;
    var ques3_length = window.document.my_form.satisfaction3.length;

    for(var i = 0; i < ques3_length; i++){
        if(window.document.my_form.satisfaction3[i].checked){
            ques3_select = true;
            break;
        }
    }
    if(!ques3_select) error_string += "Please select a response for Question 5!\n";

    if(error_string == "") return true;
    else {alert(error_string); return false;}
}