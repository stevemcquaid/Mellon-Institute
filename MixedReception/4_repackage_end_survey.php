<?php
	
	//PassingVars for more calls of StepTwo.php
	$_SESSION['student_name'] = $student_name;
	$_SESSION['instructor'] = $instructor;
	$_SESSION['teacher_email'] = $teacher_email;
	$_SESSION['what_unknown_sub'] = $what_unknown_sub;
	$_SESSION['mw_drug'] = $mw_drug;
	$_SESSION['mw_anti_venom'] = $mw_anti_venom;
	$_SESSION['$unknown_sub_mass_why'] = $unknown_sub_mass_why;
	$_SESSION['whypeanut_killed'] = $whypeanut_killed;
	$_SESSION['take_medicine'] = $take_medicine;
	$_SESSION['sam_abstract'] = $sam_abstract;
	$_SESSION['joanna_pills'] = $joanna_pills;
	$_SESSION['joanna_emails'] = $joanna_emails;
	$_SESSION['food_drink'] = $food_drink;
	$_SESSION['who_guilty'] = $who_guilty;
	$_SESSION['why_motive'] = $why_motive;
	$_SESSION['how_committed'] = $how_committed;
	
	
	//Packaging in arrays for log fn.
	$cqArray[0] = $what_unknown_sub;
	$cqArray[1] = $mw_drug;
	$cqArray[2] = $mw_anti_venom;
	$cqArray[3] = $unknown_sub_mass_why;
	$cqArray[4] = $whypeanut_killed;
	$cqArray[5] = $take_medicine;
	$cqArray[6] = $sam_abstract;
	$cqArray[7] = $joanna_pills;
	$cqArray[8] = $joanna_emails;
	$cqArray[9] = $food_drink;
	$cqArray[10] = $who_guilty;
	$cqArray[11] = $why_motive;
	$cqArray[12] = $how_committed;
	$cqArray[13] = $student_name;
	
	//$sqArray delt with in collect_end_survey.php
	
	
?>