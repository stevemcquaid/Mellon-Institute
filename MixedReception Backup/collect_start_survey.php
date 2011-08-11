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

	/*Start a new session and keep track of the field filled out so far
	 *to be used for the end survey too
	 */
	$class = getClass();
	
	$_SESSION['class'] = $class;
	/* $_SESSION['isForClass'] = $_POST['isForClass']; */
	$_SESSION['category1'] = $_GET['cat1'];
	$_SESSION['category2'] = $_GET['cat2'];
	$_SESSION['satisfaction'] = $_POST['satisfaction'];
	$_SESSION['satisfaction2'] = $_POST['satisfaction2'];
	$_SESSION['ques1'] = $_GET['ques1'];
	$_SESSION['ques2'] = $_GET['ques2'];
	
	$category = $_GET['cat1'] + 1;
	$category2 = $_GET['cat2'] + 1;
	$ques1 = $_GET['ques1'] + 1;
	$ques2 = $_GET['ques2'] + 1;
	/*Concatenate the string to be written into the result*/
	/*Format: Session Id, Class, isForClass, Category1 Question Satisfaction
			  Category2 Question Satisfaction
	*/
	date_default_timezone_set("UTC");
	$string = date(DATE_RFC1036, time()) . " Session Id: " . session_id() . "\t" . $class . "\t" .  
	       $_POST['isForClass'] . "\tCategory" . $category . 
		   "\tQuestion". $ques1 . "\t" . $_POST['satisfaction'] . 
		   "\tCategory" . $category2 . 
		   "\tQuestion". $ques2 . "\t" . $_POST['satisfaction2'] . "\r\n";
            
	$filename = 'result/result.log';
	$max_size = 20000000;
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
			
?>
	
