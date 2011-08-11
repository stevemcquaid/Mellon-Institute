<?php include_once('makeCookie.php'); $seed = makeCookie(); ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<?php include_once('ClassFiles/IncludeStructures.php'); ?>
<?php include_once('ActivityMaker1.php'); $newActivity = new ActivityMaker1($seed);?>


<html>
	<head>
		<title>Virtual Lab Server Communication</title>
		<link rel="stylesheet" type="text/css" href="style/layout.css">
    <script type='text/javascript' src='js/ajax.js'></script>
    <script type='text/javascript' src='js/jquery-1.6.2.min.js'></script>
	</head>
	<body>
	
		<div id="container">
			<form name="module4" action="final_results.php" method="post">
				<?php
          for($i=0; $i < $newActivity->getActivity()->numberOfQuestions; $i++) {
        ?>
        <div class="activity">
					<div class="question"><?php echo $newActivity->getActivity()->getQuestion($i)->problem;?></div>
					<input class="inputClass" type="text" onchange="MakeRequest(<?php echo $i ?>);" name="question" />
					<div class="results" style="visibility:hidden;">Enter Answer</div>
				</div>
        <?php }?>
				<input class="inputButton" type="button" value="Submit" onClick="check_form();">
			</form>
		</div><!-- end of container -->
	</body>
</html>
