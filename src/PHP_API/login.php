<?php
// include database connection
include_once 'dbconfig.php';

//initializing response variable
$response = array();



// get user data from the request body
$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = $data->password;

if(!$conn){
    $response = array("message" => "Error connecting to database");
}else{
    // prepare and bind the query
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $username);

// execute the query
$stmt->execute();

// get the result
$result = $stmt->get_result();

// check if user exists and password is correct
if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        $response = array("message" => "Login successful");
    } else {
        $response = array("message" => "Incorrect Message");
    }
} else {
    $response = array("message" => "User not found");
}
$stmt->close();
}


$conn->close();
echo json_encode($response);

// close the statement and database connection


?>
