<?php // Create parent class 
$query = $_GET['query'];

$connect = mysqli_connect("127.0.0.1", "root", "");
mysqli_select_db($connect, "food");

$fetch1 = mysqli_query($connect, "SELECT name FROM location");

// set array
$array = array();

while($row = mysqli_fetch_assoc($fetch1)){
    $array[] = $row;
}

print_r($array);


foreach ($array as $key=> $value) {
    if ($query && strpos(strtolower($value), strtolower($query))===false) {
        unset($array[$key]);
    }
}

echo json_encode(array_values($array));
?>