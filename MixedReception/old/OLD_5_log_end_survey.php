<?php
	
	$date = date(DATE_RFC1036, time());
	$sid = session_id();
	
	$xmlHeader = '<?xml version="1.0" encoding="UTF-8" ?>';
	
/* 	I AM HERE, need to parse the xml and create a new output string */
	
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
	
  $max_size = 20000000;
	$filename = 'result/xmlresult.log';
	
	/*Check whether a file exist and writable before writing the element*/
	// If file is bigger than 20 MB or doesnt exist
	$i=0;
	if (file_exists($filename)){
		while (filesize($filename)>$max_size) {
			$i++;
			$filename = 'result/xmlresult'.(string)$i.'.log';
		}
	}
	else {
		$stringData = $xmlHeader . $stringData;
	}
	
	// Opens $filename in append mode
	if ($handle = fopen($filename, 'a')) {
		if (fwrite($handle, $stringData) === FALSE) { /*do this on fail */}
	}
	fclose($handle);
	

?>