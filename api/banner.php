<?php
// Set header to allow cross-origin requests for testing purposes
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Simulate banner data
$banner = [
    'image_url' => 'https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png',
    'link' => 'https://yourdomain.com/landing-page',
    'alt_text' => 'Your Banner Description'
];

// Return banner data as JSON
echo json_encode($banner);
?>