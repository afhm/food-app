<?php
$query = $_GET['query'];

class User {

	private $db;

	public function __construct(){
		try{
		$this->db=new PDO("mysql:host=localhost;dbname=food;charset=UTF8","root","");
		$this->db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	    }
	    catch(Exception $e){
		die($e->getMessage());
	    }

    }
    public function getAllLocations(){
		$query=$this->db->query("select * from location");
		$locations=$query->fetchAll(PDO::FETCH_OBJ);
        while($row = mysql_fetch_assoc($result))
{
    $result_array[] = $row;
}
		return $locations;
    }
}

class UserCreate
{
    public static function create()
    {
        return new User();
    }
}
    $location = UserCreate::create();
    $locations=$location->getAllLocations();

// These values may have been gotten from a database.
// We'll use a simple array just to show this example.
// $values = [
//             'Neo', 
//             'Ibiyemi',
//             'Olayinka',
//             'Jonathan',
//             'Stephen', 
//             'Fisayo', 
//             'Gideon',
//             'Mezie',
//             'Oreoluwa', 
//             'Jordan', 
//             'Enkay', 
//             'Michelle', 
//             'Jessica', 
//             ];

foreach ($locations as $key => $value) {
    if ($query && strpos(strtolower($value), strtolower($query)) === false) {
        unset($values[$key]);
    }
}

echo json_encode(array_values($values));
?>