<?php

require __DIR__ . '/vendor/autoload.php';


use Firebase\JWT\JWT;
use GuzzleHttp\Client;






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



// $jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L1BIUF9BUEkvZGJjb25maWcucGhwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwLyIsImlhdCI6MTY4MjM4MTM1OCwiZXhwIjoxNjgyMzg0OTU4LCJzdWIiOiIzNCIsImVtYWlsIjoiZmF2b3VyY2hhbWJlcmxhaW4zMkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkZhdnN0YXIifQ.gD73FWnXPBGx61HTGsH4WuLmEVk0jnp5oCoD_UIkDfg";

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
if (isset ($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $fname = $data['fname'];
    $username = $data['username'];
    $email = $data['email'];
    $password = $data['password'];

    $sql = "INSERT INTO users (fname, username, email, password) VALUES ('$fname', '$username', '$email', '$password')";

    if ($mysqli->query($sql) === TRUE) {
        $user = array(
            "id" => $mysqli->insert_id,
            "fname"=>$fname,
            "username"=>$username,
            "email"=>$email,

        );
        $jwt = generateToken($user);

        $message = array(
            "message" => "Data inserted successfully",
            "token" => $jwt
        );

        echo json_encode($message);
    } else {
        $message = array(
            "message" => "Error". $sql . "<br>" . $mysqli->error
        );
        echo json_encode($message);
    }

} elseif  (isset ($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'GET') {
    
    

    $user = array(
        "id" => "34",
        "fname"=>"Favour Chamberlain",
        "username"=>"Favstar",
        "email"=>"favourchamberlain32@gmail.com", 
    );

    if(empty($jwt)) {
        // Generate JWT if it hasn't been generated yet
        $jwt = generateToken($user);
    }
    
    $headers = getallheaders();
    if(isset($headers['Authorization'])){
        
        $jwt = trim(str_replace("Bearer", "", $headers['Authorization']));
        try{
            $decode = JWT::decode($jwt,"favstar", array('HS256'));
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
        }catch(Exception $e){
            http_response_code(401);
            echo json_encode(array("message"=> "invalid token: ". $e->getMessage( )));

        }
    }else{
        http_response_code(401);
        echo json_encode(array("message"=> "Token is missing"));
    }
   
}

// $mysqli->close();



?>

