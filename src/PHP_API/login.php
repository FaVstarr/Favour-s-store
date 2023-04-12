<?php
// include database connection
include_once 'dbconfig.php';



// get user data from the request body
$data = json_decode(file_get_contents("php://input"));

$username = $data->username;
$password = $data->password;

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
        echo json_encode(array("message" => "Login successful"));
    } else {
        echo json_encode(array("message" => "Incorrect password"));
    }
} else {
    echo json_encode(array("message" => "User not found"));
}

// close the statement and database connection
$stmt->close();
$conn->close();
?>
