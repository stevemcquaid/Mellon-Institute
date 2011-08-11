<?php
	$date = date(DATE_RFC1036, time());
	$sid = session_id();
	
	$IncrementalValueXX = 0;
		
	$stringData = '
<tutor_related_message_sequence xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://learnlab.web.cmu.edu/dtd/tutor_message_v4.xsd" version_number="4">
	<context_message context_message_id="'. $sid .'" name="START_PROBLEM">
		<meta>
			<user_id>' . $sid .'</user_id>
			<session_id>' . $sid . '</session_id>
			<time>' . $date . '</time>
			<time_zone>EST</time_zone>
		</meta>
		<dataset>
			<name>Chemistry Mixed Reception Web Survey</name>
			<level type="Module">
				<name>Stoichiometry</name>
				<problem>
					<name>MixedReception</name>
				</problem>
			</level>
		</dataset>
	</context_message>';
	
	foreach( $cqArray as $num => $response){
		$stringData .= '
	' . '<tool_message context_message_id="'. $sid .'">
		<meta>
			<user_id>' . $sid . '</user_id>
			<session_id>' . $sid . '</session_id>
			<time>' . $date . '</time>
			<time_zone>EST</time_zone>
		</meta>
		<semantic_event transaction_id="'. $IncrementalValueXX++ . '" name="ATTEMPT" />
		<event_descriptor>
			<selection>Question' . $num . '</selection>
			<action>UpdateTextField</action>
			<input>' . $response . '</input>
		</event_descriptor>
	</tool_message>';
	}
	
	foreach( $sqArray as $num => $response){
		$stringData .= '
	' . '<tool_message context_message_id="' . $sid .'">
		<meta>
			<user_id>' . $sid .'</user_id>
			<session_id>' . $sid . '</session_id>
			<time>' . $date . '</time>
			<time_zone>EST</time_zone>
		</meta>
		<semantic_event transaction_id="'. $IncrementalValueXX++ . '" name="ATTEMPT" />
		<event_descriptor>
			<selection>Survey Question' . $num . '</selection>
			<action>UpdateTextField</action>
			<input>' . $response . '</input>
		</event_descriptor>
	</tool_message>';
	}
	
	$stringData .= '
</tutor_related_message_sequence>';

?>