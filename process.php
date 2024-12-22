<?php
require_once 'api/config.php';
require_once 'api/validators.php';
require_once 'api/sanitizers.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data
    $formData = sanitizeFormData($_POST);
    
    // Validate data
    $errors = validateFormData($formData);
    
    if (empty($errors)) {
        // Success response
        echo json_encode([
            'success' => true,
            'data' => $formData,
            'message' => 'Registration successful'
        ]);
    } else {
        // Error response
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'errors' => $errors
        ]);
    }
} else {
    // Method not allowed
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
}
?>