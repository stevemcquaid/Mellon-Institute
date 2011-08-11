<?php
session_start();

$nextPage = "http://collective.chem.cmu.edu/MixedReception/end_survey_mk7.php?";

include('0_get_vars_end_survey.php');
include('1_validate_end_survey.php');
include('2_collect_end_survey.php');
include('3_filter_end_survey.php');
include('4_repackage_end_survey.php');
include('5_1_package_log_string.php');
include('5_2_log_survey.php');
include('6_sendEmail_end_survey.php');
?>