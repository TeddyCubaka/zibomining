<?php

header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and decode JSON from Angular
    $data = json_decode(file_get_contents("php://input"), true);
    $name = strip_tags(trim($data["name"]));
    $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
    $subject = trim($data["subject"]);
    $message = trim($data["message"]);
    $phone = trim($data["phone"]);

    // Validate the fields
    if (empty($name) || empty($email) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid input."]);
        exit;
    }

    // Set recipient email
    $recipient = "teddycubaka96@gmail.com";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Subject: $subject\n";
    $email_content .= "Message: $message\n";

    // Set the email subject
    $email_subject = "New contact from $name";

    // Build email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Email sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to send email."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["message" => "Forbidden"]);
}
