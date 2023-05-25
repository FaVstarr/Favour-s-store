<?php

require_once 'vendor/autoload.php';

use Firebase\JWT\JWT;


function generateToken($user){
    $payload = array(
        "iss"=> "http://localhost/PHP_API/dbconfig.php",
        "aud"=> "http://localhost:3000/",
        "iat"=> time(),
        "exp"=> time() + 3600, //Token expires in 1hr
        "sub"=> $user['id'],
        "email"=> $user["email"],
        "username"=>$user["username"]

    );
    
    $jwt = JWT::encode($payload,"favstar", 'HS256');
    return $jwt;
    
}

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Origin');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Content-Type: application/json');

// include database connection
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'favour-s store';

$mysqli = new mysqli($host, $user, $password, $database);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}






if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $username = $data['username'];
    $password = $data['password'];
    // var_dump($username, $password);
    
    $stmt = $mysqli->prepare("SELECT * FROM users WHERE username=? AND password=?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        $jwt = generateToken($user);
        
        $message = array(
            "message" => "Login successful",
            "token" => $jwt
        );
        
        echo json_encode($message);
    } else {
        $message = array(
            "message" => "Invalid username or password"
        );
        
        echo json_encode($message);
    }
}

  


?>


