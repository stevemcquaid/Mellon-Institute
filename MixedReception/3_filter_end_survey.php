<?php
	$student_name = filterBadChars($student_name);
	$instructor = filterBadChars($instructor);
	$what_unknown_sub = filterBadChars($what_unknown_sub);
	$mw_drug = filterBadChars($mw_drug);
	$mw_anti_venom = filterBadChars($mw_anti_venom);
	$unknown_sub_mass_why = filterBadChars($unknown_sub_mass_why);
	$whypeanut_killed = filterBadChars($whypeanut_killed);
	$take_medicine = filterBadChars($take_medicine);
	$sam_abstract = filterBadChars($sam_abstract);
	$joanna_pills = filterBadChars($joanna_pills);
	$joanna_emails = filterBadChars($joanna_emails);
	$food_drink = filterBadChars($food_drink);
	$who_guilty = filterBadChars($who_guilty);
	$why_motive = filterBadChars($why_motive);
	$how_committed = filterBadChars($how_committed);
	
	function filterBadChars($string) {
	
		//Direct Substitution
	/*
		$bad = array( "&", '"', "\t", "%", "'", ":", ";");
		$replace = array( "and", "&quot", "&#009;", "percent", "&#039;", "(colon)", "(semi-colon)");
		$string = str_replace($bad, $replace, $string);
	*/
		
		//this is remove all backslashes
	/* $string = stripslashes($string); */
		//This will remove the tab and the line break
		//$string = filter_var($string, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
		//This will remove the é.
		//$string = filter_var($string, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
		
		
		$string = preg_replace('/[^(\x20-\x7F)]*/','', $string);
		$string = preg_replace( "/[\r\n]/",'', $string);
	  
	  return $string;
	}
	
?>