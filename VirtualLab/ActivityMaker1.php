<?php

class ActivityMaker1 {
  public $key; //THIS IS THE KEY TO TIEING EVERYTHING TOGETHER!
  //This key can be a random number itself.

  private $activityHolder = NULL; //This is a reference to the actual activity
  public $error = .1;

  public function ActivityMaker1($seed) {
    //assumes seed already given and set in cookie
    //setSeed
    $this->key = (int)substr(preg_replace ( '#\D*?(\d*(\.\d+)?)\D*#', '$1', $seed ), 0, 7);

    $this->activityHolder = new Activity();
    $this->addQuestions();
  }

  public function getActivity() {return $this->activityHolder;}

  public function makeQuestion1() {
    //Every function that has a random number, must seed itself with the $key
    srand($this->key);
    //You can choose the bounds of the random number
    $random = rand(1,10) *2;

    $instanceVar= $random;

    $problem = 'What is ' . $instanceVar . ' + ' . $instanceVar/2 . ' ?';

    $answer = $instanceVar + $instanceVar/2;
    $this->activityHolder->makeQuestion($problem, $answer, $this->error);
    return true;
  }

  public function makeQuestion2() {
    //Every function that has a random number, must seed itself with the $key
    srand($this->key);
    //You can choose the bounds of the random number
    $random = rand(1,5);

    $instanceVar= $random;

    $problem = 'What is ' . $instanceVar . ' + ' . $instanceVar*3 . ' ?';

    $answer = $instanceVar + $instanceVar*3;

    $this->activityHolder->makeQuestion($problem, $answer, $this->error);
    return true;
  }

  public function makeQuestion3() {
    //Every function that has a random number, must seed itself with the $key
    srand($this->key);
    //You can choose the bounds of the random number
    $random = rand(1,10);
    $MOE = .01;
    $instanceVar= $random;
    $multiplier = 4;
    $substance = 'sodium chloride, NaCl';

    $problem = 'What is the concentration of a solution in grams/Liter when ' . $instanceVar*$multiplier . ' grams of ' . $substance . ', is dissolved in ' . $instanceVar .' liters of solution? (MarginOfError for this question= ' . $MOE . ")";

    $answer = ($instanceVar * $multiplier) / $instanceVar;

    $this->activityHolder->makeQuestion($problem, $answer, $this->error);

    $this->activityHolder->getQuestion($this->activityHolder->numberOfQuestions -1)->setMarginOfError($MOE); //You can override margin of error in individual problems, optionally
    
    return true;

  }

  //Helper functions
  public function addQuestions() {
    $this->makeQuestion1();
    $this->makeQuestion2();
    $this->makeQuestion3();
  }

  public function getkey() {
    return $this->key;
  }

}//end of class ActivityMaker1


//This makes a new "ActivityMaker1", which contains a reference to the actual activity
//$newActivity = new ActivityMaker1();
?>
