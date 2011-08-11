<?php

//PassingVars: 
	$student_name = "";
	$instructor = ""; 
	$teacher_email = "";
	$what_unknown_sub = "";;
	$mw_drug = "";
	$mw_anti_venom = "";
	$unknown_sub_mass_why = "";
	$whypeanut_killed = "";
	$take_medicine = "";
	$sam_abstract = "";
	$joanna_pills = "";
	$joanna_emails = "";
	$food_drink = "";
	$who_guilty = "";
	$why_motive = "";
	$how_committed = "";

	$student_name = $_POST['student_name'];
	$instructor = $_POST['instructor'];
	$teacher_email = $_POST['teacher_email'];
	$what_unknown_sub = $_POST['what_unknown_sub'];
	$mw_drug = $_POST['mw_drug'];
	$mw_anti_venom = $_POST['mw_anti_venom'];
	$unknown_sub_mass_why = $_POST['unknown_sub_mass_why'];
	$whypeanut_killed = $_POST['whypeanut_killed'];
	$take_medicine = $_POST['take_medicine'];
	$sam_abstract = $_POST['sam_abstract'];
	$joanna_pills = $_POST['joanna_pills'];
	$joanna_emails = $_POST['joanna_emails'];
	$food_drink = $_POST['food_drink'];
	$who_guilty = $_POST['who_guilty'];
	$why_motive = $_POST['why_motive'];
	$how_committed = $_POST['how_committed'];
	
	$cqErr[13] = ($student_name == "");
	$cqErr[0] = ($what_unknown_sub == "");
	$cqErr[1] = ($mw_drug == "");
	$cqErr[2] = ($mw_anti_venom == "");
	$cqErr[3] = ($unknown_sub_mass_why == "");
	$cqErr[4] = ($whypeanut_killed == "");
	$cqErr[5] = ($take_medicine == "");
	$cqErr[6] = ($sam_abstract == "");
	$cqErr[7] = ($joanna_pills == "");
	$cqErr[8] = ($joanna_emails == "");
	$cqErr[9] = ($food_drink == "");
	$cqErr[10] = ($who_guilty == "");
	$cqErr[11] = ($why_motive == "");
	$cqErr[12] = ($how_committed == "");
	
?>