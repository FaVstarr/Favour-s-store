<?php
// include database connection
include_once 'dbconfig.php';

// get user data from the request body
$data = json_decode(file_get_contents("php://input"));

$fname = $data->fname;
$username = $data->username;
$email = $data->email;
$password = $data->password;

// prepare and bind the query
$stmt = $conn->prepare("INSERT INTO users (fname, username, email, password) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $fname, $username, $email, $password);

// execute the query
if ($stmt->execute()) {
    echo json_encode(array("message" => "User created successfully"));
} else {
    echo json_encode(array("message" => "User creation failed"));
}

// close the statement and database connection
$stmt->close();
$conn->close();
?>
