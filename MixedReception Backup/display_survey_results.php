<?php
//Variables:
$student_name = $_SESSION['student_name'];
$teacher_email = $_SESSION['teacher_email'];
$what_unknown_sub = $_SESSION['what_unknown_sub'];
$mw_drug = $_SESSION['mw_drug'];
$mw_anti_venom = $_SESSION['mw_anti_venom'];
$unknown_sub_mass_why = $_SESSION['$unknown_sub_mass_why'];
$whypeanut_killed = $_SESSION['whypeanut_killed'];
$take_medicine = $_SESSION['take_medicine'];
$sam_abstract = $_SESSION['sam_abstract'];
$joanna_pills = $_SESSION['joanna_pills'];
$joanna_emails = $_SESSION['joanna_emails'];
$food_drink = $_SESSION['food_drink'];
$who_guilty = $_SESSION['who_guilty'];
$why_motive = $_SESSION['why_motive'];
$how_committed = $_SESSION['how_committed'];


$results_page = "";

$header = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>';

$results_page .= '	<title>Mixed Reception Survey Results</title>
	<style type="text/css">
		h1 {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      font-size: 140%;
      margin-top: 0px;
      margin-left: 15px;
      margin-right: 15px;
      margin-bottom: 8px;
      text-align: center;
    }
	
		p{
      font-family: Arial, Helvetica, sans-serif;
      margin-left: 10px;
      margin-right: 10px;
	  	text-align: left;
	  	padding:0px;
    }

    p.bold {
      font-weight: bold;
    }
	
		p.satisfaction_button {
      margin-left: 20px;
      margin-right: 20px; 
    }
	
		p.center {
      text-align: center;
    }
	
		p.centerBold{
	  text-align: center;
	  font-weight:bold;
	  color:red;
		}
	
		p.right{
	  	text-align: right;
		}
	
		a{
	  	font-family: Arial, Helvetica, sans-serif;
	  	text-decoration: none;
	  	color: blue;
	  	font-weight: bold;
		}
	</style>
</head>
<body bgcolor="grey">
     <div align="center">
     
     <table width="851" cellpadding="0" bgcolor="white" cellspacing="0" border="1">
	<tr>
		<td>
		
		<br>
		<h1 align=center>Mixed Reception - Case Report By: ';


$results_page .= $student_name;
$results_page .= '</h1></p>
	<p><b>[Part 1 - Evidence]</b></p>
	<ol>
	<p><li>An unknown substance was present in Nelson&#39;s blood.  What is this substance and how did it get 
	into his blood? </p>
	<ul><p>';
	
$results_page .=  $what_unknown_sub;

$results_page .=  '</p></ul></li>
	<p><li>What is the molar mass (molecular weight) of the allergy drug? &nbsp;
	<ul><p>';
	
$results_page .=  $mw_drug;

$results_page .=  ' g/mol.</ul></p></li>
	<p><li>What is the molar mass (molecular weight) of the anti-venom?  &nbsp;
	<ul><p>';
  
$results_page .=  $mw_anti_venom;

$results_page .= ' g/mol.</ul></p></li>
  <p><li>The molar mass (molecular weight) of the unknown substance in Nelson&#39;s blood is 765.82. Why?
  <ul><p>';

$results_page .=  $unknown_sub_mass_why;

$results_page .= '</p></ul></li>
	<p><li>The coroner\'s report indicates that Nelson died from an allergic reaction, 
	yet he was taking a drug for this. Can you explain why he would still die from peanuts? </p>
	<ul><p>';
	
$results_page .=  $whypeanut_killed;

$results_page .=  '</p></ul></li>
	<p><li>Did Nelson take his medication that day?  Was the correct concentration of medication present in his blood?</p>
	<ul><p>';

$results_page .=  $take_medicine;

$results_page .=  '</p></ul></li>
	<p><li>You found an abstract on Sam&#39;s desk. Is this evidence relevant to your solution? Why or why not?</p>
	<ul><p>';
	
$results_page .=  $sam_abstract;

$results_page .=  '</p></ul></li>
	<p><li>There were pills found in Joanna&#39;s office. Is this evidence relevant to your solution? Why or why not?</p>
	<ul><p>';

$results_page .=  $joanna_pills;

$results_page .= '</p></ul></li>
	<p><li>Are Joanna&#39;s emails important evidence in support of your solution?</li>
	<ul><p>';

$results_page .=  $joanna_emails;

$results_page .=  '</p></ul></li>
	<p><li>Was any of the food or drink left at the crime-scene important evidence for your case? Why or why not?</p>
	<ul><p>';

$results_page .=  $food_drink;

$results_page .=  '</p></ul></li>
	</ol>
		<p><b>[Part 2 - Conclusions] </b></p>
	<ol>
	<p><li>Who did it?</p>
		<ul><p>';

$results_page .=  $who_guilty;

$results_page .=  '</p></ul></li>
	<p><li>Why did they do it?</p>
		<ul><p>';

$results_page .=  $why_motive;

$results_page .=  '</p></ul></li>
	<p><li>How did they do it?</p>
		<ul><p>';
$results_page .=  $how_committed;

$results_page .=  '</p></ul></li>
	</ol>
	<p></p>
	</td>
	</tr>
	</table>
  </div>';
  
$footer = '</body>
</html>';

?>