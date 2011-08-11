<?php
session_start();

	//begin importing reCaptcha Verification
	require_once('captcha_lib.php');
  $privatekey = "6LfqRMUSAAAAAGYgZSKdZHqtTsY2W5vaXUR9XnTe";
  $resp = recaptcha_check_answer ($privatekey, $_SERVER["REMOTE_ADDR"], $_POST["recaptcha_challenge_field"], $_POST["recaptcha_response_field"]);
  if (!$resp->is_valid) {
    // What happens when the CAPTCHA was entered incorrectly
    $_SESSION['captcha_success'] = False;
  } else {
    // Your code here to handle a successful verification
    $_SESSION['captcha_success'] = True;
  }
  //end reCaptcha Verification
  
  
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
	
	include('filter_bad_chars.php');
	
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
	//deal with this later	
	$sqArray[0]= "szero";
	$sqArray[1]= "sone";
	$sqArray[2]= "stwo";
		
	include('log_end_survey.php');
	
	//PassingVars: 
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
	

/*Validate Form and return to the previous page if there 
 *are unfilled blanks with error message
 */
$err1=($_POST['satisfaction']=="")?"yes":"no";
$err2=($_POST['satisfaction2']=="")?"yes":"no";
$err3=($_POST['satisfaction3']=="")?"yes":"no";

$nextPage = "http://collective.chem.cmu.edu/MixedReception/end_survey_mk7.php?";

if($err1=="yes") $nextPage = $nextPage . "err1=1";
if($err2=="yes") $nextPage = $nextPage . "&err2=1";
if($err3=="yes") $nextPage = $nextPage . "&err3=1";
if($err1=="yes" || $err2=="yes" || $err3=="yes")
	header("Location: ".$nextPage);
else {
	$category1 = $_SESSION['category1'] + 1;
	$category2 = $_SESSION['category2'] + 1;
	$category3 = $_GET['cat'] + 1;
	$category4 = $_GET['cat2'] + 1;
	$feedback = $_GET['feedback'] + 1;
	
	$ques1 = $_SESSION['ques1'] + 1;
	$ques2 = $_SESSION['ques2'] + 1;
	$ques3 = $_GET['ques2'] + 1;
	$ques4 = $_GET['ques3'] + 1;
	

	/*Concatenate the string to be written into the result*/
	/*Format: Session Id, Class, isForClass, Category1, Question, Satisfaction,
	 *        Category2, Question, Satisfaction, Category3, Question, Satisfaction,
	 *        Category4, Question, Satisfaction, FeedbackQuestion, Satisfaction.
	 *				
	 */


	date_default_timezone_set("UTC");
	$string = date(DATE_RFC1036, time()) . " Session Id: " . session_id() . "\t" . $_SESSION['class'] . "\t" .  
	       $_SESSION['isForClass'] . "\tCategory" . $category1 . 
		   "\tQuestion". $ques1 . "\t" . $_SESSION['satisfaction'] . 
		   "\tCategory" . $category2 . 
		   "\tQuestion". $ques2 . "\t" . $_SESSION['satisfaction2'] . 
		   "\tCategory" . $category3 . 
		   "\tQuestion". $ques3 . "\t" . $_POST['satisfaction2'] . 
		   "\tCategory" . $category4 . 
		   "\tQuestion". $ques4 . "\t" . $_POST['satisfaction3'] . 
		   "\tFeedBack" . $feedback . "\t" . $_POST['satisfaction'] . "\tMurderer:\t";
		   
	for($i = 1; $i <= 5; $i++){
		$name = "murderer".$i;
		$value = $_POST[$name];
		if($value != "") $string = $string."\t".$value;
	}
	$string = $string. "\tEvidence:\t";
	for($i = 1; $i <= 10; $i++){
		$name = "evidence".$i;
		$value = $_POST[$name];
		if($value != "") $string = $string."\t".$value;
	}
	
	$string = $string."\r\n";
    $max_size = 20000000;
	$filename = 'result/result.log';
	/*Check whether a file exist and writable before writing the element*/
	if (!file_exists($filename) || (is_writable($filename) && file_exists($filename))) {
			
		// If file is bigger than 20 MB
		if (filesize($filename)>$max_size) {
			// Look for an available name
			$i=1;
			$filename = 'result/result'.(string)$i.'.log';
			//If the new file already exists and also have size too big, go to next file
			while (file_exists($filename) && filesize($filename) > $max_size){
				$i++;
				$filename = 'result/result'.(string)$i.'.log';
			}
		}

		// Opens $filename in append mode
		if ($handle = fopen($filename, 'a+')) {
			if (fwrite($handle, $string) === FALSE) {}
		}
		fclose($handle);
	}
	
	header("Location: http://collective.chem.cmu.edu/MixedReception/send_teacher_email.php");

}
			
?>
	
