<?php

  include_once('ClassFiles/IncludeStructures.php');
  include_once('ActivityMaker1.php');

  $input = $_GET['input'];
  $question = $_GET['question'];
  
  $seed = $_COOKIE['Alohomora']; //TESTING
  //echo $seed;
  
  /* @var $activityHolder <Activity> */
  $newActivity = new ActivityMaker1($_COOKIE['Alohomora']);
  
  //echo $newActivity->getActivity()->getQuestion($question)->getAnswer($input);

  $response = $newActivity->getActivity()->getQuestion($question)->getResponse($input);
  echo $response;
?>