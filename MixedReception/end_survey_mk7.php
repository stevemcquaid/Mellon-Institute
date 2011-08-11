<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<?php session_start(); ?>
<html>
  <head><title>Mixed Reception Survey</title>
  <link rel="stylesheet" href="common/survey.css">
  <script type = "text/javascript" language="JavaScript" src="common/validateForm.js"></script>
  <script type = "text/javascript" language="JavaScript" src="common/unfilledValidator.js"></script>
  </head>

  <body bgcolor="grey">
  <div align="center">
  
  <table width="851" cellpadding="0" bgcolor="white" cellspacing="0" border="1">
     <!--
			<tr>
			<td class="mixed"><img src="images/banner.jpg" alt="Mixed Reception"></td></tr>  -->
	<tbody>
	<tr>
		<td>
		<!-- THIS IS NEW LOCATION OF THE FORM -->
		<?php $nextpage = "StepTwo.php"; ?>
		<form name="my_form" action="<?php echo $nextpage;?>" method="post" onsubmit="return validateEndForm();processAllFieldsForEmptyCheck(my_form); "> 

		<br>
		<h1 align=center>Mixed Reception: Case Report - Online Form</h1>

		<p>Please complete the final case report below. You must fill out all of the 
		       sections to solve the case.  Please be as descriptive as possible, using complete 
		       sentences, and proper grammar.  When you are finished filling out the report, 
			   click the 'submit' button for a printable form or to email to your teacher.</p>
     
     		<!-- Final Case Report Questions  -->
     		
    <table cellpadding="3" cellspacing="3" border="0" align="center">
		<tr>
			
 	 		<?php $num = 13;
			$getName = 'cqErr' . $num;
			$cqErr = $_GET[$getName];
			if($cqErr){ ?> <p class="centerBold">Please enter your name!</p> <?php ;} ?>
			<p id="student_name_holder"></p>
			<td class="mixed"><b>Name:</b></td>
			<td><input name="student_name" value="<?php echo $_SESSION['student_name']; ?>" size="30"></td>
			<td class="mixed"><b>&nbsp;&nbsp;&nbsp;&nbsp;Teacher's name:</b>
			<td><input name="instructor" value="<?php echo $_SESSION['instructor']; ?>" size="20"></td>
		</tr>
		</table>
		
	<p></p>
	<br>
	<p><b>[Part 1 - Evidence] </b></p>
	<ol>
		<p id="what_unknown_sub_holder"></p>
		<?php $num = 0;
		$getName = 'cqErr' . $num;
		$cqErr = $_GET[$getName];
		if($cqErr){ ?> <p class="centerBold">Please fill out this question!</p> <?php ;} ?>
		
		<li>
			An unknown substance was present in Nelson&#39;s blood.  What is this substance and how did it get into his blood?
			<p></p>
			<ul><textarea name="what_unknown_sub" rows="4" cols="73"><?php echo $_SESSION['what_unknown_sub']; ?></textarea></ul>
		</li><br>
		<p id="mw_drug_holder"></p>
		<?php $num = 1;
		$getName = 'cqErr' . $num;
		$cqErr = $_GET[$getName];
		if($cqErr){ ?> <p class="centerBold">Please fill out this question!</p> <?php ;} ?>
		
		<li>
			What is the molar mass (molecular weight) of the allergy drug? &nbsp;
			<p></p>
			<ul><input name="mw_drug" value = "<?php echo $_SESSION['mw_drug']; ?>"size="8"/> g/mol.</ul>
		</li><br>
		<p id="mw_anti_venom_holder"></p>
		<?php $num = 2;
		$getName = 'cqErr' . $num;
		$cqErr = $_GET[$getName];
		if($cqErr){ ?> <p class="centerBold">Please fill out this question!</p> <?php ;} ?>
		
    <li>
			What is the molar mass (molecular weight) of the anti-venom?  &nbsp;
			<p></p>
 	 		<ul><input name="mw_anti_venom" value="<?php echo $_SESSION['mw_anti_venom']; ?>" size="8"/> g/mol.</ul>
 	 	</li><br>
 	 	<p id="unknown_sub_mass_why_holder"></p>
 	  <?php $num = 3;
		$getName = 'cqErr' . $num;
		$cqErr = $_GET[$getName];
		if($cqErr){ ?> <p class="centerBold">Please fill out this question!</p> <?php ;} ?>
		
  	<li>
  		The molar mass (molecular weight) of the unknown substance in Nelson&#39;s blood is 765.82. Why?
 	 		<p></p>
 	 		<ul><textarea name="unknown_sub_mass_why" rows="4" cols="73"><?php echo $_SESSION['$unknown_sub_mass_why']; ?></textarea></ul>
 	 	</li><br>
 	 	<p id="whypeanut_killed_holder"></p>
 	 	<?php $num = 4;
		$getName = 'cqErr' . $num;
		$cqErr = $_GET[$getName];
		if($cqErr){ ?> <p class="centerBold">Please fill out this question!</p> <?php ;} ?>
		
		<li>
			The coroner&#39;s report indicates that Nelson died from an allergic reaction, yet he was taking a drug for this. Can you explain why he would still die from peanuts?
			<p></p>
			<ul><textarea name="whypeanut_killed" rows="4" cols="73"><?php echo $_SESSION['whypeanut_killed']; ?></textarea></ul>
		</li><br>
		<p id="take_medicine_holder"></p>
		<?php $num = 5;
		$getName = 'cqErr' . $num;
		$cqErr = $_GET[$getName];
		if($cqErr){ ?> <p class="centerBold">Please fill out this question!</p> <?php ;} ?>
		
		<li>
			Did Nelson take his medication that day?  Was the correct concentration of medication present in his blood?
			<p></p>
			<ul><textarea name="take_medicine" rows="4" cols="73"><?php echo $_SESSION['take_medicine']; ?></textarea></ul>
		</li><br>
		<p id="sam_abstract_holder"></p>
		<?php $num = 6;
		$getName = 'cqErr' . $num;
		$cqErr = $_GET[$getName];
		if($cqErr){ ?> <p class="centerBold">Please fill out this question!</p> <?php ;} ?>
		
		<li>
			You found an abstract on Sam&#39;s desk. Is this evidence relevant to your solution? Why or why not?
			<ul><textarea name="sam_abstract" rows="4" cols="73"><?php echo $_SESSION['sam_abstract']; ?></textarea></ul>
		</li><br>
		<p id="joanna_pills_holder"></p>
		<?php $num = 7;
		$getName = 'cqErr' . $num;
		$cqErr = $_GET[$getName];
		if($cqErr){ ?> <p class="centerBold">Please fill out this question!</p> <?php ;} ?>
		
		<li>
			There were pills found in Joanna&#39;s office. Is this evidence relevant to your solution? Why or why not?
			<p></p>
			<ul><textarea name="joanna_pills" rows="4" cols="73"><?php echo $_SESSION['joanna_pills']; ?></textarea></ul>
		</li><br>
		<p id="joanna_emails_holder"></p>
		<?php $num = 8;
		$getName = 'cqErr' . $num;
		$cqErr = $_GET[$getName];
		if($cqErr){ ?> <p class="centerBold">Please fill out this question!</p> <?php ;} ?>
		
		<li>
			Are Joanna&#39;s emails important evidence in support of your solution?
			<p></p>
			<ul><textarea name="joanna_emails" rows="4" cols="73"><?php echo $_SESSION['joanna_emails']; ?></textarea></ul>
		</li><br>
		<p id="food_drink_holder"></p>
		<?php $num = 9;
		$getName = 'cqErr' . $num;
		$cqErr = $_GET[$getName];
		if($cqErr){ ?> <p class="centerBold">Please fill out this question!</p> <?php ;} ?>
		
		<li>
			Was any of the food or drink left at the crime-scence important evidence for your case? Why or why not?
			<p></p>
			<ul><textarea name="food_drink" rows="4" cols="73"><?php echo $_SESSION['food_drink']; ?></textarea></ul>
		</li><br>
		<p></p>
	</ol>
	
	<p></p>
	<p><b>[Part 2 - Conclusions] </b></p>
	<ol>
	<p id="who_guilty_holder"></p>
	<?php $num = 10;
		$getName = 'cqErr' . $num;
		$cqErr = $_GET[$getName];
		if($cqErr){ ?> <p class="centerBold">Please fill out this question!</p> <?php ;} ?>
	
	<li>
		Who did it?
		<p></p>
		<ul><textarea name="who_guilty" rows="4" cols="73"><?php echo $_SESSION['who_guilty']; ?></textarea></ul>
	</li><br>
	<p id="why_motive_holder"></p>
	<?php $num = 11;
		$getName = 'cqErr' . $num;
		$cqErr = $_GET[$getName];
		if($cqErr){ ?> <p class="centerBold">Please fill out this question!</p> <?php ;} ?>
	
	<li>
		Why did they do it?
		<p></p>
		<ul><textarea name="why_motive" rows="4" cols="73"><?php echo $_SESSION['why_motive']; ?></textarea></ul>
	</li><br>
	<p id="how_committed_holder"></p>
	<?php $num = 12;
		$getName = 'cqErr' . $num;
		$cqErr = $_GET[$getName];
		if($cqErr){ ?> <p class="centerBold">Please fill out this question!</p> <?php ;} ?>
	
	<li>
		How did they do it?
		<p></p>
		<ul><textarea name="how_committed" rows="4" cols="73"><?php echo $_SESSION['how_committed']; ?></textarea></ul>
	</li><br>
  </ol>
	<p><b>[Part 3 - Quick Survey Questions - To help us improve the activity] </b></p>
			<ul>
			<!-- The survey questions -->
			<p class="bold">Please rate whether or not you agree with the following statements.</p>
			
			<?php
				if(!isset($_SESSION['category1'])) $_SESSION['category1'] = rand(0,3);
				if(!isset($_SESSION['category2'])) $_SESSION['category2'] = rand(0,3);
			?>
			
			<!-- Question 1 -->
			<!-- Print error message if Question1 is not filled -->
			<?php if($_GET['err1']){ ?>
				<p class="centerBold">Please fill out this question!</p>
		    <?php ;}?>
							
		    <!-- Resort to PHP to choose question 1 if JavaScript is disabled -->
			<noscript>
			<p>
			<?php 
				$questions1[0] = "To what extent did this activity help to increase your knowledge of the types of work performed in the field of chemistry?";
				$questions1[1] = "To what extent did this activity affect your view of the usefulness of chemistry as a field in general?";
				$questions1[2] = "To what extent did this activity affect your view of the usefulness of chemistry in solving significant real-world problems?";
				$questions1[3] = "To what extent did this activity affect your view of the usefulness of chemistry in solving everyday problems?";
				
				/*Get the category from start_survey*/
				$feedbackCategory = rand(0,3);
				$question1 = $questions1[$feedbackCategory];
				$num = rand(0,1);
				$prevCat1 = $_SESSION['category1'];
				$prevCat2 = $_SESSION['category2'];
				$cat = ($num == 0)?$prevCat1:$prevCat2;
				
				$cat2 = rand(0,3);
				while($cat2 == $prevCat1 || $cat2 == $prevCat2){
					$cat2 = rand(0,3);
				}
				
				$ques2 = ($cat==0)?rand(0,2):rand(0,1);
				$ques3 = ($cat2==0)?rand(0,2):rand(0,1);
				$nextpage = "StepTwo.php?feedback=".$feedbackCategory."&ques1=".$question1."&cat=".$cat."&ques2=".$ques2."&cat2=".$cat2."&ques3=".$ques3;
			?>
			</p>
      </noscript>

			<!--   Don't need to include these two questions as the post activity survey now includes evidence question...
				<p>1. Based upon the evidence collected, who was responsible for Nelson's death? (Select all that apply)</p>
				<p class="satisfaction_button"> &nbsp; &nbsp; 
				<input type="checkbox" name="murderer1" value="Dr.Yevin">Dr.Yevin<br /> &nbsp; &nbsp; 
				<input type="checkbox" name="murderer2" value="Sam">Sam<br /> &nbsp; &nbsp; 
				<input type="checkbox" name="murderer3" value="Joanna">Joanna<br /> &nbsp; &nbsp; 
				<input type="checkbox" name="murderer4" value="Vince">Vince<br /> &nbsp; &nbsp; 
				<input type="checkbox" name="murderer5" value="Nelson">Nelson</p>
				
				<p>2. Please select the evidence that you used to come to the above conclusion: (Select all that apply)</p>
				<p class="satisfaction_button">&nbsp; &nbsp; 
				<input type="checkbox" name="evidence1" value="Allergy Drug Information Sheet">Allergy Drug Information Sheet<br /> &nbsp; &nbsp; 
				<input type="checkbox" name="evidence2" value="Joanna's Emails">Joanna's Emails<br /> &nbsp; &nbsp; 
				<input type="checkbox" name="evidence3" value="Sam's Paper on the Anti-Toxin">Sam's Paper on the Anti-Toxin<br /> &nbsp; &nbsp; 
				<input type="checkbox" name="evidence4" value="Punch">Punch<br /> &nbsp; &nbsp; 
				<input type="checkbox" name="evidence5" value="Coroner's Report">Coroner's Report<br /> &nbsp; &nbsp; 
				<input type="checkbox" name="evidence6" value="Nelson's Journal">Nelson's Journal<br /> &nbsp; &nbsp; 
				<input type="checkbox" name="evidence7" value="Peanuts">Peanuts<br /> &nbsp; &nbsp; 
				<input type="checkbox" name="evidence8" value="Peanut Pie">Peanut Pie<br /> &nbsp; &nbsp; 
				<input type="checkbox" name="evidence9" value="Nelson's Allergy Pills">Nelson's Allergy Pills<br /> &nbsp; &nbsp; 
				<input type="checkbox" name="evidence10" value="Pills from Joanna's Office">Pills from Joanna's Office</p>-->
			
			<!-- Choose question 1 -->
			<script type = "text/javascript">
			<!--
				var questions1 = new Array();
				questions1[0] = "To what extent did this activity help to increase your knowledge of the types of work performed in the field of chemistry?";
				questions1[1] = "To what extent did this activity affect your view of the usefulness of chemistry as a field in general?";
				questions1[2] = "To what extent did this activity affect your view of the usefulness of chemistry in solving significant real-world problems?";
				questions1[3] = "To what extent did this activity affect your view of the usefulness of chemistry in solving everyday problems?";
				
				var feedBackCategory = Math.floor(Math.random()*4);
				var question1 = questions1[feedBackCategory];
				window.document.write("<p>1. "+question1 + "<\/p>");
				
				var prevCat1 = <?php echo $_SESSION['category1']; ?>;
				var prevCat2 = <?php echo $_SESSION['category2']; ?>;
				
				var num = Math.floor(Math.random()*2);
				var cat = (num==0)?prevCat1:prevCat2;
				
				var cat2 = Math.floor(Math.random()*4);
				while(cat2 == prevCat1 || cat2 == prevCat2){
					cat2 = Math.floor(Math.random()*4);
				}
				
				var ques2 = (cat==0)?Math.floor(Math.random()*3):Math.floor(Math.random()*2);
				var ques3 = (cat2==0)?Math.floor(Math.random()*3):Math.floor(Math.random()*2);
				
				/*Concatenate the url for next page*/
				var nextPage = "StepTwo.php?feedback="+ feedBackCategory + "&ques1=" + "&cat=" + cat + "&ques2=" + ques2 + "&cat2=" + cat2 + "&ques3=" + ques3;
				window.document.my_form.action=nextPage;
			-->
			</script>
			<noscript><p>
			<?php echo "1. " . $question1; ?>
			</p></noscript>
				
				<p class="satisfaction_button">&nbsp;
				<input type = "radio" name = "satisfaction" value = "Not at all">Not at all &nbsp; &nbsp;
				<input type = "radio" name = "satisfaction" value = "Very little">Very little &nbsp; &nbsp; 
				<input type = "radio" name = "satisfaction" value = "Somewhat">Somewhat  &nbsp; &nbsp;
				<input type = "radio" name = "satisfaction" value = "A lot">A lot
				</p>
				
				<!-- Question 2 -->
				<!-- Print error message if Question 2 is not filled -->
				<?php if($_GET['err2']){ ?>
				<p class="centerBold">Please fill out this question!</p>
				<?php ;}?>
				
				<!-- Choose question 2 and 3 -->
				<script type = "text/javascript">
				<!--
				var questions = new Array();
				questions[0] = new Array("In chemistry class, my goal is to learn as much as possible.", 
										"In chemistry class, my goal is to perform better than other students.", 
										"In chemistry class, my aim is to avoid doing worse than other students.");
				questions[1] = new Array("I am good at chemistry.", "I like chemistry.");
				questions[2] = new Array("I plan on becoming a scientist.", 
										"If given a choice, I would not study chemistry.");
				questions[3] = new Array("Chemistry is useful for everyday problems.", 
										"Learning chemistry is mostly memorization.");

				
				var question2 = questions[cat][ques2];
				var question3 = questions[cat2][ques3];

				window.document.write("<p>2. "+question2 + "<\/p>");				
				// -->
				</script>
				
		        <!-- Use PHP to choose question 2 if Javascript disabled -->
				<noscript>
				<p>
				<?php 
				$questions[0][0] = "In chemistry class, my goal is to learn as much as possible.";
				$questions[0][1] = "In chemistry class, my goal is to perform better than other students.";
				$questions[0][2] = "In chemistry class, my aim is to avoid doing worse than other students.";
				$questions[1][0] = "I am good at chemistry.";
				$questions[1][1] = "I like chemistry.";
				$questions[2][0] = "I plan on becoming a scientist.";
				$questions[2][1] = "If given a choice, I would not study chemistry.";
				$questions[3][0] = "Chemistry is useful for everyday problems.";
				$questions[3][1] = "Learning chemistry is mostly memorization.";
				
				/*Choose which of the 4 questions in the list to be asked*/
				$question2 = $questions[$cat][$ques2];
				$question3 = $questions[$cat2][$ques3];
				echo "2. " . $question2;
				?>
				</p>
				</noscript>
				
				<p class="satisfaction_button"> &nbsp; 
				<input type = "radio" name = "satisfaction2" value = "Strongly disagree">Strongly disagree &nbsp; &nbsp;
				<input type = "radio" name = "satisfaction2" value = "Slightly disagree">Slightly disagree &nbsp; &nbsp;
				<input type = "radio" name = "satisfaction2" value = "Neutral">Neutral &nbsp; &nbsp;
				<input type = "radio" name = "satisfaction2" value = "Slightly agree">Slightly agree &nbsp; &nbsp;
				<input type = "radio" name = "satisfaction2" value = "Strongly agree">Strongly agree <br /></p>
				
				<!-- Question 3 -->
				<!-- Print error message if Question 3 is not filled -->
				<?php if($_GET['err3']){ ?>
				<p class="centerBold">Please fill out this question!</p>
				<?php ;}?>
				
				<script type = "text/javascript">
				<!--
					window.document.write("<p>3. "+question3 + "<\/p>");
				-->
				</script>
				<!-- Use PHP to choose question 3 if Javascript disabled -->
				<noscript>
				<p>
				<?php 
				echo "3. " . $question3;
				?>
				</p>
				</noscript>
				
				<p class="satisfaction_button">&nbsp; 
				<input type = "radio" name = "satisfaction3" value = "Strongly disagree">Strongly disagree &nbsp; &nbsp; 
				<input type = "radio" name = "satisfaction3" value = "Slightly disagree">Slightly disagree &nbsp; &nbsp; 
				<input type = "radio" name = "satisfaction3" value = "Neutral">Neutral &nbsp; &nbsp; 
				<input type = "radio" name = "satisfaction3" value = "Slightly agree">Slightly agree &nbsp; &nbsp; 
				<input type = "radio" name = "satisfaction3" value = "Strongly agree">Strongly agree <br /></p>
				
				<!--  Include either option to submit or email to teacher -->
				</ul>
				<p><b>[Part 4 - Submit Your Report] </b></p>     
				<ul>
					<p class="bold"><b>Click the submit button below for either a printable form of your answers, 
					or you may enter your teacher&#39;s email address to have your answers 
					emailed directly to your classroom instructor.</b></p>
					
					<!--please set up form here with choice for printable form or to enter teachers email address
					the form does not need to include the survey questions.
					-->
					
					<!-- END TEACHER EMAIL ADDITION-->
					<!-- <input type = "submit" value = "Submit"> -->
					<div style="clear:both; margin-top: 35px;">
						<div style="width: 75%; margin: auto;height: 10em;">
							<div style="margin-bottom:5px;float: left; width: 50%;text-align:center;">
							To minimize spam, please enter the words:
								<?php
			          require_once('captcha_lib.php');
			          $publickey = "6LfqRMUSAAAAAMsWRl63xNHea0e-lu6KZgCr8qpF"; // you got this from the signup page
			          echo recaptcha_get_html($publickey);
			          ?>
			        </div>
			        <div style="float:right; width:35%;margin-top:2em;text-align:center;">
								<div>Teacher's Email Address:</div>
								<input name="teacher_email" value = "<?php echo $_SESSION['teacher_email']; ?>" size="30"/>
							</div>
						</div>
					</div>
					</br>
					<div style="padding-top: 10px; margin:auto; text-align:center;">
						<input type="submit" value = "Submit" onclick="processAllFieldsForEmptyCheck(my_form);" >
					</div>
					<br> 
				</ul>
    </form>
			
	</td>
	</tr>
	</tbody>
	</table>
  </div>
  </body>
</html>