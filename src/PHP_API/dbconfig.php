<?php
header("Access-Control-Allow-Origin: *");

header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');


// Connect to the database
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'favour-s store';

$mysqli = new mysqli($host, $user, $password, $database);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Define endpoint for inserting data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $fname = $data['fname'];
    $username = $data['username'];
    $email = $data['email'];
    $password = $data['password'];

    $sql = "INSERT INTO users (fname, username, email, password) VALUES ('$fname', '$username', '$email', '$password')";

    if ($mysqli->query($sql) === TRUE) {
        echo "Data inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $mysqli->error;
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM users";
    $result = $mysqli->query($sql);

    if ($result === FALSE) {
        echo "Error: " . $sql . "<br>" . $mysqli->error;
    } else {
        $rows = array();
        while($r = mysqli_fetch_assoc($result)) {
            $rows[] = $r;
        }

        echo json_encode($rows);
    }
}


// Define endpoint for getting data
// if ($_SERVER['REQUEST_METHOD'] === 'GET') {
//     $sql = "SELECT * FROM users";
//     $result = $mysqli->query($sql);

//     $rows = array();
//     while($r = mysqli_fetch_assoc($result)) {
//         $rows[] = $r;
//     }

//     echo json_encode($rows);
// }

// Close the database connection
$mysqli->close();

?>


