<?php
	session_start();
	
	/*Validate Form and return to the previous page if there 
	 *are unfilled blanks with error message
	 */
	$err1=($_POST['class']=="")?"yes":"no";
	/*  $err2=($_POST['isForClass']=="")?"yes":"no";  */
	$err3=($_POST['satisfaction']=="")?"yes":"no";
	$err4=($_POST['satisfaction2']=="")?"yes":"no";
	$nextPage = "http://collective.chem.cmu.edu/MixedReception/start_survey.php?";
	if($err1=="yes") $nextPage = $nextPage . "err1=1";
	if($err2=="yes") $nextPage = $nextPage . "&err2=1";
	if($err3=="yes") $nextPage = $nextPage . "&err3=1";
	if($err4=="yes") $nextPage = $nextPage . "&err4=1";
	if($err1=="yes" || $err2=="yes" || $err3=="yes" || $err4=="yes")
		header("Location: ".$nextPage);
	else {

	$class = getClass();
	
	//Removed becuase the 2_collect_end_survey.php should not use these session vars
	/*
	$_SESSION['category1'] = $_GET['cat1'];
	$_SESSION['category2'] = $_GET['cat2'];
	$_SESSION['satisfaction'] = $_POST['satisfaction'];
	$_SESSION['satisfaction2'] = $_POST['satisfaction2'];
	$_SESSION['ques1'] = $_GET['ques1'];
	$_SESSION['ques2'] = $_GET['ques2'];
	*/
	
	$category1 = $_GET['cat1'];
	$category2 = $_GET['cat2'];
	$ques1 = $_GET['ques1'] + 1;
	$ques2 = $_GET['ques2'] + 1;

	// Package Survey Questions in $tempArray
	$tempArray = null;
	$num = 10 * $category1;
	$num += $ques1;
	$value = $_POST['satisfaction']; //changed for this file
	$tempArray[$num] = $value;
	$num=null;$value=null;
	
	$num = 10 * $category2;
	$num += $ques2;
	$value = $_POST['satisfaction2']; //changed for this file
	$tempArray[$num] = $value;
	$num=null;$value=null;	

	if ($class != null) {$tempArray['class'] = $class;}
	
	/*Sort & Concatenate the string to be written into the result*/
	foreach( $tempArray as $questionCode => $value ) {
		switch ($questionCode) {
			case "class";
				$num = 0;
				break;
	    case 0+1;
	    	$num = 1;
	    	break;
	    case 1+1;
	    	$num = 2;
	    	break;
	    case 2+1;
	    	$num = 3;
	    	break;
	    case 10+1;
	    	$num = 4;
	    	break;
	    case 11+1;
	    	$num = 5;
	    	break;
	    case 20+1;
	    	$num = 6;
	    	break;
	    case 21+1;
	    	$num = 7;
	    	break;
	    case 30+1;
	    	$num = 8;
	    	break;
	    case 31+1;
	    	$num = 9;
	    	break;
	    case 40+1;
	    	$num = 10;
	    	break;
	    case 41+1;
	    	$num = 11;
	    	break;
			case 42+1;
	    	$num = 12;
	    	break;
	    case 43+1;
	    	$num = 13;
	    	break;
	    default;
	    	$num = -1;
	    break;
	   }
		
		//Only store item in log if it is valid (a known question) and has a result.
	  if (($num != -1) && ($value != null)) {
	  		/*
echo "(" . $questionCode . ", " . $value . ")
	";
*/
	
	  	$sqArray[$num]= $value;
/* 	  	echo "SUCCESS!"; */
	  }
	  else {
/* 	  	echo "(Num=" . $num . ", " . $questionCode . ", " . $value . ")"; */
	  }
	}
	$tempArray = null;
	//End Packaging vars to write

	include('collect_start_survey_helper.php');


	include('5_2_log_survey.php');
	
	header("Location: http://collective.chem.cmu.edu/MixedReception/game_survey/main.html");
	}
			
	/*
	 * A helper method to return the class taken by the user
	 */
	function getClass(){
		$class=$_POST['class'];
		if($class == "1") return "Middle school science";
		else if($class == "2") return "High school chemistry";
		else if($class == "3") return "High school forensics";
		else if($class == "4") return "College Chemistry";
		else return "None";
	}

	/*
	Question0 = "Are you currently in a science class?";"
	Question1 = "In chemistry class, my goal is to learn as much as possible.";
	Question2 = "In chemistry class, my goal is to perform better than other students.";
	Question3 = "In chemistry class, my aim is to avoid doing worse than other students.";
	Question4 = "I am good at chemistry.";
	Question5 = "I like chemistry.";
	Question6 = "I plan on becoming a scientist.";
	Question7 = "If given a choice, I would not study chemistry.";
	Question8 = "Chemistry is useful for everyday problems.";
	Question9 = "Learning chemistry is mostly memorization.";
	Question10 = "To what extent did this activity help to increase your knowledge of the types of work performed in the field of chemistry?";
	Question11 = "To what extent did this activity affect your view of the usefulness of chemistry as a field in general?";
	Question12 = "To what extent did this activity affect your view of the usefulness of chemistry in solving significant real-world problems?";
	Question13 = "To what extent did this activity affect your view of the usefulness of chemistry in solving everyday problems?";
	*/
	
?>
	
