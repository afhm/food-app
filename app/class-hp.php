<?php

    // Create parent class 
    class hp {

        private $mysqli;

        // Class constructor
        public function __construct() {
            $this->connect();
        }

        // Connect method
        private function connect() {
            $this->mysqli = new mysqli('127.0.0.1', 'root', '', 'food');
        }

        // Search for location in db for index.php
        public function search($search_term) {

            // Clean data before passing it to db
            $cleaned_data = $this->mysqli->real_escape_string($search_term);

            // Sql query
            $query = $this->mysqli->query("
                SELECT id, name
                FROM location
                WHERE name LIKE '%{$cleaned_data}%'
            ");

            // Check for query
            if (!$query->num_rows) {
                return false;
            }

            // Fetch all the data from db
            while ($row = $query->fetch_object()) {
                $rows[] = $row;
            }

            // Pass/Store the recived data to new array
            $search_results = array(
                'count' => $query->num_rows,
                'results' => $rows,
            );

            // Return the data whenever the method is called
            return $search_results;
        }

        // Retrive items from db for menu.php
        public function items() {

            // Sql query
            $query = $this->mysqli->query("
                SELECT id, name, price, image
                FROM items
            ");

            // Check for query
            if (!$query->num_rows) {
                return false;
            }

            // Fetch all the data from db
            while ($row = $query->fetch_object()) {
                $rows[] = $row;
            }

            // Pass/Store the recived data to new array
            $items_results = array(
                'results' => $rows,
            );

            // Return the data whenever the method is called
            return $items_results;
        }
    }
$hp = new hp();
$values = $hp->search($search_term);

foreach ($values as $key => $value) {
    if ($query && strpos(strtolower($value), strtolower($query)) === false) {
        unset($values[$key]);
    }
}

echo json_encode(array_values($values));

?>