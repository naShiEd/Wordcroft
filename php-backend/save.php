<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$json_file = "../cms-content.json";

// Priority check for live vs local structure
if (file_exists("../public/cms-content.json")) {
    $json_file = "../public/cms-content.json";
} elseif (file_exists("../dist/cms-content.json")) {
    $json_file = "../dist/cms-content.json";
}

$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    if (file_put_contents($json_file, json_encode($data, JSON_PRETTY_PRINT))) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["error" => "Failed to write content to file"]);
    }
} else {
    echo json_encode(["error" => "No data provided"]);
}
?>
