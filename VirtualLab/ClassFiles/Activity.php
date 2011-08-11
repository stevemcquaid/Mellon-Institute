<?php

class Activity implements ActivityInterface{
  private $questionArray = array();
  public $numberOfQuestions = 0;

  //Constructor
  public function Activity() {
  }
  
  public function makeQuestion($problem, $answer, $marginOfError = null) {
    $theNewQuestion = new Question($problem, $answer, $marginOfError);
    $numberOfQuestions = $this->numberOfQuestions;
    $this->questionArray[$numberOfQuestions] = $theNewQuestion;
    $this->numberOfQuestions++;
    return $theNewQuestion;
  }

  public function getQuestion($index) {
    return $this->questionArray[$index];
  }
  
} //end of class
?>
