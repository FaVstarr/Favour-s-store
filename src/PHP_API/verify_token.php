<?php

require_once 'vendor/autoload.php';

use Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type, Authorization, Access-Control-Allow-Origin');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Content-Type: application/json');

// Check if the Authorization header is present
if (!isset($_SERVER['HTTP_AUTHORIZATION'])) {
    echo json_encode(array("authenticated" => false));
    exit;
}

// Get the JWT token from the Authorization header
$token = str_replace('Bearer ', '', $_SERVER['HTTP_AUTHORIZATION']);

// Decode the JWT token
try {
    $decoded = JWT::decode($token, 'favstar', array('HS256'));
    echo json_encode(array("authenticated" => true));
} catch (Exception $e) {
    echo json_encode(array("authenticated" => false));
}
