<?php

  $max_size = 10000000;
	$filename = 'result/xmlresult.log';
	$xmlHeader = '<?xml version="1.0" encoding="UTF-8" ?>';
	
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