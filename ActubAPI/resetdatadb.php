<?php

header("Access-Control-Allow-Origin: *");
$conn=mysqli_connect("localhost","root","","actubapi");

$select_query = "DELETE FROM timeinandoutdb";
//$select_query = "DELETE * FROM timeinandoutdb";
$result = $conn->query($select_query);
  
    if ($result) {
    	$Message = "Success";
        
    } else {
    	$Message = "something's wrong";
    }
    
    $Response[]=array("Message"=>$Message);
    echo json_encode($Response);


?>