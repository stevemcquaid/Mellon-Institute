<?php
interface QuestionInterface {
//  private $problem; //Required
//  private $answer; //Required
//  private $marginOfError; //Required

  public function Question($problem, $answer, $marginOfError = null);

  public function setMarginOfError ($marginOfError);

  //This is the function to check if correct and return the appropriate response
  public function getResponse($input);


  //public function isCorrect($input, $answer, $error);

}//end of interface

?>
