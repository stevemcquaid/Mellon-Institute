<?php

$date = date(DATE_RFC1036, time());
$sid = session_id();

$xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE Server SYSTEM "opt/pdos/etc/pdoslrd.dtd">';

$stringData = '
<log date="' . $date . '" sid="' . $sid . '">	';

foreach( $cqArray as $num => $response){
	$stringData .= '
	' . '<cq num="' . $num . '">' . $response . '</cq>';
}

foreach( $sqArray as $num => $response){
	$stringData .= '
	' . '<sq num="' . $num . '">' . $response . '</sq>';
}

$stringData .= '
</log>';


$myFile = "xml1.xml";
if (!file_exists($myFile)) {$stringData = $xmlHeader . $stringData;}
$fh = fopen($myFile, 'a') or die("can't open file");
fwrite($fh, $stringData);
fclose($fh);


/*
$_SESSION['class']
$_SESSION['isForClass']
$category1
$ques1
$_SESSION['satisfaction']
$category2
$ques2
$_SESSION['satisfaction2']
$category3
$ques3
$_POST['satisfaction2']
$category4
$ques4
$_POST['satisfaction3']
$feedback
$_POST['satisfaction']
*/

?>