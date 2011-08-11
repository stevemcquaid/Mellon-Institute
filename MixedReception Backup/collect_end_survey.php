<?php
session_start();
/*Validate Form and return to the previous page if there 
 *are unfilled blanks with error message
 */
$err1=($_POST['satisfaction']=="")?"yes":"no";
$err2=($_POST['satisfaction2']=="")?"yes":"no";
$err3=($_POST['satisfaction3']=="")?"yes":"no";
$nextPage = "http://collective.chem.cmu.edu/MixedReception/end_survey.php?";
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

	header("Location: http://collective.chem.cmu.edu/MixedReception/game/FinalReport.pdf");
}
			
?>
	
