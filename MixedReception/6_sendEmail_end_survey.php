<?php

	// --VARS--	
	$err_captcha = !$_SESSION['captcha_success'];
	$student_name = $_SESSION['student_name'];
	$instructor = $_SESSION['instructor'];
	$teacher_email = $_SESSION['teacher_email'];
	$err_invalid_email = False;
	$no_email_provided = False;
	$email_not_sent = False;
	
	// --LABOR--
	$no_email_provided = ($teacher_email == "");
	$email_not_sent = !processEmail($err_invalid_email, $no_email_provided, $email_not_sent, $err_captcha, $student_name, $teacher_email); //Attempts to send mail
	$theresponse = display_errors($err_invalid_email, $no_email_provided, $email_not_sent, $err_captcha, $teacher_email); //for testing
	display_results($theresponse);

	// --FUNCTIONS--
	function processEmail($err_invalid_email, $no_email_provided, $email_not_sent, $err_captcha, $student_name, $teacher_email) //Returns whether or not the email was sent
	{
		//test valid email
		
		$err_invalid_email = False;
		
		require_once('is_email.php');
		$err_invalid_email != is_email($teacher_email);
		
		/* --For Debugging--
		echo '1:';
		echo $err_invalid_email;
		echo ', 2:';
		echo $no_email_provided;
		echo ', 3:';
		echo $email_not_sent;
		echo ', 4:';
		echo $err_captcha;
		echo '-';
		*/
	
		if (is_error_free($err_invalid_email, $no_email_provided, $email_not_sent, $err_captcha, $student_name, $teacher_email))
		{
			return send_mail($err_invalid_email, $no_email_provided, $email_not_sent, $err_captcha, $student_name, $teacher_email);
		}
		else
		{
			return False;
		}
	}

	function send_mail($err_invalid_email, $no_email_provided, $email_not_sent, $err_captcha, $student_name, $teacher_email)//helper fn
	{
		include 'display_survey_results.php';
		//Fight Injection Attacks:
		heal($teacher_email);
		heal($student_name);
		
		$to = $teacher_email;
		$subject =  "Chem Collective Results from: " . $student_name;
		$message = $header . $results_page . $footer;
		$mailHeaders = get_mail_headers();
		
		//send the email
		$mail_sent = @mail( $to, $subject, $message, $mailHeaders);

		//if the message is sent successfully print "Mail sent". Otherwise print "Mail failed"
		//echo $mail_sent ? "Mail sent" : "Mail failed";

		return $mail_sent;
	}

	function get_mail_headers()//helper fn
	{
		$mailHeaders = "From: SurveyResults@collective.chem.cmu.edu\r\n";
		//this next line should be optional
		$mailHeaders .= "Reply-To: webmaster@collective.cmu.edu.edu\r\n";
		$mailHeaders .= "MIME-Version: 1.0\r\n";
		$mailHeaders .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		return $mailHeaders;
	}

	function display_errors($err_invalid_email, $no_email_provided, $email_not_sent, $err_captcha, $teacher_email)
	{
		$theresponse = "";
		if (!is_error_free($err_invalid_email, $no_email_provided, $email_not_sent, $err_captcha))
		{
		
			if ($email_not_sent && ($err_captcha || $no_email_provided || $err_invalid_email)){
				$theresponse .= 'The email was not sent. ';
			}
			
			if ($err_invalid_email){
				$theresponse .= 'Please enter a valid email address. ';
			}
			
			if ($no_email_provided){
				$theresponse .= 'You did not enter an email address. If you would like to send a copy of this report, please click the "Retake" button. ';
			}
			
			if ($err_captcha){
				$theresponse .= 'You did not enter the correct Captcha phrase. Please try again by clicking the "Retake" button. ';
			}

		//need a continue button here and to be sure all data is passed along via $POST
		//have a button on the bottom that allows you to redo the data by forwarding you to the survey page with the data still filled in!
    }
    else
    {
    	$theresponse .= 'The email was sent to: ' . $teacher_email . '.';
    }
    return $theresponse;
  }

	function is_error_free($err_invalid_email, $no_email_provided, $email_not_sent, $err_captcha)
	{
	
		//if any var returns true, then there is an error
		return !($err_invalid_email || $no_email_provided || $email_not_sent || $err_captcha);
	}

	function display_results($theresponse)
	{
		include 'display_survey_results.php';
		//display html
		$the_page = "";
		$the_page .= $header;
		$the_page .= $results_page; //go to results
		$the_page .= '<div style="text-align:center;"><input type="button" value="Retake Survey" onclick="window.location.href=\'http://collective.chem.cmu.edu/MixedReception/end_survey_mk7.php\'"/></div>';
		$the_page .= '<div style="color: red; font-size: 1.2em; font-family: sans-serif; margin: auto; text-align: center; margin: 5%;">' . $theresponse . '</div>';
		$the_page .= $footer;

		echo $the_page;

		return $the_page;
	}
	
	function heal($str) {
		$injections = array('/(\n+)/i',
		'/(\r+)/i',
		'/(\t+)/i',
		'/(%0A+)/i',
		'/(%0D+)/i',
		'/(%08+)/i',
		'/(%09+)/i'
		);
		$str= preg_replace($injections,'',$str);
		return $str;
	}

?>