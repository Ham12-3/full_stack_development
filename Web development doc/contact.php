<?php
// filepath: /C:/Users/mobol/Downloads/full_stack_development/Web development doc/contact.php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Retrieve and sanitize input values
    $name    = strip_tags(trim($_POST["name"]));
    $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Validate input data
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "error";
        exit;
    }

    // Set the recipient email address
    $recipient = "mobolaji2309@gmail.com"; // Replace with your desired recipient email

    // Set the email subject
    $subject = "New contact message from $name";

    // Build the email content
    $email_content  = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        echo "success";
        exit;
    } else {
        $error = error_get_last();
        // Use is_array() to ensure $error is an array before accessing its 'message' key.
        $errorMessage = (is_array($error) && isset($error['message'])) ? $error['message'] : 'Unknown error';
        error_log("Mail sending failed: " . $errorMessage);
        echo "error";
        exit;
    }
} else {
    // Not a POST request
    echo "error";
}
?>