<?php

// Fetch form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';
$settlement = $_POST['settlement'] ?? '';
$tel = $_POST['tel'] ?? '';
$service = $_POST['service'] ?? '';
$consent = $_POST['consent'] ?? '';

// Validate honeypot to avoid spam
if (!empty($_POST['honeypot'])) {
    exit('Spam detected');
}

// Email details
$to = 'info@thermoptimal.hu';
$subject = 'Thermoptimal.hu - Új Árajánlat kérés';
$body = "Név: $name\nE-mail: $email\nTelepülés: $settlement\nTelefonszám: $tel\nSzolgáltatás: $service\nÜzenet:\n$message\nAdatkezelésbe beleegyezett: $consent";
$headers = "From: $email\r\n" . "Reply-To: $email\r\n";

// Send the email
$mailSuccess = mail($to, $subject, $body, $headers);

// Send response
if ($mailSuccess) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}

exit;
?>