<?php
header("Access-Control-Allow-Origin: *");
date_default_timezone_set("Asia/Manila");
$conn = mysqli_connect("localhost","root","","actubapi");


if (!empty($_POST['FullName']))  {
    
    $FullName = $_POST['FullName'];
    $Course = $_POST['Course'];
    $Email = $_POST['Email'];

    $db_query = "INSERT INTO registeredlist (FullName, Course, Email) VALUES('".$FullName."', '".$Course."', '".$Email."')";
    
    
    $V = $conn->query($db_query);
    
    if ($V) {
    	$Message = "Success";
        
    } else {
    	$Message = "something's wrong";
    }
    
    $Response[]=array("Message"=>$Message);
    echo json_encode($Response);

}
?>