      <?php    
        $name = $_REQUEST['name'] ;
        $email = $_REQUEST['email'] ;
        $school = $_REQUEST['school'] ;
        $instructor = $_REQUEST['instructor'] ;
        $unknown_sub = $_REQUEST['unknown_sub'] ;
        $whypeanut_killed = $_REQUEST['whypeanut_killed'] ;
		$crimescene_evid = $_REQUEST['crimescene_evid'] ;
        $suspect = $_REQUEST['suspect'] ;
        $how = $_REQUEST['how'] ;
        $motive = $_REQUEST['motive'] ;

if ($email==""){
    ?>

<html>
<head>
<title>
MR Case Report Submission </title>
<link rel=StyleSheet href="includes/modern.css" type="text/css">
</head>
</head>
<div align=center>
<table width="701" cellpadding="0" cellspacing="0" border="1" bordercolor="#000000">
	<tr>
	<td class="mixed2">
		<img src="http://iry.chem.cmu.edu/mr/images/banner2.jpg" alt="MixedReception"><br />
		<h1 align=center>Request Form - Error</h1>
	<ul><br>
	<p class="text">Oops, it appears you forgot to enter your
    email address. Please press the BACK
    button in your browser and try again.</p><br>
		</ul>
 	   </td>
 	 </tr>

	<tr>
	<td class="mixed"><img src="http://iry.chem.cmu.edu/mr/images/footer2.jpg" alt="Mixed Reception Footer">
	</td>
	</tr>
</table>
</body>
</html>


<?php
  }

  
 else {
          $message .= "Name: ". $name;
          $message .= "\n\n";
          $message .= "Email: ". $email;
          $message .= "\n\n";
          $message .= "School: ". $school;
          $message .= "\n";
          $message .= "Instructor: ".  $instructor;
          $message .= "\n\n";
		  
		  $message .= "What was the unknown substance: ". $unknown_sub;
          $message .= "\n\n";
          $message .= "Why didnt the peanut allergen work: ". $whypeanut_killed;
          $message .= "\n\n";
          $message .= "Any evidence at the crime scene: ". $crimescene_evid;
          $message .= "\n\n";
          $message .= "Who did it: ". $suspect;
          $message .= "\n\n";
		  $message .= "How did they do it: ". $how;
          $message .= "\n\n";
          $message .= "Why did they do it: ". $motive;
          $message .= "\n\n";


	$headers = "MIME-Version: 1.0\r\n"; 
	$headers .= "From: ".$email."\n"; 

          $headers .= "To: <mk7@andrew.cmu.edu>\n";
          $headers .= "X-Mailer: PHP\n";
          $headers .= "X-Priority: 1\n"; 
mail("mk7@andrew.cmu.edu", "MixedRec Solved Case Report", $message, $headers); 

?>

<html>
<head>
<title>
MR Form Submission </title>
<link rel=StyleSheet href="modern.css" type="text/css">
</head>
</head>
<div align=center>
<table width="701" cellpadding="0" cellspacing="0" border="1" bordercolor="#000000">
	<tr>
	<td class="mixed2">
		<img src="http://iry.chem.cmu.edu/mr/images/banner2.jpg" alt="MixedReception">
		<h1 align=center>Case report Submitted</h1>
	<br>
	<p align="center">Thank you, your request has been submitted.<br>
    <br>We will process your case report and send you results via email in a few days.</p>
	<br><br>
	<img src="http://iry.chem.cmu.edu/mr/images/footer2.jpg" alt="footer image"/>
</td>
</tr>
</table>
</div>  
</body>
</html>

<?php
  }
   ?>

