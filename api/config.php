<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Handle CORS for local development
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
?>