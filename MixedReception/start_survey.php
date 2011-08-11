<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<?php session_start(); ?>
<html>
  <head><title>Mixed Reception Survey</title>
  <link rel="stylesheet" href="common/survey.css">
  <script type="text/javascript" language="JavaScript" src="common/validateForm.js"></script>
  </head>

  <body bgcolor="grey">
  <div align=center>
  <table width="600" cellpadding="0" cellspacing="0" border="1">
    <tr>
		<img src = "images/mr_image.jpg">
	</tr>
  </table>
  <table width="800" cellpadding="0" cellspacing="0" border="3" bgcolor="white" bordercolor="red">
	<tr>
    <td> 
		<noscript>
		<?php
		    /*Choose two out of four categories*/
			$category = rand(0,3);
			$category2 = rand(0,3);
			while($category2 == $category){
				$category2 = rand(0,3);
			}
			/*Choose the questions for the categories*/
			$ques1 = ($category==0)?rand(0,2):rand(0,1);
			$ques2 = ($category2==0)?rand(0,2):rand(0,1);
			/*Concatenate to get the Url for next page*/
			$nextpage = "collect_start_survey.php?cat1=".$category."&cat2=".$category2."&ques1=".$ques1."&ques2=".$ques2;
        ?>
		</noscript>
		
	    <!-- The survey questions -->
       <form name = "myform" action="<?php echo $nextpage?>" method="post" onSubmit="return validateStartForm();">
			 <p class="right"><a href="http://collective.chem.cmu.edu/MixedReception/game_survey/main.html">> Click to skip survey</a></p>
			<p class="bold">This website gets thousands of uses per month, please help up by completing a short survey of these three questions: </p>
		  
			<!-- Question 1 -->
			<!-- Print out error message -->
			<?php if($_GET['err1']){ ?>
				<p class="centerBold">Please fill out this question!</p>
			<?php ;}?>
		  
			<p>1. Are you currently in a science class? (Please check one)<br /> &nbsp; &nbsp;  &nbsp;
            <input type = "radio" name = "class" value = "1">Middle School Science<br /> &nbsp; &nbsp; &nbsp;
            <input type = "radio" name = "class" value = "2">High School Chemisty<br /> &nbsp; &nbsp; &nbsp;
            <input type = "radio" name = "class" value = "3">High School Forensics<br /> &nbsp; &nbsp; &nbsp;
            <input type = "radio" name = "class" value = "4">College Chemistry<br /> &nbsp; &nbsp; &nbsp;
            <input type = "radio" name = "class" value = "5">None of the Above</p>
		
			<!-- Question 2 -->
			<!-- Print out error message 
			<?php if($_GET['err2']){ ?>
				<p class="centerBold">Please fill out this question!</p>
			<?php ;}?>
        
			<p>2. Are you doing this activity for your class?<br />
            <input type = "radio" name = "isForClass" value ="Yes">Yes
            <input type = "radio" name = "isForClass" value ="No">No<br /></p>   -->
			
			<p class="bold">Instructions: Please rate whether or not you agree with the following statements.</p>
			
			<!-- Question 3 -->
			<!-- Print out error message -->
			<?php if($_GET['err3']){ ?>
				<p class="centerBold">Please fill out this question!</p>
		    <?php ;}?>
			
			<!--Use either Javascript if it is turned on or PHP if Javascript is disabled to choose the question--> 
			<script type="text/javascript">
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
      
				/*Choose which of the 4 questions in the list to be asked*/
				var category = Math.floor(Math.random()*4);
				var category2 = Math.floor(Math.random()*4);
				while(category2 == category){
					category2 = Math.floor(Math.random()*4);
				}
				var ques1 = (category==0)?Math.floor(Math.random()*3):Math.floor(Math.random()*2);
				var ques2 = (category2==0)?Math.floor(Math.random()*3):Math.floor(Math.random()*2);
				var question = questions[category][ques1];
				var question2 = questions[category2][ques2];
				var nextPage = "collect_start_survey.php?cat1=" + category +"&cat2=" + category2 +"&ques1=" + ques1 + "&ques2=" + ques2;
				/*Set the next page carrying the categories information*/
				window.document.myform.action=nextPage;
				/*Display the questions*/
                window.document.write("<p>2. " + question + "<\/p>");
            -->
            </script>
			<!-- Resort to PHP if javascript disabled -->
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
				$question = $questions[$category][$ques1];
				$question2 = $questions[$category2][$ques2];
				echo "3. " . $question;
			?>
			</p>
			</noscript>
							
			<p class="satisfaction_button"> &nbsp;
			<input type = "radio" name = "satisfaction" value = "Strongly disagree">Strongly disagree &nbsp; &nbsp;
			<input type = "radio" name = "satisfaction" value = "Slightly disagree">Slightly disagree &nbsp; &nbsp;
			<input type = "radio" name = "satisfaction" value = "Neutral">Neutral &nbsp; &nbsp;
			<input type = "radio" name = "satisfaction" value = "Slightly agree">Slightly agree &nbsp; &nbsp;
			<input type = "radio" name = "satisfaction" value = "Strongly agree">Strongly agree <br />
			</p>
			
			<!-- Question 4 -->
			<!-- Print out error message -->
			<?php if($_GET['err4']){ ?>
				<p class="centerBold">Please fill out this question!</p>
		    <?php ;}?>
			
			<script type = "text/javascript">
			<!--
				window.document.write("<p>3. " + question2 + "<\/p>");
			-->
			</script>
			<noscript><p>
			<?php echo "4. " . $question2;
			?>
			</p>
			</noscript>
			
			<p class="satisfaction_button"> &nbsp;
			<input type = "radio" name = "satisfaction2" value = "Strongly disagree">Strongly disagree &nbsp; &nbsp;
			<input type = "radio" name = "satisfaction2" value = "Slightly disagree">Slightly disagree &nbsp; &nbsp;
			<input type = "radio" name = "satisfaction2" value = "Neutral">Neutral &nbsp; &nbsp;
			<input type = "radio" name = "satisfaction2" value = "Slightly agree">Slightly agree  &nbsp; &nbsp;
			<input type = "radio" name = "satisfaction2" value = "Strongly agree">Strongly agree <br />
			</p>
			
			<p class="center"><input type = "submit" value = "Continue to Activity"></p><br />
       </form>
        
       </td>
       </tr>
       </table>
     </div>      
  </body>
</html>