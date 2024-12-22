<?php
function sanitizeInput($input) {
    $input = trim($input);
    return htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
}

function sanitizeFormData($formData) {
    return [
        'firstName' => sanitizeInput($formData['firstName'] ?? ''),
        'lastName' => sanitizeInput($formData['lastName'] ?? ''),
        'email' => filter_var($formData['email'] ?? '', FILTER_SANITIZE_EMAIL),
        'phone' => sanitizeInput($formData['phone'] ?? ''),
        'education' => sanitizeInput($formData['education'] ?? ''),
        'institution' => sanitizeInput($formData['institution'] ?? ''),
        'graduationYear' => filter_var($formData['graduationYear'] ?? '', FILTER_SANITIZE_NUMBER_INT),
        'experience' => filter_var($formData['experience'] ?? '', FILTER_SANITIZE_NUMBER_INT),
        'skills' => sanitizeInput($formData['skills'] ?? '')
    ];
}
?>