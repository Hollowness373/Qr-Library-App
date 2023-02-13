<?php

header("Access-Control-Allow-Origin: *");
$conn = mysqli_connect("localhost","root","","actubapi");

$select_query = "SELECT Email FROM registeredlist WHERE ID = 4";

$result = $conn->query($select_query);
if ($result-> num_rows> 0){
    while ($row = $result->fetch_assoc()){
        $Email = $row ["Email"];

    }
}

echo json_encode ($Email);

?>