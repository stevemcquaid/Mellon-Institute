<?php

//Start Survey Questions
/* **Commented out becuase we are logging twice @start & @end, not once at end.
//To understand reasoning for the shift of index, see the start survey.php file.
$category1 = $_SESSION['category1'];
$ques1 = $_SESSION['ques1'] + 1;
$category2 = $_SESSION['category2'];
$ques2 = $_SESSION['ques2'] + 1;
*/

// End Survey Questions
$category3 = $_GET['cat'];
$ques3 = $_GET['ques2'] + 1;

//To understand reasoning for the shift of index, see the end survey.php file.
$category4 = $_GET['cat2'];
$ques4 = $_GET['ques3'] + 1;

$feedback = $_GET['feedback'] + 1;


/* -- Putting in array -- */
/*
$num=null;$value=null; //this hopeuflly clears the vars
$value = $_SESSION['class'];
if ($value != null) {$tempArray['class'] = $value;}
*/

// Survey Questions
/* **Commented out becuase we are logging twice @start & @end, not once at end.
$num = 10 * $category1;
$num += $ques1;
$value = $_SESSION['satisfaction'];
$tempArray[$num] = $value;
$num=null;$value=null; //this hopeuflly clears the vars

$num = 10 * $category2;
$num += $ques2;
$value = $_SESSION['satisfaction2'];
$tempArray[$num] = $value;
$num=null;$value=null; //this hopeuflly clears the vars
*/

//Questions
$num = 10 * $category3;
$num += $ques3;
$value = $_POST['satisfaction2'];
$tempArray[$num] = $value;

$num=null;$value=null;

$num = 10 * $category4;
$num += $ques4;
$value = $_POST['satisfaction3'];
$tempArray[$num] = $value;

$num=null;$value=null;

$num = 40 + $feedback;
$value = $_POST['satisfaction'];
$tempArray[$num] = $value;


foreach($tempArray as $questionCode => $value ) {
	switch ($questionCode) {
		/*
case "class";
			$num = 0;
			break;
*/
    case 00+1;
    	$num = 1;
    	break;
    case 01+1;
    	$num = 2;
    	break;
    case 02+1;
    	$num = 3;
    	break;
    case 10+1;
    	$num = 4;
    	break;
    case 11+1;
    	$num = 5;
    	break;
    case 20+1;
    	$num = 6;
    	break;
    case 21+1;
    	$num = 7;
    	break;
    case 30+1;
    	$num = 8;
    	break;
    case 31+1;
    	$num = 9;
    	break;
    case 40+1;
    	$num = 10;
    	break;
    case 41+1;
    	$num = 11;
    	break;
		case 42+1;
    	$num = 12;
    	break;
    case 43+1;
    	$num = 13;
    	break;
    default;
    	$num = -1;
    break;
  }
	
	//Only store item in log if it is valid (a known question) and has a result.
  if (($num != -1) && ($value != null)) {
  	/*
echo "(" . $questionCode . ", " . $value . ")
";
*/
  	$sqArray[$num]= $value;
/*   	echo "SUCCESS!"; */
  }
  else {
/*   	echo "(Num=" . $num . ", " . $questionCode . ", " . $value . ")"; */
  }
}
$tempArray = null;



/*
Question0 = "Are you currently in a science class?";"
Question1 = "In chemistry class, my goal is to learn as much as possible.";
Question2 = "In chemistry class, my goal is to perform better than other students.";
Question3 = "In chemistry class, my aim is to avoid doing worse than other students.";
Question4 = "I am good at chemistry.";
Question5 = "I like chemistry.";
Question6 = "I plan on becoming a scientist.";
Question7 = "If given a choice, I would not study chemistry.";
Question8 = "Chemistry is useful for everyday problems.";
Question9 = "Learning chemistry is mostly memorization.";
Question10 = "To what extent did this activity help to increase your knowledge of the types of work performed in the field of chemistry?";
Question11 = "To what extent did this activity affect your view of the usefulness of chemistry as a field in general?";
Question12 = "To what extent did this activity affect your view of the usefulness of chemistry in solving significant real-world problems?";
Question13 = "To what extent did this activity affect your view of the usefulness of chemistry in solving everyday problems?";
*/



/*
	//Question Key
$sqArray num=0: "Are you currently in a science class?"
		//Response Keys
$sqArray value:1 "Middle school science";
$sqArray value:2 "High School chemistry";
$sqArray value:3 "High School Forensics";
$sqArray value:4 "College Chemistry";
$sqArray value:5 "None of the Above";
	//Question Keys
$sqArray num=1: "In chemistry class, my goal is to learn as much as possible.";
$sqArray num=2: "In chemistry class, my goal is to perform better than other students.";
$sqArray num=3: "In chemistry class, my aim is to avoid doing worse than other students.";
$sqArray num=4: "I am good at chemistry.";
$sqArray num=5: "I like chemistry.";
$sqArray num=6: "I plan on becoming a scientist.";
$sqArray num=7: "If given a choice, I would not study chemistry.";
$sqArray num=8: "Chemistry is useful for everyday problems.";
$sqArray num=9: "Learning chemistry is mostly memorization.";
		//Response Keys
$sqArray value: "Strongly disagree"
$sqArray value: "Slightly disagree"
$sqArray value: "Neutral"
$sqArray value: "Slightly agree"
$sqArray value: "Strongly agree"
	//Question Keys
$sqArray num=10: "To what extent did this activity help to increase your knowledge of the types of work performed in the field of chemistry?";
$sqArray num=11: "To what extent did this activity affect your view of the usefulness of chemistry as a field in general?";
$sqArray num=12: "To what extent did this activity affect your view of the usefulness of chemistry in solving significant real-world problems?";
$sqArray num=13: "To what extent did this activity affect your view of the usefulness of chemistry in solving everyday problems?";
		//Response Keys
$sqArray value: "Not at all"
$sqArray value: "Very little"
$sqArray value: "Somewhat"
$sqArray value: "A lot"
*/

/*
$questions[0][0] = "In chemistry class, my goal is to learn as much as possible.";
$questions[0][1] = "In chemistry class, my goal is to perform better than other students.";
$questions[0][2] = "In chemistry class, my aim is to avoid doing worse than other students.";
$questions[1][0] = "I am good at chemistry.";
$questions[1][1] = "I like chemistry.";
$questions[2][0] = "I plan on becoming a scientist.";
$questions[2][1] = "If given a choice, I would not study chemistry.";
$questions[3][0] = "Chemistry is useful for everyday problems.";
$questions[3][1] = "Learning chemistry is mostly memorization.";

$feedback[0] = "To what extent did this activity help to increase your knowledge of the types of work performed in the field of chemistry?";
$feedback[1] = "To what extent did this activity affect your view of the usefulness of chemistry as a field in general?";
$feedback[2] = "To what extent did this activity affect your view of the usefulness of chemistry in solving significant real-world problems?";
$feedback[3] = "To what extent did this activity affect your view of the usefulness of chemistry in solving everyday problems?";
*/


?>