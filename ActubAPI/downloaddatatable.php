<?php

header("Access-Control-Allow-Origin: *");
date_default_timezone_set("Asia/Manila");
$Time = date('Y-m-d');

$conn=mysqli_connect("localhost","root","","actubapi");
$sql = "SELECT * FROM timeinandoutdb";
$filename = "datadb".$Time.".xls";

header("Content-Disposition: attachment; filename=\"$filename\"");
header("Content-Type: application/vnd.ms-excel");
$user_query = $conn->query($sql);

$flag = false;
while ($row = mysqli_fetch_assoc($user_query)) {
    if (!$flag) {
        echo implode("\t", array_keys($row)) . "\r\n";
        $flag = true;
    }
    echo implode("\t", array_values($row)) . "\r\n";
}
?>