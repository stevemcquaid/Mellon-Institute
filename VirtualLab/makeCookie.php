<?php
function makeCookie() {
  srand(time_seed());
  $seed = rand(1, 999999);
  setcookie("Alohomora", $seed, time()+3600);
  //SET DATABASE VALUE HERE TO ENSURE SECURE BINDINGS!
  return $seed;
}

function time_seed()
{
  list($usec, $sec) = explode(' ', microtime());
  return (float) $sec + ((float) $usec * 100000);
}

?>
