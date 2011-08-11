<?php

function filterBadChars($string) {

/*
	$bad = array( "&", '"', "\t", "%", "'", ":", ";");
	$replace = array( "and", "&quot", "&#009;", "percent", "&#039;", "(colon)", "(semi-colon)");
	$string = str_replace($bad, $replace, $string);
*/
	
	
	
/* 	$string = stripslashes($string); */

	//This will remove the tab and the line break
	$string = filter_var($string, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
	//This will remove the é.
	$string = filter_var($string, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
  return $string;
}

?>