<?php
// Set header to allow cross-origin requests for testing purposes
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Simulate banner data
$banner = [
    'image_url' => 'online-test/api/amit.jpg',
    'link' => 'https://yourdomain.com/landing-page',
    'alt_text' => 'Your Banner Description'
];

// Return banner data as JSON
echo json_encode($banner);
?>