<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$target_dir = "../public/uploads/";
if (!file_exists("../public")) {
    $target_dir = "../uploads/";
}

if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}

$uploaded_urls = [];

if (isset($_FILES['files'])) {
    foreach ($_FILES['files']['tmp_name'] as $key => $tmp_name) {
        $file_name = $_FILES['files']['name'][$key];
        $file_size = $_FILES['files']['size'][$key];
        $file_tmp = $_FILES['files']['tmp_name'][$key];
        $file_type = $_FILES['files']['type'][$key];

        $ext = pathinfo($file_name, PATHINFO_EXTENSION);
        $new_name = uniqid() . '.' . $ext;
        $target_file = $target_dir . $new_name;

        if (move_uploaded_file($file_tmp, $target_file)) {
            $uploaded_urls[] = "/uploads/" . $new_name;
        }
    }
    echo json_encode(["urls" => $uploaded_urls]);
} else {
    echo json_encode(["error" => "No files uploaded"]);
}
?>
