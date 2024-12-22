<?php
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function validateRequired($value) {
    return !empty(trim($value));
}

function validateFormData($data) {
    $errors = [];
    
    if (!validateRequired($data['firstName'])) $errors[] = "First name is required";
    if (!validateRequired($data['lastName'])) $errors[] = "Last name is required";
    if (!validateEmail($data['email'])) $errors[] = "Invalid email";
    if (!validateRequired($data['education'])) $errors[] = "Education is required";
    if (!validateRequired($data['institution'])) $errors[] = "Institution is required";
    
    return $errors;
}
?>