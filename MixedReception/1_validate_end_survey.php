<?php

//This simply puts the validation boolean into a session variable for later retrieval
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


/*Validate Form and return to the previous page if there 
 *are unfilled blanks with error message
 */
$err1=($_POST['satisfaction']=="")?"yes":"no";
$err2=($_POST['satisfaction2']=="")?"yes":"no";
$err3=($_POST['satisfaction3']=="")?"yes":"no";

//$nextPage defined in StepTwo.php

if($err1=="yes" || $err2=="yes" || $err3=="yes") {
	$nextPage .= "err1=1";
	$nextPage .= "&err2=1";
	$nextPage .= "&err3=1";
}

// I AM RIGHT HERE FOR CORRECTING!!
$has_cqErr = false;
foreach($cqErr as $index => $value) {
	if ($value) {
		$nextPage .= "&cqErr". $index . "=" . $value;
		$has_cqErr = true;
	}
}

if($err1=="yes" || $err2=="yes" || $err3=="yes") {
	header("Location: ".$nextPage);
}
elseif ($has_cqErr) {
	$nextPage .= "&err1=1";
	$nextPage .= "&err2=1";
	$nextPage .= "&err3=1";
	header("Location: ".$nextPage);
}
?>