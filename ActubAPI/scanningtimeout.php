<?php
header("Access-Control-Allow-Origin: *");
date_default_timezone_set("Asia/Manila");
$conn = mysqli_connect("localhost","root","","actubapi");


if (!empty($_POST['QrScanned']))  {
    
    $QrScanned = $_POST['QrScanned'];
    $Time = date('Y-m-d H:i:s');

    
    $CheckDataName="";
    $get_db_course = "SELECT * FROM registeredlist WHERE FullName = '".$QrScanned."'";
    $res_db_course = $conn->query($get_db_course);
        if (!empty($res_db_course)) {
            if ($res_db_course->num_rows > 0) {
                $row_array = $res_db_course->fetch_assoc();
                $CheckDataName = $row_array["FullName"];
                }
            }
    $CheckID="";
    $get_db_id = "SELECT * FROM timeinandoutdb WHERE FullName = '".$QrScanned."'";
    $res_db_id = $conn->query($get_db_id);
        if (!empty($res_db_id)) {
            if ($res_db_id->num_rows > 0) {
                    $row_array = $res_db_id->fetch_assoc();
                    $CheckID = $row_array["ID"];
                }
            }
    if ($CheckDataName==$QrScanned) {
        $db_query = "UPDATE timeinandoutdb SET TimeOut = '$Time' WHERE ID = $CheckID";
    } else {
    }
    
    
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