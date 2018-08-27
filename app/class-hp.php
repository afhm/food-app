<?php // Create parent class 
$query = $_GET['query'];

//MySQLi information

$db_host     = "127.0.0.1";
$db_username = "root";
$db_password = "";

//connect to mysqli database (Host/Username/Password)
$connection = mysqli_connect($db_host, $db_username, $db_password) or die("Error " . mysqli_error());

//select MySQLi dabatase table
$db = mysqli_select_db($connection, "food") or die("Error " . mysqli_error());

$sql = mysqli_query($connection, "SELECT name FROM location");

while($row = mysqli_fetch_array($sql)) {
$names[] = $row['name'];
}

foreach ($names as $key=> $value) {
    if ($query && strpos(strtolower($names), strtolower($query))===false) {
        unset($array[$key]);
    }
}

echo json_encode(array_values($names));
?>