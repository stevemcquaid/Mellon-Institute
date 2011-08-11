<?php
interface ActivityInterface {
//  private $questionArray = array();
//  private $numberOfQuestions;

  //Constructor
  public function Activity();

  public function makeQuestion($problem, $answer, $marginOfError = null);

  public function getQuestion($index);

}//end of interface

?>
