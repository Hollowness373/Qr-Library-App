<?php

header("Access-Control-Allow-Origin: *");
$conn = mysqli_connect("localhost","root","","actubapi");

$select_query = "SELECT * FROM timeinandoutdb";

$result = $conn->query($select_query);
$info = array();

if ($result-> num_rows> 0){
    while ($row = $result->fetch_assoc()){
        $FullName = $row ["FullName"];
        $Course = $row ["Course"];
        $TimeIn = $row ["TimeIn"];
        $TimeOut = $row ["TimeOut"];

    array_push ($info, array("FullName"=>$FullName, "Course"=>$Course, "TimeIn"=>$TimeIn, "TimeOut"=>$TimeOut));

    }
}

echo json_encode ($info);

?>