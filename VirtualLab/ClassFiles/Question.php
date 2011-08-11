<?php

class Question implements QuestionInterface {
	public $problem; //Required
	private $answer; //Required
  private $marginOfError = .1; //Default margin of error
	
  //Response constants
	public $No_Answer_Response = 'You did not enter an answer, Please enter your answer';
  public $Correct_Answer_Response = 'Congratulations! You are correct!';
  public $WrongMarginOfError = 'You are close but have the wrong margin of error';
  public $Wrong_Answer_Response = 'You are incorrect';
  //public $Wrong_Sig_Figs = 'You are close but used the incorrect number of significant figures'; //Not yet implemented

	public function Question($problem, $answer, $marginOfError = null) {
    if ($marginOfError != null) {$this->marginOfError = $marginOfError;}
    $this->problem = $problem;
    $this->answer = $answer;

    //Not sure if this is needed
	}

  public function setMarginOfError ($marginOfError) {
    $this->marginOfError = $marginOfError;
  }

	public function getResponse($input) {
		$response = $this->Wrong_Answer_Response;

    //No Answer Given
    if (!isset($input)) {
			return $this->No_Answer_Response;
		}

    //Correct Answer
    if ($this->isCorrect($input, $this->getAnswer(), $this->getMarginOfError())) {
      return $this->Correct_Answer_Response;
    }

    //Almost Correct
    if ($this->isCorrect($input, $this->getAnswer(), ($this->getMarginOfError() * 10) )) {
      return $this->WrongMarginOfError;
    }

    //Insert other checkers here

    return $response;
	}

  //Helper fns

	//This should not be used, but is included as a hack if you need the answer in javascript.
	public function getAnswer() { return $this->answer; }
  
	private function isCorrect($input, $answer, $error) {
		return (abs($input - $answer) <= $error);
	}
	//Need global var
	private function getMarginOfError() {
		return $this->marginOfError;
	}

}

?>
