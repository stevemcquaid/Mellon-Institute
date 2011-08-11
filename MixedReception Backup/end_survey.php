<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<?php session_start();?>
<html>
  <head><title>Mixed Reception Survey</title>
  <link rel="stylesheet" href="common/survey.css">
  <script type = "text/javascript" language="JavaScript" src="common/validateForm.js"></script>

  </head>

  <body bgcolor="grey">
     <div align="center">
	 <table width="800" cellpadding="0" cellspacing="0" border="3" bgcolor="white" bordercolor="red">
 
	    <tr>
		<td>
		<br>
		<h1 align=center>Mixed Reception Final Case Report - Online Form</h1>
	    
			<!-- <p class="right"><a href="http://collective.chem.cmu.edu/MixedReception/game/FinalReport.pdf">Skip to the pdf form</a></p>  -->
		    <p class="bold">Please complete the final case report:</p>
     
			<!-- The survey questions -->
			<p class="bold">Instructions: Please rate whether or not you agree with the following statements.</p>
			
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
				$nextpage = "collect_end_survey.php?feedback=".$feedbackCategory."&ques1=".$question1."&cat=".$cat."&ques2=".$ques2."&cat2=".$cat2."&ques3=".$ques3;
			?>
			</p>
			</noscript>
			
			<form name="my_form" action="<?php echo $nextpage;?>" method="post" onsubmit="return validateEndForm()">
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
				<input type="checkbox" name="evidence10" value="Pills from Joanna's Office">Pills from Joanna's Office</p>
			
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
				window.document.write("<p>3. "+question1 + "<\/p>");
				
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
				var nextPage = "collect_end_survey.php?feedback="+ feedBackCategory + "&ques1=" + "&cat=" + cat + "&ques2=" + ques2 + "&cat2=" + cat2 + "&ques3=" + ques3;
				window.document.my_form.action=nextPage;
			-->
			</script>
			<noscript><p>
			<?php echo "3. " . $question1; ?>
			</noscript></p>
				
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

				window.document.write("<p>4. "+question2 + "<\/p>");				
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
				echo "4. " . $question2;
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
					window.document.write("<p>5. "+question3 + "<\/p>");
				-->
				</script>
				<!-- Use PHP to choose question 3 if Javascript disabled -->
				<noscript>
				<p>
				<?php 
				echo "5. " . $question3;
				?>
				</p>
				</noscript>
				
				<p class="satisfaction_button">&nbsp; 
				<input type = "radio" name = "satisfaction3" value = "Strongly disagree">Strongly disagree &nbsp; &nbsp; 
				<input type = "radio" name = "satisfaction3" value = "Slightly disagree">Slightly disagree &nbsp; &nbsp; 
				<input type = "radio" name = "satisfaction3" value = "Neutral">Neutral &nbsp; &nbsp; 
				<input type = "radio" name = "satisfaction3" value = "Slightly agree">Slightly agree &nbsp; &nbsp; 
				<input type = "radio" name = "satisfaction3" value = "Strongly agree">Strongly agree <br /></p>
				
				<p class="bold">Click the submit button to access a pdf for submission to teachers, if applicable.</p>
				<p class="center">
				<input type = "submit" value = "Submit">
				</p><br /> 
			</form>
			
	    </td>
	</tr>
	</table>
    </div>
  </body>
</html>