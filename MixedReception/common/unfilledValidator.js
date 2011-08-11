function writeIfIsFilledTextbox(form, fieldName) {
	var strField = document.forms[0].fieldName.value 
	if (!(strField == "" || strField == null || !isNaN(strField) || strField.charAt(0) == ' ')) {
		document.getElementById(fieldName).innerHTML='Please fill out this question!';
		document.getElementById(fieldName).className='centerBold';
	}
}

function processAllFieldsForEmptyCheck(form) {
	writeIfIsFilledTextbox(form, student_name_holder);
	writeIfIsFilledTextbox(form, what_unknown_sub_holder);
	writeIfIsFilledTextbox(form, mw_drug_holder);
	writeIfIsFilledTextbox(form, student_name_holder);
	writeIfIsFilledTextbox(form, mw_anti_venom_holder);
	writeIfIsFilledTextbox(form, unknown_sub_mass_why_holder);
	writeIfIsFilledTextbox(form, whypeanut_killed_holder);
	writeIfIsFilledTextbox(form, take_medicine_holder);
	writeIfIsFilledTextbox(form, sam_abstract_holder);
	writeIfIsFilledTextbox(form, joanna_pills_holder);
	writeIfIsFilledTextbox(form, joanna_emails_holder);
	writeIfIsFilledTextbox(form, food_drink_holder);
	writeIfIsFilledTextbox(form, who_guilty_holder);
	writeIfIsFilledTextbox(form, why_motive_holder);
	writeIfIsFilledTextbox(form, how_committed_holder);
}

// I NEED TO TEST THIS TO SEE IF IT IS EVEN RUNNING AND ALSO CHECK ALL PARTS OF IT!
